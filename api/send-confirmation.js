/**
 * Serverless handler: sends quote-request confirmation email via Resend.
 *
 * Vercel: this file is deployed as POST /api/send-confirmation. In the Vercel dashboard,
 * set Project → Settings → Environment Variables (Production / Preview as needed):
 *   RESEND_API_KEY=
 *   RESEND_FROM_EMAIL=   (verified sender, e.g. "Andy Harragan <quotes@yourdomain.com>")
 *
 * Local: put keys in `.env.local`. If the folder is `vercel link`ed, empty vars on Vercel can
 * shadow `.env.local`; this file reloads `.env.local` with override when that file exists.
 */

import { randomBytes } from "crypto";
import { existsSync } from "fs";
import path from "path";
import dotenv from "dotenv";
import { Resend } from "resend";

// vercel dev injects linked-project env first; empty dashboard vars can shadow .env.local — reload file with override locally.
const envLocalPath = path.join(process.cwd(), ".env.local");
if (existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath, override: true });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Quote ref: AHS + initials from customer name + random hex (for Resend template {{{quoteRef}}}). */
function buildQuoteRef(customerName) {
  const words = String(customerName)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  let initials = words
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
  if (!initials) initials = "Q";
  if (initials.length > 4) initials = initials.slice(0, 4);
  const suffix = randomBytes(3).toString("hex").toUpperCase();
  return `AHS-${initials}-${suffix}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !fromEmail) {
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  let body = req.body;
  if (body == null) {
    res.status(400).json({ error: "Missing body" });
    return;
  }
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ error: "Invalid JSON" });
      return;
    }
  }

  const name =
    typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  const email =
    typeof body.email === "string" ? body.email.trim().slice(0, 320) : "";

  if (!name || !email) {
    res.status(400).json({ error: "name and email are required" });
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    res.status(400).json({ error: "Invalid email" });
    return;
  }

  const resend = new Resend(apiKey);
  const safeName = escapeHtml(name);

  try {
    const submissionDate = new Date().toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const quoteRef = buildQuoteRef(name);
    const ctaUrl =
      process.env.SITE_CTA_URL?.trim() ||
      "https://www.andyharraganandsonsltd.co.uk/";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "We've received your quote request",
      template: {
        id: "quote-request-received",
        variables: {
          safeName: escapeHtml(name),
          quoteRef,
          submissionDate,
          ctaUrl,
        },
      },
      headers: {
        "List-Unsubscribe": "<{{{RESEND_UNSUBSCRIBE_URL}}}>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    });

    if (error) {
      console.error("[send-confirmation] Resend error:", error);
      res.status(502).json({ error: "Failed to send confirmation email" });
      return;
    }

    res.status(200).json({ ok: true, id: data?.id ?? null });
  } catch (e) {
    console.error("[send-confirmation]", e);
    res.status(500).json({ error: "Internal server error" });
  }
}
