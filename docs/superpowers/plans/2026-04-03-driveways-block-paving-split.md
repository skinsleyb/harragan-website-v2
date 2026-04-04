# Driveways & Block Paving Page Split Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the Driveways and Block Paving service pages from identical content into two clearly differentiated pages — Driveways as a broad umbrella overview linking to sub-services, Block Paving as a specialist deep-dive.

**Architecture:** All page content lives as exported config objects in `ServicePageTemplate.tsx`. Add a new `driveywaysServiceV2` export at the end of that file, rewrite `blockPavingServiceV2` in-place (lines 485–610), then update `Driveways.tsx` to import the new config. `BlockPaving.tsx` needs no code changes.

**Tech Stack:** React 18, TypeScript (loose), Vite 5. No new dependencies. All images already exist in `src/assets/`.

---

## File Map

| File | Change |
|---|---|
| `src/components/ServicePageTemplate.tsx` | Add `driveywaysServiceV2` export (append at end); replace `blockPavingServiceV2` content (lines 485–610) |
| `src/pages/Driveways.tsx` | Swap import from `blockPavingServiceV2` → `driveywaysServiceV2` |
| `src/pages/BlockPaving.tsx` | No change — automatically picks up rewritten config |

---

## Task 1: Add `driveywaysServiceV2` config to ServicePageTemplate.tsx

**Files:**
- Modify: `src/components/ServicePageTemplate.tsx` (append after line 865)

- [ ] **Step 1: Append the new config export at the end of the file**

Open `src/components/ServicePageTemplate.tsx`. After the closing `};` of `stoneCarpetsServiceV2` (line 864), append:

```typescript
export const driveywaysServiceV2: ServicePageConfig = {
  title: "Complete Driveway Solutions",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: heroImg,
  trustedBy: [],
  experienceSection: {
    label: "Driveways",
    title: "Our Driveway Installation Services",
    intro:
      "Andy Harragan & Sons Ltd provide a complete range of driveway installation services across Essex and surrounding areas. Whether you are looking for the classic appeal of block paving, the modern finish of resin, the practicality of tarmac or the character of shingle, our experienced team delivers durable, well-finished results for domestic and commercial properties.",
    outro:
      "A professionally installed driveway adds lasting kerb appeal, improves practicality and can increase the value of your property. Choosing Andy Harragan & Sons Ltd means investing in a surface built to perform and look great for years to come.",
    services: [
      "Block Paving Driveways",
      "Resin Bound Driveways",
      "Resin Bonded Driveways",
      "Tarmac Driveways",
      "Tar & Shingle Driveways",
      "Shingle Driveways",
      "Concrete Driveways",
      "Permeable Driveways",
      "Groundworks & Preparation",
    ],
    experienceText:
      "With decades of hands-on experience across all major driveway surface types, our team delivers dependable workmanship and consistently high standards on every residential and commercial project.",
    qualityText:
      "We use trusted materials, careful groundwork preparation and proven installation methods to ensure every driveway we install is durable, practical and finished to a professional standard.",
    serviceBlockText:
      "From your first enquiry through to the finished driveway, we provide honest advice, clear quotations and a smooth, professional customer experience from start to finish.",
  },
  section1Title: "Driveways Built to Last",
  section1Intro:
    "Whatever surface you choose, the quality of a driveway depends on preparation, materials and installation. Andy Harragan & Sons covers every stage — from groundworks and drainage through to the finished surface — delivering driveways that perform well and look great long after installation.",
  section1Cards: [
    {
      title: "Design & Material Choice",
      image: dg1,
      icon: LayoutGrid,
      body: "We work with the full range of driveway surfaces — block paving, resin bound, resin bonded, tarmac, shingle and concrete. Our team helps you choose the right material for your budget, property style and long-term needs.",
    },
    {
      title: "Groundworks & Preparation",
      image: dg3,
      icon: HardHat,
      body: "Every driveway starts below the surface. Proper excavation, sub-base construction and drainage installation are what separate a lasting driveway from one that fails within years. We get the groundwork right every time.",
    },
    {
      title: "SUDS-Compliant Options",
      image: permDriveways,
      icon: Droplets,
      body: "Many of our surfaces — including permeable block paving and resin bound — allow rainwater to drain naturally through the surface, meeting planning requirements and reducing runoff without additional drainage infrastructure.",
    },
    {
      title: "Long-Term Durability",
      image: dg6,
      icon: ShieldCheck,
      body: "Regardless of the material you choose, every driveway we install is built to last. We use trusted suppliers, correct installation techniques and quality finishing throughout to deliver a surface that performs for years.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Our Driveway Services",
  section2Cards: [
    {
      title: "Block Paving Driveways",
      body: "Durable, versatile and highly attractive, block paving is available in a wide range of colours, textures and laying patterns. It can be tailored to suit any property style and delivers long-lasting kerb appeal with minimal maintenance.",
      ctaLabel: "Explore block paving",
      ctaHref: "/services/block-paving",
      image: blockPavingDriveways,
    },
    {
      title: "Resin Driveways",
      body: "Resin bound and resin bonded driveways offer a smooth, modern finish with excellent drainage and very low maintenance. A popular choice for contemporary homes and commercial properties looking for a clean, high-quality surface.",
      ctaLabel: "Explore resin driveways",
      ctaHref: "/services/resin-work",
      image: section1Img,
    },
    {
      title: "Tarmac & Shingle",
      body: "Cost-effective and practical, tarmac delivers a clean hard-wearing surface while shingle and tar & shingle options add traditional character to driveways and access roads. Ideal for both residential and larger commercial areas.",
      ctaLabel: "Explore tarmac & shingle",
      ctaHref: "/services/tarmac-shingle",
      image: dg5,
    },
    {
      title: "Concrete & Other Surfaces",
      body: "We also install concrete driveways and can advise on the full range of surfacing options for your property. Get in touch to discuss your requirements and we will recommend the most suitable solution for your project.",
      ctaLabel: "Discuss your project",
      ctaHref: "/contact",
      image: dg4,
    },
  ],
  galleryTitle: "Driveway Portfolio",
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Ready to Transform Your Driveway?",
  contactCtaBody:
    "From block paving and resin to tarmac, shingle and concrete, we can help you choose the right surface and deliver a professional result from groundworks through to the finished driveway.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};
```

