import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Funnel Automation: Build Funnels That Convert 45%+ & Generate $200K+/Month | IImagined.ai',
  description: 'Master sales funnel automation with lead capture, nurturing sequences, and conversion optimization. Build high-converting funnels that scale revenue automatically.',
  keywords: [
    'sales funnel automation',
    'automated sales funnels',
    'sales automation systems',
    'lead nurturing automation',
    'conversion funnel automation',
    'automated lead generation',
    'sales process automation',
    'funnel optimization automation',
    'automated sales sequences',
    'sales pipeline automation',
    'email funnel automation',
    'marketing funnel automation',
    'automated sales campaigns',
    'sales funnel software'
  ],
  openGraph: {
    title: 'Sales Funnel Automation: Build Funnels Converting 45%+ for $200K+/Month',
    description: 'Advanced sales funnel automation with lead nurturing and conversion optimization for massive revenue scaling.',
    type: 'article',
    publishedTime: '2024-07-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Sales Funnels', 'Sales Automation', 'Lead Generation', 'Conversion Optimization', 'Revenue Generation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/sales-funnel-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sales Funnel Automation - High-Converting Revenue Systems'
      }
    ]
  }
}

export default function SalesFunnelLayout({ children }: { children: React.ReactNode }) {
  return children
}