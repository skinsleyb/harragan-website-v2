/**
 * Client helper: POST validated quote `{ name, email }` to `/api/send-confirmation`.
 * Runs fire-and-forget after successful form submit; failures only hit the console.
 */
export function sendQuoteConfirmationEmail(payload: {
  name: string;
  email: string;
}) {
  void (async () => {
    try {
      const res = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[send-confirmation]", res.status, text);
      }
    } catch (e) {
      console.error("[send-confirmation]", e);
    }
  })();
}
