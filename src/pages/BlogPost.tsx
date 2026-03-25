import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <>
        <Navbar />
        <PageHero
          title="Article not found"
          subtitle="This post may have been moved or removed."
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Blog", to: "/blog" },
            { label: "Not found" },
          ]}
        />
        <main className="bg-background py-16">
          <div className="container mx-auto px-4 text-center">
            <Link
              to="/blog"
              className="text-accent font-bold uppercase text-xs tracking-wider hover:underline"
            >
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: post.title },
        ]}
      />
      <article className="bg-background pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="-mt-8 md:-mt-10 mb-10 rounded-xl overflow-hidden border border-border/60 shadow-lg">
            <img
              src={post.image}
              alt=""
              width={1200}
              height={675}
              className="w-full aspect-video object-cover"
            />
          </div>
          <time
            dateTime={post.date}
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <div className="mt-8 space-y-6 text-foreground/90 font-body text-base leading-relaxed">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              to="/blog"
              className="text-accent font-bold uppercase text-xs tracking-wider hover:underline"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default BlogPost;
