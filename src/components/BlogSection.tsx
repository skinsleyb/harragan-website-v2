import { ArrowRight } from "lucide-react";
import serviceResin from "@/assets/service-resin.jpg";
import serviceBlock from "@/assets/service-block.jpg";
import serviceSandstone from "@/assets/service-sandstone.jpg";

const posts = [
  {
    img: serviceResin,
    title: "5 Reasons to Choose a Resin Driveway for Your Essex Home",
    desc: "Discover why resin-bound driveways are becoming the most popular choice for homeowners across Chelmsford and Essex.",
  },
  {
    img: serviceBlock,
    title: "Get Customised Kerb Appeal with a Driveway Makeover",
    desc: "See how a new driveway can dramatically increase your property's value and first impressions.",
  },
  {
    img: serviceSandstone,
    title: "Driveway Design Secrets: Achieve Beauty & Durability",
    desc: "Expert tips on choosing the right materials and design for a driveway that lasts a lifetime.",
  },
];

const BlogSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-center text-foreground mb-12">
        Driveway & Landscaping Chronicles
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <div key={p.title} className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img src={p.img} alt={p.title} loading="lazy" width={640} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="font-display text-base font-semibold uppercase text-foreground mt-4 leading-tight">{p.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
            <span className="inline-flex items-center gap-1 text-accent text-xs font-bold uppercase tracking-wider mt-3 group-hover:gap-2 transition-all">
              Learn More <ArrowRight size={12} />
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
