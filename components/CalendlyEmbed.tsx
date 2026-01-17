'use client';

import { useEffect, useRef } from 'react';
import { trackCallScheduled } from '@/utils/metaPixel';

interface CalendlyEmbedProps {
  url: string;
  source?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    };
  }
}

export default function CalendlyEmbed({ url, source = 'calendly_embed' }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly widget script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      // Initialize Calendly widget after script loads
      if (containerRef.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: containerRef.current,
        });
      }
    };
    
    document.body.appendChild(script);

    // Listen for Calendly events via postMessage
    const handleCalendlyEvent = (e: MessageEvent) => {
      // Only process messages from Calendly
      if (!e.data || typeof e.data !== 'object') return;
      
      const eventName = e.data.event;
      
      if (eventName && typeof eventName === 'string' && eventName.startsWith('calendly.')) {
        console.log('[Calendly Event]:', eventName);
        
        // Only track the final conversion - when call is actually scheduled
        if (eventName === 'calendly.event_scheduled') {
          console.log('🎉 SUCCESS! User scheduled a call via Calendly!');
          console.log('Event details:', e.data.payload);
          trackCallScheduled(`${source}_completed`);
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
      // Clean up script
      const scripts = document.querySelectorAll('script[src*="calendly"]');
      scripts.forEach(s => s.remove());
    };
  }, [source, url]);

  return (
    <div 
      ref={containerRef}
      className="calendly-inline-widget-container"
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: '700px',
        position: 'relative'
      }}
    />
  );
}
