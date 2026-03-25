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

const Partners = () => {
  return (
    <section id="partners" className="bg-white/75 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Partners
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
            Affiliations & Approved Contractors
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-28 items-center justify-center rounded-2xl px-6 py-4"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-32 object-contain opacity-80 transition hover:opacity-100"
                />
              ) : (
                <span className="text-center text-sm font-bold uppercase tracking-[0.14em] text-black/55">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
