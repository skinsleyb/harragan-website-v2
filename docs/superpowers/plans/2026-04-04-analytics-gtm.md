# Analytics & GTM Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install GTM with dataLayer-routed GA4, SPA pageview tracking, full CTA event instrumentation, and engagement marketing events on a React + Vite + React Router v6 site deployed to Vercel.

**Architecture:** A `trackEvent` utility in `src/analytics/` is the single point of contact with `window.dataLayer` — no component ever pushes directly. Two hooks (`usePageTracking`, `useMarketingEvents`) are mounted via a null `AnalyticsProvider` component placed inside the BrowserRouter in App.tsx. GTM is installed in the root `index.html` using Vite's `%VITE_GTM_ID%` env substitution.

**Tech Stack:** React 18, Vite 5, React Router v6, TypeScript (loose), Vitest + @testing-library/react, GTM dataLayer (no new npm deps)

---

## File Map

| Action | File | Responsibility |
|---|---|---|
| Create | `src/analytics/track.ts` | `trackEvent` utility + `window.dataLayer` type augmentation |
| Create | `src/analytics/usePageTracking.ts` | SPA pageview hook — fires on route change, skips initial mount |
| Create | `src/analytics/useMarketingEvents.ts` | Scroll depth, time on page, exit intent, section viewed, form start/abandon |
| Create | `src/analytics/AnalyticsProvider.tsx` | Null component that calls both hooks; mounted in App.tsx |
| Create | `src/analytics/track.test.ts` | Unit tests for trackEvent |
| Create | `src/analytics/usePageTracking.test.tsx` | Unit tests for usePageTracking |
| Create | `src/analytics/useMarketingEvents.test.tsx` | Unit tests for useMarketingEvents |
| Modify | `index.html` | dataLayer init, consent default, GTM `<script>`, GTM `<noscript>` |
| Modify | `.env.example` | Add `VITE_GTM_ID` and `VITE_GA_MEASUREMENT_ID` |
| Modify | `src/App.tsx` | Mount `<AnalyticsProvider />` inside BrowserRouter |
| Modify | `src/components/Hero.tsx` | CTA tracking on "Get a Free Quote" |
| Modify | `src/components/CTABanner.tsx` | CTA tracking on "Call Us" + "Email Us" |
| Modify | `src/components/PageCTA.tsx` | CTA tracking on "Call Us" + "Contact Us" |
| Modify | `src/components/Navbar.tsx` | CTA tracking on phone link + "Get a Quote" (desktop + mobile) |
| Modify | `src/components/Footer.tsx` | CTA tracking on phone, email, Facebook, Instagram, LinkedIn |
| Modify | `src/components/sections/ContactSection.tsx` | CTA tracking on form submit + email/phone links; add `data-form-name` + `data-section` |
| Modify | `src/pages/Contact.tsx` | CTA tracking on form submit + all direct-contact links; add `data-form-name` |
| Modify | `src/components/sections/ServiceHero.tsx` | CTA tracking on contact anchor + "Explore more" button |
| Modify | `src/components/SplitSection.tsx` | CTA tracking on generic button/link |

---

## Task 1: `track.ts` — trackEvent utility

**Files:**
- Create: `src/analytics/track.ts`
- Create: `src/analytics/track.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/analytics/track.test.ts`:

```ts
import { describe, it, expect, beforeEach } from 'vitest';
import { trackEvent } from './track';

describe('trackEvent', () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it('pushes event and params to dataLayer', () => {
    trackEvent('test_event', { foo: 'bar', count: 1 });
    expect(window.dataLayer).toHaveLength(1);
    expect(window.dataLayer[0]).toEqual({ event: 'test_event', foo: 'bar', count: 1 });
  });

  it('does not throw when dataLayer is undefined', () => {
    (window as any).dataLayer = undefined;
    expect(() => trackEvent('test', { x: 1 })).not.toThrow();
  });

  it('does not push when dataLayer is undefined', () => {
    (window as any).dataLayer = undefined;
    trackEvent('test', {});
    expect(window.dataLayer).toBeUndefined();
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- track.test
```

Expected: FAIL — `Cannot find module './track'`

- [ ] **Step 3: Create `src/analytics/track.ts`**

```ts
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params: Record<string, unknown>): void {
  if (!window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
```

- [ ] **Step 4: Run test — expect PASS**

```bash
npm test -- track.test
```

Expected: 3 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/analytics/track.ts src/analytics/track.test.ts
git commit -m "feat(analytics): add trackEvent utility with dataLayer type augmentation"
```

---

## Task 2: GTM in `index.html` + `.env.example`

**Files:**
- Modify: `index.html`
- Modify: `.env.example`

- [ ] **Step 1: Update `.env.example`**

Replace the entire contents of `.env.example` with:

```
# Copy to .env.local and fill in values.

# Resend — used by /api/send-confirmation serverless function
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Analytics — Google Tag Manager + GA4
# GTM_ID is embedded in index.html at build time via Vite env substitution (%VITE_GTM_ID%)
VITE_GTM_ID=GTM-XXXXXXX
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- [ ] **Step 2: Add GTM to `index.html`**

