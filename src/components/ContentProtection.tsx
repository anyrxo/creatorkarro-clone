'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ContentProtectionProps {
  children: ReactNode;
  level?: 'basic' | 'enhanced' | 'maximum';
  watermark?: boolean;
  disableSelection?: boolean;
  disableRightClick?: boolean;
  obfuscate?: boolean;
}

export function ContentProtection({
  children,
  level = 'enhanced',
  watermark = true,
  disableSelection = true,
  disableRightClick = true,
  obfuscate = false
}: ContentProtectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Text selection prevention
    if (disableSelection) {
      const preventSelection = (e: Event) => {
        e.preventDefault();
        return false;
      };

      container.addEventListener('selectstart', preventSelection);
      container.addEventListener('mousedown', preventSelection);
      
      return () => {
        container.removeEventListener('selectstart', preventSelection);
        container.removeEventListener('mousedown', preventSelection);
      };
    }
  }, [disableSelection]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Right-click prevention
    if (disableRightClick) {
      const preventRightClick = (e: MouseEvent) => {
        e.preventDefault();
        return false;
      };

      container.addEventListener('contextmenu', preventRightClick);
      
      return () => {
        container.removeEventListener('contextmenu', preventRightClick);
      };
    }
  }, [disableRightClick]);

  useEffect(() => {
    if (!containerRef.current || !watermark) return;

    // Add invisible watermark
    const addWatermark = () => {
      const watermarkElement = document.createElement('div');
      watermarkElement.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        font-size: 48px;
        color: rgba(0, 0, 0, 0.02);
        pointer-events: none;
        user-select: none;
        z-index: 1;
        font-family: Arial, sans-serif;
        font-weight: bold;
        white-space: nowrap;
      `;
      watermarkElement.textContent = `© IImagined.ai ${new Date().getFullYear()}`;
      
      containerRef.current?.appendChild(watermarkElement);
    };

    addWatermark();
  }, [watermark]);

  useEffect(() => {
    if (level === 'maximum') {
      // Enhanced protection measures
      const protectionStyles = document.createElement('style');
      protectionStyles.textContent = `
        .content-protection-maximum * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-user-drag: none !important;
          -moz-user-drag: none !important;
          user-drag: none !important;
          -webkit-touch-callout: none !important;
        }
        
        .content-protection-maximum img {
          pointer-events: none !important;
          -webkit-user-drag: none !important;
          -moz-user-drag: none !important;
          user-drag: none !important;
        }
        
        .content-protection-maximum::selection {
          background: transparent !important;
        }
        
        .content-protection-maximum::-moz-selection {
          background: transparent !important;
        }
        
        @media print {
          .content-protection-maximum {
            display: none !important;
          }
        }
      `;
      
      document.head.appendChild(protectionStyles);
      
      return () => {
        document.head.removeChild(protectionStyles);
      };
    }
  }, [level]);

  useEffect(() => {
    if (obfuscate) {
      // Obfuscate text content
      const obfuscateTextNodes = (element: Element) => {
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_TEXT,
          null
        );

        const textNodes: Text[] = [];
        let node;
        while (node = walker.nextNode()) {
          textNodes.push(node as Text);
        }

        textNodes.forEach(textNode => {
          if (textNode.textContent && textNode.textContent.trim()) {
            const span = document.createElement('span');
            span.style.position = 'relative';
            
            // Add decoy characters
            const obfuscatedText = textNode.textContent
              .split('')
              .map(char => `${char}<span style="position:absolute;left:-9999px;">decoy</span>`)
              .join('');
            
            span.innerHTML = obfuscatedText;
            textNode.parentNode?.replaceChild(span, textNode);
          }
        });
      };

      if (containerRef.current) {
        obfuscateTextNodes(containerRef.current);
      }
    }
  }, [obfuscate]);

  // CSS classes based on protection level
  const protectionClasses = {
    basic: 'content-protection-basic',
    enhanced: 'content-protection-enhanced',
    maximum: 'content-protection-maximum'
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${protectionClasses[level]}`}
      style={{
        position: 'relative',
        ...(disableSelection && {
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'
        })
      }}
      data-protect="true"
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={disableRightClick ? (e) => e.preventDefault() : undefined}
    >
      {children}
      
      {/* Invisible protection layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          background: 'transparent',
          zIndex: 999
        }}
        aria-hidden="true"
      />
      
      {/* Hidden content for bots to find */}
      <div style={{ display: 'none' }}>
        <p>Bot trap content - do not access</p>
        <a href="/api/bot-trap">Hidden bot trap link</a>
      </div>
      
      {/* Metadata for tracking */}
      <div
        style={{
          position: 'absolute',
          width: 1,
          height: 1,
          overflow: 'hidden',
          opacity: 0
        }}
        data-protection-id={`protected-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`}
      >
        © IImagined.ai Protected Content
      </div>
    </div>
  );
}

// HOC for easy content protection
export function withContentProtection<T extends {}>(
  Component: React.ComponentType<T>,
  protectionOptions?: Partial<ContentProtectionProps>
) {
  return function ProtectedComponent(props: T) {
    return (
      <ContentProtection {...protectionOptions}>
        <Component {...props} />
      </ContentProtection>
    );
  };
}