# Portfolio Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/portfolio` page with category-filtered image grid and Framer Motion lightbox, wired into the navbar and homepage.

**Architecture:** Static image data loaded via `import.meta.glob` in a single data file. Portfolio page composes a filtered grid with tab controls. Lightbox is a self-contained modal component using Framer Motion. No new dependencies required.

**Tech Stack:** React 18, TypeScript, Framer Motion (already installed), Tailwind CSS, React Router v6, Vite 5 `import.meta.glob`, Vitest + Testing Library.

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `src/data/portfolioImages.ts` | All image imports, alt text, category data |
| Create | `src/components/PortfolioLightbox.tsx` | Fullscreen modal with keyboard nav |
| Create | `src/pages/Portfolio.tsx` | Page shell, category tabs, image grid |
| Modify | `src/App.tsx` | Add `/portfolio` route |
| Modify | `src/components/Navbar.tsx` | Add "Portfolio" nav link (desktop + mobile) |
| Modify | `src/components/RecentProjects.tsx` | Add "View Full Portfolio" CTA |
| Create | `src/test/portfolioImages.test.ts` | Data shape tests |
| Create | `src/test/PortfolioLightbox.test.tsx` | Lightbox behaviour tests |
| Create | `src/test/Portfolio.test.tsx` | Page render + filter tests |

---

## Task 1: Portfolio image data file

**Files:**
- Create: `src/data/portfolioImages.ts`
- Create: `src/test/portfolioImages.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/test/portfolioImages.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { portfolioImages, CATEGORIES } from "@/data/portfolioImages";

describe("portfolioImages", () => {
  it("exports a non-empty array", () => {
    expect(Array.isArray(portfolioImages)).toBe(true);
    expect(portfolioImages.length).toBeGreaterThan(0);
  });

  it("every image has src, alt, and category fields", () => {
    for (const img of portfolioImages) {
      expect(typeof img.src).toBe("string");
      expect(img.src.length).toBeGreaterThan(0);
      expect(typeof img.alt).toBe("string");
      expect(img.alt.length).toBeGreaterThan(0);
      expect(typeof img.category).toBe("string");
    }
  });

  it("CATEGORIES starts with All and contains all 8 service types", () => {
    expect(CATEGORIES[0]).toBe("All");
    expect(CATEGORIES).toContain("Block Paving");
    expect(CATEGORIES).toContain("Resin");
    expect(CATEGORIES).toContain("Slab Paving");
    expect(CATEGORIES).toContain("Tarmac");
    expect(CATEGORIES).toContain("Groundworks");
    expect(CATEGORIES).toContain("Landscape");
    expect(CATEGORIES).toContain("Pathway");
    expect(CATEGORIES).toContain("Fencing");
  });

  it("all image categories are valid CATEGORIES values", () => {
    const validCategories = new Set(CATEGORIES.filter((c) => c !== "All"));
    for (const img of portfolioImages) {
      expect(validCategories.has(img.category as any)).toBe(true);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- portfolioImages
```

Expected: FAIL — cannot find module `@/data/portfolioImages`

- [ ] **Step 3: Create `src/data/portfolioImages.ts`**

```ts
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

// Paths are relative to this file (src/data/). Vite resolves these at build time.
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
// Pathway: .jpg only — excludes the .webp duplicate, logos, and .docx files
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
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- portfolioImages
```

Expected: PASS (4 passing tests)

- [ ] **Step 5: Commit**

```bash
git add src/data/portfolioImages.ts src/test/portfolioImages.test.ts
git commit -m "feat: add portfolio image data with glob imports and SEO alt text"
```

---

## Task 2: PortfolioLightbox component

**Files:**
- Create: `src/components/PortfolioLightbox.tsx`
- Create: `src/test/PortfolioLightbox.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/test/PortfolioLightbox.test.tsx`:

```tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import type { PortfolioImage } from "@/data/portfolioImages";

const mockImages: PortfolioImage[] = [
  { src: "/img1.jpg", alt: "Block paving driveway installed by Andy Harragan & Sons, Essex", category: "Block Paving" },
  { src: "/img2.jpg", alt: "Resin bound driveway installed by Andy Harragan & Sons, Essex", category: "Resin" },
  { src: "/img3.jpg", alt: "Tarmac driveway installed by Andy Harragan & Sons, Essex", category: "Tarmac" },
];

describe("PortfolioLightbox", () => {
  it("renders the image at the initial index", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={1} onClose={onClose} />
    );
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
  });

  it("navigates to next image when right arrow button is clicked", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Next image"));
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
  });

  it("navigates to previous image when left arrow button is clicked", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={1} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Previous image"));
    expect(screen.getByAltText(mockImages[0].alt)).toBeInTheDocument();
  });

  it("wraps to last image when navigating back from index 0", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Previous image"));
    expect(screen.getByAltText(mockImages[2].alt)).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.click(screen.getByLabelText("Close lightbox"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when Escape is pressed", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("navigates with keyboard arrow keys", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(screen.getByAltText(mockImages[0].alt)).toBeInTheDocument();
  });

  it("displays the alt text as a caption", () => {
    const onClose = vi.fn();
    render(
      <PortfolioLightbox images={mockImages} initialIndex={0} onClose={onClose} />
    );
    expect(screen.getByText(mockImages[0].alt)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- PortfolioLightbox
```

Expected: FAIL — cannot find module `@/components/PortfolioLightbox`

- [ ] **Step 3: Create `src/components/PortfolioLightbox.tsx`**

```tsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { PortfolioImage } from "@/data/portfolioImages";

type Props = {
  images: PortfolioImage[];
  initialIndex: number;
  onClose: () => void;
};

const PortfolioLightbox = ({ images, initialIndex, onClose }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next, onClose]);

  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        <div
          className="flex flex-col items-center px-16 max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] object-contain rounded-lg"
          />
          <p className="mt-3 text-sm text-white/70 text-center">{image.alt}</p>
        </div>

        {images.length > 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioLightbox;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- PortfolioLightbox
```

Expected: PASS (8 passing tests)

- [ ] **Step 5: Commit**

```bash
git add src/components/PortfolioLightbox.tsx src/test/PortfolioLightbox.test.tsx
git commit -m "feat: add PortfolioLightbox component with keyboard navigation"
```

---

## Task 3: Portfolio page

**Files:**
- Create: `src/pages/Portfolio.tsx`
- Create: `src/test/Portfolio.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/test/Portfolio.test.tsx`:

```tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";

// Mock the heavy data file — tests shouldn't depend on real image files
vi.mock("@/data/portfolioImages", () => ({
  CATEGORIES: ["All", "Resin", "Tarmac"],
  portfolioImages: [
    { src: "/r1.jpg", alt: "Resin bound driveway installed by Andy Harragan & Sons, Essex", category: "Resin" },
    { src: "/r2.jpg", alt: "Resin bound driveway installed by Andy Harragan & Sons, Essex", category: "Resin" },
    { src: "/t1.jpg", alt: "Tarmac driveway installed by Andy Harragan & Sons, Essex", category: "Tarmac" },
  ],
}));

// Framer Motion doesn't need real animations in tests
vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
      h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    },
    AnimatePresence: ({ children }: any) => <>{children}</>,
  };
});

const renderPortfolio = () =>
  render(
    <MemoryRouter>
      <Portfolio />
    </MemoryRouter>
  );

describe("Portfolio page", () => {
  it("renders the page hero title", () => {
    renderPortfolio();
    expect(screen.getByText("Our Portfolio")).toBeInTheDocument();
  });

  it("renders all category tabs including All", () => {
    renderPortfolio();
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Resin" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tarmac" })).toBeInTheDocument();
  });

  it("shows all images when All tab is active (default)", () => {
    renderPortfolio();
    const images = screen.getAllByRole("img", { hidden: true }).filter(
      (el) => el.getAttribute("alt")?.includes("Andy Harragan")
    );
    expect(images).toHaveLength(3);
  });

  it("filters to only Resin images when Resin tab is clicked", () => {
    renderPortfolio();
    fireEvent.click(screen.getByRole("button", { name: "Resin" }));
    const images = screen.getAllByRole("img", { hidden: true }).filter(
      (el) => el.getAttribute("alt")?.includes("Andy Harragan")
    );
    expect(images).toHaveLength(2);
    images.forEach((img) =>
      expect(img.getAttribute("alt")).toContain("Resin")
    );
  });

  it("filters to only Tarmac images when Tarmac tab is clicked", () => {
    renderPortfolio();
    fireEvent.click(screen.getByRole("button", { name: "Tarmac" }));
    const images = screen.getAllByRole("img", { hidden: true }).filter(
      (el) => el.getAttribute("alt")?.includes("Andy Harragan")
    );
    expect(images).toHaveLength(1);
  });

  it("opens lightbox when an image is clicked", () => {
    renderPortfolio();
    const imageButtons = screen.getAllByRole("button").filter(
      (btn) => btn.querySelector("img")
    );
    fireEvent.click(imageButtons[0]);
    expect(screen.getByLabelText("Close lightbox")).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npm test -- Portfolio.test
```

