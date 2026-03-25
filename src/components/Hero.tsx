import heroImg from "@/assets/Firefly.jpg";
import googleImg from "@/assets/googl.png";
import traderImg from "@/assets/trader.svg";

import { Star, ShieldCheck } from "lucide-react";

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
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="font-display max-w-[12ch] text-4xl font-bold uppercase leading-[0.92] text-white sm:text-5xl lg:max-w-[14ch] lg:text-6xl xl:text-7xl 2xl:text-[4.5rem]">
              Creating
              <br />
              Exceptional
              <br />
              Outdoor Living
              <br />
              Spaces
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/80 sm:mt-6 sm:text-base">
              Bespoke resin driveways and premium outdoor transformations,
              designed and installed with care across Essex and beyond.
            </p>
            <div className="mb-4 flex flex-wrap pt-4 items-center gap-x-4 gap-y-2 text-white/80">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] sm:text-xs">
                <ShieldCheck className="h-4 w-4 text-white/80" />
                <span>Resin Driveway Specialists</span>
              </div>
              <div className="hidden h-4 w-px bg-white/20 sm:block" />
              <div className="text-[11px] uppercase tracking-[0.18em] sm:text-xs">
                Chelmsford, Essex & Nationwide
              </div>
            </div>

            <div className="mt-7 sm:mt-8">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition hover:brightness-110 active:scale-95 sm:px-8 sm:py-3.5"
              >
                Get a Quote
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:mt-10 lg:max-w-2xl lg:grid-cols-4">
              {/* 30+ Years */}
              <div className="flex min-h-[80px] flex-col justify-end">
                <p className="text-3xl font-bold leading-none text-white sm:text-4xl">
                  30+
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
                  Years Experience
                </p>
              </div>

              {/* 1,500+ Jobs */}
              <div className="flex min-h-[80px] flex-col justify-end">
                <p className="text-3xl font-bold leading-none text-white sm:text-4xl">
                  1,500+
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
                  Jobs Completed
                </p>
              </div>

              {/* Google Reviews */}
              <div className="flex min-h-[80px] items-end">
                <img
                  src={googleImg}
                  alt="Google Reviews"
                  width={160}
                  height={96}
                  className="h-20 w-auto object-contain sm:h-20"
                />
              </div>

              {/* TrustATrader Reviews */}
              <div className="flex min-h-[80px] items-end gap-3 ms-3">
                <img
                  src={traderImg}
                  alt="TrustATrader"
                  width={48}
                  height={48}
                  className="h-20 w-auto object-contain sm:h-20"
                />

                <div className="flex flex-col justify-end">
                  <p className="text-3xl font-bold leading-none text-white sm:text-4xl">
                    300+
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
                    Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
