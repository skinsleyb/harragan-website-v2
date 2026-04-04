# Analytics & GTM Implementation — Design Spec

**Date:** 2026-04-04  
**Project:** Harragan Driveway Designs  
**Scope:** GTM dataLayer setup, SPA pageview tracking, CTA event tracking, marketing engagement events

---

## Overview

Install Google Tag Manager on a React SPA (Vite + React Router v6) deployed to Vercel. All GA4 traffic routes through GTM's dataLayer — no direct gtag.js calls anywhere. Six deliverables across six steps.

---

## Constraints

- Route ALL GA4 through GTM dataLayer — never use `gtag.js` directly
- NEVER fire duplicate pageviews on route change
- NEVER push to `dataLayer` from components — use the `track` utility only
- Files touched: `index.html` (root), `src/analytics/*`, CTA components, `App.tsx` (one-liner to mount `<AnalyticsProvider />`)
- No new npm dependencies

---

## Step 1 — GTM in index.html

**File:** `index.html` (repo root, Vite entry)

- Add `window.dataLayer = window.dataLayer || [];` before GTM snippet
- Push consent default before GTM fires: `dataLayer.push({ event: 'consent_default', analytics_storage: 'denied' })`
- Add GTM `<script>` snippet in `<head>` using container ID from `REACT_APP_GTM_ID` env var
- Add GTM `<noscript>` iframe immediately after `<body>` opens
- GTM container ID is injected at build time via Vite's `%REACT_APP_GTM_ID%` replacement pattern

**Note on env var:** Vite only exposes env vars prefixed `VITE_` at build time. Since the spec requires `REACT_APP_GTM_ID`, the value is embedded directly in `index.html` as a placeholder comment with a note that it must be replaced manually or via Vercel env substitution. Alternatively, rename to `VITE_GTM_ID` and use `%VITE_GTM_ID%`. Will use `VITE_GTM_ID` and `VITE_GA_MEASUREMENT_ID` for Vite compatibility — `.env.example` keys updated accordingly.

---

## Step 2 — Track utility

**File:** `src/analytics/track.ts`

```ts
export function trackEvent(event: string, params: Record<string, unknown>): void {
  if (!window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
```

Single exported function. Zero side effects. No module-level state. TypeScript `window.dataLayer` augmentation declared in the same file.

---

## Step 3 — SPA pageview hook

**File:** `src/analytics/usePageTracking.ts`

- Uses `useLocation` from React Router
- Tracks on location change only — skips initial mount (GTM All Pages trigger handles first load)
- Fires: `trackEvent('spa_pageview', { page_path: location.pathname, page_title: document.title })`

**File:** `src/analytics/AnalyticsProvider.tsx`

- Thin component that calls `usePageTracking()` and `useMarketingEvents()` (Step 5)
- Returns `null`
- Mounted inside `<BrowserRouter>` in `App.tsx` alongside `<ScrollToTop />`
- `App.tsx` change: add `<AnalyticsProvider />` as one line — no other App.tsx changes

---

## Step 4 — CTA tracking

All CTAs receive `onClick` (or `onSubmit` for forms) calling:

```ts
trackEvent('cta_interaction', {
  cta_name: '',
  cta_type: '',        // 'form_submit' | 'button_click' | 'link_click'
  cta_location: '',    // 'hero' | 'nav' | 'cta_banner' | 'page_cta' | 'contact_section' | 'contact_page' | 'service_hero' | 'split_section' | 'footer'
  cta_page: window.location.pathname,
  cta_destination: '', // URL or '' if none
  form_fields_completed: 0, // forms only, else omit
})
```

### CTA map

