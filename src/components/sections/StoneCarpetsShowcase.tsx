import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Using placeholder images from the existing assets
import img1 from "@/assets/dorset-resin.jpg";
import img2 from "@/assets/resin-nice-2.jpg";
import img3 from "@/assets/nice-drive.jpg";
import img4 from "@/assets/driveway-port-1.jpg";
import img5 from "@/assets/port-drive-2.webp";
import img6 from "@/assets/port-drive-3.webp";
import img7 from "@/assets/port-drive-4.webp";
import img8 from "@/assets/port-drive-5.webp";
import img9 from "@/assets/perm-driveway.webp";

const applications = [
  { name: "Commercial", image: img1 },
  { name: "Gyms & Spas", image: img2 },
  { name: "Bathrooms", image: img3 },
  { name: "Living Rooms", image: img4 },
  { name: "Conservatories", image: img5 },
  { name: "Showrooms", image: img6 },
  { name: "Game Rooms", image: img7 },
  { name: "Kitchens", image: img8 },
  { name: "Porches", image: img9 },
];

export const StoneCarpetsShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-muted overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.22em] text-xs mb-3"
          >
            Endless Possibilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold uppercase text-foreground leading-[1.1]"
          >
            Resin Bound Knows No Bounds
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Stone Carpets provide a seamless, hard-wearing, and UV-resistant
            indoor surface that is perfectly suited for a wide range of
            residential and commercial applications. Walkable within 45 minutes
            of application.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={app.name}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col group transition-all hover:shadow-xl hover:-translate-y-1 hover:border-accent/40 aspect-[4/3] relative"
            >
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-display font-bold text-2xl uppercase tracking-wide mb-2">
                  {app.name}
                </h3>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-accent drop-shadow-md">
                  <CheckCircle2 size={14} /> Seamless Surface
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
