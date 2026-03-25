import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#f6f5f5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
            Blog
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black uppercase tracking-tight text-black md:text-5xl">
            Driveway & Landscaping Chronicles
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
            Practical advice on resin, block paving, and outdoor design from our
            team to help you plan your next project with confidence.
          </p>

          <Link
            to="/blog"
            className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-70"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 md:p-6">
                <time
                  dateTime={p.date}
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45"
                >
                  {new Date(p.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>

                <h3 className="mt-3 text-lg font-black uppercase leading-tight text-black transition-colors group-hover:text-black/70">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/65 line-clamp-3">
                  {p.excerpt}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-opacity group-hover:opacity-70">
                  Read Article
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