Expected: FAIL — cannot find module `@/pages/Portfolio`

- [ ] **Step 3: Create `src/pages/Portfolio.tsx`**

```tsx
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import PortfolioLightbox from "@/components/PortfolioLightbox";
import { portfolioImages, CATEGORIES } from "@/data/portfolioImages";
import type { PortfolioImage } from "@/data/portfolioImages";

type ActiveCategory = typeof CATEGORIES[number];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Portfolio | Andy Harragan & Sons LTD";
    return () => {
      document.title = "Andy Harragan & Sons LTD";
    };
  }, []);

  const filtered: PortfolioImage[] =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />

      <PageHero
        title="Our Portfolio"
        subtitle="Browse our completed projects across Essex — from resin driveways to block paving, landscaping, and more."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
      />

      <main className="bg-[#f6f5f5] py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap flex-shrink-0 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-white text-foreground border border-border hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <button
                key={`${img.category}-${img.src}`}
                onClick={() => setLightboxIndex(i)}
                className="aspect-video w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
      </main>

      {lightboxIndex !== null && (
        <PortfolioLightbox
          images={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <ContactSection />
      <Footer />
    </>
  );
};

export default Portfolio;
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test -- Portfolio.test
```

Expected: PASS (6 passing tests)

- [ ] **Step 5: Commit**

```bash
git add src/pages/Portfolio.tsx src/test/Portfolio.test.tsx
git commit -m "feat: add Portfolio page with category tabs and lightbox"
```

---

## Task 4: Wire routing in App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Add the import and route**

Open `src/App.tsx`. Add the import after the existing page imports (after line 16, before the `const queryClient` line):

```tsx
import Portfolio from "./pages/Portfolio.tsx";
```

Add the route inside `<Routes>`, after the existing blog routes and before the catch-all `*` route (before line 39):

```tsx
<Route path="/portfolio" element={<Portfolio />} />
```

