import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will be in touch shortly.");
  };

  return (
    <>
      <Navbar />

      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a free, no-obligation quotation. Andy will personally visit your property to discuss your requirements."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="bg-[#f6f5f5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
              Get In Touch With Us
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
              Fill in the quick form below and our team will get back to you as
              soon as possible. You can also contact us directly by phone or
              email.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left column */}
            <div className="space-y-8">
              {/* Quote form card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                <h3 className="text-2xl font-semibold uppercase tracking-tight text-black">
                  Request A Free Quote
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/65">
                  Takes less than 10 seconds. We’ll call you back.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-black/55"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-black/55"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Your email address"
                      className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-black/55"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                      className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black/90"
                  >
                    Get a quote
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>

              {/* Social media card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Follow Us
                </p>

                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight text-black">
                  Social Media
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/65">
                  Stay connected with us on social media for updates, recent
                  work, and company news.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-4 text-sm font-medium text-black transition hover:border-black/25 hover:bg-black/[0.03]"
                  >
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-4 text-sm font-medium text-black transition hover:border-black/25 hover:bg-black/[0.03]"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-4 text-sm font-medium text-black transition hover:border-black/25 hover:bg-black/[0.03]"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              {/* Contact card */}
              <div className="rounded-2xl bg-white/75 p-6 shadow-sm md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/75">
                  Direct Contact
                </p>

                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight text-black">
                  Speak To Our Team
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/70">
                  Prefer to contact us directly? Use the details below and we’ll
                  be happy to help with your enquiry.
                </p>

                <div className="mt-8 space-y-5">
                  <a
                    href="tel:01245768150"
                    className="flex items-start gap-4 text-black transition hover:opacity-75"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/15 bg-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">
                        Phone
                      </p>
                      <p className="mt-1 text-sm font-medium normal-case">
                        01245 768 150
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:aharraganandson@aol.com"
                    className="flex items-start gap-4 text-black transition hover:opacity-75"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/15 bg-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">
                        Email
                      </p>
                      <p className="mt-1 text-sm font-medium normal-case break-all">
                        aharraganandson@aol.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/15 bg-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-medium normal-case">
                        Chelmsford, Essex and Nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/15 bg-white">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/50">
                        Opening Hours
                      </p>
                      <p className="mt-1 text-sm font-medium normal-case">
                        Mon–Fri: 8:00am – 5:00pm
                      </p>
                      <p className="text-sm font-medium normal-case text-black/75">
                        Saturday: 9:00am – 2:00pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="border-b border-black/10 px-6 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Find Us
                  </p>
                  <h3 className="mt-2 text-xl font-semibold uppercase tracking-tight text-black">
                    Based In Chelmsford, Essex
                  </h3>
                </div>

                <div className="h-[420px] w-full">
                  <iframe
                    title="Company location map"
                    src="https://www.google.com/maps?q=Chelmsford,Essex&z=11&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
