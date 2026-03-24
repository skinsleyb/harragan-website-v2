const partners = [
  "Resin Mill",
  "Bradstone Assured",
  "Chandler Materials",
  "Marshalls",
  "Tobermore",
];

const Partners = () => (
  <section id="partners" className="py-14 bg-background border-y border-border">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-10">
        Affiliations / Approved Contractors
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {partners.map((p) => (
          <div key={p} className="flex flex-col items-center justify-center px-6 py-3">
            <span className="font-display text-lg md:text-xl font-bold uppercase text-muted-foreground/60 tracking-wider">
              {p}
            </span>
            {(p === "Resin Mill" || p === "Bradstone Assured") && (
              <span className="text-[10px] text-accent font-semibold uppercase tracking-wider mt-1">Approved</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
