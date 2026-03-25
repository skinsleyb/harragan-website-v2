import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";

const aggregates = [
  "Silver 1-3mm",
  "Yellow 10mm",
  "Yellow 1-4mm",
  "Trugrip 1-3mm",
  "Silver 10mm",
  "Red 1-3mm",
  "Green 1-3mm",
  "Golden Gravel 10mm",
  "Daltex 2-5mm",
  "Daltex Silver 2-5mm",
  "Daltex Red 2-5mm",
  "Daltex Yellow 2-5mm",
  "Daltex Green 2-5mm",
  "Daltex Golden Quartz 2-5mm",
  "Daltex White Flint 2-5mm",
  "Daltex Golden Pea 2-5mm",
  "Daltex Golden Pea 1-3mm",
  "Daltex Black 2-5mm",
  "Daltex Beige 2-5mm",
  "Daltex Autumn Quartz 1-3mm",
  "Brittany Bronze 2-5mm",
  "Brittany Bronze 10mm",
];

const benefits = [
  "Fully permeable – SuDS compliant, no planning permission usually needed",
  "Extremely durable and long-lasting",
  "Low maintenance – no weeding required",
  "Smooth, seamless finish with no loose stones",
  "Wide range of colours and aggregate blends",
  "UV stable – won't fade or discolour",
  "Suitable for driveways, paths, patios and commercial areas",
  "Can increase property value significantly",
];

const ResinWork = () => (
  <>
    <Navbar />
    <PageHero
      title="Resin Work"
      subtitle="Premium resin bound and resin bonded surfacing solutions installed to the highest standards across Essex and nationwide."
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Services", to: "/services" },
        { label: "Resin Work" },
      ]}
    />

    {/* Introduction */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-6">
            Specialist Resin Surfacing
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body mb-4">
            As approved Resin Mill contractors, Andy Harragan & Sons Ltd deliver
            exceptional resin bound and resin bonded surfacing for residential
            and commercial properties. Our installations are built to last,
            using only the finest materials and proven techniques.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
            Whether you're looking to transform your driveway, create a stunning
            patio area, or resurface a commercial space, our experienced team
            will guide you through every step of the process.
          </p>
        </div>
      </div>
    </section>

    {/* Types */}
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-10">
          Types of Resin Surfacing
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/30">
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
              Resin Bound
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Resin bound surfacing mixes natural aggregates with clear resin
              before being trowelled onto a prepared base. This creates a
              smooth, permeable surface that is SuDS compliant and requires no
              additional drainage. The finish is hard-wearing, weed-resistant
              and available in a vast range of colour blends.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/30">
            <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3">
              Resin Bonded
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Resin bonded surfacing involves applying a layer of resin to an
              existing surface, then scattering natural aggregates on top. This
              creates a textured, non-slip finish ideal for paths and pedestrian
              areas. It offers excellent grip and a natural stone appearance.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-10">
          Benefits of Resin Surfacing
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
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

    {/* Property Value */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase mb-6">
            Increase Your Property Value
          </h2>
          <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed font-body mb-4">
            A professionally installed resin driveway can significantly boost
            your property's kerb appeal and market value. Estate agents
            consistently report that a high-quality driveway is one of the most
            impactful home improvements you can make.
          </p>
          <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed font-body">
            With its seamless appearance, low maintenance requirements and
            exceptional durability, resin surfacing is increasingly the surface
            of choice for homeowners looking to make a lasting impression.
          </p>
        </div>
      </div>
    </section>

    {/* Aggregates */}
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-accent mb-3 font-body">
          Approved Resin Mill Contractor
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-3">
          Samples of Aggregates from The Resin Mill
        </h2>
        <p className="text-muted-foreground text-sm mb-10 font-body max-w-2xl">
          We offer a wide selection of natural stone aggregates from The Resin
          Mill. Below is a sample of the colours and sizes available.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {aggregates.map((a) => (
            <div
              key={a}
              className="bg-card rounded-xl p-4 border border-border/30 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-full aspect-square rounded-lg bg-muted mb-3" />
              <p className="text-xs font-semibold text-foreground font-body">
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery placeholder */}
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-foreground mb-10">
          Resin Project Gallery
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

export default ResinWork;