Replace the `<head>` block and opening `<body>` in `index.html` so the full file reads:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <title>
      Andy Harragan & Sons LTD | Resin Driveway Specialists Chelmsford, Essex
    </title>
    <meta
      name="description"
      content="Resin driveway and surfacing specialists in Chelmsford, Essex. Andy Harragan & Sons LTD — 30+ years experience in resin bound driveways, hard landscaping and groundworks. Free quotations, domestic and commercial."
    />
    <meta name="author" content="Andy Harragan & Sons LTD" />
    <link rel="canonical" href="https://andyharraganandsons.co.uk" />

    <meta
      property="og:title"
      content="Andy Harragan & Sons LTD | Driveway Installation & Design"
    />
    <meta
      property="og:description"
      content="Professional driveway installation and design. Resin, tarmac, block paving, porcelain, sandstone, concrete driveways and pathways."
    />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />

    <!-- Consent default — must fire before GTM initialises -->
    <script>
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'consent_default', analytics_storage: 'denied' });
    </script>

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','%VITE_GTM_ID%');</script>
    <!-- End Google Tag Manager -->
  </head>

  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=%VITE_GTM_ID%"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Verify Vite env substitution works**

Create a local `.env.local` (do not commit it) with any placeholder GTM ID:

```
VITE_GTM_ID=GTM-TEST123
VITE_GA_MEASUREMENT_ID=G-TEST123
```

Run `npm run build` and inspect `dist/index.html` — `GTM-TEST123` should appear twice where `%VITE_GTM_ID%` was. Then delete the test `.env.local`.

Expected output from grep: `grep "GTM-TEST123" dist/index.html` → 2 matches

- [ ] **Step 4: Commit**

```bash
git add index.html .env.example
git commit -m "feat(analytics): install GTM with dataLayer init and consent default"
```

---

## Task 3: `usePageTracking` hook

**Files:**
- Create: `src/analytics/usePageTracking.ts`
- Create: `src/analytics/usePageTracking.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `src/analytics/usePageTracking.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { usePageTracking } from './usePageTracking';

function Harness() {
  usePageTracking();
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/about')}>go</button>
  );
}

function wrap(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Harness />
    </MemoryRouter>
  );
}

