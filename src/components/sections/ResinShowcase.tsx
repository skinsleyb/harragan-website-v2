import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

import agg1 from "../../assets/resin-pallete/aggregates/01_silver-1-3mm-dried-w04.jpg";
import agg2 from "../../assets/resin-pallete/aggregates/02_yellow-10mm-dried-w04_500x375.jpg";
import agg3 from "../../assets/resin-pallete/aggregates/03_yellow-1-4mm-dried-w04.jpg";
import agg4 from "../../assets/resin-pallete/aggregates/04_trugrip-68-1-3mm-dried-w04_500x375.jpg";
import agg5 from "../../assets/resin-pallete/aggregates/05_silver-10mm-dried-w04.jpg";
import agg6 from "../../assets/resin-pallete/aggregates/06_red-1-3mm-dried-w04.jpg";
import agg7 from "../../assets/resin-pallete/aggregates/07_green-1-3mm-dried-w04.jpg";
import agg8 from "../../assets/resin-pallete/aggregates/08_golden-gravel-10mm-w05.jpg";
import agg9 from "../../assets/resin-pallete/aggregates/09_daltex-yellow-2-5mm-dried-w04.jpg";
import agg10 from "../../assets/resin-pallete/aggregates/10_daltex-silver-2-5mm-dried-w04.jpg";
import agg11 from "../../assets/resin-pallete/aggregates/11_daltex-red-2-5mm-dried-w04.jpg";
import agg12 from "../../assets/resin-pallete/aggregates/12_daltex-yellow-2-5mm-dried-w04_(2).jpg";
import agg13 from "../../assets/resin-pallete/aggregates/13_daltex-green-2-5mm-dried-w04.jpg";
import agg14 from "../../assets/resin-pallete/aggregates/14_daltex-golden-quartz-2-5mm-dried-w04.jpg";
import agg15 from "../../assets/resin-pallete/aggregates/15_daltex-white-flint-2-5mm-dried-w04.jpg";
import agg16 from "../../assets/resin-pallete/aggregates/16_daltex-golden-pea-2-5mm-dried-w04.jpg";
import agg17 from "../../assets/resin-pallete/aggregates/17_daltex-golden-pea-1-3mm-dried-w04.jpg";
import agg18 from "../../assets/resin-pallete/aggregates/18_daltex-black-2-5mm-dried-w04.jpg";
import agg19 from "../../assets/resin-pallete/aggregates/19_daltex-beige-2-5mm-dried-w04.jpg";
import agg20 from "../../assets/resin-pallete/aggregates/20_daltex-autumn-quartz-1-3mm-dried-w04.jpg";
import agg21 from "../../assets/resin-pallete/aggregates/21_brittany-bronze-2-5mm-dried-w04.jpg";
import agg22 from "../../assets/resin-pallete/aggregates/22_brittany-bronze-10mm-dried-w04.jpg";
import agg23 from "../../assets/resin-pallete/aggregates/23_brittany-bronze-1-3mm-dried-w04.jpg";

