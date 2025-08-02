import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude 4 vs GPT-4.1 vs DeepSeek R1: Ultimate AI Model Comparison 2025 | IImagined.ai',
  description: 'Complete comparison of Claude 4, GPT-4.1, and DeepSeek R1. Performance benchmarks, capabilities analysis, and which AI model wins for coding, writing, and automation.',
  keywords: [
    'claude 4 vs gpt 4',
    'claude 4 comparison',
    'gpt 4.1 vs claude 4',
    'deepseek r1 comparison',
    'ai model comparison 2025',
    'best ai model 2025',
    'claude 4 review',
    'gpt 4.1 review',
    'deepseek r1 review',
    'ai benchmarks 2025',
    'language model comparison',
    'ai capabilities comparison',
    'claude 4 performance',
    'gpt 4.1 performance'
  ],
  openGraph: {
    title: 'Claude 4 vs GPT-4.1 vs DeepSeek R1: Ultimate AI Comparison 2025',
    description: 'Complete analysis and benchmarks comparing Claude 4, GPT-4.1, and DeepSeek R1. Find out which AI model dominates in 2025.',
    type: 'article',
    publishedTime: '2025-01-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Claude 4', 'GPT-4.1', 'DeepSeek R1', 'AI Comparison', 'AI Models 2025'],
    images: [
      {
        url: 'https://iimagined.ai/blog/claude-4-vs-gpt-4-comparison/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Claude 4 vs GPT-4.1 vs DeepSeek R1 Comparison'
      }
    ]
  }
}

export default function Claude4ComparisonLayout({ children }: { children: React.ReactNode }) {
  return children
}