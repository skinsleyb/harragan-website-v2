import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import resbusImg from "@/assets/resbuzz.png";
import candiceImg from "@/assets/candice.png";
import jamie_spears from "@/assets/jamie_spears.png";

const testimonials = [
  {
    name: "Candice Tyler",
    location: "Chelmsford, Essex",
    image: candiceImg,
    text: "Andy Harragan and Sons replaced my block paving drive with resin and fully replaced the patio, sleepers and lawn in my back garden. From the initial visit through to completion, I wouldn’t hesitate to recommend Andy and his team. Professional, polite, clean and nothing was too much trouble. I have recommended Andy to family and friends (and passers by admiring my drive!)",
    rating: 5,
  },
  {
    name: "Resident Buzz",
    location: "Brentwood, Essex",
    image: resbusImg,
    text: `We recently had our driveway completed by Andy and his team, and we couldn’t be happier with the result. Andy and his three workmen worked tirelessly, even in very hot weather, to make sure everything was finished to a high standard. The finished driveway looks high-end, and we’ve already had many compliments from neighbours and visitors.

The pricing felt fair for the quality of work, and what really stood out was how respectful and professional his team were throughout the job. They made sure the area was swept and tidy at the end of each day, which made the whole process stress-free.

We would highly recommend Andy and his team to anyone looking for a reliable, skilled, and hardworking company to transform their driveway.`,
    rating: 5,
  },
  {
    name: "Jamie Spears",
    location: "Essex",
    image: jamie_spears,
    text: "Andy and his team extended my driveway and then applied a resin surface. The work was competitively priced, whilst being done to high standard in a very time efficient manner. I would definately use Andy and the team again.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const prevTestimonial = () => {
    setExpanded(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextTestimonial = () => {
    setExpanded(false);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonials[currentIndex];

  const isLong = current.text.length > 260;

  return (
    <section className="bg-[#f6f5f5] py-16 md:py-24">
      <div className="container mx-auto px-2">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight text-black md:text-5xl">
            What Our Customers Say About Us
          </h2>
        </div>

        {/* Card */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-xl bg-white/75 text-black">
            <div className="p-9 min-h-[360px] flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <Quote className="h-10 w-10 text-black/20" />

                  <div className="flex gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-black" />
                    ))}
                  </div>
                </div>

                <p
                  className={`mt-6 text-lg leading-relaxed text-black/70 whitespace-pre-line ${
                    expanded ? "" : "line-clamp-5"
                  }`}
                >
                  “{current.text}”
                </p>

                {isLong && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-sm font-semibold text-black underline hover:text-black/70"
                  >
                    {expanded ? "Read less" : "Read more"}
                  </button>
                )}
              </div>

              {/* Footer */}
              <div className="mt-8 border-t border-black/10 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-black">
                      {current.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] text-black/45">
                      {current.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3 text-sm font-bold text-white transition hover:translate-y-[-1px] hover:bg-black/90"
            >
              View All Reviews
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
