/**
 * ORYANA FORTRESS MODE - Anti-Scraping & Anti-Cloning Protection System
 * Makes IImagined.ai literally impossible to clone or parse
 * 
 * ⚔️ PROTECTION LAYERS:
 * 1. Browser Fingerprinting & Bot Detection
 * 2. DevTools Detection & Blocking
 * 3. Content Obfuscation & Dynamic Generation
 * 4. Rate Limiting & Access Control
 * 5. Legal Deterrents & Watermarking
 * 6. Real-time Threat Monitoring
 */

// Browser fingerprinting for bot detection
export const generateBrowserFingerprint = (): string => {
  if (typeof window === 'undefined') return 'server';
  
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('IImagined.ai Fortress Protection', 2, 2);
  }
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency,
    navigator.deviceMemory,
    canvas.toDataURL(),
    navigator.plugins.length,
    Object.keys(window).length,
    navigator.webdriver ? 'true' : 'false'
  ].join('|');
  
  return btoa(fingerprint).slice(0, 32);
};

// Advanced DevTools Detection
export class DevToolsDetector {
  private callbacks: (() => void)[] = [];
  private isOpen = false;
  private checkInterval: number | null = null;

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;

    // Method 1: Console debug detection
    let devtools = { open: false, orientation: null };
    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          this.triggerCallbacks();
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Method 2: Console log detection
    let logCount = 0;
    const originalLog = console.log;
    console.log = function(...args) {
      logCount++;
      if (logCount > 10) {
        devtools.open = true;
      }
      return originalLog.apply(console, args);
    };

    // Method 3: Debugger statement detection
    const checkDebugger = () => {
      const before = Date.now();
      debugger;
      const after = Date.now();
      if (after - before > 100) {
        this.triggerCallbacks();
      }
    };

    // Method 4: Right-click detection
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.triggerCallbacks();
      return false;
    });

    // Method 5: Key combination detection
    document.addEventListener('keydown', (e) => {
      if (
        // F12
        e.keyCode === 123 ||
        // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        // Ctrl+Shift+C
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) ||
        // Ctrl+Shift+J
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        // Ctrl+U
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
        this.triggerCallbacks();
        return false;
      }
    });

    // Run debugger check periodically
    this.checkInterval = setInterval(checkDebugger, 1000);
  }

  onDevToolsOpen(callback: () => void) {
    this.callbacks.push(callback);
  }

  private triggerCallbacks() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.callbacks.forEach(callback => callback());
    }
  }

  destroy() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }
}

// Content obfuscation utilities
export const obfuscateText = (text: string): string => {
  // Split text into spans with hidden characters
  return text.split('').map((char, index) => {
    const hiddenChars = ['‌', '‍', '⁠', '⁡', '⁢', '⁣'];
    const hiddenChar = hiddenChars[index % hiddenChars.length];
    return `<span data-char="${char}">${char}</span>${hiddenChar}`;
  }).join('');
};

export const generateDecoyContent = (): string[] => {
  return [
    '<!-- Decoy content for scrapers -->',
    '<div style="display:none">This is not the real content</div>',
    '<!-- Copyright violation will be prosecuted -->',
    '<script>/* Anti-scraping protection active */</script>',
    '<!-- Automated access detected and logged -->',
  ];
};

// Dynamic content generation
export const generateDynamicWatermark = (): string => {
  const timestamp = Date.now();
  const sessionId = Math.random().toString(36).substring(7);
  return `<!-- IImagined.ai Protected Content - ${timestamp} - ${sessionId} -->`;
};

// Rate limiting utilities
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(maxRequests = 100, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
  }

  isAllowed(clientId: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(clientId) || [];
    
    // Remove old requests
    const validRequests = requests.filter(time => now - time < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(clientId, validRequests);
    return true;
  }
}

// Bot detection patterns
export const detectBotPatterns = (userAgent: string, headers: Record<string, string | undefined>): boolean => {
  const botPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i,
    /curl/i, /wget/i, /python/i, /requests/i,
    /playwright/i, /puppeteer/i, /selenium/i,
    /headless/i, /phantomjs/i, /jsdom/i
  ];
  
  // Check user agent
  if (botPatterns.some(pattern => pattern.test(userAgent))) {
    return true;
  }
  
  // Check for missing browser headers
  const requiredHeaders = ['accept', 'accept-language', 'accept-encoding'];
  if (!requiredHeaders.every(header => headers[header])) {
    return true;
  }
  
  // Check for automation indicators
  if (typeof window !== 'undefined') {
    if ((window.navigator as any).webdriver ||
        (window as any).callPhantom ||
        (window as any)._phantom ||
        (window as any).Buffer ||
        (window as any).emit ||
        (window as any).spawn) {
      return true;
    }
  }
  
  return false;
};

// Legal watermarking
export const embedLegalWatermark = (content: string): string => {
  const watermark = `
    <!-- 
    LEGAL NOTICE: This content is protected by copyright law.
    Unauthorized copying, reproduction, or distribution is strictly prohibited.
    Website: IImagined.ai
    All rights reserved.
    Violations will be prosecuted to the full extent of the law.
    -->
  `;
  return watermark + content;
};

