import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reddit Automation Marketing: Scale to 1M+ Karma & Drive Massive Traffic | IImagined.ai',
  description: 'Master Reddit automation for marketing and traffic generation. Learn stealth posting, karma farming, and engagement strategies that drive millions of visitors.',
  keywords: [
    'reddit automation',
    'reddit marketing automation',
    'reddit karma farming',
    'reddit traffic generation',
    'reddit posting automation',
    'reddit growth hacks',
    'reddit marketing strategy',
    'reddit engagement automation',
    'reddit stealth marketing',
    'reddit viral marketing',
    'reddit automation tools',
    'reddit scaling strategies',
    'reddit business marketing',
    'reddit promotion automation'
  ],
  openGraph: {
    title: 'Reddit Automation Marketing: Scale to 1M+ Karma & Massive Traffic',
    description: 'Advanced Reddit automation strategies for marketing, karma farming, and traffic generation that drive millions of visitors.',
    type: 'article',
    publishedTime: '2025-01-06T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Reddit Marketing', 'Social Media Automation', 'Traffic Generation', 'Reddit Growth', 'Marketing Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/reddit-automation-marketing/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reddit Automation Marketing - Traffic Generation Systems'
      }
    ]
  }
}

export default function RedditAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}