import mix1 from "../../assets/resin-pallete/mixes/01_Transcendence.jpg";
import mix2 from "../../assets/resin-pallete/mixes/02_Titanium.jpg";
import mix3 from "../../assets/resin-pallete/mixes/03_Sweet_Pea_10mm.jpg";
import mix4 from "../../assets/resin-pallete/mixes/04_Spring_Haze.jpg";
import mix5 from "../../assets/resin-pallete/mixes/05_Sunset_Garden.jpg";
import mix6 from "../../assets/resin-pallete/mixes/06_Starlight.jpg";
import mix7 from "../../assets/resin-pallete/mixes/07_Summer_Beach.jpg";
import mix8 from "../../assets/resin-pallete/mixes/08_Slate_Grey.jpg";
import mix9 from "../../assets/resin-pallete/mixes/09_Rosso_Luna.jpg";
import mix10 from "../../assets/resin-pallete/mixes/10_Porto_Fino.jpg";
import mix11 from "../../assets/resin-pallete/mixes/11_Saharah.jpg";
import mix12 from "../../assets/resin-pallete/mixes/12_Purity.jpg";
import mix13 from "../../assets/resin-pallete/mixes/13_Oyster_Pearl.jpg";
import mix14 from "../../assets/resin-pallete/mixes/14_Merit.jpg";
import mix15 from "../../assets/resin-pallete/mixes/15_Olympus.jpg";
import mix16 from "../../assets/resin-pallete/mixes/16_Meadow.jpg";
import mix17 from "../../assets/resin-pallete/mixes/17_Midnight_Moon.jpg";
import mix18 from "../../assets/resin-pallete/mixes/18_Marble_Crema.jpg";
import mix19 from "../../assets/resin-pallete/mixes/19_Farm_House_Gold.jpg";
import mix20 from "../../assets/resin-pallete/mixes/20_Cappacino.jpg";
import mix21 from "../../assets/resin-pallete/mixes/21_Evening_Rose.jpg";
import mix22 from "../../assets/resin-pallete/mixes/22_Jet_Black.jpg";
import mix23 from "../../assets/resin-pallete/mixes/23_Ireland_Green.jpg";

import rub1 from "../../assets/resin-pallete/rubber/01_Yellow_Fleck.jpg";
import rub2 from "../../assets/resin-pallete/rubber/02_Red.jpg";
import rub3 from "../../assets/resin-pallete/rubber/03_Orange.jpg";
import rub4 from "../../assets/resin-pallete/rubber/04_Purple.jpg";
import rub5 from "../../assets/resin-pallete/rubber/05_Light_Blue.jpg";
import rub6 from "../../assets/resin-pallete/rubber/06_Light_Green.jpg";
import rub7 from "../../assets/resin-pallete/rubber/07_Light_Grey.jpg";
import rub8 from "../../assets/resin-pallete/rubber/08_Grey_Fleck.jpg";
import rub9 from "../../assets/resin-pallete/rubber/09_Dark_Blue.jpg";
import rub10 from "../../assets/resin-pallete/rubber/10_Earth_Yellow.jpg";
import rub11 from "../../assets/resin-pallete/rubber/11_Dark_Green.jpg";

const aggregates = [
  { name: "Silver 1-3mm", image: agg1 },
  { name: "Yellow 10mm", image: agg2 },
  { name: "Yellow 1-4mm", image: agg3 },
  { name: "Trugrip 1-3mm", image: agg4 },
  { name: "Silver 10mm", image: agg5 },
  { name: "Red 1-3mm", image: agg6 },
  { name: "Green 1-3mm", image: agg7 },
  { name: "Golden Gravel 10mm", image: agg8 },
  { name: "Daltex 2-5mm", image: agg9 },
  { name: "Daltex Silver 2-5mm", image: agg10 },
  { name: "Daltex Red 2-5mm", image: agg11 },
  { name: "Daltex Yellow 2-5mm", image: agg12 },
  { name: "Daltex Green 2-5mm", image: agg13 },
  { name: "Daltex Golden Quartz 2-5mm", image: agg14 },
  { name: "Daltex White Flint 2-5mm", image: agg15 },
  { name: "Daltex Golden Pea 2-5mm", image: agg16 },
  { name: "Daltex Golden Pea 1-3mm", image: agg17 },
  { name: "Daltex Black 2-5mm", image: agg18 },
  { name: "Daltex Beige 2-5mm", image: agg19 },
  { name: "Daltex Autumn Quartz 1-3mm", image: agg20 },
  { name: "Brittany Bronze 2-5mm", image: agg21 },
  { name: "Brittany Bronze 10mm", image: agg22 },
  { name: "Brittany Bronze 1-3mm", image: agg23 },
];

