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
