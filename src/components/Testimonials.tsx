import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Andy and his team were brilliant from start to finish. Our new resin driveway looks absolutely stunning and was completed on time and on budget. Highly recommend!",
    rating: 5,
  },
  {
    name: "James T.",
    text: "Exceptional quality workmanship. The block paving they installed has completely transformed the front of our house. Professional and reliable throughout.",
    rating: 5,
  },
  {
    name: "Emma W.",
    text: "Professional, reliable and great attention to detail. Our new driveway is the envy of the neighbourhood. Andy was hands-on and kept us informed at every stage.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-foreground">
            Our Customers<br />Say About Us
          </h2>
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            View on Google →
          </a>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-accent text-accent" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">5 Stars on Google Reviews</span>
          </div>
        </div>
        <a href="#contact" className="mt-4 md:mt-0 bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-6 py-3 rounded text-xs uppercase tracking-wider transition-colors self-start">
          Get a Free Quote
        </a>
      </div>

      {/* Two background cards with reviews on top */}
      <div className="relative">
        {/* Background cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary rounded-xl h-48 md:h-56" />
          <div className="bg-accent rounded-xl h-48 md:h-56" />
        </div>

        {/* Review cards overlaid */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full grid md:grid-cols-3 gap-4 px-4 md:px-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card p-5 sm:p-6 rounded-lg shadow-lg">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">"{t.text}"</p>
                <p className="mt-3 font-semibold text-foreground text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-accent text-accent" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">All of our 5-star reviews are real, verified testimonials.</span>
      </div>
    </div>
  </section>
);

export default Testimonials;
