import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Content Creation Tools 2025: Complete Creator Toolkit | IImagined.ai',
  description: 'Discover the best AI content creation tools for 2025. Complete toolkit for blog writing, video creation, social media, and content automation.',
  keywords: [
    'ai content creation tools',
    'ai content generator',
    'ai writing tools',
    'content creation ai',
    'ai content creator',
    'automated content creation',
    'ai blog writer',
    'ai content marketing',
    'content generation ai',
    'ai writing assistant',
    'ai content tools 2025',
    'content automation tools',
    'ai copywriting tools',
    'creative ai tools'
  ],
  openGraph: {
    title: 'Best AI Content Creation Tools 2025: Complete Creator Toolkit',
    description: 'Complete guide to AI content creation tools - automate your content workflow with the best AI tools for creators.',
    type: 'article',
    publishedTime: '2024-12-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Content Creation', 'Content Marketing', 'AI Tools', 'Content Automation', 'Digital Marketing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-content-creation-tools-2025/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best AI Content Creation Tools 2025'
      }
    ]
  }
}

export default function AIContentCreationLayout({ children }: { children: React.ReactNode }) {
  return children
}