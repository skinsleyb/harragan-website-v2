import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Grip,
  HardHat,
  LayoutGrid,
  ShieldCheck,
  SquareStack,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SplitSection } from "./SplitSection";
import heroImg from "@/assets/nice-drive.jpg";
import section1Img from "@/assets/dorset-resin.jpg";
import section1Img2 from "@/assets/resin-nice-2.jpg";
import section1Img3 from "@/assets/nice-drive.jpg";
import section1Img4 from "@/assets/Resin.png";

// block paving
import blockp2 from "@/assets/block-paving/nice-blocks-2.jpeg";
import blockp3 from "@/assets/block-paving/nice-blocks-3.jpeg";
import blockp4 from "@/assets/block-paving/nice-blocks-4.jpeg";

import blockPavingDriveways from "@/assets/block-paving-d-1.jpeg";
import permDriveways from "@/assets/perm-driveway.webp";
import kerbsDriveways from "@/assets/block-path.jpg";
import altDriveways from "@/assets/driveway-port-1.jpg";

// driveway gallery
import dg1 from "@/assets/driveway-port-1.jpg";
import dg2 from "@/assets/port-drive-2.webp";
import dg3 from "@/assets/port-drive-3.webp";
import dg4 from "@/assets/port-drive-4.webp";
import dg5 from "@/assets/port-drive-5.webp";
import dg6 from "@/assets/nice-drive.jpg";

import TrustedClients from "./TrustedClients";
import Testimonials from "./Testimonials";
import ContactSection from "./sections/ContactSection";
import { ServiceHero } from "./sections/ServiceHero";
import ServiceExperienceSection from "./sections/ServiceExperieneceSection";

export interface LogoItem {
  name: string;
  image?: string;
}

