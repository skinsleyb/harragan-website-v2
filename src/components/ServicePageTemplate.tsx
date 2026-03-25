import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Grip,
  HardHat,
  LayoutGrid,
  MousePointerClick,
  Phone,
  Quote,
  ShieldCheck,
  SquareStack,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SplitSection } from "./SplitSection";
import driveway from "@/assets/nice-drive.jpg";
import heroImg from "@/assets/nice-drive.jpg";
import section1Img from "@/assets/dorset-resin.jpg";
import section1Img2 from "@/assets/resin-nice-2.jpg";
import section1Img3 from "@/assets/nice-drive.jpg";
import section1Img4 from "@/assets/Resin.png";

// block paving
import blockp1 from "@/assets/block-paving/nice-blocks-1.jpeg";
import blockp2 from "@/assets/block-paving/nice-blocks-2.jpeg";
import blockp3 from "@/assets/block-paving/nice-blocks-3.jpeg";
import blockp4 from "@/assets/block-paving/nice-blocks-4.jpeg";
import blockp5 from "@/assets/block-paving/nice-blocks-5.jpeg";
import blockp6 from "@/assets/block-paving/nice-blocks-6.jpeg";
import blockp7 from "@/assets/block-paving/nice-blocks-7.jpeg";

import blockPavingDriveways from "@/assets/block-paving-d-1.jpeg";
import permDriveways from "@/assets/permeable-drive.webp";
import kerbsDriveways from "@/assets/kerp-edging.jpeg";
import altDriveways from "@/assets/driveway-port-1.jpg";

// driveway gallary
import dg1 from "@/assets/driveway-port-1.jpg";
import dg2 from "@/assets/port-drive-2.webp";
import dg3 from "@/assets/port-drive-3.webp";
import dg4 from "@/assets/port-drive-4.webp";
import dg5 from "@/assets/port-drive-5.webp";
import dg6 from "@/assets/nice-drive.jpg";

// gallary resin

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

export interface ServicePageConfig {
  title: string;
  subtitle: string;
  heroImage?: string | string[];
  contactLabel?: string;
  contactHref?: string;

  trustedByTitle?: string;
  trustedBy?: LogoItem[];

  section1Title: string;
  section1Intro?: string;
  section1Cards: FeatureCard[];
  section1CtaLabel?: string;
  section1CtaHref?: string;

  section2Title?: string;
  section2Cards: SplitCard[]; // expects 4 cards

  testimonialsTitle?: string;
  testimonials?: TestimonialItem[];

  galleryTitle?: string;
  galleryImages?: string[]; // expects 6

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

const PlaceholderImage = ({ label }: { label: string }) => (
  <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-[24px] bg-black/5">
    <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10" />
    <div className="flex h-full items-center justify-center p-6 text-center text-sm font-medium text-black/45">
      {label}
    </div>
  </div>
);

const ServicePageTemplate = ({ service }: Props) => {
  const {
    title,
    subtitle,
    heroImage,
    contactLabel = "Call us today",
    contactHref = "tel:+440000000000",
    trustedByTitle = "Trusted by",
    trustedBy = [],
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

      {/* Section Clients */}
      <TrustedClients />

      <ServiceExperienceSection
        label="Driveways"
        title="Our Driveway & Paving Services"
        intro="Andy Harragan & Sons Ltd provide a complete range of driveway installation, surfacing, and paving services across Essex and surrounding areas. Whether you are looking to enhance your home’s kerb appeal or require a durable commercial surface, our experienced team delivers high-quality, long-lasting results."
        outro="A professionally installed driveway not only enhances the appearance of your property but can also increase its value and market appeal. Choosing Andy Harragan & Sons Ltd ensures your home makes a strong first impression with a driveway built to last."
        services={[
          "Driveway Installation & Design",
          "Resin Driveways",
          "Tarmac Driveways",
          "Gravel & Shingle Driveways",
          "Block Paving",
          "Porcelain Paving",
          "Sandstone & Natural Stone",
          "Concrete Driveways",
          "Pathways & Walkways",
        ]}
        experienceText="With over 30 years of hands-on experience, our team has built a reputation for delivering dependable workmanship and exceptional results across every type of driveway and paving project."
        qualityText="We carefully prepare every surface and use trusted materials to ensure your new driveway is attractive, practical, and built for long-term performance."
        serviceBlockText="From your first consultation through to the finished installation, we provide honest advice, professional service, and a smooth customer experience from start to finish."
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

            {/* {section1Intro && (
              <p className="mt-5 text-base leading-relaxed text-black/65 md:text-lg">
                {section1Intro}
              </p>
            )} */}
          </div>
          {/* SECTION 1 */}
          <div className="mx-auto mt-10 max-w-5xl">
            <div className="grid justify-center gap-6 md:grid-cols-2">
              {section1Cards.map((card) => {
                const Icon = card.icon || CheckCircle2;

                return (
                  <div
                    key={card.title}
                    className="overflow-hidden rounded-xl bg-white/75 text-black"
                  >
                    {/* IMAGE
                    <div className="h-[260px] w-full overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                    </div> */}

                    {/* CARD CONTENT */}
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

      {/* SECTION 2 */}
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
              // Alternate sides for visual variety — remove if you want all the same
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

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </>
  );
};

export default ServicePageTemplate;

export const resinServiceV2: ServicePageConfig = {
  title: "15 Years In The Resin Industry",
  contactLabel: "Get a quote",
  heroImage: heroImg,
  trustedBy: [
    { name: "Trusted Brand 1" },
    { name: "Trusted Brand 2" },
    { name: "Trusted Brand 3" },
    { name: "Trusted Brand 4" },
    { name: "Trusted Brand 5" },
  ],
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
  heroImage: [blockp2, blockp3, blockp4], // p2, p3, p4
  trustedBy: [
    { name: "Trusted Brand 1" },
    { name: "Trusted Brand 2" },
    { name: "Trusted Brand 3" },
    { name: "Trusted Brand 4" },
    { name: "Trusted Brand 5" },
  ],
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