describe('usePageTracking', () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it('does not fire spa_pageview on initial mount', () => {
    wrap('/');
    const views = window.dataLayer.filter((e) => e['event'] === 'spa_pageview');
    expect(views).toHaveLength(0);
  });

  it('fires spa_pageview with correct page_path on navigation', () => {
    const { getByText } = wrap('/');
    act(() => { getByText('go').click(); });
    const views = window.dataLayer.filter((e) => e['event'] === 'spa_pageview');
    expect(views).toHaveLength(1);
    expect(views[0]).toMatchObject({ event: 'spa_pageview', page_path: '/about' });
  });

  it('fires once per navigation, not twice', () => {
    const { getByText } = wrap('/');
    act(() => { getByText('go').click(); });
    act(() => { getByText('go').click(); });
    const views = window.dataLayer.filter((e) => e['event'] === 'spa_pageview');
    expect(views).toHaveLength(2);
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- usePageTracking.test
```

Expected: FAIL — `Cannot find module './usePageTracking'`

- [ ] **Step 3: Create `src/analytics/usePageTracking.ts`**

```ts
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './track';

export function usePageTracking(): void {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackEvent('spa_pageview', {
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location.pathname]);
}
```

- [ ] **Step 4: Run test — expect PASS**

```bash
npm test -- usePageTracking.test
```

Expected: 3 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/analytics/usePageTracking.ts src/analytics/usePageTracking.test.tsx
git commit -m "feat(analytics): add usePageTracking — fires spa_pageview on route change only"
```

---

## Task 4: `AnalyticsProvider` + wire into `App.tsx`

**Files:**
- Create: `src/analytics/AnalyticsProvider.tsx`
- Modify: `src/App.tsx`

Note: `useMarketingEvents` doesn't exist yet — import it but leave it as a stub call until Task 5. We'll add it as a no-op import placeholder now and fill it in next task.

- [ ] **Step 1: Create `src/analytics/AnalyticsProvider.tsx`**

```tsx
import { usePageTracking } from './usePageTracking';
import { useMarketingEvents } from './useMarketingEvents';

export function AnalyticsProvider(): null {
  usePageTracking();
  useMarketingEvents();
  return null;
}
```

- [ ] **Step 2: Create stub `src/analytics/useMarketingEvents.ts`** (full implementation in Task 5)

```ts
export function useMarketingEvents(): void {
  // Implemented in Task 5
}
```

- [ ] **Step 3: Modify `src/App.tsx`**

Add the import after the existing ScrollToTop import:

```tsx
import { AnalyticsProvider } from './analytics/AnalyticsProvider';
```

Add `<AnalyticsProvider />` immediately after `<ScrollToTop />`:

```tsx
<BrowserRouter>
  <ScrollToTop />
  <AnalyticsProvider />
  <Routes>
```

Full updated `App.tsx`:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import ResinWork from "./pages/ResinWork.tsx";
import BlockPaving from "./pages/BlockPaving.tsx";
import Driveways from "./pages/Driveways.tsx";
import TarmacShingle from "./pages/TarmacShingle.tsx";
import StoneCarpets from "./pages/StoneCarpets.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { AnalyticsProvider } from "./analytics/AnalyticsProvider.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsProvider />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

- [ ] **Step 4: Verify app starts without errors**

```bash
npm run dev
```

Expected: Dev server starts on port 8080, no console errors

- [ ] **Step 5: Commit**

```bash
git add src/analytics/AnalyticsProvider.tsx src/analytics/useMarketingEvents.ts src/App.tsx
git commit -m "feat(analytics): wire AnalyticsProvider into App.tsx inside BrowserRouter"
```

---

## Task 5: `useMarketingEvents` — full implementation

**Files:**
- Modify: `src/analytics/useMarketingEvents.ts`
- Create: `src/analytics/useMarketingEvents.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `src/analytics/useMarketingEvents.test.tsx`:

```tsx
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, act, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { useMarketingEvents } from './useMarketingEvents';

function Harness() {
  useMarketingEvents();
  const navigate = useNavigate();
  return <button onClick={() => navigate('/next')}>nav</button>;
}

function wrap() {
  return render(
    <MemoryRouter initialEntries={['/']}><Harness /></MemoryRouter>
  );
}

describe('useMarketingEvents', () => {
  beforeEach(() => {
    window.dataLayer = [];
    vi.useFakeTimers();
    Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, value: 2000 });
    Object.defineProperty(window, 'innerHeight', { configurable: true, value: 1000 });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('scroll_depth', () => {
    it('fires at 25% scroll', () => {
      wrap();
      Object.defineProperty(window, 'scrollY', { configurable: true, value: 250 });
      fireEvent.scroll(window);
      const events = window.dataLayer.filter((e) => e['event'] === 'scroll_depth');
      expect(events).toHaveLength(1);
      expect(events[0]).toMatchObject({ depth_percentage: 25, page_path: '/' });
    });

    it('does not fire the same milestone twice on one page', () => {
      wrap();
      Object.defineProperty(window, 'scrollY', { configurable: true, value: 250 });
      fireEvent.scroll(window);
      fireEvent.scroll(window);
      const events = window.dataLayer.filter((e) => e['event'] === 'scroll_depth' && e['depth_percentage'] === 25);
      expect(events).toHaveLength(1);
    });
  });

  describe('time_on_page', () => {
    it('fires at 30s', () => {
      wrap();
      act(() => { vi.advanceTimersByTime(30000); });
      const events = window.dataLayer.filter((e) => e['event'] === 'time_on_page');
      expect(events.some((e) => e['milestone_seconds'] === 30)).toBe(true);
    });

    it('fires at 60s', () => {
      wrap();
      act(() => { vi.advanceTimersByTime(60000); });
      const events = window.dataLayer.filter((e) => e['event'] === 'time_on_page');
      expect(events.some((e) => e['milestone_seconds'] === 60)).toBe(true);
    });
  });

  describe('exit_intent', () => {
    it('fires when mouse leaves near top', () => {
      wrap();
      fireEvent.mouseLeave(document, { clientY: 5 });
      const events = window.dataLayer.filter((e) => e['event'] === 'exit_intent');
      expect(events).toHaveLength(1);
      expect(events[0]).toMatchObject({ page_path: '/' });
    });

    it('does not fire when mouse leaves lower on page', () => {
      wrap();
      fireEvent.mouseLeave(document, { clientY: 200 });
      const events = window.dataLayer.filter((e) => e['event'] === 'exit_intent');
      expect(events).toHaveLength(0);
    });

    it('fires only once per page', () => {
      wrap();
      fireEvent.mouseLeave(document, { clientY: 5 });
      fireEvent.mouseLeave(document, { clientY: 5 });
      expect(window.dataLayer.filter((e) => e['event'] === 'exit_intent')).toHaveLength(1);
    });
  });

  describe('form_start', () => {
    it('fires on first focus of a form input', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}><>
          <Harness />
          <form data-form-name="test-form"><input name="x" /></form>
        </></MemoryRouter>
      );
      const input = container.querySelector('input')!;
      fireEvent.focusIn(document, { target: input });
      const events = window.dataLayer.filter((e) => e['event'] === 'form_start');
      expect(events).toHaveLength(1);
      expect(events[0]).toMatchObject({ form_name: 'test-form', page_path: '/' });
    });

    it('does not fire a second time on re-focus', () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}><>
          <Harness />
          <form data-form-name="test-form"><input name="x" /></form>
        </></MemoryRouter>
      );
      const input = container.querySelector('input')!;
      fireEvent.focusIn(document, { target: input });
      fireEvent.focusIn(document, { target: input });
      expect(window.dataLayer.filter((e) => e['event'] === 'form_start')).toHaveLength(1);
    });
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- useMarketingEvents.test
```

Expected: FAIL — tests fail because the hook is a no-op stub

- [ ] **Step 3: Replace `src/analytics/useMarketingEvents.ts` with full implementation**

```ts
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent } from './track';