| File | CTA | cta_name | cta_type | cta_location |
|---|---|---|---|---|
| `src/components/Hero.tsx` | "Get a Free Quote" | `Hero Get a Free Quote` | `button_click` | `hero` |
| `src/components/CTABanner.tsx` | "Call Us" | `CTABanner Call Us` | `link_click` | `cta_banner` |
| `src/components/CTABanner.tsx` | "Email Us" | `CTABanner Email Us` | `link_click` | `cta_banner` |
| `src/components/PageCTA.tsx` | "Call Us" | `PageCTA Call Us` | `link_click` | `page_cta` |
| `src/components/PageCTA.tsx` | "Contact Us" | `PageCTA Contact Us` | `link_click` | `page_cta` |
| `src/components/sections/ContactSection.tsx` | Form submit | `ContactSection Quote Form Submit` | `form_submit` | `contact_section` |
| `src/components/sections/ContactSection.tsx` | Email anchor | `ContactSection Email` | `link_click` | `contact_section` |
| `src/components/sections/ContactSection.tsx` | Phone anchor | `ContactSection Phone` | `link_click` | `contact_section` |
| `src/pages/Contact.tsx` | Form submit | `Contact Page Quote Form Submit` | `form_submit` | `contact_page` |
| `src/pages/Contact.tsx` | Phone anchor | `Contact Page Phone` | `link_click` | `contact_page` |
| `src/pages/Contact.tsx` | Email anchor | `Contact Page Email` | `link_click` | `contact_page` |
| `src/pages/Contact.tsx` | Facebook link | `Contact Page Facebook` | `link_click` | `contact_page` |
| `src/pages/Contact.tsx` | Instagram link | `Contact Page Instagram` | `link_click` | `contact_page` |
| `src/pages/Contact.tsx` | LinkedIn link | `Contact Page LinkedIn` | `link_click` | `contact_page` |
| `src/components/Navbar.tsx` | "Get a Quote" (desktop) | `Navbar Get a Quote Desktop` | `button_click` | `nav` |
| `src/components/Navbar.tsx` | Phone (desktop) | `Navbar Phone Desktop` | `link_click` | `nav` |
| `src/components/Navbar.tsx` | "Get a Quote" (mobile) | `Navbar Get a Quote Mobile` | `button_click` | `nav` |
| `src/components/Navbar.tsx` | Phone (mobile) | `Navbar Phone Mobile` | `link_click` | `nav` |
| `src/components/Footer.tsx` | Phone | `Footer Phone` | `link_click` | `footer` |
| `src/components/Footer.tsx` | Email | `Footer Email` | `link_click` | `footer` |
| `src/components/Footer.tsx` | Facebook | `Footer Facebook` | `link_click` | `footer` |
| `src/components/Footer.tsx` | Instagram | `Footer Instagram` | `link_click` | `footer` |
| `src/components/Footer.tsx` | LinkedIn | `Footer LinkedIn` | `link_click` | `footer` |
| `src/components/sections/ServiceHero.tsx` | Contact label anchor | `ServiceHero Contact CTA` | `link_click` | `service_hero` |
| `src/components/sections/ServiceHero.tsx` | "Explore more" button | `ServiceHero Explore More` | `button_click` | `service_hero` |
| `src/components/SplitSection.tsx` | Generic button/link | `SplitSection CTA` | `button_click`/`link_click` | `split_section` |

---

## Step 5 — Marketing events hook

**File:** `src/analytics/useMarketingEvents.ts`

All milestone state via `useRef` — never module-level variables. All listeners cleaned up in `useEffect` return. State resets on route change.

### Events

**`scroll_depth`**
- Thresholds: 25, 50, 75, 90%
- Trigger: `window` scroll event
- Once per page; milestone ref resets on `location.pathname` change
- Params: `{ depth_percentage, page_path }`

**`time_on_page`**
- Milestones: 30s, 60s, 180s
- Trigger: `setTimeout` chain
- Once per page; timeouts cleared and re-set on route change
- Params: `{ milestone_seconds, page_path }`

**`exit_intent`**
- Trigger: `document` `mouseleave` where `event.clientY < 10`
- Once per page; ref resets on route change
- Params: `{ page_path }`

**`section_viewed`**
- Trigger: `IntersectionObserver` at `threshold: 0.5` on key sections
- Key sections targeted by `data-section` attribute (added to relevant section wrappers)
- Observer disconnected on cleanup
- Params: `{ section_name, page_path }`

**`form_start`**
- Trigger: first `focus` event on any `<input>` or `<textarea>` inside a `<form>`
- Detected via delegated `focusin` on `document`
- Form identified by `data-form-name` attribute on `<form>` element
- Once per form per page
- Params: `{ form_name, page_path }`

**`form_abandon`**
- Trigger: navigation (location change) after `form_start` fired but no `form_submit` cta_interaction was fired
- Tracked via ref: `formStarted` map keyed by form name, cleared on submit
- Params: `{ form_name, fields_completed, page_path }`

---

## Step 6 — Env vars

**File:** `.env.example`

```
# Resend (existing)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Analytics
VITE_GTM_ID=GTM-XXXXXXX
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

GTM container ID referenced in `index.html` as `%VITE_GTM_ID%` (Vite env substitution in HTML).

---

## Done criteria

- [ ] GTM installed in `index.html` with `dataLayer` init, consent default, `<script>` in `<head>`, `<noscript>` after `<body>`
- [ ] `src/analytics/track.ts` — single `trackEvent` export, window.dataLayer type augmented
- [ ] `src/analytics/usePageTracking.ts` — fires on route change only, not initial mount
- [ ] `src/analytics/useMarketingEvents.ts` — all 6 events, ref-based milestones, full cleanup
- [ ] `src/analytics/AnalyticsProvider.tsx` — calls both hooks, mounted in App.tsx inside BrowserRouter
- [ ] Every CTA in the map above has `cta_interaction` with all fields populated
- [ ] `.env.example` updated with `VITE_GTM_ID` and `VITE_GA_MEASUREMENT_ID`
- [ ] Zero direct `dataLayer` pushes outside `trackEvent`
- [ ] No new npm dependencies
