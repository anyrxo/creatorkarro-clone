import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gemini 2.5 Ultra: Google\'s Most Advanced AI Revolution | IImagined.ai',
  description: 'Gemini 2.5 Ultra complete analysis - Google\'s most advanced AI model with revolutionary capabilities. Performance benchmarks, features, and real-world applications.',
  keywords: [
    'gemini 2.5 ultra',
    'google gemini ultra',
    'gemini 2.5 capabilities',
    'gemini ultra vs gpt 4',
    'gemini ultra vs claude',
    'google ai breakthrough',
    'gemini 2.5 performance',
    'gemini ultra review',
    'advanced ai model',
    'gemini 2.5 features',
    'google ai model',
    'gemini ultra benchmarks',
    'multimodal ai google',
    'gemini 2.5 analysis'
  ],
  openGraph: {
    title: 'Gemini 2.5 Ultra: Google\'s Most Advanced AI Revolution',
    description: 'Complete analysis of Gemini 2.5 Ultra - Google\'s revolutionary AI breakthrough with advanced capabilities.',
    type: 'article',
    publishedTime: '2025-01-14T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Gemini 2.5 Ultra', 'Google AI', 'AI Models', 'AI Breakthrough', 'Multimodal AI'],
    images: [
      {
        url: 'https://iimagined.ai/blog/gemini-2-5-ultra-ai-revolution/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gemini 2.5 Ultra AI Revolution'
      }
    ]
  }
}

export default function Gemini25UltraLayout({ children }: { children: React.ReactNode }) {
  return children
}