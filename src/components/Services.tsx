import servicePatio from "@/assets/brown-block-paving-service.jpeg";
import serviceResin from "@/assets/dorset-resin.jpg";
import serviceRubber from "@/assets/service-rubber.jpeg";
import serviceBlock from "@/assets/service-block.jpeg";
import serviceSandstone from "@/assets/service-sandstone.jpg";
import servicePathways from "@/assets/service-pathways.jpg";
import serviceGroundworks from "@/assets/service-groundworks.jpg";

const landscapingServices = [
  { title: "Resin", img: serviceResin },
  { title: "Patio Design", img: servicePatio },
  { title: "Rubber Crumb", img: serviceRubber },
  { title: "Block Paving", img: serviceBlock },
  { title: "Decking", img: servicePathways },
  { title: "Pathways & Walkways", img: servicePathways },
];

const Services = () => (
  <section id="services" className="py-14 sm:py-20 bg-secondary scroll-mt-24">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center text-foreground">
        Our Services
      </h2>
      <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
        From resin bound driveways to complete garden transformations — we
        deliver premium results across Essex and nationwide.
      </p>

      {/* Hard Landscaping Grid */}
      <div className="mt-10">
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground text-center mb-6 sm:mb-8">
          Hard Landscaping Services
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mb-6 sm:mb-8">
          {landscapingServices.map((s) => (
            <div key={s.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-display text-[10px] sm:text-sm font-semibold uppercase text-foreground mt-2 sm:mt-3 text-center">
                {s.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Groundworks - subtle */}
      <div className="mt-12 max-w-2xl mx-auto text-center">
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 sm:mb-6">
          <img
            src={serviceGroundworks}
            alt="Groundworks services"
            loading="lazy"
            width={440}
            height={512}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground mb-3 sm:mb-4">
          Groundworks
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          We provide professional groundworks services for both domestic and
          commercial projects, including site clearance, excavation, drainage,
          foundations and sub-base preparation.
        </p>
        <a
          href="#contact"
          className="mt-5 inline-block bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-6 sm:px-8 py-3 rounded text-xs uppercase tracking-wider transition-colors"
        >
          Enquire About Groundworks
        </a>
      </div>
    </div>
  </section>
);

export default Services;
