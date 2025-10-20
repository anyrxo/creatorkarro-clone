/**
 * Analytics Helper System
 *
 * Comprehensive analytics tracking system that works with GA4, Facebook Pixel,
 * and Microsoft Clarity for complete user journey tracking and conversion optimization.
 *
 * This module provides a unified interface for all analytics tracking needs.
 */

import * as gtag from './gtag'

// Microsoft Clarity integration
declare global {
  interface Window {
    clarity?: (command: string, ...args: any[]) => void
  }
}

/**
 * Initialize all analytics services
 */
export const initAnalytics = () => {
  if (typeof window === 'undefined') return

  // Initialize Google Analytics
  gtag.initGA()

  // Initialize Microsoft Clarity tracking
  if (window.clarity) {
    console.log('Microsoft Clarity initialized')
  }

  console.log('Analytics initialized successfully')
}

/**
 * Track page view across all platforms
 */
export const trackPageView = (url: string, title?: string) => {
  // Google Analytics
  gtag.pageview(url, title)

  // Microsoft Clarity custom page view
  if (window.clarity) {
    window.clarity('set', 'page', url)
  }

  console.log(`Page view tracked: ${url}`)
}

/**
 * Track custom event across all platforms
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  // Google Analytics
  gtag.event(eventName, params)

  // Microsoft Clarity custom event
  if (window.clarity) {
    window.clarity('event', eventName)
  }

  console.log(`Event tracked: ${eventName}`, params)
}

/**
 * Track conversion (purchase) across all platforms
 */
export const trackConversion = (
  courseId: string,
  courseName: string,
  revenue: number,
  transactionId: string
) => {
  // Google Analytics E-commerce
  gtag.trackPurchase(transactionId, revenue, [
    {
      item_id: courseId,
      item_name: courseName,
      price: revenue,
      quantity: 1,
    },
  ])

  // Microsoft Clarity conversion tag
  if (window.clarity) {
    window.clarity('event', 'purchase')
  }

  console.log(`Conversion tracked: ${courseName} - $${revenue}`)
}

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (
  ctaLocation: string,
  ctaText: string,
  ctaDestination: string
) => {
  gtag.trackCTAClick(ctaLocation, ctaText, ctaDestination)

  console.log(`CTA clicked: ${ctaText} at ${ctaLocation}`)
}

/**
 * Track checkout funnel steps
 */
export const trackCheckoutStep = (
  step: number,
  stepName: string,
  courseId: string,
  courseName: string
) => {
  gtag.trackCheckoutStep(step, stepName, courseId, courseName)

  console.log(`Checkout step ${step}: ${stepName}`)
}

/**
 * Track product/course view
 */
export const trackProductView = (
  productId: string,
  productName: string,
  price: number,
  category?: string
) => {
  gtag.trackProductView(productId, productName, price, category)

  console.log(`Product viewed: ${productName}`)
}

/**
 * Track add to cart (course selection)
 */
export const trackAddToCart = (
  productId: string,
  productName: string,
  price: number
) => {
  gtag.trackAddToCart(productId, productName, price)

  console.log(`Added to cart: ${productName}`)
}

/**
 * Track checkout begin
 */
export const trackBeginCheckout = (
  productId: string,
  productName: string,
  price: number
) => {
  gtag.trackBeginCheckout(productId, productName, price)

  console.log(`Checkout begun: ${productName}`)
}

/**
 * Scroll Depth Tracking
 * Automatically tracks when user scrolls to 25%, 50%, 75%, 100%
 */
export class ScrollDepthTracker {
  private milestones = [25, 50, 75, 100]
  private triggered = new Set<number>()
  private pagePath: string

  constructor(pagePath: string) {
    this.pagePath = pagePath
    this.init()
  }

  private init() {
    if (typeof window === 'undefined') return

    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  private handleScroll() {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || window.pageYOffset

    const scrollPercentage = Math.round(
      ((scrollTop + windowHeight) / documentHeight) * 100
    )

    for (const milestone of this.milestones) {
      if (scrollPercentage >= milestone && !this.triggered.has(milestone)) {
        this.triggered.add(milestone)
        gtag.trackScrollDepth(milestone, this.pagePath)
        console.log(`Scroll depth: ${milestone}% on ${this.pagePath}`)
      }
    }
  }

  public destroy() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }
}

/**
 * Time on Page Tracking
 * Tracks how long users spend on a page
 */
