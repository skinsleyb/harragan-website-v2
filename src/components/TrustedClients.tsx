const PLACEHOLDER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Crect width='120' height='40' rx='4' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%2394a3b8'%3ELOGO%3C/text%3E%3C/svg%3E`;

const clientLogos = [
  { name: "Marlborough", src: PLACEHOLDER },
  { name: "Premier Civil Engineering", src: PLACEHOLDER },
  { name: "McDonald's", src: "/assets/mcdonalds.png" },
  { name: "Resin Mill", src: "/assets/Resin-mill-logo.png" },
  { name: "Chandler Material Supplies", src: PLACEHOLDER },
  { name: "March Building", src: PLACEHOLDER },
  { name: "Excell", src: "/assets/excel-logo.svg" },
  { name: "Gilliard Homes", src: PLACEHOLDER },
  { name: "Mason Building", src: PLACEHOLDER },
  { name: "MP Dunn", src: PLACEHOLDER },
  { name: "Anglia University", src: PLACEHOLDER },
];

const TrustedClients = () => (
  <section className="relative -mt-14 z-20 px-4">
    <div className="container mx-auto">
      <div className="bg-card rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
        <h3 className="font-display text-sm sm:text-lg md:text-xl font-bold uppercase text-center text-foreground mb-4 sm:mb-5">
          Trusted by Leading Clients
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-6 sm:gap-y-3">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-secondary rounded"
            >
              <img
                src={client.src}
                alt={client.name}
                title={client.name}
                className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedClients;
