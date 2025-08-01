// Edge utility functions for geo-location and A/B testing
import { NextRequest } from 'next/server'

export interface GeoData {
  country: string
  countryCode: string
  region: string
  city: string
  timezone: string
  currency: string
  language: string
  latitude?: number
  longitude?: number
}

export interface ABTestVariant {
  name: string
  id: string
  cta: string
  description: string
  weight: number
}

// A/B test variants
const AB_TEST_VARIANTS: ABTestVariant[] = [
  {
    name: 'control',
    id: 'variant_a',
    cta: 'Start Your Journey Today',
    description: 'Standard conversion-focused messaging',
    weight: 0.5
  },
  {
    name: 'urgency',
    id: 'variant_b', 
    cta: 'Claim Your Spot Now (Limited Time)',
    description: 'Urgency and scarcity focused messaging',
    weight: 0.3
  },
  {
    name: 'benefit',
    id: 'variant_c',
    cta: 'Transform Your Life in 30 Days',
    description: 'Benefit and transformation focused',
    weight: 0.2
  }
]

// Country data mapping
const COUNTRY_DATA: Record<string, Partial<GeoData>> = {
  'US': {
    country: 'United States',
    countryCode: 'US',
    currency: '$',
    language: 'English',
    timezone: 'America/New_York'
  },
  'GB': {
    country: 'United Kingdom', 
    countryCode: 'GB',
    currency: '£',
    language: 'English',
    timezone: 'Europe/London'
  },
  'CA': {
    country: 'Canada',
    countryCode: 'CA', 
    currency: '$',
    language: 'English',
    timezone: 'America/Toronto'
  },
  'AU': {
    country: 'Australia',
    countryCode: 'AU',
    currency: '$',
    language: 'English', 
    timezone: 'Australia/Sydney'
  },
  'DE': {
    country: 'Germany',
    countryCode: 'DE',
    currency: '€',
    language: 'German',
    timezone: 'Europe/Berlin'
  },
  'FR': {
    country: 'France',
    countryCode: 'FR',
    currency: '€', 
    language: 'French',
    timezone: 'Europe/Paris'
  },
  'IN': {
    country: 'India',
    countryCode: 'IN',
    currency: '₹',
    language: 'English',
    timezone: 'Asia/Kolkata'
  },
  'BR': {
    country: 'Brazil',
    countryCode: 'BR',
    currency: 'R$',
    language: 'Portuguese',
    timezone: 'America/Sao_Paulo'
  }
}

/**
 * Extract geo-location data from request headers
 * Uses various headers provided by edge providers (Vercel, Cloudflare, etc.)
 */
export function getGeoData(request: NextRequest): GeoData {
  const headers = request.headers
  
  // Try to get country from various headers
  const country = headers.get('x-vercel-ip-country') || 
                  headers.get('cf-ipcountry') ||
                  headers.get('x-country-code') ||
                  headers.get('cloudfront-viewer-country') ||
                  'US'
  
  // Get region/state
  const region = headers.get('x-vercel-ip-country-region') ||
                 headers.get('cf-region') ||
                 headers.get('x-region') ||
                 ''
  
  // Get city  
  const city = headers.get('x-vercel-ip-city') ||
               headers.get('cf-ipcity') ||
               headers.get('x-city') ||
               ''
  
  // Get timezone
  const timezone = headers.get('x-vercel-ip-timezone') ||
                   headers.get('cf-timezone') ||
                   COUNTRY_DATA[country]?.timezone ||
                   'UTC'
  
  // Get latitude/longitude if available
  const latitude = headers.get('x-vercel-ip-latitude') ? 
                   parseFloat(headers.get('x-vercel-ip-latitude')!) : undefined
  const longitude = headers.get('x-vercel-ip-longitude') ?
                    parseFloat(headers.get('x-vercel-ip-longitude')!) : undefined
  
  // Get base country data
  const countryData = COUNTRY_DATA[country] || COUNTRY_DATA['US']
  
  return {
    country: countryData.country || 'United States',
    countryCode: country,
    region: decodeURIComponent(region),
    city: decodeURIComponent(city),
    timezone,
    currency: countryData.currency || '$',
    language: countryData.language || 'English',
    latitude,
    longitude
  }
}

