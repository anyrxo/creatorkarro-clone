'use client'

/**
 * Skip to Content Link
 * Accessibility feature allowing keyboard users to skip navigation
 * WCAG 2.1 Level A requirement (2.4.1)
 * Enhanced with WCAG 2.4.7 Level AA focus indicators
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="skip-to-main sr-only focus:not-sr-only"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}
