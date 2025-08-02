import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algorithm Defense System - Protect Your Rankings from Google Updates | IImagined.ai',
  description: 'Advanced algorithm defense system to protect your website rankings from Google algorithm updates. Real-time monitoring, automated adjustments, and penalty recovery tools.',
  keywords: [
    'algorithm defense',
    'google algorithm protection',
    'ranking protection',
    'seo defense system',
    'algorithm update protection',
    'google penalty recovery',
    'ranking stability',
    'seo monitoring',
    'algorithm change detection',
    'website protection',
    'search ranking defense',
    'seo risk management'
  ],
  openGraph: {
    title: 'Algorithm Defense System - Protect Your Rankings',
    description: 'Advanced system to protect your website from Google algorithm updates and maintain stable rankings.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/algorithm-defense-og.png',
        width: 1200,
        height: 630,
        alt: 'Algorithm Defense System - SEO Protection Tools'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algorithm Defense System - Protect Your Rankings',
    description: 'Advanced SEO defense system for Google algorithm protection and ranking stability.',
    creator: '@anyro'
  }
}

export default function AlgorithmDefenseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}