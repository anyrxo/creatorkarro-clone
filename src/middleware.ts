// ORYANA Edge Middleware - Global SEO Domination
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const { pathname, searchParams } = request.nextUrl
  
  // Geo-targeting intelligence
  const country = request.geo?.country || 'US'
  const city = request.geo?.city || ''
  const region = request.geo?.region || ''
  
  // A/B testing for maximum CTR optimization
  const testVariant = Math.random() > 0.5 ? 'A' : 'B'
  response.cookies.set('test-variant', testVariant, {
    maxAge: 86400, // 24 hours
    httpOnly: false,
    secure: true,
    sameSite: 'lax'
  })
  
  // Dynamic geo-targeting headers for personalization
  response.headers.set('X-User-Country', country)
  response.headers.set('X-User-City', city)
  response.headers.set('X-User-Region', region)
  response.headers.set('X-Test-Variant', testVariant)
  
  // Performance optimization headers
  response.headers.set('X-Edge-Location', request.geo?.city || 'global')
  response.headers.set('X-Cache-Status', 'HIT')
  
  // SEO-critical performance headers
  if (pathname.startsWith('/blog/') || pathname.startsWith('/courses/')) {
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400')
    response.headers.set('CDN-Cache-Control', 'public, max-age=86400')
    response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=86400')
  }
  
  // Static assets - nuclear caching
  if (pathname.startsWith('/_next/') || pathname.startsWith('/images/') || pathname.startsWith('/fonts/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('CDN-Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=31536000, immutable')
  }
  
  // Geo-redirect logic for local SEO domination
  const geoRedirects: Record<string, string> = {
    'GB': '/gb',
    'CA': '/ca', 
    'AU': '/au',
    'DE': '/de',
    'FR': '/fr',
    'ES': '/es',
    'IT': '/it',
    'BR': '/br',
    'MX': '/mx',
    'IN': '/in',
    'JP': '/jp',
    'SG': '/sg'
  }
  
  // Only redirect if accessing root and not already on a geo path
  if (pathname === '/' && geoRedirects[country] && !request.nextUrl.searchParams.has('no-redirect')) {
    const geoUrl = new URL(geoRedirects[country], request.url)
    return NextResponse.redirect(geoUrl, { status: 302 })
  }
  
  // Dynamic content personalization based on location
  if (pathname.includes('-course') || pathname.includes('-training')) {
    // Add location-specific query params for dynamic content
    const url = request.nextUrl.clone()
    url.searchParams.set('geo', country.toLowerCase())
    url.searchParams.set('city', city.toLowerCase().replace(/\s+/g, '-'))
    
    if (url.searchParams.toString() !== searchParams.toString()) {
      response.headers.set('X-Geo-Enhanced', 'true')
    }
  }
  
  // Bot detection and special handling
  const userAgent = request.headers.get('user-agent') || ''
  const isBot = /bot|crawler|spider|crawling/i.test(userAgent)
  const isGoogleBot = /googlebot/i.test(userAgent)
  const isBingBot = /bingbot/i.test(userAgent)
  
  if (isBot) {
    response.headers.set('X-Bot-Detected', 'true')
    response.headers.set('X-Bot-Type', isGoogleBot ? 'google' : isBingBot ? 'bing' : 'other')
    
    // Enhanced caching for bots
    response.headers.set('Cache-Control', 'public, max-age=7200, s-maxage=7200')
    
    // Remove unnecessary headers for bots to speed up crawling
    response.headers.delete('Set-Cookie')
  }
  
  // Language detection for international SEO
  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferredLang = acceptLanguage.split(',')[0]?.substring(0, 2) || 'en'
  response.headers.set('X-Preferred-Language', preferredLang)
  
  // Preload critical resources based on page type
  if (pathname.startsWith('/instagram-ignited')) {
    response.headers.set('Link', '</images/courses/instagram-ignited/hero.webp>; rel=preload; as=image')
  } else if (pathname.startsWith('/digital-products')) {
    response.headers.set('Link', '</images/courses/digital-products/hero.webp>; rel=preload; as=image')
  }
  
  // Anti-scraping protection (but allow legitimate crawlers)
  const suspiciousPatterns = [
    /scrapy/i,
    /selenium/i,
    /phantomjs/i,
    /puppeteer/i,
    /playwright/i,
    /headless/i
  ]
  
  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(userAgent))
  
  if (isSuspicious && !isGoogleBot && !isBingBot) {
    response.headers.set('X-Suspicious-Bot', 'true')
    // Slow down suspicious bots
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('X-Rate-Limit', '1')
  }
  
  // Performance monitoring headers
  response.headers.set('X-Middleware-Time', Date.now().toString())
  response.headers.set('X-Request-ID', Math.random().toString(36).substring(7))
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap|.*\\.xml).*)',
  ],
}