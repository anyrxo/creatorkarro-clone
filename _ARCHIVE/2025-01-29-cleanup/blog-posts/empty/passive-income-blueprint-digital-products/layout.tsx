import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Passive Income Blueprint: Digital Products That Generate $10K+/Month | IImagined.ai',
  description: 'Complete passive income blueprint for digital products. Proven strategies to create, launch, and scale digital products generating $10K+ monthly recurring revenue.',
  keywords: [
    'passive income blueprint',
    'digital products passive income',
    'how to make passive income',
    'digital product business',
    'passive income ideas',
    'online passive income',
    'digital product sales',
    'passive income strategies',
    'recurring revenue model',
    'digital product creation',
    'passive income streams',
    'online business model',
    'digital entrepreneurship',
    'passive income system'
  ],
  openGraph: {
    title: 'Passive Income Blueprint: Digital Products That Generate $10K+/Month',
    description: 'Complete guide to building passive income streams with digital products. Proven strategies for $10K+ monthly revenue.',
    type: 'article',
    publishedTime: '2024-12-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Passive Income', 'Digital Products', 'Online Business', 'Entrepreneurship', 'Revenue Generation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/passive-income-blueprint-digital-products/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Passive Income Blueprint - Digital Products'
      }
    ]
  }
}

export default function PassiveIncomeLayout({ children }: { children: React.ReactNode }) {
  return children
}