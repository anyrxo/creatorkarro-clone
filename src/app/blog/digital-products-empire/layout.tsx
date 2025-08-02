import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Products Empire: Build a $100K/Year Passive Income Business in 2025 | IImagined.ai',
  description: 'Learn how to build a digital products empire generating $100K+ annually. Proven strategies for creating, marketing, and scaling digital products that sell on autopilot.',
  keywords: [
    'digital products empire',
    'passive income 2025',
    'digital product business',
    'online course creation',
    'digital product marketing',
    'passive income ideas',
    'digital products that sell',
    'online business empire',
    'digital product strategies',
    'make money online',
    'course creation',
    'digital entrepreneurship',
    'scaling digital products',
    'automated income'
  ],
  openGraph: {
    title: 'Digital Products Empire: Build $100K/Year Passive Income',
    description: 'Proven strategies to build a digital products empire generating $100K+ annually with automated sales systems.',
    type: 'article',
    publishedTime: '2025-01-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Digital Products', 'Passive Income', 'Online Business', 'Entrepreneurship', 'Course Creation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/digital-products-empire/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Products Empire - Build Passive Income Business'
      }
    ]
  }
}

export default function DigitalProductsEmpireLayout({ children }: { children: React.ReactNode }) {
  return children
}