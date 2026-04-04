import { useEffect, useMemo, useState } from "react";
import { ArrowRight, MousePointerClick } from "lucide-react";
import { trackEvent } from "@/analytics/track";

type HeroImageValue = string | string[] | undefined;

type ServiceHeroProps = {
  title: string;
  subtitle?: string;
  contactLabel: string;
  heroImage?: HeroImageValue;
  scrollToFirstSection: () => void;
  intervalMs?: number;
};

export function ServiceHero({
  title,
  subtitle,
  contactLabel,
  heroImage,
  scrollToFirstSection,
  intervalMs = 5000,
}: ServiceHeroProps) {
  const images = useMemo(() => {
    if (!heroImage) return [];
    return Array.isArray(heroImage) ? heroImage.filter(Boolean) : [heroImage];
  }, [heroImage]);

  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [heroImage]);

  useEffect(() => {
    if (!hasMultipleImages) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length, intervalMs]);

  return (
    <section className="relative isolate overflow-hidden bg-[#f6f5f5] text-black">
      <div className="absolute inset-0">
        {images.length ? (
          <div className="relative h-full w-full overflow-hidden">
            {images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={hasMultipleImages ? `${title} ${index + 1}` : title}
                className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 lg:object-[center_center] 2xl:scale-[1.03] ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(0,0,0,0.08),_transparent_35%),linear-gradient(135deg,#efefef,#dcdcdc)]" />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] items-center py-20 sm:py-24 lg:py-28">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="font-display max-w-[12ch] text-4xl font-bold uppercase leading-[0.92] text-white sm:text-5xl lg:max-w-[14ch] lg:text-6xl xl:text-7xl 2xl:text-[4.5rem]">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-5 max-w-md text-sm leading-6 text-white/80 sm:mt-6 sm:text-base">
                {subtitle}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                onClick={() =>
                  trackEvent('cta_interaction', {
                    cta_name: 'ServiceHero Contact CTA',
                    cta_type: 'link_click',
                    cta_location: 'service_hero',
                    cta_page: window.location.pathname,
                    cta_destination: '#cta',
                  })
                }
                className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/90"
              >
                {contactLabel}
                <MousePointerClick className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  scrollToFirstSection();
                  trackEvent('cta_interaction', {
                    cta_name: 'ServiceHero Explore More',
                    cta_type: 'button_click',
                    cta_location: 'service_hero',
                    cta_page: window.location.pathname,
                    cta_destination: '',
                  });
                }}
                className="inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-3.5 text-sm font-semibold text-black backdrop-blur-sm transition hover:bg-white"
                aria-label="Scroll to first section"
              >
                Explore more
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {hasMultipleImages && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-[1360px] px-5 pb-5 sm:px-8 lg:px-10">
          <div className="flex gap-2">
            {images.map((_, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show hero image ${index + 1}`}
                  className="pointer-events-auto relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/25"
                >
                  {isActive && (
                    <div
                      key={activeIndex}
                      className="h-full animate-[heroTimer_linear_forwards] bg-white"
                      style={{ animationDuration: `${intervalMs}ms` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