The updated routes block should look like:

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/services/resin-work" element={<ResinWork />} />
  <Route path="/services/block-paving" element={<BlockPaving />} />
  <Route path="/services/driveways" element={<Driveways />} />
  <Route path="/services/tarmac-shingle" element={<TarmacShingle />} />
  <Route path="/services/stone-carpets" element={<StoneCarpets />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:slug" element={<BlogPost />} />
  <Route path="/portfolio" element={<Portfolio />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

- [ ] **Step 2: Verify the dev server compiles without errors**

```bash
npm run build:dev 2>&1 | tail -5
```

Expected: build completes with no TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add /portfolio route to App.tsx"
```

---

## Task 5: Add Portfolio link to Navbar

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add Portfolio link in the desktop nav**

In `src/components/Navbar.tsx`, find the desktop nav links section (the `hidden lg:flex` div around line 65). Add a Portfolio link between the Blog link and the Contact link. 

Find this block (around lines 111–123):

```tsx
<Link
  to="/blog"
  className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
>
  Blog
</Link>

<Link
  to="/contact"
  className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
>
  Contact
</Link>
```

Replace with:

```tsx
<Link
  to="/blog"
  className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
>
  Blog
</Link>

<Link
  to="/portfolio"
  className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
>
  Portfolio
</Link>

<Link
  to="/contact"
  className="text-primary-foreground/90 hover:text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-colors"
>
  Contact
</Link>
```

- [ ] **Step 2: Add Portfolio link in the mobile nav**

In the mobile nav section (the `lg:hidden` AnimatePresence block), find the Blog and Contact mobile links (around lines 216–230):

```tsx
<Link
  to="/blog"
  onClick={() => setMobileOpen(false)}
  className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
>
  Blog
</Link>

<Link
  to="/contact"
  onClick={() => setMobileOpen(false)}
  className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
>
  Contact
</Link>
```

Replace with:

```tsx
<Link
  to="/blog"
  onClick={() => setMobileOpen(false)}
  className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
>
  Blog
</Link>

<Link
  to="/portfolio"
  onClick={() => setMobileOpen(false)}
  className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
>
  Portfolio
</Link>

<Link
  to="/contact"
  onClick={() => setMobileOpen(false)}
  className="block py-3 text-primary-foreground/90 hover:text-accent font-semibold uppercase tracking-wide text-[15px] transition-colors"
>
  Contact
</Link>
```

- [ ] **Step 3: Verify build**

```bash
npm run build:dev 2>&1 | tail -5
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add Portfolio link to navbar (desktop and mobile)"
```

---

## Task 6: Add "View Full Portfolio" CTA to RecentProjects

**Files:**
- Modify: `src/components/RecentProjects.tsx`

- [ ] **Step 1: Add the Link import and CTA button**

Open `src/components/RecentProjects.tsx`. Add the `Link` import at the top:

```tsx
import { Link } from "react-router-dom";
```

Find the closing `</div>` of the projects grid (the grid that maps over `projects`, after line 54). Add the CTA immediately after the grid div, before the outer `</div>` of the container:

The updated file should look like this (full replacement):

```tsx
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Block Paving" },
  { img: project2, title: "Resin Driveway" },
  { img: project3, title: "Natural Stone" },
  { img: project4, title: "Porcelain Patio" },
];

const RecentProjects = () => (
  <section id="projects" className="bg-[#f6f5f5] py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
          Projects
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-center text-black mt-3">
          What We're Working On
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/65">
          A glimpse at some of the recent driveways, patios, and landscaping
          projects completed by our team.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-black/70">
                {p.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3 rounded-md text-xs uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
        >
          View Full Portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default RecentProjects;
```

- [ ] **Step 2: Run all tests to confirm nothing is broken**

```bash
npm test
```

Expected: All tests pass

- [ ] **Step 3: Verify full build**

```bash
npm run build:dev 2>&1 | tail -10
```

Expected: Build completes without errors

- [ ] **Step 4: Commit**

```bash
git add src/components/RecentProjects.tsx
git commit -m "feat: add View Full Portfolio CTA to RecentProjects section"
```

---

## Self-Review Checklist

- [x] **Spec § Data & Image Imports** → Task 1 implements `portfolioImages.ts` with `import.meta.glob`, `CATEGORIES`, and `PortfolioImage` type
- [x] **Spec § Portfolio Page Layout** → Task 3 implements `Portfolio.tsx` with PageHero, tabs, grid
- [x] **Spec § Category Tabs** → Task 3: tab row with `overflow-x-auto`, accent active state, "All" default
- [x] **Spec § Image Grid** → Task 3: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`, `aspect-video`, `object-cover`, hover scale
- [x] **Spec § Lightbox** → Task 2 implements `PortfolioLightbox.tsx` with keyboard nav, backdrop close, caption, prev/next wrap
- [x] **Spec § SEO** → Alt text in Task 1 data file; `document.title` set in Task 3
- [x] **Spec § Routing & Navigation** → Task 4 (App.tsx route), Task 5 (Navbar), Task 6 (RecentProjects CTA)
- [x] **Type consistency** → `PortfolioImage` and `CATEGORIES` defined in Task 1, imported in Tasks 2 and 3. `ActiveCategory = typeof CATEGORIES[number]` used in Portfolio.tsx.
- [x] **No placeholders** — all steps contain complete code
