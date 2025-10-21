'use client'

/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals and sends to analytics
 *
 * Metrics tracked:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): Initial render
 * - TTFB (Time to First Byte): Server response
 * - INP (Interaction to Next Paint): Responsiveness (new metric)
 */

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Web Vitals]', {
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      })
    }

    // Send to Google Analytics if configured
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }

    // Send to custom analytics endpoint (optional)
    if (typeof window !== 'undefined') {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      })

      // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/web-vitals', body)
      } else {
        fetch('/api/analytics/web-vitals', {
          body,
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
        }).catch((error) => {
          // Silently fail - don't block user experience
          if (process.env.NODE_ENV === 'development') {
            console.error('[Web Vitals] Failed to send:', error)
          }
        })
      }
    }
  })

  return null
}
