import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

interface SecurityViolation {
  timestamp: string;
  reason: string;
  userAgent: string;
  fingerprint: string;
  url: string;
  ip?: string;
  country?: string;
}

// In-memory storage for violations (in production, use a database)
const violations: SecurityViolation[] = [];
const blockedIPs = new Set<string>();
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 10; // Max 10 requests per minute per IP

function getRealIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const remoteAddr = request.headers.get('x-remote-addr');
  const vercelForwarded = request.headers.get('x-vercel-forwarded-for');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  return realIP || remoteAddr || vercelForwarded || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rateData = rateLimitMap.get(ip);
  
  if (!rateData || now - rateData.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }
  
  if (rateData.count >= RATE_LIMIT_MAX) {
    return true;
  }
  
  rateData.count++;
  return false;
}

function analyzeThreatLevel(violation: SecurityViolation): 'low' | 'medium' | 'high' | 'critical' {
  const { reason, userAgent, fingerprint } = violation;
  
  // Critical threats
  if (reason.includes('DevTools') && userAgent.includes('HeadlessChrome')) {
    return 'critical';
  }
  
  if (reason.includes('automation') || userAgent.match(/bot|crawler|spider|scraper/i)) {
    return 'critical';
  }
  
  // High threats
  if (reason.includes('Suspicious traffic')) {
    return 'high';
  }
  
  if (userAgent.match(/curl|wget|python|requests/i)) {
    return 'high';
  }
  
  // Medium threats
  if (reason.includes('DevTools')) {
    return 'medium';
  }
  
  // Default to low
  return 'low';
}

function shouldBlockIP(violations: SecurityViolation[]): boolean {
  // Block if more than 5 violations in 10 minutes
  const tenMinutesAgo = Date.now() - 600000;
  const recentViolations = violations.filter(v => 
    new Date(v.timestamp).getTime() > tenMinutesAgo
  );
  
  return recentViolations.length > 5;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getRealIP(request);
    
    // Check if IP is already blocked
    if (blockedIPs.has(ip)) {
      return NextResponse.json(
        { error: 'IP blocked due to suspicious activity' },
        { status: 403 }
      );
    }
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    const violation: SecurityViolation = await request.json();
    
    // Enhance violation data with server-side information
    const enhancedViolation: SecurityViolation = {
      ...violation,
      ip,
      country: request.headers.get('cf-ipcountry') || 'unknown', // Cloudflare country header
    };
    
    // Store violation
    violations.push(enhancedViolation);
    
    // Analyze threat level
    const threatLevel = analyzeThreatLevel(enhancedViolation);
    
    // Check if we should block this IP
    const ipViolations = violations.filter(v => v.ip === ip);
    if (shouldBlockIP(ipViolations)) {
      blockedIPs.add(ip);
      console.log(`🚨 IP ${ip} has been blocked due to repeated security violations`);
    }
    
    // Log violation for monitoring
    console.log(`🛡️ Security Violation [${threatLevel.toUpperCase()}]:`, {
      ip,
      reason: violation.reason,
      userAgent: violation.userAgent.substring(0, 100),
      url: violation.url,
      timestamp: violation.timestamp
    });
    
    // Send alerts for high-severity violations
    if (threatLevel === 'critical' || threatLevel === 'high') {
      await sendSecurityAlert(enhancedViolation, threatLevel);
    }
    
    // Clean up old violations (keep last 24 hours)
    const oneDayAgo = Date.now() - 86400000;
    const validViolations = violations.filter(v => 
      new Date(v.timestamp).getTime() > oneDayAgo
    );
    violations.splice(0, violations.length, ...validViolations);
    
    return NextResponse.json({ 
      status: 'logged',
      threatLevel,
      blocked: blockedIPs.has(ip)
    });
    
  } catch (error) {
    console.error('Error processing security violation:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Security dashboard endpoint (protect this in production)
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');
  
  // Simple token auth (use proper auth in production)
  if (token !== process.env.SECURITY_DASHBOARD_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const stats = {
    totalViolations: violations.length,
    blockedIPs: Array.from(blockedIPs),
    recentViolations: violations.slice(-20),
    violationsByReason: violations.reduce((acc, v) => {
      acc[v.reason] = (acc[v.reason] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    violationsByCountry: violations.reduce((acc, v) => {
      const country = v.country || 'unknown';
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {} as Record<string, number>)
  };
  
  return NextResponse.json(stats);
}

async function sendSecurityAlert(violation: SecurityViolation, threatLevel: string) {
  // In production, integrate with your alerting system
  // This could be Slack, Discord, email, or monitoring service
  
  const alertData = {
    title: `🚨 ${threatLevel.toUpperCase()} Security Violation Detected`,
    description: `IImagined.ai fortress protection has detected suspicious activity`,
    fields: [
      { name: 'Reason', value: violation.reason },
      { name: 'IP Address', value: violation.ip || 'unknown' },
      { name: 'Country', value: violation.country || 'unknown' },
      { name: 'User Agent', value: violation.userAgent.substring(0, 200) },
      { name: 'URL', value: violation.url },
      { name: 'Timestamp', value: violation.timestamp }
    ]
  };
  
  // Example: Send to webhook (replace with your alerting system)
  const webhookUrl = process.env.SECURITY_ALERT_WEBHOOK;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(alertData)
      });
    } catch (error) {
      console.error('Failed to send security alert:', error);
    }
  }
}