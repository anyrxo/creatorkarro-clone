import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SEO Content Optimization: Generate 500+ Ranking Articles/Month with Claude 4 | IImagined.ai',
  description: 'Master AI-powered SEO content optimization with Claude 4 and GPT-4.1. Learn to create hundreds of ranking articles that dominate Google search results.',
  keywords: [
    'ai seo content optimization',
    'ai seo writing',
    'claude 4 seo content',
    'ai content seo optimization',
    'automated seo content',
    'ai seo article generation',
    'seo content automation',
    'ai powered seo writing',
    'bulk seo content creation',
    'ai seo optimization tools',
    'automated content optimization',
    'ai seo content strategy',
    'seo content scaling ai',
    'ai google ranking content'
  ],
  openGraph: {
    title: 'AI SEO Content Optimization: Generate 500+ Ranking Articles/Month',
    description: 'Advanced AI-powered SEO content optimization with Claude 4 for creating hundreds of Google-ranking articles.',
    type: 'article',
    publishedTime: '2024-11-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI SEO', 'Content Optimization', 'Claude 4', 'SEO Writing', 'Content Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-seo-content-optimization/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI SEO Content Optimization - Ranking Article Generation'
      }
    ]
  }
}

export default function AISEOContentLayout({ children }: { children: React.ReactNode }) {
  return children
}