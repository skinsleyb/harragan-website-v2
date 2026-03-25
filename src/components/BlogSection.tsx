import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section id="blog" className="py-20 bg-muted/60">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 text-center sm:text-left">
        <div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-foreground">
            Driveway & Landscaping Chronicles
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base max-w-xl mx-auto sm:mx-0 font-body">
            Practical advice on resin, block paving, and design—from our team
            to your project.
          </p>
        </div>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center gap-1 text-accent text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all shrink-0"
        >
          View all articles <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group block rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width={640}
                height={512}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <time
                dateTime={p.date}
                className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {new Date(p.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h3 className="font-display text-base font-semibold uppercase text-foreground mt-2 leading-tight group-hover:text-accent transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-3 font-body">
                {p.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider mt-4 group-hover:gap-2 transition-all">
                Read article <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
