import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeepSeek R1: Open Source AI Revolution Matching GPT-4o Performance | IImagined.ai',
  description: 'DeepSeek R1 analysis - the revolutionary open source AI model matching GPT-4o performance. Free alternative that changes everything for AI developers and businesses.',
  keywords: [
    'deepseek r1',
    'open source ai',
    'deepseek r1 vs gpt 4',
    'free ai model',
    'open source llm',
    'deepseek analysis',
    'ai model comparison',
    'free gpt alternative',
    'deepseek r1 performance',
    'deepseek r1 capabilities',
    'open source ai revolution',
    'deepseek r1 review',
    'chinese ai model',
    'deepseek reasoning'
  ],
  openGraph: {
    title: 'DeepSeek R1: Open Source AI Revolution Matching GPT-4o Performance',
    description: 'Complete analysis of DeepSeek R1 - the game-changing open source AI model that rivals GPT-4o for free.',
    type: 'article',
    publishedTime: '2025-01-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['DeepSeek R1', 'Open Source AI', 'AI Models', 'GPT Alternative', 'AI Development'],
    images: [
      {
        url: 'https://iimagined.ai/blog/deepseek-r1-open-source-ai-revolution/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeepSeek R1 - Open Source AI Revolution'
      }
    ]
  }
}

export default function DeepSeekR1Layout({ children }: { children: React.ReactNode }) {
  return children
}