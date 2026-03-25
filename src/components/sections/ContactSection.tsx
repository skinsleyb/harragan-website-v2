import { ArrowRight, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="cta" className="bg-[#f6f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
            Fill in the form below and our team will get back to you as soon as
            possible. You can also contact us directly by phone or email.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_auto_0.8fr] lg:items-start">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-black/55"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-black/55"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black outline-none transition placeholder:text-black/35 focus:border-black/30"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-black/55"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
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

          {/* Divider */}
          <div className="hidden h-full w-px self-stretch bg-black/10 lg:block" />

          {/* Contact details */}
          <div className="flex h-full flex-col justify-center lg:pl-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
              Direct Contact
            </p>

            <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight text-black">
              Speak To Our Team
            </h3>

            <p className="mt-4 text-base leading-relaxed text-black/65">
              Prefer to contact us directly? Use the details below and we’ll be
              happy to help.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:aharraganandson@aol.com"
                className="flex items-center gap-4 text-black transition hover:opacity-75"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black bg-white">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/55">
                    Email
                  </p>
                  <p className="text-sm font-medium normal-case">
                    aharraganandson@aol.com
                  </p>
                </div>
              </a>

              <a
                href="tel:01245768150"
                className="flex items-center gap-4 text-black transition hover:opacity-75"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black bg-white">
                  <Phone className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/55">
                    Phone
                  </p>
                  <p className="text-sm font-medium normal-case">
                    01245 768 150
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
