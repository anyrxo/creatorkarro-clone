import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Service Automation: Build AI Support Systems That Handle 90% of Inquiries | IImagined.ai',
  description: 'Master customer service automation with AI chatbots, ticket routing, and response systems. Reduce support costs by 80% while improving customer satisfaction.',
  keywords: [
    'customer service automation',
    'automated customer support',
    'ai customer service',
    'chatbot automation',
    'support ticket automation',
    'customer service ai',
    'automated help desk',
    'customer support systems',
    'service automation tools',
    'automated customer care',
    'customer service bots',
    'support automation software',
    'automated customer responses',
    'customer service efficiency'
  ],
  openGraph: {
    title: 'Customer Service Automation: Build AI Support Systems Handling 90% of Inquiries',
    description: 'Advanced customer service automation with AI chatbots and support systems for massive cost reduction.',
    type: 'article',
    publishedTime: '2024-07-30T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Customer Service', 'AI Automation', 'Chatbots', 'Support Systems', 'Business Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/customer-service-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Customer Service Automation - AI Support Systems'
      }
    ]
  }
}

export default function CustomerServiceLayout({ children }: { children: React.ReactNode }) {
  return children
}