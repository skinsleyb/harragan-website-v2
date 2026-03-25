import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <>
    <Navbar />
    <PageHero
      title="Blog"
      subtitle="Guides and ideas for driveways, resin surfacing, and outdoor spaces across Essex."
      breadcrumbs={[
        { label: "Home", to: "/" },
        { label: "Blog" },
      ]}
    />
    <main className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/blog/${p.slug}`}
                className="group block h-full rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col">
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
                  <h2 className="font-display text-lg font-bold uppercase text-foreground mt-2 leading-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mt-3 flex-1 font-body">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider mt-4 group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <Footer />
  </>
);

export default Blog;
