import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cursor AI Coding: Master AI-Powered Development with Claude 4 Integration | IImagined.ai',
  description: 'Master Cursor AI with Claude 4 integration for 10x faster coding. Learn advanced prompts, workflows, and techniques that professional developers use.',
  keywords: [
    'cursor ai coding',
    'cursor ai tutorial',
    'cursor claude 4',
    'ai coding tools',
    'cursor ai development',
    'ai pair programming',
    'cursor ai features',
    'ai code generation',
    'cursor vs github copilot',
    'cursor ai workflow',
    'ai assisted coding',
    'cursor ai tips',
    'development automation',
    'cursor ai prompts'
  ],
  openGraph: {
    title: 'Cursor AI Coding: Master AI Development with Claude 4',
    description: 'Learn Cursor AI with Claude 4 for 10x faster development. Advanced techniques and workflows for professional developers.',
    type: 'article',
    publishedTime: '2025-01-08T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Cursor AI', 'AI Coding', 'Claude 4', 'Development Tools', 'Programming'],
    images: [
      {
        url: 'https://iimagined.ai/blog/cursor-ai-coding/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cursor AI Coding - Master AI Development'
      }
    ]
  }
}

export default function CursorAICodingLayout({ children }: { children: React.ReactNode }) {
  return children
}