import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import ContactSection from "@/components/sections/ContactSection";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const categories = useMemo(() => {
    const allCategories = blogPosts
      .map((post) => post.category)
      .filter(Boolean) as string[];

    return ["All", ...Array.from(new Set(allCategories))];
  }, []);

  const filteredPosts = useMemo(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    return filtered.sort((a, b) => {
      const aDate = new Date(a.date).getTime();
      const bDate = new Date(b.date).getTime();

      return sortOrder === "Newest" ? bDate - aDate : aDate - bDate;
    });
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
    <>
      <Navbar />

      <PageHero
        title="Blog"
        subtitle="Guides and ideas for driveways, resin surfacing, and outdoor spaces across Essex."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <main className="bg-[#f6f5f5] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="h-fit rounded-2xl border border-black/10 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                Explore
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-black">
                Find Articles
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-black/65">
                Search through our latest guides, tips, and inspiration for
                driveways, paving, and landscaping projects.
              </p>

              <div className="mt-6">
                <label
                  htmlFor="blog-search"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-black/50"
                >
                  Search
                </label>
                <div className="relative">
                  <Search
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  />
                  <input
                    id="blog-search"
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f8] pl-11 pr-4 text-sm text-black outline-none transition focus:border-black/25"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="blog-category"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-black/50"
                >
                  Category
                </label>
                <select
                  id="blog-category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f8] px-4 text-sm text-black outline-none transition focus:border-black/25"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="blog-sort"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-black/50"
                >
                  Sort By
                </label>
                <select
                  id="blog-sort"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="h-12 w-full rounded-xl border border-black/10 bg-[#f8f8f8] px-4 text-sm text-black outline-none transition focus:border-black/25"
                >
                  <option value="Newest">Newest First</option>
                  <option value="Oldest">Oldest First</option>
                </select>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/50">
                  Results
                </p>
                <p className="mt-2 text-sm text-black/65">
                  Showing{" "}
                  <span className="font-bold text-black">
                    {filteredPosts.length}
                  </span>{" "}
                  article{filteredPosts.length !== 1 ? "s" : ""}.
                </p>
              </div>
            </aside>

            <section>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Articles
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
                  Latest Insights & Advice
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/65">
                  Browse practical content covering resin driveways, block
                  paving, design ideas, and maintenance advice for outdoor
                  spaces.
                </p>
              </div>

              {filteredPosts.length > 0 ? (
                <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {filteredPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/blog/${p.slug}`}
                        className="group block h-full overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={p.image}
                            alt={p.title}
                            loading="lazy"
                            width={800}
                            height={500}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex h-full flex-col p-6">
                          <div className="flex items-center gap-3">
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

                            {p.category && (
                              <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black/55">
                                {p.category}
                              </span>
                            )}
                          </div>

                          <h2 className="mt-4 text-lg font-black uppercase leading-tight text-black transition-colors group-hover:text-black/70">
                            {p.title}
                          </h2>

                          <p className="mt-3 flex-1 text-sm leading-relaxed text-black/65">
                            {p.excerpt}
                          </p>

                          <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-black transition-opacity group-hover:opacity-70">
                            Read More
                            <ArrowRight size={14} />
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-black/10 bg-white p-10 text-center shadow-sm">
                  <h3 className="text-xl font-black uppercase text-black">
                    No articles found
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-black/65">
                    Try adjusting your search or category filter to find more
                    blog posts.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Blog;
