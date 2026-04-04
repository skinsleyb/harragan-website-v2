import mcdonalds from "@/assets/mcdonalds.png";
import resinmill from "@/assets/resin-mill-approved.svg";
import chandlers from "@/assets/chandlers.png";
import excell from "@/assets/excel-london.svg";
import bradstone from "@/assets/bradstone-assured.png";
import tobermore from "@/assets/tobermore-logo.svg";
import marlborough from "@/assets/marlborough.png";
import marshalls from "@/assets/marshalls.svg";

interface ClientLogo {
  src: string;
  alt: string;
}

const logos: ClientLogo[] = [
  { src: mcdonalds, alt: "Client logo" },
  { src: resinmill, alt: "Client logo" },
  { src: chandlers, alt: "Client logo" },
  { src: excell, alt: "Client logo" },
  { src: bradstone, alt: "Client logo" },
  { src: tobermore, alt: "Client logo" },
  { src: marshalls, alt: "Client logo" },
  { src: marlborough, alt: "Client logo" },
];

const TrustedClients = () => (
  <section id="trusted-by" className="bg-white/75 py-12">
    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee 28s linear infinite;
      }

      .marquee-track:hover {
        animation-play-state: paused;
      }
    `}</style>

    <div className="container mx-auto">
      <div className="mb-6 flex flex-col items-center gap-4">
        {/* Title */}
        <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-black/75">
          Trusted by leading brands
        </h2>

        {/* Marquee container — constrained to 60% width, centered, clipped */}
        <div className="mx-auto overflow-hidden" style={{ width: "60%" }}>
          <div className="marquee-track">
            {/* Render logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: "120px", height: "80px", marginRight: "40px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TrustedClients;
