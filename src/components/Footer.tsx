import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#1c1c1c] text-primary-foreground pt-28 pb-0">
    <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
      <div>
        <h3 className="font-display text-lg font-bold uppercase mb-4">
          Andy Harragan & Sons LTD
        </h3>
        <p className="text-primary-foreground/60 leading-relaxed text-xs">
          Resin driveway & surfacing specialists. Family-run quality delivering
          professional resin bound driveways and landscaping across Chelmsford,
          Essex and nationwide.
        </p>
      </div>
      <div>
        <h4 className="font-display font-bold uppercase mb-4 text-xs tracking-wider">
          Pages
        </h4>
        <ul className="space-y-2 text-xs text-primary-foreground/60">
          <li>
            <Link
              to="/"
              className="hover:text-primary-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-primary-foreground transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-primary-foreground transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/services/resin-work"
              className="hover:text-primary-foreground transition-colors"
            >
              Resin Work
            </Link>
          </li>
          <li>
            <Link
              to="/services/block-paving"
              className="hover:text-primary-foreground transition-colors"
            >
              Block Paving
            </Link>
          </li>
          <li>
            <Link
              to="/services/driveways"
              className="hover:text-primary-foreground transition-colors"
            >
              Driveways
            </Link>
          </li>
          <li>
            <Link
              to="/services/tarmac-shingle"
              className="hover:text-primary-foreground transition-colors"
            >
              Tarmac / Shingle
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold uppercase mb-4 text-xs tracking-wider">
          Contact Us
        </h4>
        <ul className="space-y-2.5 text-xs text-primary-foreground/60">
          <li className="flex items-center gap-2">
            <Phone size={12} /> 01245 768 150
          </li>
          <li className="flex items-center gap-2">
            <Mail size={12} /> info@andyharraganandsons.co.uk
          </li>
          <li className="flex items-start gap-2">
            <MapPin size={12} className="mt-0.5" /> Chelmsford, Essex
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-bold uppercase mb-4 text-xs tracking-wider">
          Office Hours
        </h4>
        <ul className="space-y-1.5 text-xs text-primary-foreground/60">
          <li>Mon - Fri: 8:00am - 5:00pm</li>
          <li>Saturday: 9:00am - 2:00pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5">
      <p className="text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Andy Harragan & Sons LTD. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