const SCROLL_THRESHOLDS = [25, 50, 75, 90];
const TIME_MILESTONES = [30, 60, 180];

export function useMarketingEvents(): void {
  const location = useLocation();
  const pagePath = location.pathname;

  // Per-page milestone state — all refs, no module-level variables
  const scrollFiredRef = useRef<Set<number>>(new Set());
  const timeoutIdsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const exitFiredRef = useRef(false);
  const prevPathRef = useRef(pagePath);
  const formStartedRef = useRef<Map<string, number>>(new Map()); // formName → filled field count
  const formSubmittedRef = useRef<Set<string>>(new Set());

  // Reset all per-page state on route change; fire form_abandon for any started-but-not-submitted forms
  useEffect(() => {
    const prevPath = prevPathRef.current;
    prevPathRef.current = pagePath;

    if (prevPath !== pagePath) {
      formStartedRef.current.forEach((fieldsCompleted, formName) => {
        if (!formSubmittedRef.current.has(formName)) {
          trackEvent('form_abandon', {
            form_name: formName,
            fields_completed: fieldsCompleted,
            page_path: prevPath,
          });
        }
      });
      scrollFiredRef.current = new Set();
      exitFiredRef.current = false;
      formStartedRef.current = new Map();
      formSubmittedRef.current = new Set();
    }
  }, [pagePath]);

  // Scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((scrollTop / docHeight) * 100);
      for (const threshold of SCROLL_THRESHOLDS) {
        if (pct >= threshold && !scrollFiredRef.current.has(threshold)) {
          scrollFiredRef.current.add(threshold);
          trackEvent('scroll_depth', { depth_percentage: threshold, page_path: pagePath });
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pagePath]);

  // Time on page
  useEffect(() => {
    timeoutIdsRef.current.forEach(clearTimeout);
    timeoutIdsRef.current = TIME_MILESTONES.map((seconds) =>
      setTimeout(() => {
        trackEvent('time_on_page', { milestone_seconds: seconds, page_path: pagePath });
      }, seconds * 1000)
    );
    return () => {
      timeoutIdsRef.current.forEach(clearTimeout);
      timeoutIdsRef.current = [];
    };
  }, [pagePath]);

  // Exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !exitFiredRef.current) {
        exitFiredRef.current = true;
        trackEvent('exit_intent', { page_path: pagePath });
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [pagePath]);

  // Section viewed — observes elements with data-section attribute
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-section]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = (entry.target as HTMLElement).dataset.section ?? '';
            trackEvent('section_viewed', { section_name: sectionName, page_path: pagePath });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pagePath]);

  // Form start — delegated focusin on document
  useEffect(() => {
    const handleFocusin = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') return;
      const form = target.closest('form');
      if (!form) return;
      const formName = (form as HTMLFormElement).dataset.formName ?? 'unknown';
      if (!formStartedRef.current.has(formName)) {
        formStartedRef.current.set(formName, 0);
        trackEvent('form_start', { form_name: formName, page_path: pagePath });
      }
      // Update field count each focus so abandon has an accurate count
      const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
      const filled = Array.from(fields).filter((f) => f.value.trim() !== '').length;
      formStartedRef.current.set(formName, filled);
    };
    document.addEventListener('focusin', handleFocusin);
    return () => document.removeEventListener('focusin', handleFocusin);
  }, [pagePath]);

  // Form submit detection — marks form as submitted so abandon doesn't fire
  useEffect(() => {
    const handleSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement;
      const formName = form.dataset.formName ?? 'unknown';
      formSubmittedRef.current.add(formName);
    };
    document.addEventListener('submit', handleSubmit);
    return () => document.removeEventListener('submit', handleSubmit);
  }, [pagePath]);
}
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
npm test -- useMarketingEvents.test
```

Expected: all tests pass

- [ ] **Step 5: Commit**

```bash
git add src/analytics/useMarketingEvents.ts src/analytics/useMarketingEvents.test.tsx
git commit -m "feat(analytics): implement useMarketingEvents — scroll, time, exit, section, form events"
```

---

## Task 6: CTA tracking — `Hero.tsx`

**Files:**
- Modify: `src/components/Hero.tsx`

The "Get a Free Quote" button is an `<a href="#contact">`. Add an `onClick` handler.

- [ ] **Step 1: Add import and onClick to `src/components/Hero.tsx`**

Add import at top of file (after existing imports):

```tsx
import { trackEvent } from '@/analytics/track';
```

Replace the `<a href="#contact" ...>` element (line ~84) with:

```tsx
<a
  href="#contact"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Hero Get a Free Quote',
      cta_type: 'button_click',
      cta_location: 'hero',
      cta_page: window.location.pathname,
      cta_destination: '#contact',
    })
  }
  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-xl transition-all hover:bg-accent/90 focus:ring-4 focus:ring-accent/50 active:scale-95 group"
