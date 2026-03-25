import designImg from "@/assets/design-construction.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Bespoke resin driveway designs tailored to your property",
  "Expert installation by experienced, qualified craftsmen",
  "BSc qualified with RHS accreditations",
  "Full project management from consultation to completion",
  "Free, no-obligation written quotation within 3–4 days",
];

const DesignConstruction = () => (
  <section className="bg-background">
    <div className="grid md:grid-cols-2">
      <div className="h-[400px] md:h-auto">
        <img
          src={designImg}
          alt="Driveway design and construction by Andy Harragan"
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-primary p-10 md:p-16 flex flex-col justify-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-primary-foreground leading-tight">
          Design and
          <br />
          Construction
        </h2>
        <p className="mt-4 text-primary-foreground/70 leading-relaxed">
          We provide a full turnkey solution — from initial consultation and 3D
          design through to professional construction. Andy personally visits
          every property, discusses your requirements, and ensures the finished
          result exceeds expectations. Serving Chelmsford, Essex, the South East
          and nationwide.
        </p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2
                className="text-accent mt-0.5 flex-shrink-0"
                size={18}
              />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {p}
              </span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-8 self-start bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-8 py-3 rounded text-xs uppercase tracking-wider transition-colors"
        >
          Start Your Project
        </a>
      </div>
    </div>
  </section>
);

export default DesignConstruction;
