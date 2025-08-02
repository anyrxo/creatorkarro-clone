import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Automation Tools: Complete Guide to Automating Operations for $100K+ Savings | IImagined.ai',
  description: 'Comprehensive guide to business automation tools and strategies. Automate operations, reduce costs, and scale efficiently with proven automation systems.',
  keywords: [
    'business automation tools',
    'business process automation',
    'automation software',
    'business efficiency tools',
    'automated business systems',
    'business automation strategy',
    'enterprise automation tools',
    'business workflow automation',
    'operations automation',
    'business automation platforms',
    'automated business processes',
    'business automation solutions',
    'small business automation',
    'business automation guide'
  ],
  openGraph: {
    title: 'Business Automation Tools: Complete Guide to Automating Operations for $100K+ Savings',
    description: 'Comprehensive guide to business automation tools and strategies for efficient operations and massive cost savings.',
    type: 'article',
    publishedTime: '2024-08-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Business Automation', 'Business Tools', 'Operations', 'Business Efficiency', 'Enterprise Software'],
    images: [
      {
        url: 'https://iimagined.ai/blog/business-automation-tools/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Business Automation Tools - Operations Automation Guide'
      }
    ]
  }
}

export default function BusinessAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}