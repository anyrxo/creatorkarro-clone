'use client'

/**
 * Skip to Content Link
 * Accessibility feature allowing keyboard users to skip navigation
 * WCAG 2.1 Level A requirement (2.4.1)
 */
export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 font-semibold transition-all"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}
