import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazon Affiliate Automation: Build Systems That Generate $45K+/Month Revenue | IImagined.ai',
  description: 'Master Amazon affiliate automation with product research, content generation, and link optimization. Build automated systems that scale affiliate income massively.',
  keywords: [
    'amazon affiliate automation',
    'amazon affiliate marketing',
    'affiliate link automation',
    'amazon affiliate tools',
    'automated affiliate income',
    'amazon product research automation',
    'affiliate content automation',
    'amazon associates automation',
    'affiliate marketing scaling',
    'automated amazon reviews',
    'affiliate revenue automation',
    'amazon affiliate seo',
    'affiliate marketing systems',
    'automated affiliate promotion'
  ],
  openGraph: {
    title: 'Amazon Affiliate Automation: Build Systems Generating $45K+/Month',
    description: 'Advanced Amazon affiliate automation with product research and content generation for massive revenue scaling.',
    type: 'article',
    publishedTime: '2024-09-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Amazon Affiliate', 'Affiliate Marketing', 'Marketing Automation', 'Passive Income', 'E-commerce'],
    images: [
      {
        url: 'https://iimagined.ai/blog/amazon-affiliate-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amazon Affiliate Automation - Revenue Generation Systems'
      }
    ]
  }
}

export default function AmazonAffiliateLayout({ children }: { children: React.ReactNode }) {
  return children
}