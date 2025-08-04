'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FortressProtection, generateBrowserFingerprint, detectBotPatterns } from '@/lib/fortress-protection';

interface FortressProviderProps {
  children: React.ReactNode;
}

export function FortressProvider({ children }: FortressProviderProps) {
  const [fortress, setFortress] = useState<FortressProtection | null>(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Much more lenient bot detection - only block obvious bots
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Only block the most obvious scraping tools
    const scrapingTools = ['curl', 'wget', 'scrapy', 'beautifulsoup'];
    const isScrapingTool = scrapingTools.some(tool => userAgent.includes(tool));
    
    // Only block obvious scraping tools with no browser headers
    if (isScrapingTool) {
      setIsBlocked(true);
      setIsLoading(false);
      return;
    }

    // Skip fortress protection initialization for normal users
    // const fortressInstance = new FortressProtection();
    // setFortress(fortressInstance);

    setIsLoading(false);

    // Cleanup on unmount
    // return () => {
    //   fortressInstance.destroy();
    // };
  }, []);

  // Advanced anti-scraping measures
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Minimal keyboard restrictions - only prevent page saving
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Only disable Ctrl+S (Save page)
      if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        return false;
      }
      // All other shortcuts are allowed for normal user experience
    };

    document.addEventListener('keydown', disableKeyboardShortcuts);
    
    // Allow normal text selection - only disable for certain elements
    const disableSelection = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        const tagName = e.target.tagName.toLowerCase();
        // Allow selection everywhere except specifically protected content
        if (e.target.classList.contains('no-select')) {
          e.preventDefault();
          return false;
        }
      }
    };

    // Make selection disabling opt-in rather than default
    document.addEventListener('selectstart', disableSelection);

    // Disable automation detection for normal user experience
    // const checkForAutomation = () => {
    //   // Automation detection disabled to prevent blocking normal users
    // };

    // Disable automation checks for better user experience
    // const automationCheck = setInterval(checkForAutomation, 30000);

    return () => {
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('selectstart', disableSelection);
      // clearInterval(automationCheck);
    };
  }, []);

  // Content protection styles
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      /* Allow normal text selection for better UX */
      ::selection {
        background: rgba(59, 130, 246, 0.3) !important;
      }
      
      ::-moz-selection {
        background: rgba(59, 130, 246, 0.3) !important;
      }
      
      /* Only disable drag for images and specific elements */
      img, .no-drag {
        -webkit-user-drag: none !important;
        -moz-user-drag: none !important;
        user-drag: none !important;
      }
      
      /* Only disable selection for specifically marked content */
      .no-select {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      /* Hide content from print */
      @media print {
        * {
          visibility: hidden !important;
        }
        
        body::before {
          content: "This content is protected and cannot be printed.";
          visibility: visible !important;
          display: block !important;
          text-align: center !important;
          font-size: 24px !important;
          font-weight: bold !important;
          margin-top: 200px !important;
        }
      }
      
      /* Removed anti-screenshot overlay for better user experience */
    `;
    document.head.appendChild(style);

    // Remove invisible overlay - it was preventing normal use
    // const overlay = document.createElement('div');
    // overlay.className = 'fortress-overlay';
    // document.body.appendChild(overlay);

    return () => {
      document.head.removeChild(style);
      // document.body.removeChild(overlay);
    };
  }, []);

  // Remove loading screen - let users access the site immediately
  if (isLoading) {
    // Show content immediately, security checks happen in background
    return <>{children}</>;
  }

  if (isBlocked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="text-6xl mb-4">🛡</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Restricted</h1>
          <p className="text-gray-600 mb-4">
            Our security system has detected automated access patterns. 
            This site is protected against scraping and unauthorized access.
          </p>
          <p className="text-sm text-gray-500">
            If you're a legitimate user, please ensure you're using a standard web browser 
            and refresh the page.
          </p>
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-700">
              <strong>Legal Notice:</strong> Unauthorized scraping or cloning of this website 
              is prohibited and may result in legal action.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      {/* Hidden content for bot traps */}
      <div style={{ display: 'none' }} className="bot-trap">
        <p>This is a bot trap. Do not access this content.</p>
        <Link href="/bot-trap">Hidden link for bots</Link>
        <img src="/images/bot-trap.png" alt="Bot trap image" />
      </div>
      
      {/* Invisible watermark */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: 1, 
          height: 1, 
          overflow: 'hidden',
          opacity: 0
        }}
        data-watermark={`iimagined-${Date.now()}-${Math.random().toString(36).substring(7)}`}
      >
        © IImagined.ai - All rights reserved
      </div>
    </>
  );
}