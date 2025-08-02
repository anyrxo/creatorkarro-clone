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
    // Initial bot detection
    const userAgent = navigator.userAgent;
    const headers = {
      'accept': navigator.userAgent.includes('Chrome') ? 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' : '',
      'accept-language': navigator.language,
      'accept-encoding': 'gzip, deflate, br'
    };

    // Check if this is a bot
    if (detectBotPatterns(userAgent, headers)) {
      setIsBlocked(true);
      setIsLoading(false);
      return;
    }

    // Initialize fortress protection
    const fortressInstance = new FortressProtection();
    setFortress(fortressInstance);

    // Log this request
    const fingerprint = generateBrowserFingerprint();
    fortressInstance.logRequest({
      userAgent: navigator.userAgent,
      ip: 'client-side', // Will be enriched server-side
      path: window.location.pathname
    });

    setIsLoading(false);

    // Cleanup on unmount
    return () => {
      fortressInstance.destroy();
    };
  }, []);

  // Advanced anti-scraping measures
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Disable common scraping methods
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Disable Ctrl+A (Select All)
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', disableKeyboardShortcuts);
    
    // Disable text selection via mouse
    const disableSelection = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        const tagName = e.target.tagName.toLowerCase();
        if (!['input', 'textarea'].includes(tagName)) {
          e.preventDefault();
          return false;
        }
      }
    };

    document.addEventListener('selectstart', disableSelection);

    // Monitor for automation tools
    const checkForAutomation = () => {
      // Check for common automation properties
      const automationIndicators = [
        'webdriver' in navigator,
        'callPhantom' in window,
        '_phantom' in window,
        'Buffer' in window,
        'spawn' in window,
        'emit' in window,
      ];

      if (automationIndicators.some(indicator => indicator)) {
        setIsBlocked(true);
      }
    };

    const automationCheck = setInterval(checkForAutomation, 5000);

    return () => {
      document.removeEventListener('keydown', disableKeyboardShortcuts);
      document.removeEventListener('selectstart', disableSelection);
      clearInterval(automationCheck);
    };
  }, []);

  // Content protection styles
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      /* Advanced content protection */
      ::selection {
        background: transparent !important;
      }
      
      ::-moz-selection {
        background: transparent !important;
      }
      
      /* Disable drag and drop */
      * {
        -webkit-user-drag: none !important;
        -moz-user-drag: none !important;
        user-drag: none !important;
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
      
      /* Anti-screenshot overlay */
      .fortress-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 999998;
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255,255,255,0.01) 10px,
          rgba(255,255,255,0.01) 20px
        );
      }
    `;
    document.head.appendChild(style);

    // Add invisible overlay to prevent screenshots
    const overlay = document.createElement('div');
    overlay.className = 'fortress-overlay';
    document.body.appendChild(overlay);

    return () => {
      document.head.removeChild(style);
      document.body.removeChild(overlay);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing security protocols...</p>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
          <div className="text-6xl mb-4">🛡️</div>
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