import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/analytics/track";

export interface SplitSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  onClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  /** Controls which side the image appears on. Defaults to "left". */
  imagePosition?: "left" | "right";
  placeholderLabel?: string;
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-zinc-200 text-sm text-zinc-400">
      {label}
    </div>
  );
}

export function SplitSection({
  title,
  description,
  buttonText,
  buttonHref,
  onClick,
  imageSrc,
  imageAlt = "",
  imagePosition = "left",
  placeholderLabel,
}: SplitSectionProps) {
  const isLeft = imagePosition === "left";

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* IMAGE — full bleed to screen edge */}
      <div
        className={[
          "hidden md:block absolute top-0 bottom-0 w-[50vw]",
          isLeft ? "left-0" : "right-0",
        ].join(" ")}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        ) : (
          <ImagePlaceholder label={placeholderLabel ?? imageAlt ?? "Image"} />
        )}
      </div>

      {/* CENTERED CONTENT CONTAINER */}
      <div className="relative mx-auto max-w-[1400px] flex flex-col md:flex-row min-h-[560px]">
        {/* Mobile image */}
        <div className="md:hidden w-full min-h-[280px] overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          ) : (
            <ImagePlaceholder label={placeholderLabel ?? imageAlt ?? "Image"} />
          )}
        </div>

        {/* Content */}
        <div
          className={[
            "flex flex-col justify-center py-14 px-8 md:px-14 lg:px-20 md:w-1/2",
            isLeft ? "md:ml-auto" : "md:mr-auto",
          ].join(" ")}
        >
          <div className="max-w-[520px]">
            <h2
              style={{
                color: "#1a1a1a",
                fontSize: "clamp(22px, 2.2vw, 30px)",
                fontWeight: 400,
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              {title}
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "clamp(15px, 1.1vw, 18px)",
                fontWeight: 300,
                lineHeight: "140%",
                fontFamily: "'Poppins', sans-serif",
                marginTop: "1.25rem",
              }}
            >
              {description}
            </p>

            <div style={{ marginTop: "2rem" }}>
              {buttonHref ? (
                <a
                  href={buttonHref}
                  onClick={() =>
                    trackEvent('cta_interaction', {
                      cta_name: 'SplitSection CTA',
                      cta_type: 'link_click',
                      cta_location: 'split_section',
                      cta_page: window.location.pathname,
                      cta_destination: buttonHref,
                    })
                  }
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-[15px] font-semibold hover:bg-zinc-800"
                >
                  {buttonText}
                </a>
              ) : (
                <button
                  onClick={() => {
                    if (onClick) onClick();
                    trackEvent('cta_interaction', {
                      cta_name: 'SplitSection CTA',
                      cta_type: 'button_click',
                      cta_location: 'split_section',
                      cta_page: window.location.pathname,
                      cta_destination: '',
                    });
                  }}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-[15px] font-semibold hover:bg-zinc-800"
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
