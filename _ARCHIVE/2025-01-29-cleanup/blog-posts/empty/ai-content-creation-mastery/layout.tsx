import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Content Creation Mastery: Generate 1000+ Posts/Day with Claude 4 & GPT-4.1 | IImagined.ai',
  description: 'Master AI content creation with Claude 4, GPT-4.1, and Gemini 2 Pro. Learn to generate thousands of high-quality posts, articles, and social media content daily.',
  keywords: [
    'ai content creation',
    'ai content generation',
    'claude 4 content creation',
    'gpt 4.1 content',
    'ai writing tools',
    'content automation',
    'ai blog writing',
    'ai social media content',
    'content creation automation',
    'ai copywriting',
    'bulk content generation',
    'ai content strategy',
    'automated content creation',
    'ai content marketing'
  ],
  openGraph: {
    title: 'AI Content Creation Mastery: Generate 1000+ Posts/Day with AI',
    description: 'Master AI content creation with Claude 4 and GPT-4.1. Generate thousands of high-quality posts and articles daily.',
    type: 'article',
    publishedTime: '2025-01-09T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Content Creation', 'Claude 4', 'GPT-4.1', 'Content Automation', 'AI Writing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-content-creation-mastery/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Content Creation Mastery - Generate 1000+ Posts Daily'
      }
    ]
  }
}

export default function AIContentCreationLayout({ children }: { children: React.ReactNode }) {
  return children
}