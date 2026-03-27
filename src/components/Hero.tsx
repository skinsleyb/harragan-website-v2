import heroImg from "@/assets/Firefly.jpg";
import googleImg from "@/assets/googl.png";
import traderImg from "@/assets/trader.svg";

import { ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Hero = () => (
  <section className="relative isolate overflow-hidden min-h-[100svh] sm:min-h-[680px] lg:min-h-[760px] flex items-start sm:items-center">
    <img
      src={heroImg}
      alt="Professional resin driveway installation by Andy Harragan and Sons, Chelmsford Essex"
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

    <div className="relative z-10 w-full">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[600px] sm:min-h-[680px] lg:min-h-[760px] items-center py-20 sm:py-24 lg:py-28">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl"
          >
            <motion.h1
              variants={itemVariants}
              className="font-display max-w-[12ch] text-[2.5rem] sm:text-5xl font-bold uppercase leading-[0.92] text-white lg:max-w-[14ch] lg:text-6xl xl:text-7xl 2xl:text-[4.5rem] tracking-tight"
            >
              Creating
              <br />
              Exceptional
              <br />
              Outdoor Living
              <br />
              Spaces
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-md text-[15px] sm:text-base leading-relaxed text-white/85 sm:mt-6 font-medium"
            >
              Bespoke resin driveways and premium outdoor transformations,
              designed and installed with care across Essex and beyond.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mb-4 flex flex-wrap pt-4 items-center gap-x-4 gap-y-2 text-white/80"
            >
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] sm:text-xs font-semibold">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Resin Driveway Specialists</span>
              </div>
              <div className="hidden h-4 w-[2px] bg-accent/30 sm:block" />
              <div className="text-[11px] uppercase tracking-[0.18em] sm:text-xs font-semibold">
                Chelmsford, Essex & Nationwide
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-xl transition-all hover:bg-accent/90 focus:ring-4 focus:ring-accent/50 active:scale-95 group"
              >
                Get a Free Quote
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-12 lg:max-w-2xl lg:grid-cols-4 border-t border-white/10 pt-8"
            >
              {/* 30+ Years */}
              <div className="flex flex-col justify-end">
                <p className="text-3xl font-display font-bold leading-none text-white sm:text-4xl text-shadow-sm">
                  30+
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Years Experience
                </p>
              </div>

              {/* 1,500+ Jobs */}
              <div className="flex flex-col justify-end">
                <p className="text-3xl font-display font-bold leading-none text-white sm:text-4xl text-shadow-sm">
                  1,500+
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Jobs Completed
                </p>
              </div>

              {/* Google Reviews */}
              <div className="flex items-end">
                <img
                  src={googleImg}
                  alt="Google Reviews"
                  width={160}
                  height={96}
                  className="h-16 lg:h-20 w-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* TrustATrader Reviews */}
              <div className="flex items-end gap-3 lg:ms-3">
                <img
                  src={traderImg}
                  alt="TrustATrader"
                  width={48}
                  height={48}
                  className="h-16 lg:h-20 w-auto object-contain drop-shadow-lg"
                />

                <div className="flex flex-col justify-end pb-1">
                  <p className="text-3xl font-display font-bold leading-none text-white sm:text-4xl text-shadow-sm">
                    300+
                  </p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                    Reviews
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
