import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Products That Sell in 2025: 50+ Profitable Ideas & Launch Guide | IImagined.ai',
  description: 'Discover 50+ digital products that sell in 2025. Complete guide to profitable digital product ideas, creation, and launch strategies for maximum revenue.',
  keywords: [
    'digital products that sell',
    'profitable digital products',
    'digital product ideas 2025',
    'best selling digital products',
    'digital product business',
    'how to sell digital products',
    'digital product creation',
    'online product ideas',
    'digital product marketing',
    'profitable online products',
    'digital product launch',
    'digital product success',
    'online business products',
    'digital entrepreneurship'
  ],
  openGraph: {
    title: 'Digital Products That Sell in 2025: 50+ Profitable Ideas & Launch Guide',
    description: 'Complete guide to digital products that sell - 50+ profitable ideas and proven launch strategies for 2025.',
    type: 'article',
    publishedTime: '2024-12-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Digital Products', 'Online Business', 'Product Launch', 'Entrepreneurship', 'E-commerce'],
    images: [
      {
        url: 'https://iimagined.ai/blog/digital-products-that-sell-2025/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Products That Sell in 2025'
      }
    ]
  }
}

export default function DigitalProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}