/**
 * Determine A/B test variant for user
 * Uses consistent hashing based on IP and user agent for stable assignment
 */
export function getABTestVariant(request: NextRequest): ABTestVariant {
  // Get consistent identifier for user
  const ip = request.ip || 
             request.headers.get('x-forwarded-for')?.split(',')[0] ||
             request.headers.get('x-real-ip') ||
             'unknown'
  
  const userAgent = request.headers.get('user-agent') || ''
  
  // Create hash from IP + User Agent for consistent assignment
  const hashInput = ip + userAgent
  let hash = 0
  for (let i = 0; i < hashInput.length; i++) {
    const char = hashInput.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  
  // Convert to positive number between 0 and 1
  const normalized = Math.abs(hash) / 2147483647
  
  // Select variant based on weights
  let cumWeight = 0
  for (const variant of AB_TEST_VARIANTS) {
    cumWeight += variant.weight
    if (normalized <= cumWeight) {
      return variant
    }
  }
  
  // Fallback to control variant
  return AB_TEST_VARIANTS[0]
}

/**
 * Get user preferences from headers and cookies
 */
export function getUserPreferences(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || 'en-US'
  const acceptEncoding = request.headers.get('accept-encoding') || ''
  const dnt = request.headers.get('dnt') === '1'
  
  // Parse preferred languages
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, quality] = lang.trim().split(';q=')
      return {
        code: code.trim(),
        quality: quality ? parseFloat(quality) : 1.0
      }
    })
    .sort((a, b) => b.quality - a.quality)
  
  return {
    languages,
    supportsGzip: acceptEncoding.includes('gzip'),
    supportsBrotli: acceptEncoding.includes('br'),
    doNotTrack: dnt
  }
}

/**
 * Generate device fingerprint for analytics
 */
export function getDeviceFingerprint(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const acceptLanguage = request.headers.get('accept-language') || ''
  const acceptEncoding = request.headers.get('accept-encoding') || ''
  
  // Simple device detection
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent)
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent)
  const isDesktop = !isMobile && !isTablet
  
  // Browser detection
  let browser = 'unknown'
  if (userAgent.includes('Chrome')) browser = 'chrome'
  else if (userAgent.includes('Firefox')) browser = 'firefox'  
  else if (userAgent.includes('Safari')) browser = 'safari'
  else if (userAgent.includes('Edge')) browser = 'edge'
  
  // OS detection
  let os = 'unknown'
  if (userAgent.includes('Windows')) os = 'windows'
  else if (userAgent.includes('Mac OS')) os = 'macos'
  else if (userAgent.includes('Linux')) os = 'linux'
  else if (userAgent.includes('Android')) os = 'android'
  else if (userAgent.includes('iOS')) os = 'ios'
  
  return {
    userAgent,
    browser,
    os,
    deviceType: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
    isMobile,
    isTablet, 
    isDesktop,
    acceptLanguage,
    acceptEncoding
  }
}

/**
 * Generate tracking parameters for analytics
 */
export function getTrackingData(request: NextRequest) {
  const geoData = getGeoData(request)
  const abVariant = getABTestVariant(request)
  const deviceData = getDeviceFingerprint(request)
  const userPrefs = getUserPreferences(request)
  
  return {
    timestamp: new Date().toISOString(),
    url: request.url,
    method: request.method,
    referrer: request.headers.get('referer') || '',
    geo: geoData,
    abTest: abVariant,
    device: deviceData,
    preferences: userPrefs,
    sessionId: generateSessionId(request)
  }
}

/**
 * Generate consistent session ID
 */
function generateSessionId(request: NextRequest): string {
  const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  const userAgent = request.headers.get('user-agent') || ''
  const timestamp = Math.floor(Date.now() / (1000 * 60 * 30)) // 30-minute windows
  
  const sessionData = `${ip}-${userAgent}-${timestamp}`
  
  // Simple hash for session ID
  let hash = 0
  for (let i = 0; i < sessionData.length; i++) {
    const char = sessionData.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  
  return Math.abs(hash).toString(36)
}