>
  Get a Free Quote
  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
</a>
```

- [ ] **Step 2: Verify no compile errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: build completes with no TypeScript errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat(analytics): track Hero Get a Free Quote CTA"
```

---

## Task 7: CTA tracking — `CTABanner.tsx` + `PageCTA.tsx`

**Files:**
- Modify: `src/components/CTABanner.tsx`
- Modify: `src/components/PageCTA.tsx`

- [ ] **Step 1: Update `src/components/CTABanner.tsx`**

Add import:

```tsx
import { trackEvent } from '@/analytics/track';
```

Replace both `<a>` elements in the button group:

```tsx
<a
  href="tel:+441245000000"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'CTABanner Call Us',
      cta_type: 'link_click',
      cta_location: 'cta_banner',
      cta_page: window.location.pathname,
      cta_destination: 'tel:+441245000000',
    })
  }
  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
>
  <Phone size={16} />
  Call Us
</a>
<a
  href="mailto:info@andyharraganandsons.co.uk"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'CTABanner Email Us',
      cta_type: 'link_click',
      cta_location: 'cta_banner',
      cta_page: window.location.pathname,
      cta_destination: 'mailto:info@andyharraganandsons.co.uk',
    })
  }
  className="flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
>
  <Mail size={16} />
  Email Us
</a>
```

- [ ] **Step 2: Update `src/components/PageCTA.tsx`**

Add import:

```tsx
import { trackEvent } from '@/analytics/track';
```

Replace both action elements:

```tsx
<a
  href="tel:+441245000000"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'PageCTA Call Us',
      cta_type: 'link_click',
      cta_location: 'page_cta',
      cta_page: window.location.pathname,
      cta_destination: 'tel:+441245000000',
    })
  }
  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
>
  <Phone size={16} /> Call Us
</a>
<Link
  to="/contact"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'PageCTA Contact Us',
      cta_type: 'link_click',
      cta_location: 'page_cta',
      cta_page: window.location.pathname,
      cta_destination: '/contact',
    })
  }
  className="flex items-center justify-center gap-2 bg-primary-foreground/10 border border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors"
>
  <Mail size={16} /> Contact Us
</Link>
```

- [ ] **Step 3: Verify build**

```bash
npm run build 2>&1 | tail -10
```

Expected: clean build

- [ ] **Step 4: Commit**

```bash
git add src/components/CTABanner.tsx src/components/PageCTA.tsx
git commit -m "feat(analytics): track CTABanner and PageCTA CTAs"
```

---

## Task 8: CTA tracking — `Navbar.tsx`

**Files:**
- Modify: `src/components/Navbar.tsx`

Four CTAs: desktop phone link, desktop "Get a Quote" button, mobile phone link, mobile "Get a Quote" button.

- [ ] **Step 1: Add import to `src/components/Navbar.tsx`**

```tsx
import { trackEvent } from '@/analytics/track';
```

- [ ] **Step 2: Add onClick to desktop phone link** (the `<a href="tel:+441245768150">` in the desktop button group, around line 134)

```tsx
<a
  href="tel:+441245768150"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Navbar Phone Desktop',
      cta_type: 'link_click',
      cta_location: 'nav',
      cta_page: window.location.pathname,
      cta_destination: 'tel:+441245768150',
    })
  }
  className="flex items-center gap-2 text-primary-foreground text-sm font-bold tracking-wide transition-colors hover:text-accent"
>
  <Phone size={14} className="text-accent" /> 01245 768 150
</a>
```

- [ ] **Step 3: Add onClick to desktop "Get a Quote" Link** (around line 141)

```tsx
<Link
  to="/contact"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Navbar Get a Quote Desktop',
      cta_type: 'button_click',
      cta_location: 'nav',
      cta_page: window.location.pathname,
      cta_destination: '/contact',
    })
  }
  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-5 py-2.5 rounded-md text-xs uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-95 shadow-md flex items-center justify-center"
>
  Get a Quote
</Link>
```

- [ ] **Step 4: Add onClick to mobile phone link** (the `<a href="tel:+441245768150">` in the mobile menu, around line 250)

```tsx
<a
  href="tel:+441245768150"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Navbar Phone Mobile',
      cta_type: 'link_click',
      cta_location: 'nav',
      cta_page: window.location.pathname,
      cta_destination: 'tel:+441245768150',
    })
  }
  className="flex items-center justify-center gap-2 text-primary-foreground text-sm font-bold tracking-wide transition-colors hover:text-accent py-3 mb-2"
>
  <Phone size={16} className="text-accent" /> 01245 768 150
</a>
```

- [ ] **Step 5: Add onClick to mobile "Get a Quote" Link** (around line 254)

