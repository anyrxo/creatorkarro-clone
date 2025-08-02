import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Midjourney Business Automation: Scale AI Art Generation to $40K+/Month Revenue | IImagined.ai',
  description: 'Master Midjourney automation for business scaling. Learn bulk image generation, API integration, and monetization strategies that generate massive revenue.',
  keywords: [
    'midjourney automation',
    'midjourney business',
    'ai art automation',
    'midjourney api automation',
    'midjourney scaling',
    'midjourney revenue',
    'ai image generation business',
    'midjourney bulk generation',
    'midjourney monetization',
    'ai art business automation',
    'midjourney workflow automation',
    'midjourney commercial use',
    'ai art scaling strategies',
    'midjourney business model'
  ],
  openGraph: {
    title: 'Midjourney Business Automation: Scale AI Art to $40K+/Month',
    description: 'Advanced Midjourney automation strategies and business systems for scaling AI art generation to massive revenue.',
    type: 'article',
    publishedTime: '2024-12-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Midjourney', 'AI Art', 'Business Automation', 'AI Image Generation', 'Creative Business'],
    images: [
      {
        url: 'https://iimagined.ai/blog/midjourney-business-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Midjourney Business Automation - AI Art Revenue Systems'
      }
    ]
  }
}

export default function MidjourneyBusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}