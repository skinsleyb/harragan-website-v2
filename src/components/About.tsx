import aboutImg from "@/assets/about-work.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Family-run business with over 20 years' experience",
  "Fully insured and guaranteed workmanship",
  "Free, no-obligation quotes and site visits",
  "Premium materials from trusted UK suppliers",
];

const About = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={aboutImg}
          alt="Andy Harragan and Sons team at work"
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-foreground leading-tight">
          Design &<br />
          Construction
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Andy Harragan & Sons LTD are specialists in driveway installation and
          design. Our skilled team transforms outdoor spaces with precision
          craftsmanship and premium materials, delivering results that stand the
          test of time.
        </p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2
                className="text-accent mt-0.5 flex-shrink-0"
                size={20}
              />
              <span className="text-foreground font-medium">{p}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-8 inline-block bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-8 py-4 rounded-md text-sm uppercase tracking-wider transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default About;