// Advanced text selection prevention
export const preventTextSelection = () => {
  if (typeof document === 'undefined') return;
  
  // CSS injection for text selection prevention
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-tap-highlight-color: transparent !important;
    }
    
    input, textarea, [contenteditable] {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
  `;
  document.head.appendChild(style);
  
  // Disable drag and drop
  document.addEventListener('dragstart', (e) => e.preventDefault());
  document.addEventListener('drop', (e) => e.preventDefault());
  
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  
  // Disable print
  window.addEventListener('beforeprint', (e) => {
    e.preventDefault();
    alert('Printing is disabled for content protection.');
  });
};

// Image protection
export const protectImages = () => {
  if (typeof document === 'undefined') return;
  
  document.querySelectorAll('img').forEach(img => {
    // Disable drag
    img.draggable = false;
    
    // Add right-click protection
    img.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Add selection protection
    img.style.userSelect = 'none';
    img.style.webkitUserSelect = 'none';
    
    // Add loading protection
    img.addEventListener('load', () => {
      // Add invisible watermark overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        pointer-events: none;
        z-index: 1000;
      `;
      img.parentNode?.insertBefore(overlay, img.nextSibling);
    });
  });
};

// Traffic analysis for suspicious patterns
export class TrafficAnalyzer {
  private requests: Array<{
    timestamp: number;
    userAgent: string;
    ip: string;
    path: string;
    fingerprint: string;
  }> = [];

  logRequest(data: {
    userAgent: string;
    ip: string;
    path: string;
    fingerprint: string;
  }) {
    this.requests.push({
      ...data,
      timestamp: Date.now()
    });
    
    // Clean old requests (keep last hour)
    const oneHourAgo = Date.now() - 3600000;
    this.requests = this.requests.filter(req => req.timestamp > oneHourAgo);
  }

  detectSuspiciousActivity(): boolean {
    const now = Date.now();
    const fiveMinutesAgo = now - 300000;
    
    const recentRequests = this.requests.filter(req => req.timestamp > fiveMinutesAgo);
    
    // Check for rapid requests from same fingerprint
    const fingerprintCounts = new Map<string, number>();
    recentRequests.forEach(req => {
      fingerprintCounts.set(req.fingerprint, (fingerprintCounts.get(req.fingerprint) || 0) + 1);
    });
    
    // Flag if more than 50 requests in 5 minutes from same source
    return Array.from(fingerprintCounts.values()).some(count => count > 50);
  }
}

// Main Fortress Protection Class
export class FortressProtection {
  private devToolsDetector: DevToolsDetector;
  private rateLimiter: RateLimiter;
  private trafficAnalyzer: TrafficAnalyzer;

  constructor() {
    this.devToolsDetector = new DevToolsDetector();
    this.rateLimiter = new RateLimiter();
    this.trafficAnalyzer = new TrafficAnalyzer();
    
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;

    // Set up DevTools detection
    this.devToolsDetector.onDevToolsOpen(() => {
      this.handleSecurityViolation('DevTools detected');
    });

    // Initialize content protection
    document.addEventListener('DOMContentLoaded', () => {
      preventTextSelection();
      protectImages();
      this.injectAntiScrapingMeasures();
    });

    // Monitor for suspicious activity
    setInterval(() => {
      if (this.trafficAnalyzer.detectSuspiciousActivity()) {
        this.handleSecurityViolation('Suspicious traffic pattern detected');
      }
    }, 60000); // Check every minute
  }

  private injectAntiScrapingMeasures() {
    // Add decoy content
    const decoys = generateDecoyContent();
    decoys.forEach(decoy => {
      const div = document.createElement('div');
      div.innerHTML = decoy;
      div.style.display = 'none';
      document.body.appendChild(div);
    });

    // Add dynamic watermarks
    const watermark = generateDynamicWatermark();
    const comment = document.createComment(watermark);
    document.head.appendChild(comment);

    // Obfuscate sensitive text content
    document.querySelectorAll('[data-protect]').forEach(element => {
      if (element.textContent) {
        element.innerHTML = obfuscateText(element.textContent);
      }
    });
  }

  private handleSecurityViolation(reason: string) {
    console.log(`Security violation detected: ${reason}`);
    
    // Log the violation
    this.logSecurityEvent(reason);
    
    // Take defensive action
    this.activateDefensiveMode();
  }

  private logSecurityEvent(reason: string) {
    const event = {
      timestamp: new Date().toISOString(),
      reason,
      userAgent: navigator.userAgent,
      fingerprint: generateBrowserFingerprint(),
      url: window.location.href
    };
    
    // Send to security endpoint
    fetch('/api/security/violation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    }).catch(() => {
      // Fail silently if endpoint unavailable
    });
  }

  private activateDefensiveMode() {
    // Blur content
    document.body.style.filter = 'blur(5px)';
    
    // Show warning message
    const warning = document.createElement('div');
    warning.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999999;
        font-family: Arial, sans-serif;
      ">
        <div style="text-align: center; padding: 20px;">
          <h2>🛡️ Security Protection Active</h2>
          <p>Unauthorized access detected.</p>
          <p>This site is protected by advanced anti-scraping technology.</p>
          <p>Please refresh the page to continue as a legitimate user.</p>
        </div>
      </div>
    `;
    document.body.appendChild(warning);
    
    // Disable all interactions
    document.body.style.pointerEvents = 'none';
  }

  public logRequest(data: {
    userAgent: string;
    ip: string;
    path: string;
  }) {
    this.trafficAnalyzer.logRequest({
      ...data,
      fingerprint: generateBrowserFingerprint()
    });
  }

  public checkRateLimit(clientId: string): boolean {
    return this.rateLimiter.isAllowed(clientId);
  }

  public destroy() {
    this.devToolsDetector.destroy();
  }
}