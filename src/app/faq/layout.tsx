import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - AI Automation & Instagram Growth Help | IImagined.ai',
  description: 'Find answers to common questions about AI automation courses, Instagram growth strategies, digital products, and business scaling. Get expert help and guidance.',
  keywords: [
    'faq',
    'frequently asked questions',
    'ai automation help',
    'instagram growth help',
    'course questions',
    'digital product help',
    'automation questions',
    'social media help',
    'business questions',
    'course support',
    'technical support',
    'getting started help'
  ],
  openGraph: {
    title: 'FAQ - AI Automation & Instagram Growth Help',
    description: 'Get answers to common questions about AI automation, Instagram growth, and digital product creation.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/faq-og.png',
        width: 1200,
        height: 630,
        alt: 'FAQ - AI Automation & Instagram Growth Help'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - AI Automation & Instagram Growth Help',
    description: 'Common questions and expert answers about AI automation and Instagram growth.',
    creator: '@anyro'
  }
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}