import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Our Featured Work", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Partners", href: "#partners" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto flex items-center justify-between py-3 sm:py-4 px-4">
        <a href="#" className="font-display text-sm sm:text-lg md:text-xl font-bold uppercase tracking-wider text-primary-foreground">
          Andy Harragan & Sons
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-primary-foreground/80 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+441245000000" className="flex items-center gap-2 text-primary-foreground text-sm font-bold">
            <Phone size={14} />
            01245 XXX XXX
          </a>
          <a href="#contact" className="bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-5 py-2 rounded text-xs uppercase tracking-wider transition-colors">
            Get a Quote
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-primary-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-6">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-primary-foreground/80 hover:text-primary-foreground font-semibold uppercase tracking-wide text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-3 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-bold text-sm">
            <Phone size={16} />
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
