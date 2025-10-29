import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation Platforms: Complete Comparison & Implementation Guide 2025 | IImagined.ai',
  description: 'Compare top marketing automation platforms and learn implementation strategies. HubSpot, Marketo, Pardot, and more - find the perfect platform for your business.',
  keywords: [
    'marketing automation platforms',
    'marketing automation software',
    'hubspot automation',
    'marketo automation',
    'pardot automation',
    'marketing automation comparison',
    'email marketing automation',
    'lead nurturing automation',
    'marketing automation tools',
    'crm automation',
    'marketing automation strategy',
    'automated marketing campaigns',
    'marketing workflow automation',
    'marketing automation roi'
  ],
  openGraph: {
    title: 'Marketing Automation Platforms: Complete Comparison & Implementation Guide 2025',
    description: 'Compare top marketing automation platforms and learn implementation strategies for maximum ROI.',
    type: 'article',
    publishedTime: '2024-08-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Marketing Automation', 'MarTech', 'CRM', 'Lead Generation', 'Email Marketing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/marketing-automation-platforms/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marketing Automation Platforms - Complete Platform Comparison'
      }
    ]
  }
}

export default function MarketingAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}