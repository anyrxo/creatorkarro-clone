import { NextRequest, NextResponse } from 'next/server';

// IP addresses that are permanently blocked
const BLOCKED_IPS = new Set<string>();

// Temporary blocks (IP -> expiry timestamp)
const TEMP_BLOCKS = new Map<string, number>();

// Rate limiting data (IP -> {count, windowStart})
const RATE_LIMITS = new Map<string, { count: number; windowStart: number }>();

// Configuration
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 60; // 60 requests per minute
const TEMP_BLOCK_DURATION = 300000; // 5 minutes

function getRealIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  
  return 'unknown';
}

function isBlocked(ip: string): boolean {
  // Check permanent blocks
  if (BLOCKED_IPS.has(ip)) return true;
  
  // Check temporary blocks
  const tempBlockExpiry = TEMP_BLOCKS.get(ip);
  if (tempBlockExpiry && Date.now() < tempBlockExpiry) {
    return true;
  } else if (tempBlockExpiry) {
    // Expired temp block, remove it
    TEMP_BLOCKS.delete(ip);
  }
  
  return false;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rateData = RATE_LIMITS.get(ip);
  
  if (!rateData || now - rateData.windowStart > RATE_LIMIT_WINDOW) {
    // New window
    RATE_LIMITS.set(ip, { count: 1, windowStart: now });
    return false;
  }
  
  if (rateData.count >= RATE_LIMIT_MAX) {
    // Add temporary block for excessive requests
    TEMP_BLOCKS.set(ip, now + TEMP_BLOCK_DURATION);
    return true;
  }
  
  rateData.count++;
  return false;
}

function detectBotPattern(request: NextRequest): { isBot: boolean; reason?: string } {
  const userAgent = request.headers.get('user-agent') || '';
  const accept = request.headers.get('accept') || '';
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Only detect obvious bots - be much more permissive for browsers
  const botPatterns = [
    /curl/i, /wget/i, /python-requests/i,
    /scrapy/i, /headless/i, /phantomjs/i
  ];
  
  for (const pattern of botPatterns) {
    if (pattern.test(userAgent)) {
      return { isBot: true, reason: `Bot pattern detected: ${pattern.source}` };
    }
  }
  
  // Only block if completely missing user agent
  if (!userAgent) {
    return { isBot: true, reason: 'Missing User-Agent header' };
  }
  
  // Very short user agent (likely fake) - but be more lenient
  if (userAgent.length < 10) {
    return { isBot: true, reason: 'Suspiciously short User-Agent' };
  }
  
  return { isBot: false };
}

function addSecurityHeaders(response: NextResponse): NextResponse {
  // Content Security Policy
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https: blob:; " +
    "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; " +
    "frame-ancestors 'none';"
  );
  
  // Additional security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  
  // Anti-scraping headers
  response.headers.set('X-Robots-Tag', 'noarchive, nosnippet, notranslate, noimageindex');
  response.headers.set('X-Anti-Scraping', 'active');
  response.headers.set('X-Content-Protection', 'enabled');
  
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getRealIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  
  // Skip middleware for static assets and API routes (except security ones)
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') && !pathname.startsWith('/api/security/') ||
    pathname.includes('.') && !pathname.endsWith('.html')
  ) {
    return NextResponse.next();
  }
  
  // Check if IP is blocked
  if (isBlocked(ip)) {
    console.log(`🚫 Blocked IP attempted access: ${ip} - ${pathname}`);
    return new NextResponse('Access Denied', { 
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'X-Block-Reason': 'IP blocked due to suspicious activity'
      }
    });
  }
  
  // Check rate limiting
  if (isRateLimited(ip)) {
    console.log(`⏱ Rate limited: ${ip} - ${pathname}`);
    return new NextResponse('Too Many Requests', { 
      status: 429,
      headers: {
        'Content-Type': 'text/plain',
        'Retry-After': '300', // 5 minutes
        'X-Rate-Limit': 'Exceeded'
      }
    });
  }
  
  // Bot detection
  const botDetection = detectBotPattern(request);
  if (botDetection.isBot) {
    console.log(` Bot detected: ${ip} - ${userAgent.substring(0, 50)} - ${botDetection.reason}`);
    
    // Log the violation
    try {
      fetch(`${request.nextUrl.origin}/api/security/violation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          reason: botDetection.reason || 'Bot pattern detected',
          userAgent,
          fingerprint: `middleware-${ip}`,
          url: request.nextUrl.toString()
        })
      }).catch(() => {
        // Fail silently
      });
    } catch {
      // Fail silently
    }
    
    // Return honeypot content for bots
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>IImagined.ai - Loading...</title>
        <meta name="robots" content="noindex, nofollow">
      </head>
      <body>
        <div style="display: none;">
          <!-- Honeypot content -->
          <h1>Admin Panel</h1>
          <p>Secret data: ${Math.random().toString(36)}</p>
          <a href="/admin/secret">Secret Area</a>
          <form action="/bot-trap" method="post">
            <input name="email" type="email" placeholder="admin@example.com">
            <input name="password" type="password" placeholder="password">
            <button type="submit">Login</button>
          </form>
        </div>
        <script>
          // Redirect legitimate users
          setTimeout(() => {
            if (!navigator.webdriver && navigator.userAgent.includes('Mozilla')) {
              window.location.href = '/';
            }
          }, 1000);
        </script>
        <p>Please wait while we verify your browser...</p>
      </body>
      </html>
    `, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Robots-Tag': 'noindex, nofollow'
      }
    });
  }
  
  // Special handling for suspicious paths
  const suspiciousPaths = [
    '/wp-admin', '/admin', '/.env', '/robots.txt',
    '/sitemap.xml', '/api', '/graphql', '/wp-content',
    '/.well-known', '/backup', '/database'
  ];
  
  if (suspiciousPaths.some(path => pathname.includes(path)) && pathname !== '/robots.txt') {
    console.log(` Suspicious path accessed: ${ip} - ${pathname}`);
    
    // Redirect to bot trap
    return NextResponse.redirect(new URL('/api/bot-trap', request.url));
  }
  
  // Continue with security headers
  const response = NextResponse.next();
  return addSecurityHeaders(response);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};