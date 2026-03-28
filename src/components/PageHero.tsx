import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 1,
    },
  },
};

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => (
  <section className="relative bg-primary pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
    {/* Premium Background Elements */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-30" />
      
      {/* Subtle fading grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 90%)'
        }}
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {breadcrumbs && (
          <motion.nav 
            variants={itemVariants}
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide mb-8 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-md shadow-sm"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30 mx-1" aria-hidden="true">/</span>}
                {b.to ? (
                  <Link
                    to={b.to}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white" aria-current="page">{b.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
        
        <motion.h1 
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-[0.95] tracking-tight mb-6"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p 
            variants={itemVariants}
            className="text-white/70 max-w-2xl text-lg md:text-xl leading-relaxed font-body font-light"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Animated Line Indicator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="h-1 w-24 bg-accent mt-12 origin-left rounded-full shadow-[0_0_15px_rgba(var(--accent),0.5)]"
        />
      </motion.div>
    </div>
  </section>
);

export default PageHero;
