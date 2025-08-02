import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GPT-4.1 vs Claude Sonnet 3.7: Ultimate AI Model Comparison 2025 | IImagined.ai',
  description: 'Complete comparison of GPT-4.1 vs Claude Sonnet 3.7. Performance benchmarks, capabilities analysis, and which AI model wins for coding, writing, and business.',
  keywords: [
    'gpt 4.1 vs claude sonnet 3.7',
    'gpt 4.1 comparison',
    'claude sonnet 3.7 review',
    'ai model comparison 2025',
    'gpt 4.1 vs claude',
    'claude sonnet 3.7 vs gpt',
    'best ai model 2025',
    'ai benchmarks 2025',
    'gpt 4.1 capabilities',
    'claude sonnet 3.7 capabilities',
    'ai model performance',
    'language model comparison',
    'gpt 4.1 review',
    'claude sonnet review'
  ],
  openGraph: {
    title: 'GPT-4.1 vs Claude Sonnet 3.7: Ultimate AI Model Comparison 2025',
    description: 'Comprehensive comparison and benchmarks between GPT-4.1 and Claude Sonnet 3.7. Find the best AI model for your needs.',
    type: 'article',
    publishedTime: '2025-01-16T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['GPT-4.1', 'Claude Sonnet 3.7', 'AI Comparison', 'AI Models', 'AI Benchmarks'],
    images: [
      {
        url: 'https://iimagined.ai/blog/gpt-4-1-vs-claude-sonnet-3-7-comparison/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GPT-4.1 vs Claude Sonnet 3.7 Comparison'
      }
    ]
  }
}

export default function GPTClaudeComparisonLayout({ children }: { children: React.ReactNode }) {
  return children
}