```tsx
<Link
  to="/contact"
  onClick={() => {
    setMobileOpen(false);
    trackEvent('cta_interaction', {
      cta_name: 'Navbar Get a Quote Mobile',
      cta_type: 'button_click',
      cta_location: 'nav',
      cta_page: window.location.pathname,
      cta_destination: '/contact',
    });
  }}
  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3.5 rounded-md font-bold text-sm uppercase tracking-wider shadow-lg transition-transform active:scale-95"
>
  Get a Quote
</Link>
```

- [ ] **Step 6: Verify build**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 7: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(analytics): track Navbar CTAs (phone + Get a Quote, desktop + mobile)"
```

---

## Task 9: CTA tracking — `Footer.tsx`

**Files:**
- Modify: `src/components/Footer.tsx`

Five CTAs: phone, email, Facebook, Instagram, LinkedIn.

- [ ] **Step 1: Add import**

```tsx
import { trackEvent } from '@/analytics/track';
```

- [ ] **Step 2: Add onClick to phone link**

```tsx
<a
  href="tel:01245768150"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Footer Phone',
      cta_type: 'link_click',
      cta_location: 'footer',
      cta_page: window.location.pathname,
      cta_destination: 'tel:01245768150',
    })
  }
  className="transition-colors hover:text-primary-foreground"
>
  01245 768 150
</a>
```

- [ ] **Step 3: Add onClick to email link**

```tsx
<a
  href="mailto:info@andyharraganandsons.co.uk"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Footer Email',
      cta_type: 'link_click',
      cta_location: 'footer',
      cta_page: window.location.pathname,
      cta_destination: 'mailto:info@andyharraganandsons.co.uk',
    })
  }
  className="break-all transition-colors hover:text-primary-foreground"
>
  info@andyharraganandsons.co.uk
</a>
```

- [ ] **Step 4: Add onClick to social links** (Facebook, Instagram, LinkedIn)

```tsx
<a
  href="https://facebook.com"
  target="_blank"
  rel="noreferrer"
  aria-label="Facebook"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Footer Facebook',
      cta_type: 'link_click',
      cta_location: 'footer',
      cta_page: window.location.pathname,
      cta_destination: 'https://facebook.com',
    })
  }
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-foreground/70 transition hover:border-white/25 hover:text-primary-foreground"
>
  <Facebook size={16} />
</a>

<a
  href="https://instagram.com"
  target="_blank"
  rel="noreferrer"
  aria-label="Instagram"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Footer Instagram',
      cta_type: 'link_click',
      cta_location: 'footer',
      cta_page: window.location.pathname,
      cta_destination: 'https://instagram.com',
    })
  }
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-foreground/70 transition hover:border-white/25 hover:text-primary-foreground"
>
  <Instagram size={16} />
</a>

<a
  href="https://linkedin.com"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Footer LinkedIn',
      cta_type: 'link_click',
      cta_location: 'footer',
      cta_page: window.location.pathname,
      cta_destination: 'https://linkedin.com',
    })
  }
  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-foreground/70 transition hover:border-white/25 hover:text-primary-foreground"
>
  <Linkedin size={16} />
</a>
```

- [ ] **Step 5: Verify build + commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/Footer.tsx
git commit -m "feat(analytics): track Footer CTAs (phone, email, social links)"
```

---

## Task 10: CTA tracking — `ContactSection.tsx`

**Files:**
- Modify: `src/components/sections/ContactSection.tsx`

Three CTAs: form submit, email anchor, phone anchor. Also add `data-form-name` on the form and `data-section` on the section for marketing events.

- [ ] **Step 1: Add import**

```tsx
import { trackEvent } from '@/analytics/track';
```

- [ ] **Step 2: Update `handleSubmit` to track form submit**

Replace the existing `handleSubmit`:

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const fd = new FormData(form);
  const name = String(fd.get('fullName') ?? '').trim();
  const email = String(fd.get('email') ?? '').trim();
  const phone = String(fd.get('phone') ?? '').trim();
  const fieldsCompleted = [name, email, phone].filter(Boolean).length;

  trackEvent('cta_interaction', {
    cta_name: 'ContactSection Quote Form Submit',
    cta_type: 'form_submit',
    cta_location: 'contact_section',
    cta_page: window.location.pathname,
    cta_destination: '',
    form_fields_completed: fieldsCompleted,
  });

  alert('Thank you for your enquiry. We will be in touch shortly.');
  sendQuoteConfirmationEmail({ name, email });
};
```

- [ ] **Step 3: Add `data-form-name` to the `<form>` element and `data-section` to the `<section>`**

Change the opening `<section>` tag:

```tsx
<section id="contact" data-section="contact" className="bg-zinc-950 text-white py-24 md:py-32">
```

Change the `<form>` opening tag:

```tsx
<form className="space-y-10 group/form" onSubmit={handleSubmit} data-form-name="contact-section-quote">
```

- [ ] **Step 4: Add onClick to email anchor**

```tsx
<a
  href="mailto:info@andyharraganandsons.co.uk"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'ContactSection Email',
      cta_type: 'link_click',
      cta_location: 'contact_section',
      cta_page: window.location.pathname,
      cta_destination: 'mailto:info@andyharraganandsons.co.uk',
    })
  }
  className="group flex flex-col gap-3 transition"
