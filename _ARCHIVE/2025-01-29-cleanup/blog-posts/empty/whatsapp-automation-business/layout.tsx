import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WhatsApp Automation Business: Build Bot Systems That Generate $25K+/Month | IImagined.ai',
  description: 'Master WhatsApp Business automation with chatbots, message sequences, and customer service systems. Build automated WhatsApp businesses that scale.',
  keywords: [
    'whatsapp automation',
    'whatsapp business automation',
    'whatsapp bot automation',
    'whatsapp marketing automation',
    'whatsapp chatbot business',
    'automated whatsapp marketing',
    'whatsapp automation tools',
    'whatsapp customer service automation',
    'whatsapp scaling automation',
    'whatsapp revenue automation',
    'whatsapp api automation',
    'whatsapp messaging automation',
    'whatsapp business bot',
    'automated whatsapp systems'
  ],
  openGraph: {
    title: 'WhatsApp Automation Business: Build Bot Systems Generating $25K+/Month',
    description: 'Advanced WhatsApp Business automation with chatbots and customer service systems for scalable messaging businesses.',
    type: 'article',
    publishedTime: '2024-09-30T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['WhatsApp Business', 'Messaging Automation', 'Chatbots', 'Customer Service', 'Business Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/whatsapp-automation-business/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WhatsApp Automation Business - Messaging Bot Systems'
      }
    ]
  }
}

export default function WhatsAppAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}