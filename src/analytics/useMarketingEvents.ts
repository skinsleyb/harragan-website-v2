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

  // Reset all per-page state on route change; fire form_abandon for started-but-not-submitted forms
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
      // Update filled field count each focus so abandon has an accurate count
      const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
      const filled = Array.from(fields).filter((f) => f.value.trim() !== '').length;
      formStartedRef.current.set(formName, filled);
    };
    document.addEventListener('focusin', handleFocusin);
    return () => document.removeEventListener('focusin', handleFocusin);
  }, [pagePath]);

  // Form submit detection — marks form as submitted so abandon doesn't fire on navigation
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
