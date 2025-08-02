import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced Rank Tracking System - Monitor Keywords & Rankings | IImagined.ai',
  description: 'Professional rank tracking system with real-time keyword monitoring, SERP analysis, competitor tracking, and automated reporting. Track thousands of keywords across multiple search engines.',
  keywords: [
    'rank tracking',
    'keyword tracking',
    'serp monitoring',
    'ranking tracker',
    'position tracking',
    'keyword rank tracker',
    'search ranking monitor',
    'seo tracking',
    'ranking analytics',
    'keyword position',
    'serp tracker',
    'ranking reports'
  ],
  openGraph: {
    title: 'Advanced Rank Tracking System - Monitor Keywords & Rankings',
    description: 'Professional rank tracking with real-time monitoring and automated reporting.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/rank-tracking-og.png',
        width: 1200,
        height: 630,
        alt: 'Advanced Rank Tracking System - Keyword Monitoring'
      }
    ]
  }
}

export default function RankTrackingLayout({ children }: { children: React.ReactNode }) {
  return children
}