export class TimeOnPageTracker {
  private startTime: number
  private pagePath: string
  private trackingInterval: NodeJS.Timeout | null = null

  constructor(pagePath: string) {
    this.pagePath = pagePath
    this.startTime = Date.now()
    this.init()
  }

  private init() {
    if (typeof window === 'undefined') return

    // Track every 30 seconds
    this.trackingInterval = setInterval(() => {
      this.trackCurrentTime()
    }, 30000)

    // Track on page unload
    window.addEventListener('beforeunload', this.handleUnload.bind(this))
  }

  private trackCurrentTime() {
    const duration = (Date.now() - this.startTime) / 1000
    gtag.trackTimeOnPage(duration, this.pagePath)
  }

  private handleUnload() {
    this.trackCurrentTime()
  }

  public destroy() {
    if (this.trackingInterval) {
      clearInterval(this.trackingInterval)
    }
    window.removeEventListener('beforeunload', this.handleUnload.bind(this))
  }
}

/**
 * Rage Click Detection
 * Detects when users rapidly click the same element (frustration indicator)
 */
export class RageClickDetector {
  private clickCounts = new Map<string, { count: number; timer: NodeJS.Timeout }>()
  private threshold = 5 // Number of clicks to trigger
  private timeWindow = 2000 // Time window in ms

  constructor() {
    this.init()
  }

  private init() {
    if (typeof window === 'undefined') return

    document.addEventListener('click', this.handleClick.bind(this))
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement
    const elementPath = this.getElementPath(target)

    const existing = this.clickCounts.get(elementPath)

    if (existing) {
      clearTimeout(existing.timer)
      existing.count++

      if (existing.count >= this.threshold) {
        this.triggerRageClick(elementPath, existing.count)
        this.clickCounts.delete(elementPath)
        return
      }
    } else {
      this.clickCounts.set(elementPath, { count: 1, timer: setTimeout(() => {}, 0) })
    }

    const timer = setTimeout(() => {
      this.clickCounts.delete(elementPath)
    }, this.timeWindow)

    const current = this.clickCounts.get(elementPath)
    if (current) {
      current.timer = timer
    }
  }

  private getElementPath(element: HTMLElement): string {
    const parts: string[] = []
    let current: HTMLElement | null = element

    while (current) {
      let selector = current.tagName.toLowerCase()
      if (current.id) {
        selector += `#${current.id}`
      } else if (current.className) {
        selector += `.${current.className.split(' ').join('.')}`
      }
      parts.unshift(selector)
      current = current.parentElement
    }

    return parts.join(' > ')
  }

  private triggerRageClick(elementPath: string, clickCount: number) {
    gtag.trackRageClick(elementPath, clickCount, window.location.pathname)
    console.warn(`Rage click detected: ${elementPath} (${clickCount} clicks)`)
  }

  public destroy() {
    document.removeEventListener('click', this.handleClick.bind(this))
  }
}

/**
 * Navigation Click Tracking
 */
export const trackNavigation = (
  linkText: string,
  linkDestination: string,
  linkType: 'main_nav' | 'dropdown' | 'mobile' | 'footer'
) => {
  gtag.trackNavClick(linkText, linkDestination, linkType)
}

/**
 * Social Icon Click Tracking
 */
export const trackSocialClick = (
  platform: string,
  location: 'header' | 'footer' | 'content'
) => {
  gtag.trackSocialClick(platform, location)
}

/**
 * Blog Post Tracking
 */
export const trackBlogView = (
  postTitle: string,
  postSlug: string,
  category: string,
  readingTime: number
) => {
  gtag.trackBlogView(postTitle, postSlug, category, readingTime)
}

export const trackBlogReadComplete = (
  postTitle: string,
  postSlug: string,
  actualReadTime: number
) => {
  gtag.trackBlogReadComplete(postTitle, postSlug, actualReadTime)
}

/**
 * Form Tracking
 */
export const trackFormSubmit = (
  formName: string,
  formLocation: string,
  success: boolean
) => {
  gtag.trackFormSubmit(formName, formLocation, success)
}

/**
 * Newsletter Signup Tracking
 */
export const trackNewsletterSignup = (location: string) => {
  gtag.trackNewsletterSignup(location)
}

/**
 * Video Play Tracking
 */
export const trackVideoPlay = (
  videoTitle: string,
  videoId: string,
  location: string
) => {
  gtag.trackVideoPlay(videoTitle, videoId, location)
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
  gtag.trackError(errorType, errorMessage, page, fatal)
}

