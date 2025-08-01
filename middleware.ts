// Next.js Middleware - Edge Runtime SEO Optimization
import { NextRequest, NextResponse } from 'next/server'
import { getGeoData, shouldRedirect } from './edge/utils'

export function middleware(request: NextRequest) {
  const { nextUrl: url } = request
  const response = NextResponse.next()
  
  // Extract geo information from headers
  const country = request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') || 
                  'US'
  const city = request.headers.get('x-vercel-ip-city') || 
               'New York'
  const region = request.headers.get('x-vercel-ip-country-region') || 
                 'NY'
  
  // A/B Testing assignment
  const abVariant = getABTestVariant(request)
  
  // Set geo and A/B test headers for server components
  response.headers.set('x-geo-country', country)
  response.headers.set('x-geo-city', city)
  response.headers.set('x-geo-region', region)
  response.headers.set('x-ab-variant', abVariant.name)
  response.headers.set('x-user-segment', getUserSegment(request))
  
  // Handle programmatic pages
  if (url.pathname.startsWith('/programmatic/')) {
    return handleProgrammaticPages(request, response)
  }
  
  // Handle local SEO pages
  if (url.pathname.match(/^\/[a-z-]+-[a-z-]+$/)) {
    return handleServiceLocationPages(request, response)
  }
  
  // Handle location-specific pages
  if (url.pathname.startsWith('/location/')) {
    return handleLocationPages(request, response)
  }
  
  // Geo-based redirects for better UX
  if (shouldRedirect(country, url.pathname)) {
    return handleGeoRedirects(request, country)
  }
  
  // Add security and performance headers
  addSecurityHeaders(response)
  addPerformanceHeaders(response)
  
  return response
}

function getABTestVariant(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 
            request.headers.get('x-real-ip') || 
            request.headers.get('x-vercel-forwarded-for') || 
            ''
  const userAgent = request.headers.get('user-agent') || ''
  
  // Create stable hash for consistent variant assignment
  const hash = hashString(ip + userAgent.slice(0, 50))
  const variants = [
    { 
      name: 'control',
      headline: 'Master AI Automation & Instagram Growth',
      cta: 'Start Learning Today',
      pricing: { price: 497, discount: 200 }
    },
    { 
      name: 'variant-a',
      headline: 'Generate $10K+/Month With AI Automation',
      cta: 'Get Instant Access Now',
      pricing: { price: 397, discount: 300 }
    },
    { 
      name: 'variant-b',
      headline: '127K+ Students Can\'t Be Wrong - Join Now',
      cta: 'Join 127K+ Winners',
      pricing: { price: 597, discount: 100 }
    },
    { 
      name: 'variant-c',
      headline: 'From $0 to $100K Using These AI Secrets',
      cta: 'Unlock My AI Empire',
      pricing: { price: 297, discount: 400 }
    }
  ]
  
  return variants[hash % variants.length]
}

function getUserSegment(request: NextRequest) {
  const referer = request.headers.get('referer') || ''
  const userAgent = request.headers.get('user-agent') || ''
  
  // Traffic source segmentation
  if (referer.includes('youtube.com')) return 'youtube-traffic'
  if (referer.includes('instagram.com')) return 'instagram-traffic'
  if (referer.includes('tiktok.com')) return 'tiktok-traffic'
  if (referer.includes('google.com')) return 'google-search'
  if (referer.includes('facebook.com')) return 'facebook-traffic'
  if (referer.includes('reddit.com')) return 'reddit-traffic'
  if (referer.includes('twitter.com')) return 'twitter-traffic'
  
  // Device segmentation
  if (userAgent.includes('Mobile')) return 'mobile-user'
  if (userAgent.includes('iPad')) return 'tablet-user'
  
  return 'desktop-organic'
}

function handleProgrammaticPages(request: NextRequest, response: NextResponse) {
  const { pathname } = request.nextUrl
  const segments = pathname.split('/').filter(Boolean)
  
  if (segments.length >= 3) {
    const [, keyword, location, modifier] = segments
    
    // Set dynamic page data in headers for server components
    response.headers.set('x-programmatic-keyword', decodeURIComponent(keyword))
    response.headers.set('x-programmatic-location', decodeURIComponent(location))
    response.headers.set('x-programmatic-modifier', decodeURIComponent(modifier || 'course'))
    
    // Rewrite to dynamic page handler
    const url = request.nextUrl.clone()
    url.pathname = '/api/programmatic'
    url.searchParams.set('keyword', keyword)
    url.searchParams.set('location', location)
    url.searchParams.set('modifier', modifier || 'course')
    
    return NextResponse.rewrite(url)
  }
  
  return response
}

function handleServiceLocationPages(request: NextRequest, response: NextResponse) {
  const { pathname } = request.nextUrl
  const match = pathname.match(/^\/([a-z-]+)-([a-z-]+)$/)
  
  if (match) {
    const [, service, location] = match
    
    response.headers.set('x-service-page', 'true')
    response.headers.set('x-service-type', service)
    response.headers.set('x-service-location', location)
    
    // Rewrite to service page handler
    const url = request.nextUrl.clone()
    url.pathname = '/services'
    url.searchParams.set('service', service)
    url.searchParams.set('location', location)
    
    return NextResponse.rewrite(url)
  }
  
  return response
}

function handleLocationPages(request: NextRequest, response: NextResponse) {
  const { pathname } = request.nextUrl
  const location = pathname.replace('/location/', '')
  
  response.headers.set('x-location-page', 'true')
  response.headers.set('x-target-location', location)
  
  // Rewrite to location page handler
  const url = request.nextUrl.clone()
  url.pathname = '/location'
  url.searchParams.set('city', location)
  
  return NextResponse.rewrite(url)
}

function handleGeoRedirects(request: NextRequest, country: string) {
  const { pathname } = request.nextUrl
  
  // Country-specific redirects for better UX
  const redirects: Record<string, string> = {
    'CA': '/ca' + pathname,
    'GB': '/uk' + pathname,
    'AU': '/au' + pathname,
    'DE': '/de' + pathname
  }
  
  if (redirects[country] && !pathname.startsWith(`/${country.toLowerCase()}`)) {
    const url = request.nextUrl.clone()
    url.pathname = redirects[country]
    return NextResponse.redirect(url, 307) // Temporary redirect
  }
  
  return NextResponse.next()
}

function addSecurityHeaders(response: NextResponse) {
  // Security headers for better SEO and protection
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
}

function addPerformanceHeaders(response: NextResponse) {
  // Performance headers for Core Web Vitals
  response.headers.set('X-Edge-Optimized', 'true')
  response.headers.set('Vary', 'Accept-Encoding, User-Agent')
  
  // Critical resource hints
  response.headers.set('Link', [
    '</fonts/montserrat-variable.woff2>; rel=preload; as=font; type=font/woff2; crossorigin',
    '<https://fonts.googleapis.com>; rel=preconnect',
    '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
    '<https://www.googletagmanager.com>; rel=preconnect'
  ].join(', '))
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

// Configuration for middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (robots.txt, sitemap.xml, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap|.*\\..*).)*',
  ],
  // Enable edge runtime for maximum performance
  runtime: 'edge',
}