>
```

- [ ] **Step 5: Add onClick to phone anchor**

```tsx
<a
  href="tel:01245768150"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'ContactSection Phone',
      cta_type: 'link_click',
      cta_location: 'contact_section',
      cta_page: window.location.pathname,
      cta_destination: 'tel:01245768150',
    })
  }
  className="group flex flex-col gap-3 transition"
>
```

- [ ] **Step 6: Verify build + commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/sections/ContactSection.tsx
git commit -m "feat(analytics): track ContactSection form submit + direct contact links"
```

---

## Task 11: CTA tracking — `Contact.tsx` (page)

**Files:**
- Modify: `src/pages/Contact.tsx`

Six CTAs: form submit, phone anchor, email anchor, Facebook, Instagram, LinkedIn. Add `data-form-name` to form.

- [ ] **Step 1: Add import**

```tsx
import { trackEvent } from '@/analytics/track';
```

- [ ] **Step 2: Update `handleSubmit`**

Replace the existing `handleSubmit`:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const fieldsCompleted = Object.values(formData).filter((v) => v.trim() !== '').length;

  trackEvent('cta_interaction', {
    cta_name: 'Contact Page Quote Form Submit',
    cta_type: 'form_submit',
    cta_location: 'contact_page',
    cta_page: window.location.pathname,
    cta_destination: '',
    form_fields_completed: fieldsCompleted,
  });

  alert('Thank you for your enquiry. We will be in touch shortly.');
  sendQuoteConfirmationEmail({
    name: formData.name.trim(),
    email: formData.email.trim(),
  });
};
```

- [ ] **Step 3: Add `data-form-name` to the `<form>` element**

```tsx
<form onSubmit={handleSubmit} className="mt-8 space-y-5" data-form-name="contact-page-quote">
```

- [ ] **Step 4: Add onClick to the phone anchor** (the `<a href="tel:01245768150">` in the Direct Contact card)

```tsx
<a
  href="tel:01245768150"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Contact Page Phone',
      cta_type: 'link_click',
      cta_location: 'contact_page',
      cta_page: window.location.pathname,
      cta_destination: 'tel:01245768150',
    })
  }
  className="flex items-start gap-4 text-black transition hover:opacity-75"
>
```

- [ ] **Step 5: Add onClick to the email anchor**

```tsx
<a
  href="mailto:aharraganandson@aol.com"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Contact Page Email',
      cta_type: 'link_click',
      cta_location: 'contact_page',
      cta_page: window.location.pathname,
      cta_destination: 'mailto:aharraganandson@aol.com',
    })
  }
  className="flex items-start gap-4 text-black transition hover:opacity-75"
>
```

- [ ] **Step 6: Add onClick to social links** (Facebook, Instagram, LinkedIn in the Social Media card)

```tsx
<a
  href="https://facebook.com"
  target="_blank"
  rel="noreferrer"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Contact Page Facebook',
      cta_type: 'link_click',
      cta_location: 'contact_page',
      cta_page: window.location.pathname,
      cta_destination: 'https://facebook.com',
    })
  }
  className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-4 text-sm font-medium text-black transition hover:border-black/25 hover:bg-black/[0.03]"
>
  <Facebook className="h-5 w-5" />
  Facebook
</a>

<a
  href="https://instagram.com"
  target="_blank"
  rel="noreferrer"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Contact Page Instagram',
      cta_type: 'link_click',
      cta_location: 'contact_page',
      cta_page: window.location.pathname,
      cta_destination: 'https://instagram.com',
    })
  }
  className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-4 text-sm font-medium text-black transition hover:border-black/25 hover:bg-black/[0.03]"
>
  <Instagram className="h-5 w-5" />
  Instagram
</a>

<a
  href="https://linkedin.com"
  target="_blank"
  rel="noreferrer"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'Contact Page LinkedIn',
      cta_type: 'link_click',
      cta_location: 'contact_page',
      cta_page: window.location.pathname,
      cta_destination: 'https://linkedin.com',
    })
  }
  className="flex items-center gap-3 rounded-2xl border border-black/10 px-4 py-4 text-sm font-medium text-black transition hover:border-black/25 hover:bg-black/[0.03]"
>
  <Linkedin className="h-5 w-5" />
  LinkedIn
</a>
```

- [ ] **Step 7: Verify build + commit**

```bash
npm run build 2>&1 | tail -10
git add src/pages/Contact.tsx
git commit -m "feat(analytics): track Contact page form submit + all direct contact + social CTAs"
```

---

## Task 12: CTA tracking — `ServiceHero.tsx` + `SplitSection.tsx`

**Files:**
- Modify: `src/components/sections/ServiceHero.tsx`
- Modify: `src/components/SplitSection.tsx`

- [ ] **Step 1: Update `src/components/sections/ServiceHero.tsx`**

Add import:

```tsx
import { trackEvent } from '@/analytics/track';
```

Replace the contact label anchor (the `<a href="#cta">` around line 82):

```tsx
<a
  href="#cta"
  onClick={() =>
    trackEvent('cta_interaction', {
      cta_name: 'ServiceHero Contact CTA',
      cta_type: 'link_click',
      cta_location: 'service_hero',
      cta_page: window.location.pathname,
      cta_destination: '#cta',
    })
  }
  className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/90"
