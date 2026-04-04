import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import servicePatio from "@/assets/services/service-paving.jpeg";
import serviceResin from "@/assets/services/service-resin.jpg";
import serviceRubber from "@/assets/services/service-rubber.jpeg";
import serviceBlock from "@/assets/services/service-block.jpeg";
import servicePathways from "@/assets/services/service-pathway.jpg";
import serviceFencing from "@/assets/services/service-fencing.jpeg";
import serviceGroundworks from "@/assets/services/service-groundworks.jpg";
import resinMillApproved from "@/assets/resin-mill-approved.svg";
import bradstoneAssured from "@/assets/bradstone-assured-green.png";

const landscapingServices = [
  { title: "Resin", img: serviceResin, href: "/services/resin-work", badge: resinMillApproved },
  { title: "Block Paving", img: serviceBlock, href: "/services/block-paving", badge: bradstoneAssured },
  { title: "Pathways & Walkways", img: servicePathways, href: "/services" },
  { title: "Fencing", img: serviceFencing, href: "/services" },
  { title: "Rubber Crumb", img: serviceRubber, href: "/services" },
  { title: "Patio Design", img: servicePatio, href: "/services" },
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
              <Link
                key={service.title}
                to={service.href}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {service.badge && (
                    <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 p-1.5 shadow-md backdrop-blur-sm">
                      <img
                        src={service.badge}
                        alt="Approved logo"
                        className="h-12 w-auto"
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between p-5 md:p-6">
                  <h3 className="text-lg font-black uppercase leading-tight text-black">
                    {service.title}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-black/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                </div>
              </Link>
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
