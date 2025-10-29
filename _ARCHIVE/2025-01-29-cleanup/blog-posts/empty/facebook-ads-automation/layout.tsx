import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Facebook Ads Automation: Scale Campaigns to $500K+/Month with AI Optimization | IImagined.ai',
  description: 'Master Facebook ads automation with AI bid optimization, audience targeting, and campaign scaling. Build automated advertising systems that dominate.',
  keywords: [
    'facebook ads automation',
    'facebook advertising automation',
    'facebook ads ai optimization',
    'automated facebook campaigns',
    'facebook ads scaling automation',
    'facebook ads automation tools',
    'facebook marketing automation',
    'automated ad campaigns',
    'facebook ads bid automation',
    'facebook ads optimization automation',
    'facebook ads management automation',
    'automated facebook advertising',
    'facebook ads automation software',
    'facebook ads automation strategies'
  ],
  openGraph: {
    title: 'Facebook Ads Automation: Scale Campaigns to $500K+/Month with AI',
    description: 'Advanced Facebook ads automation with AI optimization and scaling systems for dominating advertising campaigns.',
    type: 'article',
    publishedTime: '2024-10-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Facebook Ads', 'Digital Marketing', 'Advertising Automation', 'AI Optimization', 'Campaign Scaling'],
    images: [
      {
        url: 'https://iimagined.ai/blog/facebook-ads-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Facebook Ads Automation - AI Campaign Optimization'
      }
    ]
  }
}

export default function FacebookAdsLayout({ children }: { children: React.ReactNode }) {
  return children
}