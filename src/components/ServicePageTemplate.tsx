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
import heroImg from "@/assets/nice-drive.jpg";
import section1Img from "@/assets/dorset-resin.jpg";
import section1Img2 from "@/assets/resin-nice-2.jpg";
import section1Img3 from "@/assets/nice-drive.jpg";
import section1Img4 from "@/assets/Resin.png";

// Resin Service
import resin1 from "@/assets/resin/resin-driveway-1.jpeg";
import resin2 from "@/assets/resin/resin-driveway-2.jpg";
import resin3 from "@/assets/resin/resin-3.jpeg";
import resin4 from "@/assets/resin/resin-4.jpeg";

// block paving
import blockp1 from "@/assets/block-paving/block-paving-1.jpeg";
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
  children?: React.ReactNode;
}

const scrollToFirstSection = () => {
  const el =
    document.getElementById("trusted-by") ||
    document.getElementById("section-1");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ServicePageTemplate = ({ service, children }: Props) => {
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

      <section id="section-1" className="bg-zinc-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Sticky intro */}
            <div className="lg:sticky lg:top-32 max-w-xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/45">
                Overview
              </p>
              <h2 className="mt-4 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
                {section1Title}
              </h2>
              {section1Intro && (
                <p className="mt-6 text-lg leading-relaxed text-black/70">
                  {section1Intro}
                </p>
              )}
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-4 border border-black px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-black hover:text-white"
                >
                  {section1CtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Feature Cards Grid (Asymmetrical) */}
            <div className="grid sm:grid-cols-2 gap-8 lg:mt-24">
              {section1Cards.map((card, i) => {
                const Icon = card.icon || CheckCircle2;
                return (
                  <div
                    key={card.title}
                    className={`flex flex-col bg-white border border-black/5 p-8 transition-colors hover:border-black/20 ${
                      i % 2 !== 0 ? "sm:mt-16" : ""
                    }`}
                  >
                    <Icon
                      className="h-8 w-8 text-black mb-6"
                      strokeWidth={1.5}
                    />
                    <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-black mb-4">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/65">
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SCROLL SECTION 2 */}
      {splitCards.length > 0 && splitCards[0] !== null && (
        <section className="bg-white py-24 md:py-32 border-t border-black/5">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
              <h2 className="text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
                {section2Title}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-16 lg:gap-24 relative w-full items-start">
              {/* Sticky Content Side */}
              <div className="w-full md:w-[45%] md:sticky md:top-32 flex flex-col gap-16 py-10">
                {splitCards.filter(Boolean).map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl font-light text-black/20 mb-4 tracking-tighter">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-black mb-4 gap-2">
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-black/70">
                      {item.body}
                    </p>
                    <div className="mt-8">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 font-bold uppercase tracking-[0.15em] text-[11px] group pb-2 border-b-2 border-transparent hover:border-black transition-all"
                      >
                        {item.ctaLabel ?? "Learn more"}
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scrolling Images Side */}
              <div className="w-full md:w-[55%] flex flex-col gap-16 md:gap-32">
                {splitCards.filter(Boolean).map((item, i) => (
                  <div
                    key={i}
                    className="w-full aspect-[4/5] bg-zinc-100 relative overflow-hidden"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-black/20">
                        No Image Provided
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {children}

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
  trustedBy: [],
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
      image: resin2,
    },
    {
      title: "Commercial & Public Areas",
      body: "Resin surfacing is ideal for commercial environments including courtyards, estate roads, cycle paths and public walkways. Its durability, permeability and clean finish make it a practical solution for high-traffic areas.",
      ctaLabel: "Discuss your project",
      ctaHref: "/contact",
      image: resin3,
    },
    {
      title: "Play Areas & Safety Surfaces",
      body: "Rubber crumb safety surfacing provides a soft, impact-absorbing surface ideal for playgrounds, sports areas and recreational spaces. Made from recycled tyres, it offers durability, safety and vibrant design options.",
      ctaLabel: "Enquire about safety surfacing",
      ctaHref: "/contact",
      image: resin4,
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
  title: "Block Paving Specialists",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: [blockp2],
  trustedBy: [
    { name: "Bradstone" },
    { name: "Marshalls" },
    { name: "Brett" },
    { name: "Pavestone" },
    { name: "Stonemarket" },
  ],
  experienceSection: {
    label: "Block Paving",
    title: "Our Block Paving Services",
    intro:
      "Andy Harragan & Sons Ltd deliver specialist block paving installation across Essex and surrounding areas. From classic herringbone driveways and block paved patios to decorative paths, courtyards and kerb edging, our experienced team produces high-quality, long-lasting block paving that enhances the look and value of any property.",
    outro:
      "A professionally installed block paved surface not only improves kerb appeal but adds lasting value to your home or commercial property. With the right pattern, colour and laying method, block paving creates a finish that looks as good in ten years as it does on day one.",
    services: [
      "Block Paving Driveways",
      "Permeable Block Paving",
      "Patios & Courtyards",
      "Paths & Walkways",
      "Kerbs & Edging",
      "Block Paving Repairs",
      "Pattern Design",
      "Colour & Texture Selection",
      "Repointing & Restoration",
    ],
    experienceText:
      "With extensive hands-on experience in block paving installation, our team delivers precision workmanship and high standards across residential and commercial projects of all sizes.",
    qualityText:
      "We source block paving from trusted manufacturers including Bradstone, Marshalls, Brett, Pavestone and Stonemarket, and install every surface on a correct sub-base with kiln-dried sand jointing and proper edge restraints.",
    serviceBlockText:
      "From pattern and material selection through to installation and finishing, we provide expert guidance and a professional, hassle-free service from first consultation to completed project.",
  },
  section1Title: "Block Paving Done Right",
  section1Intro:
    "The quality of a block paved surface depends on pattern choice, material selection and — above all — what goes beneath it. Andy Harragan & Sons combines design knowledge with correct installation technique to deliver block paving that looks exceptional and lasts.",
  section1Cards: [
    {
      title: "Laying Patterns",
      image: blockPavingDriveways,
      icon: LayoutGrid,
      body: "Herringbone, basketweave, stretcher bond, fan and running bond patterns each have different visual characters and structural properties. Herringbone in particular offers superior interlock and load-bearing strength. We advise on the right pattern for your project and property style.",
    },
    {
      title: "Colour, Texture & Finish",
      image: blockp3,
      icon: Grip,
      body: "We offer a wide choice of block paving colours, textures and sizes from trusted suppliers including Bradstone, Marshalls, Brett, Pavestone and Stonemarket. Whether you want a traditional buff finish or a contemporary charcoal, we help you choose a combination that complements your property.",
    },
    {
      title: "Permeable Block Paving",
      image: permDriveways,
      icon: Droplets,
      body: "Permeable block paving is fully SUDS-compliant, allowing rainwater to drain naturally through the surface into the sub-base below. It reduces surface water runoff, lowers flood risk and often removes the need for planning permission when resurfacing a front driveway.",
    },
    {
      title: "Precision Installation",
      image: blockp1,
      icon: HardHat,
      body: "A block paving job is only as good as its foundation. We install a correctly specified sub-base, use kiln-dried sand for jointing, set proper edge restraints and compact the surface to ensure the paving remains stable, level and long-lasting through all weather conditions.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Block Paving Applications",
  section2Cards: [
    {
      title: "Block Paving Driveways",
      body: "Create a durable, visually striking driveway with lasting kerb appeal. Available in a wide range of colours, sizes and laying patterns, a block paved driveway can be fully customised to suit both traditional and modern properties and adds real value to your home.",
      ctaLabel: "Discuss your driveway",
      ctaHref: "/contact",
      image: blockPavingDriveways,
    },
    {
      title: "Patios & Courtyards",
      body: "Extend block paving beyond the driveway into your outdoor living space. Block paved patios and courtyards provide a durable, low-maintenance surface that ties the look of your property together and creates an attractive area for entertaining and relaxing.",
      ctaLabel: "Plan your patio",
      ctaHref: "/contact",
      image: kerbsDriveways,
    },
    {
      title: "Paths, Edging & Kerbs",
      body: "Complementary paths, kerb edging and border details add structure, definition and a professional finish to any block paved area. These finishing elements frame the main surface, improve edge stability and complete the overall design with clean, precise lines.",
      ctaLabel: "Discuss finishing details",
      ctaHref: "/contact",
      image: blockp4,
    },
    {
      title: "Repairs & Repointing",
      body: "Sunken blocks, cracked edging and weed-filled joints can all be restored without full replacement. We carry out targeted block paving repairs, sand repointing and block re-levelling to bring existing surfaces back to a high standard at a fraction of the cost of new installation.",
      ctaLabel: "Enquire about repairs",
      ctaHref: "/contact",
      image: blockp2,
    },
  ],
  galleryTitle: "Block Paving Portfolio",
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Let’s Talk About Your Block Paving Project",
  contactCtaBody:
    "From pattern selection and material choice through to installation and finishing, we can help you plan and deliver a block paving project that enhances your property for years to come.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};

export const tarmacAndShingleServiceV2: ServicePageConfig = {
  title: "15 Years In The Driveway Industry",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: [dg1],
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

export const stoneCarpetsServiceV2: ServicePageConfig = {
  title: "15 Years In The Resin Industry",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: [section1Img2],
  trustedBy: [
    { name: "Trusted Brand 1" },
    { name: "Trusted Brand 2" },
    { name: "Trusted Brand 3" },
    { name: "Trusted Brand 4" },
    { name: "Trusted Brand 5" },
  ],
  experienceSection: {
    label: "Stone Carpets",
    title: "Seamless Indoor Stone Surfaces",
    intro:
      "Andy Harragan & Sons Ltd introduce Stone Carpets, a revolutionary seamless flooring system. Stone Carpets provide a hard-wearing, UV-resistant indoor surface that brings the beauty of natural stone into your property with unmatched durability and style.",
    outro:
      "Walkable within just 45 minutes of application, Stone Carpets offer incredible convenience alongside premium results. With endless possibilities, these resin bound surfaces know no bounds, making them perfectly suited for commercial spaces, modern homes, and everything in between.",
    services: [
      "Commercial Properties",
      "Gyms & Spas",
      "Bathrooms & Wet Rooms",
      "Living Rooms",
      "Conservatories",
      "Showrooms & Exhibitions",
      "Game Rooms",
      "Kitchens",
      "Porches & Hallways",
    ],
    experienceText:
      "With 15 years in the resin industry, our team expertly installs indoor stone carpets to the highest standard. We ensure a flawless, seamless finish that enhances any interior space.",
    qualityText:
      "We strictly source premium resin and aggregates, ensuring your indoor stone carpet is UV-resistant, exceptionally hard-wearing, and perfectly level.",
    serviceBlockText:
      "We handle every aspect of the project, from surface preparation right through to final sealing, offering honest guidance and a hassle-free experience perfectly tailored to your space.",
  },
  section1Title: "Introducing Stone Carpets",
  section1Intro:
    "Stone carpets bring the rugged natural beauty of resin-bound stone indoors, offering a completely seamless, high-performance alternative to traditional flooring solutions.",
  section1Cards: [
    {
      title: "Completely Seamless",
      image: section1Img,
      icon: LayoutGrid,
      body: "Say goodbye to grout lines and joints. A stone carpet provides a single, unbroken aesthetic across any room size, delivering a clean, modern look that's incredibly easy to keep pristine.",
    },
    {
      title: "Hard-Wearing & Durable",
      image: section1Img2,
      icon: ShieldCheck,
      body: "Designed to withstand heavy foot traffic, dropped items, and daily wear and tear. Stone Carpets are an ideal solution for both demanding commercial environments and busy family homes.",
    },
    {
      title: "UV-Resistant Finish",
      image: section1Img4,
      icon: Droplets,
      body: "Thanks to premium UV-stable clear resins, our stone carpets will not yellow or degrade over time when exposed to sunlight, maintaining their original vibrant colour for years, even in sunlit conservatories.",
    },
    {
      title: "Walkable in 45 Minutes",
      image: dg6,
      icon: HardHat,
      body: "Our advanced rapid-cure resin allows the floor to be fully walkable just 45 minutes after application, drastically reducing installation downtime compared to traditional flooring methods.",
    },
  ],
  section1CtaLabel: "Discuss your project",
  section1CtaHref: "/contact",
  section2Title: "Applications and Versatility",
  section2Cards: [
    {
      title: "Living Spaces & Kitchens",
      body: "Transform your home with a stunning, practical surface that effortlessly connects open-plan living areas. It's warm, comfortable underfoot, and extremely easy to maintain.",
      ctaLabel: "Transform your home",
      ctaHref: "/contact",
      image: dg2,
    },
    {
      title: "Bathrooms & Wet Rooms",
      body: "The seamless nature of stone carpets makes them an excellent, highly durable choice for wet environments, offering natural slip resistance when correctly sealed.",
      ctaLabel: "Plan your bathroom",
      ctaHref: "/contact",
      image: section1Img3,
    },
    {
      title: "Commercial & Showrooms",
      body: "Make a striking impression on clients with a floor that embodies luxury while enduring the rigorous demands of commercial foot traffic.",
      ctaLabel: "Discuss your showroom",
      ctaHref: "/contact",
      image: section1Img,
    },
    {
      title: "Gyms, Spas & Game Rooms",
      body: "Stone Carpets provide an incredibly resilient, easy-to-clean base layer that handles heavy equipment and high activity without showing signs of wear.",
      ctaLabel: "Enquire today",
      ctaHref: "/contact",
      image: dg6,
    },
  ],
  testimonials: [
    {
      name: "Olivia M.",
      role: "Homeowner",
      quote:
        "The stone carpet in our new extension completely changed the feel of the room. It flows seamlessly into the kitchen and looks incredible.",
    },
    {
      name: "Marcus T.",
      role: "Commercial Client",
      quote:
        "We needed a hard-wearing showroom floor that set us apart from competitors. The team managed to install it with minimal disruption.",
    },
    {
      name: "Sarah V.",
      role: "Residential Client",
      quote:
        "Being able to walk on it within an hour was a game changer for us. The UV resistance is great for our south-facing conservatory.",
    },
  ],
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Ready for a Seamless Floor?",
  contactCtaBody:
    "Whether it's for a residential kitchen, a pristine bathroom, or a high-end commercial showroom, we have the perfect stone carpet solution.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};

export const driveywaysServiceV2: ServicePageConfig = {
  title: "Complete Driveway Solutions",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: heroImg,
  trustedBy: [],
  experienceSection: {
    label: "Driveways",
    title: "Our Driveway Installation Services",
    intro:
      "Andy Harragan & Sons Ltd provide a complete range of driveway installation services across Essex and surrounding areas. Whether you are looking for the classic appeal of block paving, the modern finish of resin, the practicality of tarmac or the character of shingle, our experienced team delivers durable, well-finished results for domestic and commercial properties.",
    outro:
      "A professionally installed driveway adds lasting kerb appeal, improves practicality and can increase the value of your property. Choosing Andy Harragan & Sons Ltd means investing in a surface built to perform and look great for years to come.",
    services: [
      "Block Paving Driveways",
      "Resin Bound Driveways",
      "Resin Bonded Driveways",
      "Tarmac Driveways",
      "Tar & Shingle Driveways",
      "Shingle Driveways",
      "Concrete Driveways",
      "Permeable Driveways",
      "Groundworks & Preparation",
    ],
    experienceText:
      "With decades of hands-on experience across all major driveway surface types, our team delivers dependable workmanship and consistently high standards on every residential and commercial project.",
    qualityText:
      "We use trusted materials, careful groundwork preparation and proven installation methods to ensure every driveway we install is durable, practical and finished to a professional standard.",
    serviceBlockText:
      "From your first enquiry through to the finished driveway, we provide honest advice, clear quotations and a smooth, professional customer experience from start to finish.",
  },
  section1Title: "Driveways Built to Last",
  section1Intro:
    "Whatever surface you choose, the quality of a driveway depends on preparation, materials and installation. Andy Harragan & Sons covers every stage — from groundworks and drainage through to the finished surface — delivering driveways that perform well and look great long after installation.",
  section1Cards: [
    {
      title: "Design & Material Choice",
      image: dg1,
      icon: LayoutGrid,
      body: "We work with the full range of driveway surfaces — block paving, resin bound, resin bonded, tarmac, shingle and concrete. Our team helps you choose the right material for your budget, property style and long-term needs.",
    },
    {
      title: "Groundworks & Preparation",
      image: dg3,
      icon: HardHat,
      body: "Every driveway starts below the surface. Proper excavation, sub-base construction and drainage installation are what separate a lasting driveway from one that fails within years. We get the groundwork right every time.",
    },
    {
      title: "SUDS-Compliant Options",
      image: permDriveways,
      icon: Droplets,
      body: "Many of our surfaces — including permeable block paving and resin bound — allow rainwater to drain naturally through the surface, meeting planning requirements and reducing runoff without additional drainage infrastructure.",
    },
    {
      title: "Long-Term Durability",
      image: dg6,
      icon: ShieldCheck,
      body: "Regardless of the material you choose, every driveway we install is built to last. We use trusted suppliers, correct installation techniques and quality finishing throughout to deliver a surface that performs for years.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Our Driveway Services",
  section2Cards: [
    {
      title: "Block Paving Driveways",
      body: "Durable, versatile and highly attractive, block paving is available in a wide range of colours, textures and laying patterns. It can be tailored to suit any property style and delivers long-lasting kerb appeal with minimal maintenance.",
      ctaLabel: "Explore block paving",
      ctaHref: "/services/block-paving",
      image: blockPavingDriveways,
    },
    {
      title: "Resin Driveways",
      body: "Resin bound and resin bonded driveways offer a smooth, modern finish with excellent drainage and very low maintenance. A popular choice for contemporary homes and commercial properties looking for a clean, high-quality surface.",
      ctaLabel: "Explore resin driveways",
      ctaHref: "/services/resin-work",
      image: section1Img,
    },
    {
      title: "Tarmac & Shingle",
      body: "Cost-effective and practical, tarmac delivers a clean hard-wearing surface while shingle and tar & shingle options add traditional character to driveways and access roads. Ideal for both residential and larger commercial areas.",
      ctaLabel: "Explore tarmac & shingle",
      ctaHref: "/services/tarmac-shingle",
      image: dg5,
    },
    {
      title: "Concrete & Other Surfaces",
      body: "We also install concrete driveways and can advise on the full range of surfacing options for your property. Get in touch to discuss your requirements and we will recommend the most suitable solution for your project.",
      ctaLabel: "Discuss your project",
      ctaHref: "/contact",
      image: dg4,
    },
  ],
  galleryTitle: "Driveway Portfolio",
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Ready to Transform Your Driveway?",
  contactCtaBody:
    "From block paving and resin to tarmac, shingle and concrete, we can help you choose the right surface and deliver a professional result from groundworks through to the finished driveway.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};
