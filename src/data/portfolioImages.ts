export type Category =
  | "Block Paving"
  | "Resin"
  | "Slab Paving"
  | "Tarmac"
  | "Groundworks"
  | "Landscape"
  | "Pathway"
  | "Fencing";

export type PortfolioImage = {
  src: string;
  alt: string;
  category: Category;
};

export const CATEGORIES = [
  "All",
  "Block Paving",
  "Resin",
  "Slab Paving",
  "Tarmac",
  "Groundworks",
  "Landscape",
  "Pathway",
  "Fencing",
] as const;

const altPrefixes: Record<Category, string> = {
  "Block Paving": "Block paving driveway installed",
  "Resin": "Resin bound driveway installed",
  "Slab Paving": "Slab paving project completed",
  "Tarmac": "Tarmac driveway installed",
  "Groundworks": "Groundworks and drainage project",
  "Landscape": "Landscaping project completed",
  "Pathway": "Pathway installation completed",
  "Fencing": "Fencing installation completed",
};

function fromGlob(
  modules: Record<string, { default: string }>,
  category: Category
): PortfolioImage[] {
  return Object.values(modules).map((mod) => ({
    src: mod.default,
    alt: `${altPrefixes[category]} by Andy Harragan & Sons, Essex`,
    category,
  }));
}

const blockPavingGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Block Paving/*.{jpeg,jpg}",
  { eager: true }
);
const resinGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Resin/*.{jpeg,jpg}",
  { eager: true }
);
const slabPavingGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Slab Paving/*.{jpeg,jpg}",
  { eager: true }
);
const tarmacGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Tarmac/*.{jpeg,jpg}",
  { eager: true }
);
const groundworksGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Groundworks/*.{jpeg,jpg}",
  { eager: true }
);
const landscapeGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Landscape/*.{jpeg,jpg}",
  { eager: true }
);
const pathwayGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Pathway/*.jpg",
  { eager: true }
);
const fencingGlob = import.meta.glob<{ default: string }>(
  "../assets/portfolio-images/Fencing/*.{jpeg,jpg}",
  { eager: true }
);

export const portfolioImages: PortfolioImage[] = [
  ...fromGlob(blockPavingGlob, "Block Paving"),
  ...fromGlob(resinGlob, "Resin"),
  ...fromGlob(slabPavingGlob, "Slab Paving"),
  ...fromGlob(tarmacGlob, "Tarmac"),
  ...fromGlob(groundworksGlob, "Groundworks"),
  ...fromGlob(landscapeGlob, "Landscape"),
  ...fromGlob(pathwayGlob, "Pathway"),
  ...fromGlob(fencingGlob, "Fencing"),
];