export interface FeatureCard {
  title: string;
  body: string;
  image?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SplitCard {
  title: string;
  body: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface TestimonialItem {
  name: string;
  role?: string;
  quote: string;
}

export interface ServiceExperienceConfig {
  label: string;
  title: string;
  intro: string;
  outro: string;
  services: string[];
  experienceText: string;
  qualityText: string;
  serviceBlockText: string;
}

export interface ServicePageConfig {
  title: string;
  subtitle: string;
  heroImage?: string | string[];
  contactLabel?: string;
  contactHref?: string;

  trustedByTitle?: string;
  trustedBy?: LogoItem[];

  experienceSection: ServiceExperienceConfig;

  section1Title: string;
  section1Intro?: string;
  section1Cards: FeatureCard[];
  section1CtaLabel?: string;
  section1CtaHref?: string;

  section2Title?: string;
  section2Cards: SplitCard[];

  testimonialsTitle?: string;
  testimonials?: TestimonialItem[];

  galleryTitle?: string;
  galleryImages?: string[];

  contactCtaTitle?: string;
  contactCtaBody?: string;
  contactCtaLabel?: string;
  contactCtaHref?: string;
}

interface Props {
  service: ServicePageConfig;
}

const scrollToFirstSection = () => {
  const el =
    document.getElementById("trusted-by") ||
    document.getElementById("section-1");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ServicePageTemplate = ({ service }: Props) => {
  const {
    title,
    subtitle,
    heroImage,
    contactLabel = "Call us today",
    contactHref = "tel:+440000000000",
    trustedByTitle = "Trusted by",
    trustedBy = [],
    experienceSection,
    section1Title,
    section1Intro,
    section1Cards,
    section1CtaLabel = "Get a free quote",
    section1CtaHref = "/contact",
    section2Title = "What We Deliver",
    section2Cards,
    testimonialsTitle = "What Our Clients Say",
    testimonials = [],
    galleryTitle = "Portfolio",
    galleryImages = [],
    contactCtaTitle = "Ready to Start Your Project?",
    contactCtaBody = "Speak with our team today for expert advice, a clear quotation and a professional service from start to finish.",
    contactCtaLabel = "Contact us",
    contactCtaHref = "/contact",
  } = service;

  const gallery = [...galleryImages, ...Array(6).fill("")].slice(0, 6);
  const splitCards = [
    ...section2Cards,
    ...Array(Math.max(0, 4 - section2Cards.length)).fill(null),
  ].slice(0, 4);

  return (
    <>
      <Navbar />

      <ServiceHero
        title={title}
        subtitle={subtitle}
        contactLabel={contactLabel}
        heroImage={heroImage}
        scrollToFirstSection={scrollToFirstSection}
      />

      <TrustedClients />

      <ServiceExperienceSection
        label={experienceSection.label}
        title={experienceSection.title}
        intro={experienceSection.intro}
        outro={experienceSection.outro}
        services={experienceSection.services}
        experienceText={experienceSection.experienceText}
        qualityText={experienceSection.qualityText}
        serviceBlockText={experienceSection.serviceBlockText}
      />

      <section id="section-1" className="bg-[#f6f5f5] py-16 md:py-24">
        <div className="container mx-auto px-2">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
              Section 1
            </p>

            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
              {section1Title}
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="grid justify-center gap-6 md:grid-cols-2">
              {section1Cards.map((card) => {
                const Icon = card.icon || CheckCircle2;

                return (
                  <div
                    key={card.title}
                    className="overflow-hidden rounded-xl bg-white/75 text-black"
                  >
                    <div className="p-9">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold uppercase leading-tight tracking-tight">
                          {card.title}
                        </h3>

                        <Icon className="h-10 w-10 flex-shrink-0 text-black" />
                      </div>

                      <p className="mt-4 text-lg leading-relaxed text-black/70">
                        {card.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={section1CtaHref}
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:translate-y-[-1px] hover:bg-black/90"
              >
                {section1CtaLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-col">
        {splitCards.map((item, i) => {
          if (!item) return null;

          return (
            <SplitSection
              key={`${item.title}-${i}`}
              title={item.title}
              description={item.body}
              buttonText={item.ctaLabel ?? "Learn more"}
              buttonHref={item.ctaHref ?? "/contact"}
              imageSrc={item.image}
              imageAlt={item.title}
              imagePosition={i % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </div>

      <Testimonials />

      <section className="bg-white/75 pt-16 md:pt-24">
        <div className="container mx-auto px-0">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
              Gallery
            </p>

            <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
              {galleryTitle}
            </h2>

            <div className="mt-8 flex justify-center">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:translate-y-[-1px] hover:bg-black/90"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-2">
            {gallery.map((src, i) => (
              <div key={i} className="w-full">
                {src ? (
                  <img
                    src={src}
                    alt={`${title} gallery ${i + 1}`}
                    className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[4/3] w-full bg-black/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </>
  );
};

export default ServicePageTemplate;

export const resinServiceV2: ServicePageConfig = {
  title: "15 Years In The Resin Industry",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: heroImg,
  trustedBy: [
    { name: "Trusted Brand 1" },
    { name: "Trusted Brand 2" },
    { name: "Trusted Brand 3" },
    { name: "Trusted Brand 4" },
    { name: "Trusted Brand 5" },
  ],
  experienceSection: {
    label: "Resin",
    title: "Our Resin Surfacing Services",
    intro:
      "Andy Harragan & Sons Ltd provide a complete range of resin surfacing services across Essex and surrounding areas. Whether you are improving a domestic driveway, creating attractive pathways or installing a durable commercial surface, our team delivers resin systems that combine appearance, performance and long-term value.",
    outro:
      "A professionally installed resin surface can transform the look of your property while offering a practical, low-maintenance and SUDS-compliant finish. Choosing Andy Harragan & Sons Ltd means investing in a surface that is both visually impressive and built to last.",
    services: [
      "Resin Bound Driveways",
      "Resin Bonded Driveways",
      "Resin Paths & Walkways",
      "Resin Patios",
      "Commercial Resin Surfacing",
      "Courtyards & Public Areas",
      "Cycle Paths",
      "Play Areas",
      "Rubber Crumb Safety Surfaces",
    ],
    experienceText:
      "With extensive hands-on experience in resin surfacing, our team delivers dependable workmanship and consistently high standards across residential and commercial projects.",
    qualityText:
      "We use trusted materials and careful preparation methods to ensure every resin surface is attractive, hard-wearing, permeable where required, and built for long-term performance.",
    serviceBlockText:
      "From initial advice and design through to final installation, we provide honest guidance, professional service and a smooth customer experience from start to finish.",
  },
  section1Title: "Introducing Resin Surfaces",
  section1Intro:
    "Built as a cleaner, more modern service page structure with a clear hero, supporting trust signals, feature cards, split content rows, testimonials, gallery and final contact CTA.",
  section1Cards: [
    {
      title: "Resin Bound Surfacing",
      image: section1Img,
      icon: Droplets,
      body: "Resin bound surfacing is a smooth, permeable paving solution created by mixing natural aggregate stones with high-quality clear resin before installation. Ideal for resin bound driveways, paths and patios, it is durable, SUDS compliant and allows water to drain through the surface.",
    },
    {
      title: "Resin Bonded Surfacing",
      image: section1Img2,
      icon: Grip,
      body: "Resin bonded surfacing is a high-grip decorative system where natural aggregates are scattered onto a resin layer to create a textured finish. Popular for resin bonded driveways and footpaths, it provides excellent slip resistance and a natural stone appearance.",
    },
    {
      title: "Durable & Low Maintenance",
      image: section1Img3,
      icon: ShieldCheck,
      body: "Both resin bound and resin bonded surfaces are designed for durability and minimal maintenance. Occasional sweeping or power washing keeps the surface clean and prevents moss or debris buildup.",
    },
    {
      title: "Professional Resin Installation",
      image: section1Img4,
      icon: HardHat,
      body: "Andy Harragan & Sons specialises in professional resin bound and resin bonded surfacing using high-quality clear resin binders from trusted manufacturers such as Geoveko.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Our Resin Services",
  section2Cards: [
    {
      title: "Driveways",
      body: "Create a strong first impression with a resin bound or resin bonded driveway. Durable, low maintenance and visually striking, resin driveways provide a smooth finish, excellent drainage and long-lasting kerb appeal for any home.",
      ctaLabel: "Discuss your driveway",
      ctaHref: "/contact",
      image: section1Img,
    },
    {
      title: "Patios & Paths",
      body: "Enhance gardens and outdoor living areas with attractive resin patios and pathways. Resin surfaces provide a seamless, anti-slip finish that is comfortable underfoot and perfect for modern garden design.",
      ctaLabel: "Plan your project",
      ctaHref: "/contact",
      image: section1Img2,
    },
    {
      title: "Commercial & Public Areas",
      body: "Resin surfacing is ideal for commercial environments including courtyards, estate roads, cycle paths and public walkways. Its durability, permeability and clean finish make it a practical solution for high-traffic areas.",
      ctaLabel: "Discuss your project",
      ctaHref: "/contact",
      image: section1Img3,
    },
    {
      title: "Play Areas & Safety Surfaces",
      body: "Rubber crumb safety surfacing provides a soft, impact-absorbing surface ideal for playgrounds, sports areas and recreational spaces. Made from recycled tyres, it offers durability, safety and vibrant design options.",
      ctaLabel: "Enquire about safety surfacing",
      ctaHref: "/contact",
      image: section1Img4,
    },
  ],
  testimonials: [
    {
      name: "James R.",
      role: "Homeowner",
      quote:
        "The team were excellent throughout and the finished resin driveway looks superb.",
    },
    {
      name: "Sarah M.",
      role: "Property Manager",
      quote:
        "Very professional from quotation through to completion, with great communication all the way.",
    },
    {
      name: "Daniel T.",
      role: "Residential Client",
      quote:
        "Clean, reliable and clearly experienced. We would happily recommend them.",
    },
  ],
  galleryImages: ["", "", "", "", "", ""],
  contactCtaTitle: "Let’s Talk About Your Resin Project",
  contactCtaBody:
    "From driveways and pathways to patios and commercial spaces, we can help you plan the right resin solution for your property.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};

export const blockPavingServiceV2: ServicePageConfig = {
  title: "15 Years In The Driveway Industry",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: [blockp2, blockp3, blockp4],
  trustedBy: [
    { name: "Trusted Brand 1" },
    { name: "Trusted Brand 2" },
    { name: "Trusted Brand 3" },
    { name: "Trusted Brand 4" },
    { name: "Trusted Brand 5" },
  ],
  experienceSection: {
    label: "Block Paving",
    title: "Our Block Paving & Driveway Services",
    intro:
      "Andy Harragan & Sons Ltd provide a complete range of block paving installation, surfacing and paving services across Essex and surrounding areas. Whether you are improving your home’s kerb appeal or need a durable commercial surface, our experienced team delivers high-quality, long-lasting results.",
    outro:
      "A professionally installed block paved driveway not only improves the appearance of your property but can also increase its value and market appeal. Choosing Andy Harragan & Sons Ltd ensures your property makes a strong first impression with paving built to last.",
    services: [
      "Block Paving Driveways",
      "Permeable Block Paving",
      "Paths & Walkways",
      "Kerbs & Edging",
      "Patios & Courtyards",
      "Driveway Installation & Design",
      "Tarmac Driveways",
      "Resin Driveways",
      "Concrete Driveways",
    ],
    experienceText:
      "With over 30 years of hands-on experience, our team has built a reputation for delivering dependable workmanship and exceptional results across every type of driveway and paving project.",
    qualityText:
      "We carefully prepare every surface and use trusted materials to ensure your new driveway is attractive, practical and built for long-term performance.",
    serviceBlockText:
      "From your first consultation through to the finished installation, we provide honest advice, professional service and a smooth customer experience from start to finish.",
  },
  section1Title: "Introducing Block Paving",
  section1Intro:
    "Block paving is a durable, versatile and attractive surfacing solution for driveways, patios and paths. With a wide choice of colours, textures, sizes and laying patterns, Andy Harragan & Sons creates block paved surfaces that complement both traditional and modern properties while delivering long-lasting kerb appeal.",
  section1Cards: [
    {
      title: "Block Paving Driveways",
      image: blockPavingDriveways,
      icon: LayoutGrid,
      body: "Block paving driveways offer a durable, low-maintenance and visually striking solution for homes of every style. Available in a wide range of colours, sizes and finishes, block paving can be tailored to create a driveway that enhances kerb appeal and adds lasting value to your property.",
    },
    {
      title: "Kerbs & Edging",
      image: kerbsDriveways,
      icon: SquareStack,
      body: "Kerbs and edging add structure, definition and a professional finish to any driveway or paved area. We install a wide range of complementary edging options to frame your block paving beautifully while improving durability and helping maintain clean lines.",
    },
    {
      title: "Permeable Paving",
      image: permDriveways,
      icon: Droplets,
      body: "Permeable block paving is a practical and SUDS-compliant option that allows rainwater to drain naturally into the ground below. It helps reduce surface water build-up, lowers flood risk and can often remove the need for additional drainage or planning permission.",
    },
    {
      title: "Expert Installation",
      image: section1Img4,
      icon: HardHat,
      body: "Andy Harragan & Sons installs block paving with precision, care and attention to detail using trusted suppliers such as Bradstone, Brett, Marshalls, Pavestone and Stonemarket. Every project is built for strength, performance and a high-quality finish.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Our Paving & Surfacing Services",
  section2Cards: [
    {
      title: "Block Paving Driveways",
      body: "Create a stylish and hard-wearing entrance with a professionally installed block paving driveway. With a choice of patterns, textures and colours, block paving driveways deliver long-term durability, easy maintenance and timeless kerb appeal.",
      ctaLabel: "Discuss your driveway",
      ctaHref: "/contact",
      image: blockPavingDriveways,
    },
    {
      title: "Permeable Driveways",
      body: "Permeable paving is ideal for homeowners who need a practical, SUDS-compliant driveway solution. Designed to manage surface water naturally, permeable driveways reduce runoff, improve drainage and offer a clean, attractive finish.",
      ctaLabel: "Explore permeable options",
      ctaHref: "/contact",
      image: permDriveways,
    },
    {
      title: "Paths, Kerbs & Edging",
      body: "Complete your outdoor space with block paved paths, feature edging and complementary kerbs. These finishing details add structure and definition while tying together driveways, patios and garden layouts with a clean professional look.",
      ctaLabel: "Plan your project",
      ctaHref: "/contact",
      image: kerbsDriveways,
    },
    {
      title: "Alternative Surfacing Options",
      body: "We also install tarmac, tar and shingle, resin-bound stone, resin-bonded stone and concrete driveways. This gives you a full range of practical and cost-effective surfacing solutions for domestic and commercial projects.",
      ctaLabel: "Discuss surfacing options",
      ctaHref: "/contact",
      image: altDriveways,
    },
  ],
  testimonials: [
    {
      name: "Michael R.",
      role: "Homeowner",
      quote:
        "Our new block paving driveway has completely transformed the front of the house. The finish is excellent and the team were brilliant throughout.",
    },
    {
      name: "Emma L.",
      role: "Residential Client",
      quote:
        "From the first quote to the final finish, everything was handled professionally. The edging and paving pattern look fantastic.",
    },
    {
      name: "David P.",
      role: "Property Owner",
      quote:
        "Very reliable, knowledgeable and easy to deal with. We are really pleased with the quality of the driveway and would definitely recommend them.",
    },
  ],
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Let’s Talk About Your Paving Project",
  contactCtaBody:
    "From block paving driveways and permeable paving to kerbs, edging and alternative surfacing options, we can help you choose the right solution for your property.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};

export const tarmacAndShingleServiceV2: ServicePageConfig = {
  title: "15 Years In The Driveway Industry",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: [dg1, dg5, dg6],
  trustedBy: [
    { name: "Trusted Brand 1" },
    { name: "Trusted Brand 2" },
    { name: "Trusted Brand 3" },
    { name: "Trusted Brand 4" },
    { name: "Trusted Brand 5" },
  ],
  experienceSection: {
    label: "Tarmac & Shingle",
    title: "Our Tarmac & Shingle Driveway Services",
    intro:
      "Andy Harragan & Sons Ltd provide a complete range of tarmac and shingle driveway services across Essex and surrounding areas. Whether you need a cost-effective new driveway, a practical resurfacing solution, or a traditional gravel finish to suit your property, our experienced team delivers durable and attractive results.",
    outro:
      "A professionally installed tarmac or shingle driveway offers lasting performance, reliable drainage options and strong kerb appeal. Choosing Andy Harragan & Sons Ltd means investing in a driveway solution that is practical, well-finished and built to stand up to daily use.",
    services: [
      "Tarmac Driveways",
      "Tar & Shingle Driveways",
      "Shingle Driveways",
      "Driveway Resurfacing",
      "Private Roads & Lanes",
      "Paths & Walkways",
      "Kerbs & Edging",
      "Driveway Repairs",
      "Surface Preparation & Groundworks",
    ],
    experienceText:
      "With decades of hands-on experience, our team delivers dependable workmanship and high standards across all types of tarmac and shingle driveway installations.",
    qualityText:
      "We use proven installation methods, careful groundwork preparation and trusted materials to ensure every surface is durable, practical and finished to a professional standard.",
    serviceBlockText:
      "From initial advice and quotations through to completion, we provide honest guidance, reliable service and a smooth customer experience from start to finish.",
  },
  section1Title: "Introducing Tarmac & Shingle Driveways",
  section1Intro:
    "Tarmac and shingle are practical, cost-effective driveway solutions that offer durability, versatility and strong visual appeal. Whether you want the clean, smooth finish of tarmac or the more traditional character of shingle, Andy Harragan & Sons can create a surface that complements your property and performs for years to come.",
  section1Cards: [
    {
      title: "Tarmac Driveways",
      image: dg6,
      icon: ShieldCheck,
      body: "Tarmac driveways are a durable, low-maintenance and cost-effective solution for domestic and commercial properties. Their smooth, hard-wearing finish makes them ideal for everyday use, while offering a neat and professional appearance.",
    },
    {
      title: "Tar & Shingle Surfacing",
      image: dg5,
      icon: Grip,
      body: "Tar and shingle surfacing combines a solid base with a decorative stone finish to create a practical surface with a more traditional look. It is a popular option for driveways, private roads and larger access areas where durability and value are important.",
    },
    {
      title: "Low Maintenance & Practical",
      image: dg1,
      icon: Droplets,
      body: "Both tarmac and shingle driveways are designed to be practical and easy to maintain. With the right installation and occasional upkeep, they provide reliable long-term performance and a cost-effective surface for everyday use.",
    },
    {
      title: "Professional Installation",
      image: altDriveways,
      icon: HardHat,
      body: "Andy Harragan & Sons installs tarmac and shingle driveways with careful preparation, proper sub-base construction and attention to detail. Every project is built for strength, durability and a clean finished appearance.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Our Tarmac & Shingle Services",
  section2Cards: [
    {
      title: "Tarmac Driveways",
      body: "A tarmac driveway offers a smart, durable and cost-effective surface for homes and commercial properties. It provides a clean finish, excellent longevity and a practical solution for high-use areas.",
      ctaLabel: "Discuss your driveway",
      ctaHref: "/contact",
      image: dg6,
    },
    {
      title: "Shingle Driveways",
      body: "Shingle driveways create a more traditional and decorative appearance while remaining practical and versatile. Available in a range of stone sizes and colours, they are ideal for rural, period and larger properties.",
      ctaLabel: "Explore shingle options",
      ctaHref: "/contact",
      image: dg5,
    },
    {
      title: "Tar & Shingle Surfaces",
      body: "Tar and shingle is a dependable solution for driveways, lanes and access roads, combining durability with a textured stone finish. It is a strong option where you want a practical surface with added character.",
      ctaLabel: "Plan your project",
      ctaHref: "/contact",
      image: dg1,
    },
    {
      title: "Repairs & Resurfacing",
      body: "We also carry out driveway resurfacing, repairs and replacement work for worn or damaged tarmac and shingle surfaces. This helps restore appearance, improve function and extend the usable life of your driveway.",
      ctaLabel: "Discuss resurfacing",
      ctaHref: "/contact",
      image: altDriveways,
    },
  ],
  testimonials: [
    {
      name: "Peter H.",
      role: "Homeowner",
      quote:
        "The new tarmac driveway looks excellent and has completely improved the front of our property. Great team and very professional throughout.",
    },
    {
      name: "Linda S.",
      role: "Residential Client",
      quote:
        "We chose a shingle finish and are really pleased with the result. The team were helpful, tidy and clearly knew exactly what they were doing.",
    },
    {
      name: "Mark T.",
      role: "Property Owner",
      quote:
        "Reliable service from start to finish. The driveway was completed on time and the finish is exactly what we wanted.",
    },
  ],
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Let’s Talk About Your Tarmac or Shingle Project",
  contactCtaBody:
    "From new tarmac driveways and tar & shingle surfaces to resurfacing and repairs, we can help you choose the right solution for your property.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};
