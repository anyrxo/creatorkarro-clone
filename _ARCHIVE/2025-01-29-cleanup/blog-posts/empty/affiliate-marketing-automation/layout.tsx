import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Marketing Automation: Scale to $75K+/Month with AI-Powered Systems | IImagined.ai',
  description: 'Master affiliate marketing automation with AI content creation, link tracking, and conversion optimization. Build systems that generate massive passive income.',
  keywords: [
    'affiliate marketing automation',
    'affiliate marketing ai',
    'automated affiliate systems',
    'affiliate link automation',
    'affiliate content automation',
    'affiliate marketing scaling',
    'affiliate revenue automation',
    'affiliate marketing tools',
    'affiliate conversion automation',
    'affiliate marketing funnels',
    'affiliate program automation',
    'affiliate tracking automation',
    'passive income automation',
    'affiliate marketing systems'
  ],
  openGraph: {
    title: 'Affiliate Marketing Automation: Scale to $75K+/Month with AI',
    description: 'Advanced affiliate marketing automation with AI-powered systems for massive passive income generation.',
    type: 'article',
    publishedTime: '2024-11-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Affiliate Marketing', 'Marketing Automation', 'Passive Income', 'AI Marketing', 'Revenue Generation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/affiliate-marketing-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Affiliate Marketing Automation - AI-Powered Systems'
      }
    ]
  }
}

export default function AffiliateMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}