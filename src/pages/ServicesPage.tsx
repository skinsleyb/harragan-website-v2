import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import Footer from "@/components/Footer";
import { ServiceHero } from "@/components/sections/ServiceHero";
import ContactSection from "@/components/sections/ContactSection";
import TrustedClients from "@/components/TrustedClients";

import blockp2 from "@/assets/block-paving/nice-blocks-2.jpeg";
import blockp3 from "@/assets/block-paving/nice-blocks-4.jpeg";
import rubberp1 from "@/assets/nice-rubber-1.jpeg";
import nicedrive from "@/assets/nice-drive.jpg";
import section1Img2 from "@/assets/resin-nice-2.jpg";

const services = [
  {
    title: "Resin Work",
    to: "/services/resin-work",
    image: section1Img2,
    description:
      "Premium resin bound and resin bonded surfacing for driveways, paths, patios and commercial areas. Durable, permeable and visually stunning finishes.",
    color: "bg-accent/10",
  },
  {
    title: "Block Paving",
    to: "/services/block-paving",
    image: blockp3,
    description:
      "Traditional and contemporary block paving installations. A wide range of patterns, colours and styles to complement any property.",
    color: "bg-primary/10",
  },
  {
    title: "Driveways",
    to: "/services/driveways",
    image: nicedrive,
    description:
      "Complete driveway solutions from design to installation. We work with resin, block paving, tarmac and shingle to suit every budget and style.",
    color: "bg-accent/10",
  },
  {
    title: "Tarmac / Shingle",
    to: "/services/tarmac-shingle",
    description:
      "Cost-effective and practical surfacing options. Tarmac and shingle driveways are ideal for larger areas and offer excellent durability.",
    color: "bg-primary/10",
  },
];

const Services = () => (
  <>
    <Navbar />

    <ServiceHero
      title={"Our Services"}
      subtitle={
        "Andy Harragan & Sons Ltd offers a comprehensive range of surfacing and landscaping services for domestic and commercial clients across Essex and nationwide."
      }
      contactLabel={"Get a quote"}
      heroImage={[blockp2, section1Img2, blockp3, rubberp1]}
      scrollToFirstSection={() => {}}
    />

    <TrustedClients />

    <section id="first" className="bg-[#f6f5f5] py-16 md:py-24">
      <div className="container mx-auto px-2">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
            Quality Driveway & Landscaping Solutions
          </h2>

          <p className="mt-5 text-base leading-relaxed text-black/65 md:text-lg font-body">
            With over 30 years of hands-on experience, we specialise in creating
            beautiful, long-lasting outdoor surfaces. From premium resin bound
            driveways to traditional block paving, every project is completed to
            the highest standards with meticulous attention to detail.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid justify-center gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group overflow-hidden rounded-xl bg-white/75 text-black transition hover:translate-y-[-1px]"
              >
                {/* IMAGE */}
                <div className="h-[260px] w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CARD CONTENT */}
                <div className="p-9">
                  <h3 className="text-2xl font-semibold uppercase leading-tight tracking-tight">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-lg leading-relaxed text-black/70 font-body">
                    {s.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-black transition group-hover:gap-3">
                    View Service
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ContactSection />
    <Footer />
  </>
);

export default Services;
