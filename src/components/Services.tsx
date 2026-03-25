import { ArrowRight } from "lucide-react";
import servicePatio from "@/assets/brown-block-paving-service.jpeg";
import serviceResin from "@/assets/dorset-resin.jpg";
import serviceRubber from "@/assets/service-rubber.jpeg";
import serviceBlock from "@/assets/service-block.jpeg";
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

const Services = () => {
  return (
    <section id="services" className="bg-[#f6f5f5] py-16 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
            Our Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
            From resin bound driveways to complete garden transformations, we
            deliver high-quality workmanship for homes and commercial projects.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {landscapingServices.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-lg font-black uppercase leading-tight text-black">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={serviceGroundworks}
                alt="Groundworks services"
                loading="lazy"
                width={900}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
              Groundworks
            </p>

            <h3 className="mt-3 text-2xl font-semibold uppercase tracking-tight text-black md:text-3xl">
              Professional Groundworks Services
            </h3>

            <p className="mt-4 text-base leading-relaxed text-black/65">
              We provide reliable groundworks services for domestic and
              commercial projects, including site clearance, excavation,
              drainage, foundations, and sub-base preparation.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black/90"
            >
              Enquire About Groundworks
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
