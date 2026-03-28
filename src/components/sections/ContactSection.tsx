import { ArrowRight, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="cta" className="bg-zinc-950 text-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-semibold uppercase tracking-tight text-white md:text-5xl">
            Get In Touch With Us
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Direct access to our senior team. Fill in your details below and we typically respond within 2 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-16 lg:grid-cols-[1fr_auto_0.8fr] lg:gap-24 lg:items-start">
          {/* Form */}
          <div className="w-full">
            <form className="space-y-10 group/form">
              <div className="relative">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  className="peer w-full border-b border-white/20 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-transparent focus:border-white"
                />
                <label
                  htmlFor="fullName"
                  className="absolute left-0 top-4 -translate-y-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-translate-y-8 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-white"
                >
                  Full Name
                </label>
              </div>

              <div className="relative mt-12">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="peer w-full border-b border-white/20 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-transparent focus:border-white"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 -translate-y-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-translate-y-8 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-white"
                >
                  Email Address
                </label>
              </div>

              <div className="relative mt-12">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="peer w-full border-b border-white/20 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-transparent focus:border-white"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-4 -translate-y-8 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-translate-y-8 peer-focus:text-[11px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-white"
                >
                  Phone Number
                </label>
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-zinc-950 transition hover:bg-white/80"
                >
                  Get a quote
                  <ArrowRight className="h-4 w-4" />
                </button>
                <div className="mt-6 flex items-center gap-3 text-white/40">
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                  <p className="text-[11px] font-medium tracking-wide uppercase">
                     * No obligation quote
                  </p>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-full w-[1px] self-stretch bg-white/10" />

          {/* Contact details */}
          <div className="flex h-full flex-col justify-start lg:pt-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/50 mb-10">
              Direct Contact
            </h3>

            <div className="space-y-12">
              <a
                href="mailto:aharraganandson@aol.com"
                className="group flex flex-col gap-3 transition"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 group-hover:text-white/70 transition-colors">
                    Email
                  </p>
                </div>
                <p className="text-xl font-medium tracking-tight text-white border-b border-transparent group-hover:border-white/30 self-start transition-colors">
                  aharraganandson@aol.com
                </p>
              </a>

              <a
                href="tel:01245768150"
                className="group flex flex-col gap-3 transition"
              >
                <div className="flex items-center gap-4">
                  <Phone className="h-4 w-4 text-white/50 group-hover:text-white transition-colors" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 group-hover:text-white/70 transition-colors">
                    Direct Line
                  </p>
                </div>
                <p className="text-xl font-medium tracking-tight text-white border-b border-transparent group-hover:border-white/30 self-start transition-colors">
                  01245 768 150
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
