import serviceResin from "@/assets/services/service-resin.jpg";
import serviceBlock from "@/assets/services/service-block.jpeg";
import serviceSandstone from "@/assets/services/service-sandstone.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  category?: string;
  excerpt: string;
  date: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "resin-driveway-essex",
    title: "5 Reasons to Choose a Resin Driveway for Your Essex Home",
    excerpt:
      "Discover why resin-bound driveways are becoming the most popular choice for homeowners across Chelmsford and Essex.",
    date: "2025-02-12",
    image: serviceResin,
    content: [
      "Resin-bound surfacing has grown rapidly across Essex because it combines durability with a sleek, modern finish that suits both traditional and contemporary homes. Unlike loose gravel, the stones are bound in UV-stable resin, so you get a stable surface that still looks natural.",
      "Drainage is another major advantage. A correctly installed resin system is permeable (SUDS-compliant when specified), which helps manage surface water and can simplify planning considerations compared to impermeable paving.",
      "Maintenance is straightforward: occasional sweeping and gentle washing keep the surface looking its best. There is no weeding through joints in the same way as some block paving layouts, and you avoid the potholing associated with poor-quality tarmac repairs.",
      "Design flexibility matters. From colour blends to decorative borders and transitions into paths or patios, resin can be tailored to your kerb appeal goals while remaining practical for daily vehicle use.",
      "Finally, professional installation is key. Sub-base preparation, edge restraint, and resin mix ratios must be right for long-term performance. Working with an experienced team ensures your driveway is built to last—not just to look good on day one.",
    ],
  },
  {
    slug: "driveway-makeover-kerb-appeal",
    title: "Get Customised Kerb Appeal with a Driveway Makeover",
    excerpt:
      "See how a new driveway can dramatically increase your property's value and first impressions.",
    date: "2025-01-28",
    image: serviceBlock,
    content: [
      "First impressions start at the boundary. A tired driveway with dips, stains, or failing edges can make an otherwise well-kept home look neglected. Replacing or resurfacing the approach instantly lifts the entire frontage.",
      "A makeover is also a chance to fix underlying issues. Poor drainage, weak sub-bases, and insufficient edging are common problems on older drives. Addressing them during renewal prevents costly patch repairs later.",
      "Material choice should match how you use the space. High-traffic family homes may prioritise robust construction and easy cleaning; rural properties might emphasise grip and rural aesthetics. The right specification balances budget, looks, and longevity.",
      "Detailing separates good projects from great ones. Consider lighting, planting beds, step heights, and how the driveway meets the garage threshold. These details make daily use smoother and safer.",
      "If you are planning to sell, a smart driveway signals maintenance and care to buyers. Even if you are staying put, you benefit every day from a surface that performs reliably through Essex weather.",
    ],
  },
  {
    slug: "driveway-design-durability",
    title: "Driveway Design Secrets: Achieve Beauty & Durability",
    excerpt:
      "Expert tips on choosing the right materials and design for a driveway that lasts a lifetime.",
    date: "2024-12-04",
    image: serviceSandstone,
    content: [
      "Durability starts below the surface. A stable, well-compacted sub-base and appropriate edging distribute loads and prevent rutting. Skipping preparation to save cost is the fastest way to shorten a driveway's life.",
      "Joint patterns, laying courses, and fall for drainage should be planned before materials arrive. Water needs a predictable path away from buildings; pooling on the surface often points to design or execution issues rather than the paving product itself.",
      "Mix textures thoughtfully. Contrasting bands, feature panels, or step treads in complementary materials can add character without compromising strength—provided transitions are detailed correctly.",
      "Choose finishes that match maintenance expectations. Some surfaces show tyre marks or organic staining more readily; others hide day-to-day wear. We can guide you based on shade, orientation, and usage.",
      "Invest in professional specification and installation. The best materials underperform without correct build-up. A cohesive design-and-build approach keeps beauty and durability aligned from the first sketch to the final sweep.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