/**
 * Outbound Link Tracking
 */
export const trackOutboundLink = (
  destination: string,
  linkText: string,
  location: string
) => {
  gtag.trackOutboundLink(destination, linkText, location)
}

/**
 * Search Tracking
 */
export const trackSiteSearch = (
  searchTerm: string,
  resultsCount: number,
  location: string
) => {
  gtag.trackSiteSearch(searchTerm, resultsCount, location)
}

/**
 * User Properties
 */
export const setUserProperties = (properties: Record<string, any>) => {
  gtag.setUserProperties(properties)
}

/**
 * Identify user (for logged-in users)
 */
export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  if (window.clarity) {
    window.clarity('identify', userId)
  }

  if (properties) {
    setUserProperties({ user_id: userId, ...properties })
  }

  console.log(`User identified: ${userId}`)
}

/**
 * Custom tag for important user actions
 */
export const tagUserAction = (actionName: string) => {
  if (window.clarity) {
    window.clarity('set', 'action', actionName)
  }

  trackEvent('user_action', { action_name: actionName })
}

/**
 * Engagement Score Calculation
 * Calculates a user engagement score based on various interactions
 */
export class EngagementScoreTracker {
  private score = 0
  private actions: Record<string, number> = {
    page_view: 1,
    scroll_50: 2,
    scroll_100: 5,
    cta_click: 10,
    video_play: 8,
    form_submit: 15,
    checkout_begin: 25,
    purchase: 100,
  }

  public addAction(actionType: string) {
    const points = this.actions[actionType] || 1
    this.score += points

    gtag.trackEngagement(actionType, points, window.location.pathname)

    console.log(`Engagement score: ${this.score} (+${points} for ${actionType})`)
  }

  public getScore(): number {
    return this.score
  }

  public reset() {
    this.score = 0
  }
}

/**
 * Session Tracker
 * Tracks session duration and quality metrics
 */
export class SessionTracker {
  private sessionId: string
  private startTime: number
  private pageViews: number = 0
  private events: string[] = []

  constructor() {
    this.sessionId = this.generateSessionId()
    this.startTime = Date.now()
    this.init()
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private init() {
    if (typeof window === 'undefined') return

    // Track session end
    window.addEventListener('beforeunload', this.endSession.bind(this))
  }

  public trackPageView(path: string) {
    this.pageViews++
    this.events.push(`pageview:${path}`)
  }

  public trackEvent(eventName: string) {
    this.events.push(eventName)
  }

  private endSession() {
    const duration = (Date.now() - this.startTime) / 1000

    gtag.event('session_end', {
      session_id: this.sessionId,
      duration_seconds: Math.round(duration),
      page_views: this.pageViews,
      events_count: this.events.length,
      quality_score: this.calculateQualityScore(),
    })
  }

  private calculateQualityScore(): number {
    const duration = (Date.now() - this.startTime) / 1000
    let score = 0

    // Points for duration
    if (duration > 30) score += 10
    if (duration > 60) score += 20
    if (duration > 180) score += 30

    // Points for page views
    score += this.pageViews * 5

    // Points for events
    score += this.events.length * 2

    return score
  }

  public destroy() {
    window.removeEventListener('beforeunload', this.endSession.bind(this))
  }
}

/**
 * A/B Test Tracking
 */
export const trackABTest = (
  experimentName: string,
  variant: string,
  outcome?: 'conversion' | 'no_conversion'
) => {
  gtag.event('ab_test', {
    experiment_name: experimentName,
    variant,
    outcome,
    timestamp: new Date().toISOString(),
  })

  console.log(`A/B Test: ${experimentName} - Variant: ${variant}`)
}

/**
 * Export all tracking utilities
 */
export default {
  initAnalytics,
  trackPageView,
  trackEvent,
  trackConversion,
  trackCTAClick,
  trackCheckoutStep,
  trackProductView,
  trackAddToCart,
  trackBeginCheckout,
  trackNavigation,
  trackSocialClick,
  trackBlogView,
  trackBlogReadComplete,
  trackFormSubmit,
  trackNewsletterSignup,
  trackVideoPlay,
  trackError,
  trackOutboundLink,
  trackSiteSearch,
  setUserProperties,
  identifyUser,
  tagUserAction,
  trackABTest,
  ScrollDepthTracker,
  TimeOnPageTracker,
  RageClickDetector,
  EngagementScoreTracker,
  SessionTracker,
}
