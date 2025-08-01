// Edge Utility Functions for Geo-targeting and A/B Testing
import { NextRequest } from 'next/server'

export interface GeoData {
  country: string
  city: string
  region: string
  timezone: string
  currency: string
  language: string
}

export interface ABTestVariant {
  name: string
  headline: string
  cta: string
  pricing: {
    price: number
    discount: number
  }
  features: string[]
}

export interface UserSegment {
  source: string
  device: string
  behavior: string
  value: 'high' | 'medium' | 'low'
}

// Get comprehensive geo data
export function getGeoData(request: NextRequest): GeoData {
  // Access geo data from headers (available in Vercel/Cloudflare)
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') || 
                  'US'
  const city = request.headers.get('x-vercel-ip-city') || 
               'New York'
  const region = request.headers.get('x-vercel-ip-country-region') || 
                 'NY'
  
  const geoMapping = {
    'US': { currency: 'USD', language: 'en-US', timezone: 'America/New_York' },
    'CA': { currency: 'CAD', language: 'en-CA', timezone: 'America/Toronto' },
    'GB': { currency: 'GBP', language: 'en-GB', timezone: 'Europe/London' },
    'AU': { currency: 'AUD', language: 'en-AU', timezone: 'Australia/Sydney' },
    'DE': { currency: 'EUR', language: 'de-DE', timezone: 'Europe/Berlin' },
    'FR': { currency: 'EUR', language: 'fr-FR', timezone: 'Europe/Paris' },
    'ES': { currency: 'EUR', language: 'es-ES', timezone: 'Europe/Madrid' },
    'IT': { currency: 'EUR', language: 'it-IT', timezone: 'Europe/Rome' },
    'BR': { currency: 'BRL', language: 'pt-BR', timezone: 'America/Sao_Paulo' },
    'MX': { currency: 'MXN', language: 'es-MX', timezone: 'America/Mexico_City' },
    'IN': { currency: 'INR', language: 'en-IN', timezone: 'Asia/Kolkata' },
    'JP': { currency: 'JPY', language: 'ja-JP', timezone: 'Asia/Tokyo' },
    'SG': { currency: 'SGD', language: 'en-SG', timezone: 'Asia/Singapore' }
  }
  
  const mapping = geoMapping[country as keyof typeof geoMapping] || geoMapping.US
  
  return {
    country,
    city,
    region,
    timezone: mapping.timezone,
    currency: mapping.currency,
    language: mapping.language
  }
}

// Advanced A/B testing with behavioral targeting
export function getABTestVariant(request: NextRequest): ABTestVariant {
  const ip = request.headers.get('x-forwarded-for') || 
            request.headers.get('x-real-ip') || 
            request.headers.get('x-vercel-forwarded-for') || 
            ''
  const userAgent = request.headers.get('user-agent') || ''
  const referer = request.headers.get('referer') || ''
  
  // Create composite hash for stable assignment
  const composite = ip + userAgent.slice(0, 50) + (referer ? 'returning' : 'new')
  const hash = hashString(composite)
  
  const variants: ABTestVariant[] = [
    {
      name: 'control',
      headline: 'Master AI Automation & Instagram Growth',
      cta: 'Start Learning Today',
      pricing: { price: 497, discount: 200 },
      features: ['Complete Course Access', '24/7 Support', 'Community Access']
    },
    {
      name: 'urgency',
      headline: 'Generate $10K+/Month With AI Automation',
      cta: 'Get Instant Access Now',
      pricing: { price: 397, discount: 300 },
      features: ['Limited Time Offer', 'Bonus Templates', 'Fast Track Support']
    },
    {
      name: 'social-proof',
      headline: '127K+ Students Can\'t Be Wrong - Join Now',
      cta: 'Join 127K+ Winners',
      pricing: { price: 597, discount: 100 },
      features: ['Proven Success Rate', 'Student Testimonials', 'Success Guarantee']
    },
    {
      name: 'transformation',
      headline: 'From $0 to $100K Using These AI Secrets',
      cta: 'Unlock My AI Empire',
      pricing: { price: 297, discount: 400 },
      features: ['Transformation Story', 'Step-by-Step Blueprint', 'Income Tracker']
    }
  ]
  
  // Behavioral targeting adjustments
  const userSegment = getUserSegment(request)
  let variantIndex = hash % variants.length
  
  // Adjust variant based on traffic source
  if (userSegment.source === 'youtube-traffic') {
    variantIndex = hash % 2 // Focus on control or urgency for YouTube traffic
  } else if (userSegment.source === 'google-search') {
    variantIndex = (hash % 2) + 2 // Focus on social-proof or transformation for search traffic
  }
  
  return variants[variantIndex]
}

