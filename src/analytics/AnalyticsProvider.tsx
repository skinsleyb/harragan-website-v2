import { usePageTracking } from './usePageTracking';
import { useMarketingEvents } from './useMarketingEvents';

export function AnalyticsProvider(): null {
  usePageTracking();
  useMarketingEvents();
  return null;
}
