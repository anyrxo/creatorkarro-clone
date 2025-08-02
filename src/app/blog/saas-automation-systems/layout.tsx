import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SaaS Automation Systems: Build Software That Generates $1M+/Year ARR | IImagined.ai',
  description: 'Master SaaS automation with customer onboarding, billing systems, and growth automation. Build software businesses that scale to massive recurring revenue.',
  keywords: [
    'saas automation',
    'saas business automation',
    'software automation systems',
    'saas scaling automation',
    'saas customer automation',
    'saas billing automation',
    'saas onboarding automation',
    'saas marketing automation',
    'automated saas systems',
    'saas growth automation',
    'saas revenue automation',
    'software business automation',
    'saas workflow automation',
    'saas automation tools'
  ],
  openGraph: {
    title: 'SaaS Automation Systems: Build Software Generating $1M+/Year ARR',
    description: 'Advanced SaaS automation systems for customer onboarding, billing, and growth that scale to massive ARR.',
    type: 'article',
    publishedTime: '2024-10-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['SaaS Business', 'Software Automation', 'Business Scaling', 'Recurring Revenue', 'Tech Entrepreneurship'],
    images: [
      {
        url: 'https://iimagined.ai/blog/saas-automation-systems/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SaaS Automation Systems - Software Revenue Scaling'
      }
    ]
  }
}

export default function SaaSAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}