import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "Resin Work", to: "/services/resin-work" },
  { label: "Block Paving", to: "/services/block-paving" },
  { label: "Driveways", to: "/services/driveways" },
  { label: "Tarmac / Shingle", to: "/services/tarmac-shingle" },
  { label: "Stone Carpets", to: "/services/stone-carpets" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-primary/95 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20">
        <Link
          to="/"
          className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-primary-foreground"
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
                <Link
                  to="/services"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-accent/10 transition-colors"
                >
                  All Services
                </Link>

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
            href="tel:+441245768150"
            className="flex items-center gap-2 text-primary-foreground text-sm font-bold tracking-wide transition-colors hover:text-accent"
          >
            <Phone size={14} className="text-accent" /> 01245 768 150
          </a>
          <Link
            to="/contact"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-5 py-2.5 rounded-md text-xs uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2 -mr-2 flex items-center justify-center hover:bg-primary-foreground/10 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-surface-dark border-t border-border/10 overflow-hidden"
          >
            <div className="px-5 py-6 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
              >
                Home
              </Link>

              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 border-l-2 border-accent/30 ml-2 overflow-hidden"
                  >
                    <div className="py-2 space-y-1">
                      <Link
                        to="/services"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block py-2.5 text-primary-foreground/70 hover:text-accent text-[15px] transition-colors"
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block py-2.5 text-primary-foreground/70 hover:text-accent text-[15px] transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
              >
                Contact
              </Link>
              
              <div className="pt-4 mt-2 border-t border-border/10">
                <a
                  href="tel:+441245768150"
                  className="flex items-center justify-center gap-2 text-primary-foreground text-sm font-bold tracking-wide transition-colors hover:text-accent py-3 mb-2"
                >
                  <Phone size={16} className="text-accent" /> 01245 768 150
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3.5 rounded-md font-bold text-sm uppercase tracking-wider shadow-lg transition-transform active:scale-95"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