>
  {contactLabel}
  <MousePointerClick className="h-4 w-4" />
</a>
```

Replace the "Explore more" button (around line 90):

```tsx
<button
  type="button"
  onClick={() => {
    scrollToFirstSection();
    trackEvent('cta_interaction', {
      cta_name: 'ServiceHero Explore More',
      cta_type: 'button_click',
      cta_location: 'service_hero',
      cta_page: window.location.pathname,
      cta_destination: '',
    });
  }}
  className="inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white/80 px-5 py-3.5 text-sm font-semibold text-black backdrop-blur-sm transition hover:bg-white"
  aria-label="Scroll to first section"
>
  Explore more
  <ArrowRight className="h-4 w-4" />
</button>
```

- [ ] **Step 2: Update `src/components/SplitSection.tsx`**

Add import:

```tsx
import { trackEvent } from '@/analytics/track';
```

Replace both the `<a>` and `<button>` in the content area:

```tsx
{buttonHref ? (
  <a
    href={buttonHref}
    onClick={() =>
      trackEvent('cta_interaction', {
        cta_name: 'SplitSection CTA',
        cta_type: 'link_click',
        cta_location: 'split_section',
        cta_page: window.location.pathname,
        cta_destination: buttonHref,
      })
    }
    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-[15px] font-semibold hover:bg-zinc-800"
  >
    {buttonText}
  </a>
) : (
  <button
    onClick={() => {
      if (onClick) onClick();
      trackEvent('cta_interaction', {
        cta_name: 'SplitSection CTA',
        cta_type: 'button_click',
        cta_location: 'split_section',
        cta_page: window.location.pathname,
        cta_destination: '',
      });
    }}
    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-[15px] font-semibold hover:bg-zinc-800"
  >
    {buttonText}
  </button>
)}
```

- [ ] **Step 3: Verify build + commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/sections/ServiceHero.tsx src/components/SplitSection.tsx
git commit -m "feat(analytics): track ServiceHero and SplitSection CTAs"
```

---

## Task 13: Add `data-section` attributes to key page sections

This is a minor addition to non-CTA components to enable `section_viewed` tracking. Only the outer `<section>` element of each key area is touched — no logic or styling changes.

**Files to scan and add `data-section` to:**

Add `data-section="<name>"` to the outermost `<section>` tag of each component listed below.

- [ ] **Step 1: Hero.tsx** — add `data-section="hero"` to the `<section>` element (line 29)

```tsx
<section data-section="hero" className="relative isolate overflow-hidden min-h-[100svh] sm:min-h-[680px] lg:min-h-[760px] flex items-start sm:items-center">
```

- [ ] **Step 2: CTABanner.tsx** — add `data-section="cta_banner"` to the `<section>` element (line 4)

```tsx
<section id="contact" data-section="cta_banner" className="relative z-10 pb-0 scroll-mt-24">
```

- [ ] **Step 3: PageCTA.tsx** — add `data-section="page_cta"` to the `<section>` element (line 5)

```tsx
<section data-section="page_cta" className="py-20 bg-background">
```

- [ ] **Step 4: Verify build + run full test suite**

```bash
npm run build 2>&1 | tail -10
npm test
```

Expected: build clean, all tests pass

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.tsx src/components/CTABanner.tsx src/components/PageCTA.tsx
git commit -m "feat(analytics): add data-section attributes for section_viewed IntersectionObserver"
```

---

## Final Verification Checklist

After all tasks are complete, verify against the done criteria from the spec:

- [ ] Open browser DevTools → Console → navigate between routes → confirm `spa_pageview` fires on each navigation but NOT on first load
- [ ] Confirm `window.dataLayer[0]` is `{ event: 'consent_default', analytics_storage: 'denied' }`
- [ ] Click each CTA listed in the spec CTA map → confirm `cta_interaction` events appear in `window.dataLayer` with all required fields
- [ ] Let page sit 30 seconds → confirm `time_on_page` with `milestone_seconds: 30` fires
- [ ] Scroll to bottom → confirm `scroll_depth` events at 25/50/75/90
- [ ] Move mouse to top of browser window → confirm `exit_intent` fires once
- [ ] Focus a form field, navigate away → confirm `form_abandon` fires
- [ ] Submit a form, navigate away → confirm `form_abandon` does NOT fire
- [ ] Run `npm test` → all tests pass
- [ ] Run `npm run build` → no errors
- [ ] Confirm zero `window.dataLayer.push(` calls exist outside `src/analytics/track.ts`

```bash
grep -r "dataLayer.push" src/ --include="*.ts" --include="*.tsx" | grep -v "src/analytics/track.ts"
```

Expected: no output
