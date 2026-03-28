import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#111111] text-primary-foreground pt-24">
    <div className="container mx-auto px-4">
      <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:pr-6">
          <h3 className="font-display text-lg font-bold uppercase tracking-wide">
            Andy Harragan & Sons LTD
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
            Resin driveway & surfacing specialists. A family-run business
            delivering professional resin bound driveways and landscaping across
            Chelmsford, Essex and nationwide.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-display mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/80">
            Pages
          </h4>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/40">
                Main
              </p>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
                <li>
                  <Link
                    to="/"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/40">
                Services
              </p>
              <ul className="space-y-2.5 text-sm text-primary-foreground/65">
                <li>
                  <Link
                    to="/services/resin-work"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Resin Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/block-paving"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Block Paving
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/driveways"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Driveways
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/tarmac-shingle"
                    className="transition-colors hover:text-primary-foreground"
                  >
                    Tarmac / Shingle
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-display mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/80">
            Contact Us
          </h4>

          <ul className="space-y-3 text-sm text-primary-foreground/65">
            <li className="flex items-start gap-3">
              <Phone size={15} className="mt-0.5 shrink-0" />
              <a
                href="tel:01245768150"
                className="transition-colors hover:text-primary-foreground"
              >
                01245 768 150
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={15} className="mt-0.5 shrink-0" />
              <a
                href="mailto:info@andyharraganandsons.co.uk"
                className="break-all transition-colors hover:text-primary-foreground"
              >
                info@andyharraganandsons.co.uk
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>Chelmsford, Essex and Nationwide</span>
            </li>
          </ul>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/40">
              Social
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-foreground/70 transition hover:border-white/25 hover:text-primary-foreground"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-foreground/70 transition hover:border-white/25 hover:text-primary-foreground"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-foreground/70 transition hover:border-white/25 hover:text-primary-foreground"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div>
          <h4 className="font-display mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/80">
            Office Hours
          </h4>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <ul className="space-y-3 text-sm text-primary-foreground/65">
              <li className="flex items-center justify-between gap-4">
                <span>Mon - Fri</span>
                <span className="text-primary-foreground">8:00am - 5:00pm</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Saturday</span>
                <span className="text-primary-foreground">9:00am - 2:00pm</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span>Sunday</span>
                <span className="text-primary-foreground">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-5">
        <p className="text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Andy Harragan & Sons LTD. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