- [ ] **Step 2: Run the TypeScript build to confirm no errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes without TypeScript errors. The new export is a plain object literal matching the `ServicePageConfig` interface — no new types or imports needed.

- [ ] **Step 3: Commit**

```bash
git add src/components/ServicePageTemplate.tsx
git commit -m "feat: add driveywaysServiceV2 config for umbrella Driveways page"
```

---

## Task 2: Rewrite `blockPavingServiceV2` in ServicePageTemplate.tsx

**Files:**
- Modify: `src/components/ServicePageTemplate.tsx` (replace lines 485–610)

- [ ] **Step 1: Replace the entire `blockPavingServiceV2` export**

In `src/components/ServicePageTemplate.tsx`, find and replace the full block from:
```typescript
export const blockPavingServiceV2: ServicePageConfig = {
  title: "15 Years In The Driveway Industry",
```
through to its closing `};` on line 610, with:

```typescript
export const blockPavingServiceV2: ServicePageConfig = {
  title: "Block Paving Specialists",
  subtitle: "",
  contactLabel: "Get a quote",
  heroImage: [blockp2],
  trustedBy: [
    { name: "Bradstone" },
    { name: "Marshalls" },
    { name: "Brett" },
    { name: "Pavestone" },
    { name: "Stonemarket" },
  ],
  experienceSection: {
    label: "Block Paving",
    title: "Our Block Paving Services",
    intro:
      "Andy Harragan & Sons Ltd deliver specialist block paving installation across Essex and surrounding areas. From classic herringbone driveways and block paved patios to decorative paths, courtyards and kerb edging, our experienced team produces high-quality, long-lasting block paving that enhances the look and value of any property.",
    outro:
      "A professionally installed block paved surface not only improves kerb appeal but adds lasting value to your home or commercial property. With the right pattern, colour and laying method, block paving creates a finish that looks as good in ten years as it does on day one.",
    services: [
      "Block Paving Driveways",
      "Permeable Block Paving",
      "Patios & Courtyards",
      "Paths & Walkways",
      "Kerbs & Edging",
      "Block Paving Repairs",
      "Pattern Design",
      "Colour & Texture Selection",
      "Repointing & Restoration",
    ],
    experienceText:
      "With extensive hands-on experience in block paving installation, our team delivers precision workmanship and high standards across residential and commercial projects of all sizes.",
    qualityText:
      "We source block paving from trusted manufacturers including Bradstone, Marshalls, Brett, Pavestone and Stonemarket, and install every surface on a correct sub-base with kiln-dried sand jointing and proper edge restraints.",
    serviceBlockText:
      "From pattern and material selection through to installation and finishing, we provide expert guidance and a professional, hassle-free service from first consultation to completed project.",
  },
  section1Title: "Block Paving Done Right",
  section1Intro:
    "The quality of a block paved surface depends on pattern choice, material selection and — above all — what goes beneath it. Andy Harragan & Sons combines design knowledge with correct installation technique to deliver block paving that looks exceptional and lasts.",
  section1Cards: [
    {
      title: "Laying Patterns",
      image: blockPavingDriveways,
      icon: LayoutGrid,
      body: "Herringbone, basketweave, stretcher bond, fan and running bond patterns each have different visual characters and structural properties. Herringbone in particular offers superior interlock and load-bearing strength. We advise on the right pattern for your project and property style.",
    },
    {
      title: "Colour, Texture & Finish",
      image: blockp3,
      icon: Grip,
      body: "We offer a wide choice of block paving colours, textures and sizes from trusted suppliers including Bradstone, Marshalls, Brett, Pavestone and Stonemarket. Whether you want a traditional buff finish or a contemporary charcoal, we help you choose a combination that complements your property.",
    },
    {
      title: "Permeable Block Paving",
      image: permDriveways,
      icon: Droplets,
      body: "Permeable block paving is fully SUDS-compliant, allowing rainwater to drain naturally through the surface into the sub-base below. It reduces surface water runoff, lowers flood risk and often removes the need for planning permission when resurfacing a front driveway.",
    },
    {
      title: "Precision Installation",
      image: blockp1,
      icon: HardHat,
      body: "A block paving job is only as good as its foundation. We install a correctly specified sub-base, use kiln-dried sand for jointing, set proper edge restraints and compact the surface to ensure the paving remains stable, level and long-lasting through all weather conditions.",
    },
  ],
  section1CtaLabel: "Get a quote",
  section1CtaHref: "/contact",
  section2Title: "Block Paving Applications",
  section2Cards: [
    {
      title: "Block Paving Driveways",
      body: "Create a durable, visually striking driveway with lasting kerb appeal. Available in a wide range of colours, sizes and laying patterns, a block paved driveway can be fully customised to suit both traditional and modern properties and adds real value to your home.",
      ctaLabel: "Discuss your driveway",
      ctaHref: "/contact",
      image: blockPavingDriveways,
    },
    {
      title: "Patios & Courtyards",
      body: "Extend block paving beyond the driveway into your outdoor living space. Block paved patios and courtyards provide a durable, low-maintenance surface that ties the look of your property together and creates an attractive area for entertaining and relaxing.",
      ctaLabel: "Plan your patio",
      ctaHref: "/contact",
      image: kerbsDriveways,
    },
    {
      title: "Paths, Edging & Kerbs",
      body: "Complementary paths, kerb edging and border details add structure, definition and a professional finish to any block paved area. These finishing elements frame the main surface, improve edge stability and complete the overall design with clean, precise lines.",
      ctaLabel: "Discuss finishing details",
      ctaHref: "/contact",
      image: blockp4,
    },
    {
      title: "Repairs & Repointing",
      body: "Sunken blocks, cracked edging and weed-filled joints can all be restored without full replacement. We carry out targeted block paving repairs, sand repointing and block re-levelling to bring existing surfaces back to a high standard at a fraction of the cost of new installation.",
      ctaLabel: "Enquire about repairs",
      ctaHref: "/contact",
      image: blockp2,
    },
  ],
  galleryTitle: "Block Paving Portfolio",
  galleryImages: [dg1, dg2, dg3, dg4, dg5, dg6],
  contactCtaTitle: "Let's Talk About Your Block Paving Project",
  contactCtaBody:
    "From pattern selection and material choice through to installation and finishing, we can help you plan and deliver a block paving project that enhances your property for years to come.",
  contactCtaLabel: "Contact the team",
  contactCtaHref: "/contact",
};
```

