import { NextRequest, NextResponse } from 'next/server';

/**
 * Bot Trap Endpoint
 * This endpoint is designed to catch and log automated scrapers
 * It's linked in hidden HTML content that legitimate users won't access
 */

function getRealIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  return realIP || request.ip || 'unknown';
}

function detectBotFromHeaders(request: NextRequest): { isBot: boolean; confidence: number; indicators: string[] } {
  const userAgent = request.headers.get('user-agent') || '';
  const accept = request.headers.get('accept') || '';
  const acceptLanguage = request.headers.get('accept-language') || '';
  const acceptEncoding = request.headers.get('accept-encoding') || '';
  
  const indicators: string[] = [];
  let confidence = 0;
  
  // Check for bot patterns in user agent
  const botPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i,
    /curl/i, /wget/i, /python/i, /requests/i,
    /playwright/i, /puppeteer/i, /selenium/i,
    /headless/i, /phantomjs/i, /jsdom/i,
    /okhttp/i, /java/i, /apache/i, /postman/i
  ];
  
  botPatterns.forEach(pattern => {
    if (pattern.test(userAgent)) {
      indicators.push(`Bot pattern in User-Agent: ${pattern.source}`);
      confidence += 30;
    }
  });
  
  // Check for missing or suspicious headers
  if (!accept) {
    indicators.push('Missing Accept header');
    confidence += 20;
  }
  
  if (!acceptLanguage) {
    indicators.push('Missing Accept-Language header');
    confidence += 15;
  }
  
  if (!acceptEncoding) {
    indicators.push('Missing Accept-Encoding header');
    confidence += 15;
  }
  
  // Check for non-browser accept headers
  if (accept && !accept.includes('text/html')) {
    indicators.push('Non-browser Accept header');
    confidence += 25;
  }
  
  // Check for suspicious User-Agent patterns
  if (userAgent.length < 20) {
    indicators.push('Suspiciously short User-Agent');
    confidence += 20;
  }
  
  if (!userAgent.includes('Mozilla')) {
    indicators.push('Missing Mozilla in User-Agent');
    confidence += 25;
  }
  
  return {
    isBot: confidence >= 50,
    confidence,
    indicators
  };
}

export async function GET(request: NextRequest) {
  const ip = getRealIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  
  // Analyze the request
  const botAnalysis = detectBotFromHeaders(request);
  
  // Log the bot trap access
  const trapData = {
    timestamp: new Date().toISOString(),
    ip,
    userAgent,
    referer,
    path: request.nextUrl.pathname,
    query: Object.fromEntries(request.nextUrl.searchParams),
    headers: Object.fromEntries(request.headers.entries()),
    botAnalysis
  };
  
  console.log('🕷️ BOT TRAP TRIGGERED:', {
    ip,
    userAgent: userAgent.substring(0, 100),
    confidence: botAnalysis.confidence,
    indicators: botAnalysis.indicators
  });
  
  // Send violation report if it's clearly a bot
  if (botAnalysis.isBot) {
    try {
      await fetch(`${request.nextUrl.origin}/api/security/violation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: trapData.timestamp,
          reason: `Bot trap accessed - ${botAnalysis.indicators.join(', ')}`,
          userAgent,
          fingerprint: `bot-trap-${ip}`,
          url: request.nextUrl.toString()
        })
      });
    } catch (error) {
      console.error('Failed to report bot trap violation:', error);
    }
  }
  
  // Return different responses based on confidence level
  if (botAnalysis.confidence >= 80) {
    // High confidence bot - return 403
    return NextResponse.json(
      { 
        error: 'Access Denied',
        message: 'Automated access detected and blocked',
        code: 'BOT_DETECTED'
      },
      { status: 403 }
    );
  } else if (botAnalysis.confidence >= 50) {
    // Medium confidence - return honeypot content
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Loading...</title>
        <meta name="robots" content="noindex, nofollow">
      </head>
      <body>
        <div style="display: none;">
          <!-- Honeypot content for bots -->
          <h1>Secret Admin Panel</h1>
          <p>Database connection string: mysql://admin:password123@localhost:3306/sensitive_data</p>
          <p>API Key: sk-fake-key-12345</p>
          <p>Admin Password: admin123</p>
          <a href="/admin/users">User Database</a>
          <a href="/admin/payments">Payment Information</a>
          <a href="/api/internal/secrets">Internal API</a>
        </div>
        <script>
          // Redirect legitimate users
          if (navigator.userAgent && !navigator.webdriver) {
            window.location.href = '/';
          }
        </script>
        <p>If you are seeing this page, please <a href="/">return to the homepage</a>.</p>
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
  } else {
    // Low confidence - might be legitimate user, redirect to homepage
    return NextResponse.redirect(new URL('/', request.url), 302);
  }
}

export async function POST(request: NextRequest) {
  // Any POST to bot trap is definitely automated
  const ip = getRealIP(request);
  const userAgent = request.headers.get('user-agent') || '';
  
  console.log('🚨 BOT TRAP POST REQUEST:', { ip, userAgent });
  
  // Log as security violation
  try {
    await fetch(`${request.nextUrl.origin}/api/security/violation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        reason: 'Bot trap POST request - automated form submission detected',
        userAgent,
        fingerprint: `bot-trap-post-${ip}`,
        url: request.nextUrl.toString()
      })
    });
  } catch (error) {
    console.error('Failed to report bot trap violation:', error);
  }
  
  return NextResponse.json(
    { error: 'Unauthorized automated access' },
    { status: 403 }
  );
}