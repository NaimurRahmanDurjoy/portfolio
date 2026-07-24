/**
 * Analytics Utility
 * Prepares the application for Google Analytics, Vercel Analytics, and Plausible.
 */

type EventParams = Record<string, string | number | boolean>;

export const trackEvent = (eventName: string, params?: EventParams) => {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }

  // Plausible
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props: params });
  }

  // Vercel Analytics (handled natively via @vercel/analytics if installed)
  
  // Console logging for development
  if (import.meta.env.DEV) {
    console.log(`[Analytics Track]: ${eventName}`, params);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};
