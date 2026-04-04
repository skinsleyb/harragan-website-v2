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
