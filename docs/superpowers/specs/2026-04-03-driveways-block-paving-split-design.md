# Design Spec: Driveways & Block Paving Page Split

**Date:** 2026-04-03
**Status:** Approved

---

## Overview

Currently both `/services/driveways` and `/services/block-paving` render identically — both use the `blockPavingServiceV2` config from `ServicePageTemplate.tsx`. This spec defines how to split them into two clearly differentiated pages with non-overlapping content and purpose.

**Approach:** Option A — Driveways as umbrella overview, Block Paving as deep-dive specialist page.

---

## Pages Affected

| File | Change |
|---|---|
| `src/components/ServicePageTemplate.tsx` | Add new `driveywaysServiceV2` export; rewrite `blockPavingServiceV2` |
| `src/pages/Driveways.tsx` | Import and use `driveywaysServiceV2` instead of `blockPavingServiceV2` |
| `src/pages/BlockPaving.tsx` | No change needed (already uses `blockPavingServiceV2`) |

---

## Driveways Page (`/services/driveways`)

**Purpose:** Top-of-funnel umbrella page. Covers all driveway surface types. Directs users to the right specialist sub-page.

**New export name:** `driveywaysServiceV2`

### Hero / Header
- `title`: "Complete Driveway Solutions"
- `subtitle`: ""
- `heroImage`: `nice-drive.jpg` (existing asset)
- `contactLabel`: "Get a quote"

### Experience Section
- `label`: "Driveways"
- `title`: "Our Driveway Installation Services"
- `intro`: Overview of all driveway types offered across Essex — block paving, resin, tarmac, shingle, concrete, permeable
- `outro`: Value statement about choosing Andy Harragan & Sons — experience, quality, clean finish
- `services` list: Block Paving, Resin Bound Driveways, Resin Bonded Driveways, Tarmac Driveways, Tar & Shingle Driveways, Shingle Driveways, Concrete Driveways, Permeable Driveways, Groundworks & Preparation
- `experienceText`: Experience across all domestic and commercial driveway types
- `qualityText`: Proper preparation, trusted materials, built for long-term performance
- `serviceBlockText`: From design advice through to final installation

### Section 1 — Feature Cards (4)
Icons from lucide-react; images from existing driveway asset pool.

1. **Design & Material Choice** (icon: `LayoutGrid`) — Guidance across all surface types: block paving, resin, tarmac, concrete, shingle. We help you choose the right material for your budget, property style and long-term needs.
2. **Groundworks & Preparation** (icon: `HardHat`) — Every driveway starts below the surface. Proper excavation, sub-base compaction and drainage installation are what separate a lasting driveway from one that fails within years.
3. **SUDS-Compliant Options** (icon: `Droplets`) — Many of our surfaces — including permeable block paving and resin bound — allow rainwater to drain naturally, meeting planning requirements without additional drainage infrastructure.
4. **Long-Term Durability** (icon: `ShieldCheck`) — Regardless of the material you choose, every driveway we install is built to last. We use trusted suppliers, proper installation methods and quality finishing throughout.

Images: `dg1`, `dg3`, `permDriveways`, `dg6` (existing)

### Section 2 — Split Scroll Cards (4, linking to sub-pages)
Each card CTA links to the specific service sub-page rather than `/contact`.

1. **Block Paving Driveways** → `ctaHref: /services/block-paving` — Durable, versatile and attractive. Block paving is available in a wide range of colours, textures and laying patterns to suit any property style.
2. **Resin Driveways** → `ctaHref: /services/resin-work` — Resin bound and resin bonded driveways offer a smooth, modern finish with excellent drainage and minimal maintenance. A popular choice for contemporary homes.
3. **Tarmac & Shingle** → `ctaHref: /services/tarmac-shingle` — Cost-effective and practical. Tarmac delivers a clean, hard-wearing surface while shingle and tar & shingle options add a more traditional character to driveways and access roads.
4. **Concrete & Other Surfaces** → `ctaHref: /contact` — We also install concrete driveways and can advise on the full range of surfacing options available for your property, including specialist and commercial applications.

Images: `blockPavingDriveways`, resin image, `dg5`, `dg4` (existing)

### Gallery
- `galleryTitle`: "Driveway Portfolio"
- `galleryImages`: `[dg1, dg2, dg3, dg4, dg5, dg6]`

### Contact CTA
- `contactCtaTitle`: "Ready to Transform Your Driveway?"
- `contactCtaBody`: "From block paving and resin to tarmac, shingle and concrete, we can help you choose the right surface and deliver a professional result from groundworks through to the finished driveway."
- `contactCtaLabel`: "Contact the team"
- `contactCtaHref`: "/contact"

