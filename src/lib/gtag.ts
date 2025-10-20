/**
 * Google Analytics 4 (GA4) Integration
 *
 * Core Google Tag Manager functions for tracking events, pageviews, and conversions
 * Used across the application for comprehensive analytics
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Type definitions for event parameters
export interface GtagEventParams {
  [key: string]: any
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: GtagEventParams
    ) => void
    dataLayer: any[]
  }
}

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
  if (typeof window === 'undefined') return

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []

  // Define gtag function
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  // Set gtag on window
  window.gtag = gtag as any

  // Initialize with current date
  window.gtag('js', new Date())

  // Configure GA4
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
    send_page_view: false, // We'll manually track page views
  })
}

/**
 * Check if Google Analytics is loaded
 */
export const isGALoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag !== 'undefined'
}

/**
 * Track a pageview in Google Analytics
 */
export const pageview = (url: string, title?: string) => {
  if (!isGALoaded()) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
  })
}

/**
 * Track a custom event in Google Analytics
 */
export const event = (
  eventName: string,
  params?: GtagEventParams
) => {
  if (!isGALoaded()) return

  window.gtag('event', eventName, params)
}

/**
 * Track user properties
 */
export const setUserProperties = (properties: GtagEventParams) => {
  if (!isGALoaded()) return

  window.gtag('set', 'user_properties', properties)
}

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth: number, page: string) => {
  event('scroll_depth', {
    depth,
    page,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track time on page
 */
export const trackTimeOnPage = (duration: number, page: string) => {
  event('time_on_page', {
    duration_seconds: Math.round(duration),
    page,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Enhanced E-commerce Events
 */

// Track product/course view
export const trackProductView = (
  productId: string,
  productName: string,
  price: number,
  category?: string
) => {
  event('view_item', {
    currency: 'USD',
    value: price,
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: category || 'Course',
        price: price,
        quantity: 1,
      },
    ],
  })
}

// Track add to cart (course selection)
export const trackAddToCart = (
  productId: string,
  productName: string,
  price: number
) => {
  event('add_to_cart', {
    currency: 'USD',
    value: price,
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: 'Course',
        price: price,
        quantity: 1,
      },
    ],
  })
}

// Track checkout begin
export const trackBeginCheckout = (
  productId: string,
  productName: string,
  price: number
) => {
  event('begin_checkout', {
    currency: 'USD',
    value: price,
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: 'Course',
        price: price,
        quantity: 1,
      },
    ],
  })
}

// Track purchase (conversion)
export const trackPurchase = (
  transactionId: string,
  revenue: number,
  items: Array<{
    item_id: string
    item_name: string
    price: number
    quantity: number
  }>
) => {
  event('purchase', {
    transaction_id: transactionId,
    currency: 'USD',
    value: revenue,
    items: items,
  })
}

/**
 * User Journey Events
 */

// Track CTA clicks
export const trackCTAClick = (
  ctaLocation: string,
  ctaText: string,
  ctaDestination: string
) => {
  event('cta_click', {
    cta_location: ctaLocation,
    cta_text: ctaText,
    cta_destination: ctaDestination,
    timestamp: new Date().toISOString(),
  })
}

// Track navigation clicks
export const trackNavClick = (
  linkText: string,
  linkDestination: string,
  linkType: 'main_nav' | 'dropdown' | 'mobile' | 'footer'
) => {
  event('navigation_click', {
    link_text: linkText,
    link_destination: linkDestination,
    link_type: linkType,
    timestamp: new Date().toISOString(),
  })
}

// Track social icon clicks
export const trackSocialClick = (
  platform: string,
  location: 'header' | 'footer' | 'content'
) => {
  event('social_click', {
    platform,
    location,
    timestamp: new Date().toISOString(),
  })
}

// Track video engagement
export const trackVideoPlay = (
  videoTitle: string,
  videoId: string,
  location: string
) => {
  event('video_play', {
    video_title: videoTitle,
    video_id: videoId,
    location,
    timestamp: new Date().toISOString(),
  })
}

// Track form submissions
export const trackFormSubmit = (
  formName: string,
  formLocation: string,
  success: boolean
) => {
  event('form_submit', {
    form_name: formName,
    form_location: formLocation,
    success,
    timestamp: new Date().toISOString(),
  })
}