Note: `blockp3` and `blockp4` are already imported at the top of the file (`import blockp3 from "@/assets/block-paving/nice-blocks-3.jpeg"` etc.) — no new imports needed.

- [ ] **Step 2: Run the TypeScript build to confirm no errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes without errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ServicePageTemplate.tsx
git commit -m "refactor: rewrite blockPavingServiceV2 to focus exclusively on block paving"
```

---

## Task 3: Update Driveways.tsx to use the new config

**Files:**
- Modify: `src/pages/Driveways.tsx`

- [ ] **Step 1: Replace the import and usage in Driveways.tsx**

Replace the entire contents of `src/pages/Driveways.tsx` with:

```typescript
import ServicePageTemplate, {
  driveywaysServiceV2,
} from "@/components/ServicePageTemplate";
const Driveways = () => <ServicePageTemplate service={driveywaysServiceV2} />;
export default Driveways;
```

- [ ] **Step 2: Run the TypeScript build to confirm no errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes without errors. `driveywaysServiceV2` is exported from `ServicePageTemplate.tsx` (added in Task 1) and typed as `ServicePageConfig`, so the prop passes cleanly.

- [ ] **Step 3: Verify dev server renders both pages correctly**

```bash
npm run dev
```

Navigate to:
- `http://localhost:8080/services/driveways` — should show "Complete Driveway Solutions" hero, 4 overview feature cards, 4 surface-type split cards with sub-page CTAs
- `http://localhost:8080/services/block-paving` — should show "Block Paving Specialists" hero, pattern/colour/permeable/installation cards, 4 application split cards all linking to `/contact`

Confirm the two pages are visually distinct with no shared copy.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Driveways.tsx
git commit -m "feat: wire Driveways page to driveywaysServiceV2 umbrella config"
```
