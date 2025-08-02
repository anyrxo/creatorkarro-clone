import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creating AI Influencers: Build Virtual Personas That Earn $10K+/Month | IImagined.ai',
  description: 'Learn how to create AI influencers with Midjourney, ComfyUI, and Claude 4. Complete guide to building virtual personas that generate massive income through social media.',
  keywords: [
    'ai influencers',
    'virtual influencers',
    'ai personas',
    'midjourney influencers',
    'ai content creators',
    'virtual content creators',
    'ai influencer marketing',
    'digital influencers',
    'ai social media',
    'virtual personas',
    'ai character creation',
    'synthetic influencers',
    'ai generated influencers',
    'virtual brand ambassadors'
  ],
  openGraph: {
    title: 'Creating AI Influencers: Build Virtual Personas Earning $10K+/Month',
    description: 'Complete guide to creating AI influencers with Midjourney and Claude 4. Build virtual personas that generate massive income.',
    type: 'article',
    publishedTime: '2025-01-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Influencers', 'Virtual Influencers', 'AI Content', 'Midjourney', 'AI Marketing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/creating-ai-influencers/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Creating AI Influencers - Virtual Personas Guide'
      }
    ]
  }
}

export default function CreatingAIInfluencersLayout({ children }: { children: React.ReactNode }) {
  return children
}