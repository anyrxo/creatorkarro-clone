import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Claude 4 Agentic Coding Revolution: AI That Codes Like Senior Developers | IImagined.ai',
  description: 'Claude 4 agentic coding analysis - revolutionary AI coding capabilities that match senior developers. Complete guide to using Claude 4 for autonomous development.',
  keywords: [
    'claude 4 coding',
    'claude 4 agentic',
    'claude 4 programming',
    'ai coding assistant',
    'claude 4 development',
    'agentic ai coding',
    'claude 4 capabilities',
    'ai software development',
    'claude 4 vs cursor',
    'claude 4 vs copilot',
    'autonomous coding ai',
    'claude 4 review',
    'ai pair programming',
    'claude 4 features'
  ],
  openGraph: {
    title: 'Claude 4 Agentic Coding Revolution: AI That Codes Like Senior Developers',
    description: 'Complete analysis of Claude 4 agentic coding capabilities and how it revolutionizes software development.',
    type: 'article',
    publishedTime: '2025-01-18T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Claude 4', 'AI Coding', 'Agentic AI', 'Software Development', 'Programming'],
    images: [
      {
        url: 'https://iimagined.ai/blog/claude-4-agentic-coding-revolution/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Claude 4 Agentic Coding Revolution'
      }
    ]
  }
}

export default function Claude4CodingLayout({ children }: { children: React.ReactNode }) {
  return children
}