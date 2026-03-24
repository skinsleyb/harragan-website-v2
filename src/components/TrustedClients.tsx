const clients = [
  "Marlborough", "Premier Civil Engineering", "McDonald's", "Resin Mill",
  "Chandler Material Supplies", "March Building", "Excell", "Gilliard Homes",
  "Mason Building", "MP Dunn", "Anglia University",
];

const TrustedClients = () => (
  <section className="relative -mt-14 z-20 px-4">
    <div className="container mx-auto">
      <div className="bg-card rounded-lg shadow-xl p-4 sm:p-6 md:p-8">
        <h3 className="font-display text-sm sm:text-lg md:text-xl font-bold uppercase text-center text-foreground mb-4 sm:mb-5">
          Trusted by Leading Clients
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-6 sm:gap-y-3">
          {clients.map((c) => (
            <div key={c} className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-secondary rounded">
              <span className="font-display text-[10px] sm:text-xs md:text-sm font-bold uppercase text-muted-foreground tracking-wider">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedClients;
