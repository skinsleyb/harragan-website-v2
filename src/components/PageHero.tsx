import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => (
  <section className="bg-primary pt-20 pb-14 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
    <div className="container mx-auto px-4">
      {breadcrumbs && (
        <nav className="flex items-center gap-2 text-xs text-primary-foreground/50 mb-4 font-body">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {b.to ? (
                <Link
                  to={b.to}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {b.label}
                </Link>
              ) : (
                <span className="text-primary-foreground/80">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-primary-foreground leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-primary-foreground/70 max-w-2xl text-sm md:text-base leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
