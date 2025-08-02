import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeepSeek R2: Next-Gen Open Source AI Surpassing Claude 4 & GPT-5 | IImagined.ai',
  description: 'DeepSeek R2 breakthrough analysis - the next-generation open source AI model surpassing Claude 4 and GPT-5. Revolutionary capabilities for free AI development.',
  keywords: [
    'deepseek r2',
    'deepseek r2 vs claude 4',
    'deepseek r2 vs gpt 5',
    'next gen ai model',
    'open source ai breakthrough',
    'deepseek r2 capabilities',
    'deepseek r2 performance',
    'free ai model 2025',
    'deepseek r2 analysis',
    'open source llm 2025',
    'deepseek r2 review',
    'ai model advancement',
    'deepseek r2 features',
    'revolutionary ai model'
  ],
  openGraph: {
    title: 'DeepSeek R2: Next-Gen Open Source AI Surpassing Claude 4 & GPT-5',
    description: 'Complete analysis of DeepSeek R2 - the revolutionary next-gen AI model that surpasses paid alternatives.',
    type: 'article',
    publishedTime: '2025-01-22T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['DeepSeek R2', 'Open Source AI', 'Claude 4', 'GPT-5', 'AI Breakthrough'],
    images: [
      {
        url: 'https://iimagined.ai/blog/deepseek-r2-open-source-ai-revolution/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeepSeek R2 - Next-Gen AI Revolution'
      }
    ]
  }
}

export default function DeepSeekR2Layout({ children }: { children: React.ReactNode }) {
  return children
}