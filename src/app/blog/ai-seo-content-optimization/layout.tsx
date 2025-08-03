import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SEO Content Optimization: Rank #1 on Google with Automated Intelligence | IImagined.ai',
  description: 'Master AI-powered SEO strategies to create content that dominates search results. Learn how to use AI tools for keyword research, content generation, and optimization to drive 10x organic traffic.',
  keywords: [
    'ai seo content optimization',
    'ai seo tools',
    'automated seo content',
    'ai content generation seo',
    'seo optimization with ai',
    'ai powered seo',
    'artificial intelligence seo',
    'ai content writing seo',
    'seo automation tools',
    'ai seo strategy',
    'machine learning seo',
    'ai keyword research',
    'automated content optimization',
    'ai seo software',
    'seo content ai generator'
  ],
  openGraph: {
    title: 'AI SEO Content Optimization: Rank #1 on Google with Automated Intelligence',
    description: 'Master AI-powered SEO strategies to dominate search results and drive 10x organic traffic with automated content optimization.',
    type: 'article',
    publishedTime: '2024-10-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI SEO', 'Content Optimization', 'Search Engine Optimization', 'AI Tools', 'Content Marketing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-seo-content-optimization/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI SEO Content Optimization - Automated Intelligence for Google Rankings'
      }
    ]
  }
}

export default function AISEOLayout({ children }: { children: React.ReactNode }) {
  return children
}