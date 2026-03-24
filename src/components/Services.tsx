import servicePatio from "@/assets/service-patio.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceDecking from "@/assets/service-decking.jpg";
import serviceBlock from "@/assets/service-block.jpg";
import serviceSandstone from "@/assets/service-sandstone.jpg";
import servicePathways from "@/assets/service-pathways.jpg";
import serviceGroundworks from "@/assets/service-groundworks.jpg";

const landscapingServices = [
  { title: "Patio Design", img: servicePatio },
  { title: "Garden Design", img: serviceGarden },
  { title: "Block Paving", img: serviceBlock },
  { title: "Sandstone & Natural Stone", img: serviceSandstone },
  { title: "Decking", img: serviceDecking },
  { title: "Pathways & Walkways", img: servicePathways },
];

const moreServices = [
  "Lawns & Artificial Lawns", "Water Features", "Fencing", "Walling",
  "Raised Planters", "Kitchen Gardens", "Pergolas",
];

const Services = () => (
  <section id="services" className="py-14 sm:py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-center text-foreground">
        Our Services
      </h2>
      <p className="text-center text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
        From resin bound driveways to complete garden transformations — we deliver premium results across Essex and nationwide.
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
                <img src={s.img} alt={s.title} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h4 className="font-display text-[10px] sm:text-sm font-semibold uppercase text-foreground mt-2 sm:mt-3 text-center">{s.title}</h4>
            </div>
          ))}
        </div>
        <div className="bg-card rounded-lg p-4 sm:p-6 shadow-sm">
          <h4 className="font-display text-xs sm:text-base font-bold uppercase text-foreground mb-3 sm:mb-4">Full Range of Services</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-2">
            {moreServices.map((item) => (
              <div key={item} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-muted-foreground">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Groundworks - subtle */}
      <div className="mt-12 max-w-2xl mx-auto text-center">
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 sm:mb-6">
          <img src={serviceGroundworks} alt="Groundworks services" loading="lazy" width={640} height={512} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground mb-3 sm:mb-4">
          Groundworks & Civil Engineering
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          We provide professional groundworks services for both domestic and commercial projects,
          including site clearance, excavation, drainage, foundations and sub-base preparation.
        </p>
        <a href="#contact" className="mt-5 inline-block bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-6 sm:px-8 py-3 rounded text-xs uppercase tracking-wider transition-colors">
          Enquire About Groundworks
        </a>
      </div>
    </div>
  </section>
);

export default Services;
