import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Resin Work", to: "/services/resin-work" },
  { label: "Block Paving", to: "/services/block-paving" },
  { label: "Driveways", to: "/services/driveways" },
  { label: "Tarmac / Shingle", to: "/services/tarmac-shingle" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showTransparent = !scrolled;

  return (
    <nav
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-primary/95 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20">
        <Link
          to="/"
          className="font-display text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wider text-primary-foreground"
        >
          Andy Harragan & Sons LTD
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Home
          </Link>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Services
              <ChevronDown
                size={12}
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-xl border border-border/50 py-2 min-w-[200px]">
                {isHome ? (
                  <a
                    href="#services"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-accent/10 transition-colors"
                  >
                    All Services
                  </a>
                ) : (
                  <Link
                    to="/services"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-accent/10 transition-colors"
                  >
                    All Services
                  </Link>
                )}

                <div className="border-t border-border/50 my-1" />

                {serviceLinks.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-accent/10 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+441245000000"
            className="flex items-center gap-2 text-primary-foreground text-sm font-bold"
          >
            <Phone size={14} /> 01245 768 150
          </a>
          {isHome ? (
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-5 py-2 rounded text-xs uppercase tracking-wider transition-colors"
            >
              Get a Quote
            </a>
          ) : (
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-5 py-2 rounded text-xs uppercase tracking-wider transition-colors"
            >
              Get a Quote
            </Link>
          )}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-6">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-primary-foreground/90 hover:text-primary-foreground font-semibold uppercase tracking-wide text-sm"
          >
            Home
          </Link>

          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between py-2.5 text-primary-foreground/90 hover:text-primary-foreground font-semibold uppercase tracking-wide text-sm"
          >
            Services
            <ChevronDown
              size={14}
              className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobileServicesOpen && (
            <div className="pl-4 border-l border-primary-foreground/10 ml-2 mb-2">
              {isHome ? (
                <a
                  href="#services"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="block py-2 text-primary-foreground/60 hover:text-primary-foreground text-sm"
                >
                  All Services
                </a>
              ) : (
                <Link
                  to="/services"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="block py-2 text-primary-foreground/60 hover:text-primary-foreground text-sm"
                >
                  All Services
                </Link>
              )}

              {serviceLinks.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="block py-2 text-primary-foreground/60 hover:text-primary-foreground text-sm"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/blog"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-primary-foreground/90 hover:text-primary-foreground font-semibold uppercase tracking-wide text-sm"
          >
            Blog
          </Link>

          {isHome ? (
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-primary-foreground/90 hover:text-primary-foreground font-semibold uppercase tracking-wide text-sm"
            >
              Contact
            </a>
          ) : (
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-primary-foreground/90 hover:text-primary-foreground font-semibold uppercase tracking-wide text-sm"
            >
              Contact
            </Link>
          )}

          {isHome ? (
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-bold text-sm"
            >
              <Phone size={16} /> Get a Quote
            </a>
          ) : (
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-bold text-sm"
            >
              <Phone size={16} /> Get a Quote
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
