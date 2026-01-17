// Meta Pixel tracking utilities

// Declare fbq function type
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

/**
 * Track "Call Scheduled" conversion - main conversion event
 * Use this for ALL "Book a Call" button clicks AND completed Calendly bookings
 * @param source - The source of the conversion (e.g., 'header', 'hero_section', 'calendly_completed', etc.)
 */
export const trackCallScheduled = (source: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Track as custom CallScheduled event
    window.fbq('trackCustom', 'CallScheduled', {
      source: source,
      timestamp: new Date().toISOString()
    });
    
    console.log(`[Meta Pixel] 🎉 CallScheduled conversion tracked from: ${source}`);
  } else {
    console.warn('[Meta Pixel] fbq not available');
  }
};