---

## Block Paving Page (`/services/block-paving`)

**Purpose:** Specialist deep-dive into block paving specifically. No generic driveway content. Covers patterns, materials, manufacturers, applications, and restoration.

**Existing export name:** `blockPavingServiceV2` (rewritten in place)

### Hero / Header
- `title`: "Block Paving Specialists"
- `heroImage`: `blockp2` (existing block paving photo)
- `contactLabel`: "Get a quote"

### Experience Section
- `label`: "Block Paving"
- `title`: "Our Block Paving Services"
- `intro`: Focused intro on block paving across Essex — driveways, patios, paths, courtyards, commercial paving
- `outro`: Value of choosing Andy Harragan & Sons for block paving specifically
- `services` list: Block Paving Driveways, Permeable Block Paving, Patios & Courtyards, Paths & Walkways, Kerbs & Edging, Block Paving Repairs, Pattern Design, Colour & Texture Selection, Repointing & Restoration
- `experienceText`: Hands-on block paving expertise across residential and commercial projects
- `qualityText`: Trusted suppliers (Bradstone, Marshalls, Brett, Pavestone, Stonemarket), proper sub-base, kiln-dried sand jointing
- `serviceBlockText`: From pattern selection through to installation and finishing

### Section 1 — Feature Cards (4)
Block-paving-specific detail — no generic driveway copy.

1. **Laying Patterns** (icon: `LayoutGrid`) — Herringbone, basketweave, stretcher bond, fan and running bond. Pattern choice affects both the visual character and structural performance of the finished surface. We advise on the right pattern for your project.
2. **Colour, Texture & Finish** (icon: `Grip`) — Wide choice of colours, finishes and block sizes from trusted suppliers including Bradstone, Marshalls, Brett, Pavestone and Stonemarket. We help you select a combination that complements your property.
3. **Permeable Block Paving** (icon: `Droplets`) — Permeable block paving is SUDS-compliant, allows rainwater to drain naturally through the surface and can reduce or eliminate the need for additional drainage. It often removes the requirement for planning permission when resurfacing front driveways.
4. **Precision Installation** (icon: `HardHat`) — A quality block paving job depends on what's beneath it. We install a correct sub-base, use kiln-dried sand jointing, set proper edge restraints and compact the surface correctly so the paving remains stable, level and long-lasting.

Images: `blockPavingDriveways`, `blockp3`, `permDriveways`, `blockp1` (existing)

### Section 2 — Split Scroll Cards (4, all CTA → /contact)
Block paving applications only.

1. **Block Paving Driveways** — Create a durable, visually striking driveway with lasting kerb appeal. Available in a wide range of colours, sizes and patterns to suit both traditional and modern properties.
2. **Patios & Courtyards** — Extend block paving beyond the driveway into your outdoor living space. Block paved patios and courtyards provide a durable, low-maintenance surface that ties together the look of your property.
3. **Paths, Edging & Kerbs** — Complementary paths, edging and kerb installation adds structure and a professional finish to any block paved area. These finishing details define boundaries, improve durability and complete the overall design.
4. **Repairs & Repointing** — Sunken blocks, cracked edging and weed-invaded joints can all be restored. We carry out block paving repairs, repointing and re-levelling to bring existing surfaces back to a high standard without full replacement.

Images: `blockPavingDriveways`, `kerbsDriveways`, `blockp4`, `blockp2` (existing)

### Gallery
- `galleryTitle`: "Block Paving Portfolio"
- `galleryImages`: `[dg1, dg2, dg3, dg4, dg5, dg6]`

### Contact CTA
- `contactCtaTitle`: "Let's Talk About Your Block Paving Project"
- `contactCtaBody`: "From pattern selection and material choice through to installation and finishing, we can help you plan and deliver a block paving project that enhances your property for years to come."
- `contactCtaLabel`: "Contact the team"
- `contactCtaHref`: "/contact"

---

## Implementation Notes

- All changes are confined to `ServicePageTemplate.tsx` (content) and `Driveways.tsx` (import swap). No structural or template changes required.
- All images referenced already exist in `src/assets/`. No new assets needed.
- `BlockPaving.tsx` requires no code change — it will automatically pick up the rewritten `blockPavingServiceV2` config.
- The `section2Cards` CTA hrefs on the Driveways page point to sub-service pages rather than `/contact` — this is valid because `ctaHref` is used directly as an `href` attribute in the template.
