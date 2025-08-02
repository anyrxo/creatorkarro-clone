import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Resources - AI Tools, Templates & Growth Hacks | IImagined.ai',
  description: 'Access free AI automation templates, Instagram growth tools, digital product resources, and proven systems. Curated collection of premium tools and platforms for entrepreneurs.',
  keywords: [
    'free ai tools',
    'instagram growth tools',
    'digital product templates',
    'ai automation resources',
    'free templates',
    'growth hacking tools',
    'social media tools',
    'content creation tools',
    'automation tools',
    'entrepreneur resources',
    'business tools',
    'ai prompts free',
    'beehiiv newsletter',
    'runpod gpu',
    'fanvue creator',
    'whop marketplace'
  ],
  openGraph: {
    title: 'Free Resources - Premium AI Tools & Growth Templates',
    description: 'Access free AI automation tools, Instagram growth resources, and digital product templates. Premium tools for entrepreneurs.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/resources-og.png',
        width: 1200,
        height: 630,
        alt: 'Free Resources - AI Tools & Templates for Entrepreneurs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Resources - Premium AI Tools & Growth Templates',
    description: 'Access curated collection of AI tools, growth templates, and entrepreneur resources.',
    creator: '@anyro'
  }
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}