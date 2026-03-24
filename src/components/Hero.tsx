import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/Firefly.jpg";

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-end">
    <img
      src={heroImg}
      alt="Professional resin driveway installation by Andy Harragan and Sons, Chelmsford Essex"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{ background: "var(--hero-overlay)" }}
    />
    <div className="container relative z-10 mx-auto px-4 pb-28 md:pb-24 pt-32">
      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold uppercase leading-[0.9] text-primary-foreground max-w-3xl">
        Creating
        <br />
        Exceptional
        <br />
        Outdoor Living
        <br />
        Spaces!
      </h1>
      <p className="mt-4 text-xs sm:text-sm md:text-base text-primary-foreground/70 max-w-lg">
        Resin Driveway & Surfacing Specialists — Chelmsford, Essex & Nationwide
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="#services"
          className="bg-primary-foreground/10 border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded text-[10px] sm:text-xs uppercase tracking-wider transition-colors"
        >
          View Our Portfolio
        </a>
      </div>

      {/* Chandler Material Supplies association */}
      <div className="mt-6 flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded px-3 py-2 w-fit">
        <span className="text-primary-foreground/60 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
          In association with
        </span>
        <span className="text-primary-foreground font-display text-xs sm:text-sm font-bold uppercase tracking-wide">
          Chandler Material Supplies
        </span>
        <span className="text-primary-foreground/50 text-[9px] sm:text-[10px]">
          (Essex)
        </span>
      </div>
    </div>

    {/* Bouncing scroll indicator */}
    <a
      href="#about"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-primary-foreground/60 hover:text-primary-foreground transition-colors"
      aria-label="Scroll down"
    >
      <ChevronDown size={28} />
    </a>
  </section>
);

export default Hero;
