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
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(window, 'innerHeight', {
      configurable: true,
      value: 1000,
    });
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
      const events = window.dataLayer.filter(
        (e) => e['event'] === 'scroll_depth' && e['depth_percentage'] === 25
      );
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
      fireEvent.focusIn(input);
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
      fireEvent.focusIn(input);
      fireEvent.focusIn(input);
      expect(window.dataLayer.filter((e) => e['event'] === 'form_start')).toHaveLength(1);
    });
  });
});
