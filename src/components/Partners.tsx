import resinMillImg from "@/assets/resin-mill-logo.svg";
import bradstoneImg from "@/assets/bradstone.png";
import chandlersImg from "@/assets/chandlers.png";
import marshallsImg from "@/assets/marshalls.svg";
import tobermoreImg from "@/assets/tobermore-logo.svg";

const partners = [
  { name: "Resin Mill", logo: resinMillImg },
  { name: "Bradstone Assured", logo: bradstoneImg },
  { name: "Chandler Materials", logo: chandlersImg },
  { name: "Marshalls", logo: marshallsImg },
  { name: "Tobermore", logo: tobermoreImg },
];

const Partners = () => (
  <section id="partners" className="py-14 bg-background border-y border-border">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-10">
        Affiliations / Approved Contractors
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {partners.map((p) => (
          <div
            key={p.name}
            className="flex flex-col items-center justify-center px-6 py-3"
          >
            {p.logo ? (
              <img
                src={p.logo}
                alt={p.name}
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            ) : (
              <span className="font-display text-lg md:text-xl font-bold uppercase text-muted-foreground/60 tracking-wider">
                {p.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
