import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const tarmacBenefits = [
  "Highly cost-effective for large areas",
  "Quick to install with minimal disruption",
  "Extremely hard-wearing and durable",
  "Smooth, clean finish",
  "Can be combined with block paving borders",
  "Ideal for driveways, car parks and access roads",
];

const shingleBenefits = [
  "Most affordable surfacing option",
  "Natural drainage — no planning permission needed",
  "Easy to install and maintain",
  "Range of natural stone colours",
  "Rustic, countryside aesthetic",
  "Can be topped up easily over time",
];

const TarmacShingle = () => (
  <>
    <Navbar />
    <PageHero
      title="Tarmac & Shingle"
      subtitle="Cost-effective, practical surfacing solutions for driveways, paths and large areas. Built to last with professional installation."
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Services", to: "/services" },
        { label: "Tarmac / Shingle" },
      ]}
    />

    {/* Tarmac */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-6">
          Tarmac Surfacing
        </h2>
        <div className="max-w-3xl mb-10">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body mb-4">
            Tarmac remains one of the most popular and practical driveway
            surfaces in the UK. It provides a clean, uniform finish that is
            hard-wearing, quick to install and extremely cost-effective,
            particularly for larger areas.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            Our tarmac installations include full ground preparation, proper
            drainage and a professionally rolled finish. We can also add
            decorative block paving borders for a premium look.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {tarmacBenefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10"
            >
              <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground font-body">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Shingle */}
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-6">
          Shingle & Gravel Driveways
        </h2>
        <div className="max-w-3xl mb-10">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body mb-4">
            Shingle and gravel driveways offer a natural, rustic appearance that
            suits many property types. They provide excellent drainage, require
            minimal ground preparation, and are the most budget-friendly
            surfacing option available.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            We offer a range of natural stone gravels in various colours and
            sizes. Combined with proper edging and a weed membrane, a shingle
            driveway can look stunning and last for many years.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {shingleBenefits.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
            >
              <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground font-body">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Use cases */}
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-6">
          Suitable Use Cases
        </h2>
        <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed font-body mb-4">
          Tarmac surfacing is ideal for domestic driveways, car parks, access
          roads and commercial areas where durability and cost-effectiveness are
          priorities. Shingle driveways work particularly well for rural
          properties, cottage-style homes and longer driveway runs.
        </p>
        <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed font-body">
          Both options can be combined with other surfacing materials to create
          zoned areas and decorative features that add character to your
          property.
        </p>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-10">
          Tarmac & Shingle Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl bg-muted" />
          ))}
        </div>
      </div>
    </section>

    <PageCTA />
    <Footer />
  </>
);

export default TarmacShingle;