// Advanced user segmentation
export function getUserSegment(request: NextRequest): UserSegment {
  const referer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''
  const acceptLanguage = request.headers.get('accept-language') || ''
  
  // Traffic source detection
  let source = 'direct'
  if (referer.includes('youtube.com')) source = 'youtube-traffic'
  else if (referer.includes('instagram.com')) source = 'instagram-traffic'
  else if (referer.includes('tiktok.com')) source = 'tiktok-traffic'
  else if (referer.includes('google.com')) source = 'google-search'
  else if (referer.includes('facebook.com')) source = 'facebook-traffic'
  else if (referer.includes('reddit.com')) source = 'reddit-traffic'
  else if (referer.includes('twitter.com')) source = 'twitter-traffic'
  else if (referer.includes('linkedin.com')) source = 'linkedin-traffic'
  else if (referer) source = 'referral'
  
  // Device detection
  let device = 'desktop'
  if (userAgent.includes('Mobile')) device = 'mobile'
  else if (userAgent.includes('iPad')) device = 'tablet'
  
  // Behavior prediction based on source and device
  let behavior = 'browser'
  let value: 'high' | 'medium' | 'low' = 'medium'
  
  if (source === 'google-search') {
    behavior = 'researcher'
    value = 'high'
  } else if (source === 'youtube-traffic') {
    behavior = 'learner'
    value = 'high'
  } else if (source === 'instagram-traffic' || source === 'tiktok-traffic') {
    behavior = 'impulse'
    value = 'medium'
  } else if (source === 'reddit-traffic') {
    behavior = 'skeptical'
    value = 'low'
  } else if (device === 'mobile') {
    behavior = 'quick-decision'
    value = 'medium'
  }
  
  return { source, device, behavior, value }
}

// Geo-based redirect logic
export function shouldRedirect(country: string, pathname: string): boolean {
  const geoSpecificPaths = ['/pricing', '/courses', '/checkout']
  const hasCountryPrefix = pathname.match(/^\/(us|ca|gb|au|de|fr|es|it)\//)
  
  // Don't redirect if already has country prefix
  if (hasCountryPrefix) return false
  
  // Only redirect for specific paths and high-value countries
  const targetCountries = ['CA', 'GB', 'AU', 'DE']
  return targetCountries.includes(country) && 
         geoSpecificPaths.some(path => pathname.startsWith(path))
}

// Content localization helpers
export function getLocalizedContent(country: string, type: 'pricing' | 'testimonials' | 'urgency') {
  const localContent = {
    US: {
      pricing: { symbol: '$', tax: 'Plus applicable taxes' },
      testimonials: 'American success stories',
      urgency: 'Limited time offer for US residents'
    },
    CA: {
      pricing: { symbol: 'C$', tax: 'Plus HST/GST' },
      testimonials: 'Canadian entrepreneur success',
      urgency: 'Exclusive Canadian launch pricing'
    },
    GB: {
      pricing: { symbol: '£', tax: 'VAT included' },
      testimonials: 'UK business transformation',
      urgency: 'Brexit-proof income strategies'
    },
    AU: {
      pricing: { symbol: 'A$', tax: 'GST included' },
      testimonials: 'Australian success stories',
      urgency: 'Australian exclusive access'
    },
    DE: {
      pricing: { symbol: '€', tax: 'MwSt. inklusive' },
      testimonials: 'German entrepreneur stories',
      urgency: 'DSGVO-compliant strategies'
    }
  }
  
  const content = localContent[country as keyof typeof localContent] || localContent.US
  return content[type]
}

// Performance optimization helpers
export function getOptimalImageFormat(userAgent: string): 'webp' | 'avif' | 'jpeg' {
  if (userAgent.includes('Chrome/') && parseFloat(userAgent.match(/Chrome\/(\d+)/)?.[1] || '0') >= 85) {
    return 'avif'
  } else if (userAgent.includes('Chrome/') || userAgent.includes('Firefox/') || userAgent.includes('Edge/')) {
    return 'webp'
  }
  return 'jpeg'
}

export function getCacheStrategy(pathname: string): { maxAge: number; staleWhileRevalidate: number } {
  // Static assets - long cache
  if (pathname.match(/\.(css|js|woff2?|png|jpg|jpeg|gif|ico|svg)$/)) {
    return { maxAge: 31536000, staleWhileRevalidate: 86400 } // 1 year, 1 day SWR
  }
  
  // Programmatic pages - medium cache
  if (pathname.startsWith('/programmatic/')) {
    return { maxAge: 3600, staleWhileRevalidate: 1800 } // 1 hour, 30 min SWR
  }
  
  // Blog posts - medium cache
  if (pathname.startsWith('/blog/')) {
    return { maxAge: 1800, staleWhileRevalidate: 900 } // 30 min, 15 min SWR
  }
  
  // Dynamic pages - short cache
  return { maxAge: 300, staleWhileRevalidate: 60 } // 5 min, 1 min SWR
}

// Utility functions
function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Analytics helpers
export function getAnalyticsData(request: NextRequest, variant: ABTestVariant, segment: UserSegment) {
  return {
    timestamp: Date.now(),
    url: request.url,
    geo: getGeoData(request),
    variant: variant.name,
    segment: segment.source,
    device: segment.device,
    userAgent: request.headers.get('user-agent'),
    referer: request.headers.get('referer'),
    ip: request.ip || request.headers.get('x-forwarded-for')
  }
}

// SEO helpers
export function generateMetaTags(options: {
  title: string
  description: string
  geo: GeoData
  variant: ABTestVariant
  canonical?: string
}) {
  const { title, description, geo, variant, canonical } = options
  
  return {
    title: `${title} | ${geo.city}, ${geo.region}`,
    description: `${description} ${variant.cta} Available in ${geo.city}.`,
    canonical: canonical || '',
    hreflang: geo.language,
    openGraph: {
      title: variant.headline,
      description: description,
      locale: geo.language,
      currency: geo.currency
    }
  }
}