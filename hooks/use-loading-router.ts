'use client';

import { useRouter as useNextRouter } from 'next/navigation';
import { useCallback } from 'react';

export function useLoadingRouter() {
  const router = useNextRouter();

  const push = useCallback((href: string) => {
    // Trigger loading immediately
    const loadingEvent = new CustomEvent('route-loading-start');
    window.dispatchEvent(loadingEvent);
    
    // Navigate
    router.push(href);
  }, [router]);

  const replace = useCallback((href: string) => {
    // Trigger loading immediately
    const loadingEvent = new CustomEvent('route-loading-start');
    window.dispatchEvent(loadingEvent);
    
    // Navigate
    router.replace(href);
  }, [router]);

  const back = useCallback(() => {
    // Trigger loading immediately
    const loadingEvent = new CustomEvent('route-loading-start');
    window.dispatchEvent(loadingEvent);
    
    // Navigate
    router.back();
  }, [router]);

  const forward = useCallback(() => {
    // Trigger loading immediately
    const loadingEvent = new CustomEvent('route-loading-start');
    window.dispatchEvent(loadingEvent);
    
    // Navigate
    router.forward();
  }, [router]);

  return {
    push,
    replace,
    back,
    forward,
    refresh: router.refresh,
    prefetch: router.prefetch,
  };
}