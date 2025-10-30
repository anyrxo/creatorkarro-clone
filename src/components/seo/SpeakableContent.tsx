// Speakable Content Component - Voice Search Optimization
// Optimized for Google Assistant, Siri, Alexa, and all voice search platforms
'use client'

import { ReactNode } from 'react'

interface SpeakableContentProps {
  children: ReactNode
  cssSelector?: string
  xPath?: string
}

export default function SpeakableContent({
  children,
  cssSelector,
  xPath
}: SpeakableContentProps) {

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelector ? [cssSelector, '.speakable-content'] : ['.speakable-content'],
      xPath: xPath ? [xPath] : undefined
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <div
        className="speakable-content"
        role="text"
        aria-label="Voice-searchable content"
        data-speakable="true"
      >
        {children}
      </div>
    </>
  )
}

// Pre-built Speakable Wrapper Components
export function SpeakableHeadline({ children }: { children: ReactNode }) {
  return (
    <div
      className="speakable-content speakable-headline"
      data-speakable="headline"
      role="heading"
      aria-level={1}
    >
      {children}
    </div>
  )
}

export function SpeakableSummary({ children }: { children: ReactNode }) {
  return (
    <div
      className="speakable-content speakable-summary"
      data-speakable="summary"
      role="text"
      aria-label="Content summary"
    >
      {children}
    </div>
  )
}

export function SpeakableKeyPoint({ children }: { children: ReactNode }) {
  return (
    <div
      className="speakable-content speakable-key-point"
      data-speakable="key-point"
      role="text"
      aria-label="Key point"
    >
      {children}
    </div>
  )
}