const mixes = [
  { name: "Transcendence", image: mix1 },
  { name: "Titanium", image: mix2 },
  { name: "Sweat Pea", image: mix3 },
  { name: "Spring Haze", image: mix4 },
  { name: "Sunset Garden", image: mix5 },
  { name: "Starlight", image: mix6 },
  { name: "Summer Beach", image: mix7 },
  { name: "Slate Grey", image: mix8 },
  { name: "Rosso Luna", image: mix9 },
  { name: "Porto Fino", image: mix10 },
  { name: "Saharah", image: mix11 },
  { name: "Purity", image: mix12 },
  { name: "Oyster Pearl", image: mix13 },
  { name: "Merit", image: mix14 },
  { name: "Olympus", image: mix15 },
  { name: "Meadow", image: mix16 },
  { name: "Midnight Moon", image: mix17 },
  { name: "Marble Crema", image: mix18 },
  { name: "Farm House Gold", image: mix19 },
  { name: "Cappuccino", image: mix20 },
  { name: "Evening Rose", image: mix21 },
  { name: "Jet Black", image: mix22 },
  { name: "Ireland Green", image: mix23 },
];

const rubber = [
  { name: "Yellow Fleck", image: rub1 },
  { name: "Red", image: rub2 },
  { name: "Orange", image: rub3 },
  { name: "Purple", image: rub4 },
  { name: "Light Blue", image: rub5 },
  { name: "Light Green", image: rub6 },
  { name: "Light Grey", image: rub7 },
  { name: "Grey Fleck", image: rub8 },
  { name: "Dark Blue", image: rub9 },
  { name: "Earth Yellow", image: rub10 },
  { name: "Dark Green", image: rub11 },
];

export const ResinShowcase = () => {
  const [activeTab, setActiveTab] = useState<"aggregates" | "mixes" | "rubber">("aggregates");
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: false,
    containScroll: "trimSnaps"
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect, activeTab]);

  const data = activeTab === "aggregates" ? aggregates : activeTab === "mixes" ? mixes : rubber;
  
  const getSubtext = () => {
    switch(activeTab) {
      case "aggregates": return "Premium Base Aggregate";
      case "mixes": return "High-End Resin Blend";
      case "rubber": return "Impact Absorbing Base";
      default: return "";
    }
  };

  return (
    <section className="py-20 md:py-28 bg-surface-muted overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3"
          >
            The Resin Mill
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold uppercase text-foreground leading-[1.1]"
          >
            Premium Resin Mixes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-xl"
          >
            We exclusively use industry-leading materials from The Resin Mill. Discover our premium stone blends for driveways and impact-absorbing rubber mixes for safe play areas.
          </motion.p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex bg-surface-soft p-1.5 rounded-xl border border-border inline-flex mb-10 shadow-inner overflow-x-auto max-w-full custom-scrollbar">
          {(["aggregates", "mixes", "rubber"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); emblaApi?.scrollTo(0); }}
              className={`relative whitespace-nowrap px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg transition-colors z-10 ${
                activeTab === tab ? "text-primary-foreground" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="tabBg"
                  className="absolute inset-0 bg-primary rounded-lg -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {tab === "aggregates" ? "Aggregates" : tab === "mixes" ? "Resin Mixes" : "Rubber Crumb"}
            </button>
          ))}
        </div>

        {/* Embla Slider */}
        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6 -ml-4 pl-4 py-4">
              {data.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name + idx} 
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pb-4"
                >
                  <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden h-[300px] flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 relative">
                    <div className="absolute inset-0 w-full h-full bg-surface-muted flex items-center justify-center">
                       <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                       />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                    
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                      <span className="text-white font-display font-bold text-xl uppercase tracking-wide mb-2 drop-shadow-md">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-accent/90">
                        <CheckCircle2 size={14} /> 
                        {getSubtext()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-end gap-3 mt-4 sm:mt-8 pr-4">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface-soft hover:border-accent/40 disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm disabled:shadow-none"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-surface-soft hover:border-accent/40 disabled:opacity-30 disabled:hover:bg-transparent transition-all shadow-sm disabled:shadow-none"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