// Track newsletter signups
export const trackNewsletterSignup = (
  location: string,
  email?: string
) => {
  event('newsletter_signup', {
    location,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Engagement Metrics
 */

// Track engagement score
export const trackEngagement = (
  engagementType: string,
  engagementValue: number,
  page: string
) => {
  event('user_engagement', {
    engagement_type: engagementType,
    engagement_value: engagementValue,
    page,
    timestamp: new Date().toISOString(),
  })
}

// Track rage clicks (user frustration)
export const trackRageClick = (
  element: string,
  clickCount: number,
  page: string
) => {
  event('rage_click', {
    element,
    click_count: clickCount,
    page,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Error Tracking
 */
export const trackError = (
  errorType: string,
  errorMessage: string,
  page: string,
  fatal: boolean = false
) => {
  event('error', {
    error_type: errorType,
    error_message: errorMessage,
    page,
    fatal,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Checkout Funnel Events
 */

// Track checkout step
export const trackCheckoutStep = (
  step: number,
  stepName: string,
  productId: string,
  productName: string
) => {
  event('checkout_progress', {
    step,
    step_name: stepName,
    item_id: productId,
    item_name: productName,
    timestamp: new Date().toISOString(),
  })
}

// Track payment method selected
export const trackPaymentMethod = (
  method: string,
  productId: string
) => {
  event('payment_method_selected', {
    payment_method: method,
    item_id: productId,
    timestamp: new Date().toISOString(),
  })
}

// Track checkout abandonment
export const trackCheckoutAbandonment = (
  productId: string,
  productName: string,
  price: number,
  step: string
) => {
  event('checkout_abandoned', {
    item_id: productId,
    item_name: productName,
    value: price,
    abandoned_at_step: step,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Blog & Content Tracking
 */

// Track blog post view
export const trackBlogView = (
  postTitle: string,
  postSlug: string,
  category: string,
  readingTime: number
) => {
  event('blog_view', {
    post_title: postTitle,
    post_slug: postSlug,
    category,
    estimated_reading_time: readingTime,
    timestamp: new Date().toISOString(),
  })
}

// Track blog post read completion
export const trackBlogReadComplete = (
  postTitle: string,
  postSlug: string,
  actualReadTime: number
) => {
  event('blog_read_complete', {
    post_title: postTitle,
    post_slug: postSlug,
    actual_read_time: actualReadTime,
    timestamp: new Date().toISOString(),
  })
}

// Track internal link clicks in blog posts
export const trackInternalLinkClick = (
  sourcePost: string,
  destinationPost: string,
  linkText: string
) => {
  event('internal_link_click', {
    source_post: sourcePost,
    destination_post: destinationPost,
    link_text: linkText,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Search Tracking
 */
export const trackSiteSearch = (
  searchTerm: string,
  resultsCount: number,
  location: string
) => {
  event('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    location,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Outbound Link Tracking
 */
export const trackOutboundLink = (
  destination: string,
  linkText: string,
  location: string
) => {
  event('outbound_link_click', {
    destination,
    link_text: linkText,
    location,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Download Tracking
 */
export const trackDownload = (
  fileName: string,
  fileType: string,
  location: string
) => {
  event('file_download', {
    file_name: fileName,
    file_type: fileType,
    location,
    timestamp: new Date().toISOString(),
  })
}

/**
 * User Timing
 */
export const trackTiming = (
  category: string,
  variable: string,
  value: number,
  label?: string
) => {
  event('timing_complete', {
    name: variable,
    value: Math.round(value),
    event_category: category,
    event_label: label,
  })
}

export default {
  initGA,
  isGALoaded,
  pageview,
  event,
  setUserProperties,
  trackScrollDepth,
  trackTimeOnPage,
  trackProductView,
  trackAddToCart,
  trackBeginCheckout,
  trackPurchase,
  trackCTAClick,
  trackNavClick,
  trackSocialClick,
  trackVideoPlay,
  trackFormSubmit,
  trackNewsletterSignup,
  trackEngagement,
  trackRageClick,
  trackError,
  trackCheckoutStep,
  trackPaymentMethod,
  trackCheckoutAbandonment,
  trackBlogView,
  trackBlogReadComplete,
  trackInternalLinkClick,
  trackSiteSearch,
  trackOutboundLink,
  trackDownload,
  trackTiming,
}
