declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params: Record<string, unknown>): void {
  if (!window.dataLayer) return;
  window.dataLayer.push({ event, ...params });
}
