---
name: Portfolio Page Design
description: Full design spec for the /portfolio page — image gallery with category tabs, lightbox, SEO alt text, navbar link, and homepage teaser
type: project
---

# Portfolio Page — Design Spec

**Date:** 2026-04-04  
**Status:** Approved

---

## Overview

A new `/portfolio` page displaying all completed project photos, organised by service category. Users can filter by category via tab buttons across the top, or view all photos at once. Clicking any photo opens it in a Framer Motion lightbox with keyboard navigation. All images carry SEO-optimised alt text.

---

## 1. Data & Image Imports

**File:** `src/data/portfolioImages.ts`

Each entry:
```ts
type PortfolioImage = {
  src: string;       // Vite-imported asset URL
  alt: string;       // SEO alt text
  category: Category;
}
```

**Categories (ordered):**
`"Block Paving" | "Resin" | "Slab Paving" | "Tarmac" | "Groundworks" | "Landscape" | "Pathway" | "Fencing"`

**Image counts per category:**
| Category | Count | Notes |
|---|---|---|
| Block Paving | 11 | All `.jpeg` |
| Resin | 4 | Mix of `.jpeg` / `.jpg` |
| Slab Paving | 17 | All `.jpeg` |
| Tarmac | 6 | All `.jpeg` |
| Groundworks | 47 | All `.jpeg` |
| Landscape | 34 | All `.jpeg` |
| Pathway | 1 | `Pathway.jpg` only — exclude logos, `.webp` duplicate, `.docx` files |
| Fencing | 1 | `fencing-service-image.jpeg` |

**Alt text format:**  
`"[Descriptive action] by Andy Harragan & Sons, Essex"`  
Example: `"Block paving driveway laid in herringbone pattern by Andy Harragan & Sons, Essex"`

---

## 2. Portfolio Page

**Route:** `/portfolio`  
**File:** `src/pages/Portfolio.tsx`

**Shell:** `Navbar` → `PageHero` → category tabs → image grid → `ContactSection` → `Footer`

**PageHero props:**
- title: `"Our Portfolio"`
- subtitle: `"Browse our completed projects across Essex — from resin driveways to block paving, landscaping, and more."`
- breadcrumbs: `[{ label: "Home", to: "/" }, { label: "Portfolio" }]`

**Page `<title>`:** Updated via `useEffect(() => { document.title = "Portfolio | Andy Harragan & Sons LTD" }, [])` — no Helmet dependency needed.

---

## 3. Category Tabs

- Rendered as a horizontally scrollable row below the hero (no sidebar)
- Tabs: `["All", "Block Paving", "Resin", "Slab Paving", "Tarmac", "Groundworks", "Landscape", "Pathway", "Fencing"]`
- Default active: `"All"`
- Active tab: `bg-accent text-accent-foreground` (orange, consistent with site CTA)
- Inactive tab: `bg-white text-foreground border border-border` with hover state
- On mobile: `flex overflow-x-auto` with `whitespace-nowrap` so tabs scroll horizontally without wrapping
- Selecting a tab replaces the current filter — no multi-select

---

## 4. Image Grid

- Tailwind: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3`
- Each cell: fixed `aspect-video` container, `object-cover`, `w-full h-full`
- Hover: `hover:scale-105 transition-transform duration-300 cursor-pointer`
- Filtered set is derived in-component: `portfolioImages.filter(img => activeCategory === "All" || img.category === activeCategory)`
- No pagination — all images render at once (static site, no server)

---

## 5. Lightbox

**File:** `src/components/PortfolioLightbox.tsx`

**Props:**
```ts
type Props = {
  images: PortfolioImage[];   // currently filtered set
  initialIndex: number;
  onClose: () => void;
}
```

**Behaviour:**
- Full-screen overlay: `fixed inset-0 bg-black/90 z-50`
- Selected image centered: `max-w-[90vw] max-h-[90vh] object-contain`
- Left/right arrow buttons navigate within the filtered set (wraps around)
- Keyboard: `←` / `→` to navigate, `Esc` to close
- Click on backdrop closes the lightbox (click on image does not)
- Image `alt` text displayed as caption below image (`text-sm text-white/70`)
- Framer Motion `AnimatePresence` + `motion.div` for fade-in/out overlay
- Image transition: opacity fade between images (no slide — avoids layout shift with variable image sizes)

---

## 6. Routing & Navigation

### App.tsx
Add route: `<Route path="/portfolio" element={<Portfolio />} />`  
Import: `import Portfolio from "./pages/Portfolio.tsx"`

### Navbar
Add `"Portfolio"` link between the Services dropdown and Blog, in both desktop and mobile nav.

### Homepage — RecentProjects component
Add a "View Full Portfolio →" `<Link to="/portfolio">` button at the bottom of the `RecentProjects` component (`src/components/RecentProjects.tsx`), styled consistently with existing CTAs on the page.

---

## 7. Files Changed / Created

| Action | File |
|---|---|
| Create | `src/data/portfolioImages.ts` |
| Create | `src/pages/Portfolio.tsx` |
| Create | `src/components/PortfolioLightbox.tsx` |
| Edit | `src/App.tsx` — add route |
| Edit | `src/components/Navbar.tsx` — add nav link (desktop + mobile) |
| Edit | `src/components/RecentProjects.tsx` — add "View Full Portfolio" CTA |

---

## 8. Out of Scope

- No image lazy loading beyond browser defaults
- No pagination
- No search within portfolio
- No CMS — images are statically imported
- No social share buttons
