import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import { portfolioImages, CATEGORIES } from "@/data/portfolioImages";
import type { PortfolioImage } from "@/data/portfolioImages";

type ActiveCategory = typeof CATEGORIES[number];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Portfolio | Andy Harragan & Sons LTD";
    return () => {
      document.title = "Andy Harragan & Sons LTD";
    };
  }, []);

  const filtered: PortfolioImage[] =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />

      <PageHero
        title="Our Portfolio"
        subtitle="Browse our completed projects across Essex — from resin driveways to block paving, landscaping, and more."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
      />

      <main className="bg-[#f6f5f5] py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                className={`whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-white text-foreground border border-border hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <button
                key={`${img.category}-${img.src}`}
                onClick={() => setLightboxIndex(i)}
                className="aspect-video w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <PortfolioLightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <ContactSection />
      <Footer />
    </>
  );
};

export default Portfolio;
