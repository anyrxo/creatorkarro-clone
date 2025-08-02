import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Windsurf AI Coding: Revolutionary Multi-Agent Development Environment | IImagined.ai',
  description: 'Master Windsurf AI coding with multi-agent workflows. Learn how this revolutionary IDE outperforms Cursor and GitHub Copilot for complex development.',
  keywords: [
    'windsurf ai coding',
    'windsurf ai tutorial',
    'windsurf vs cursor',
    'multi-agent coding',
    'windsurf ai features',
    'ai development environment',
    'windsurf ai workflow',
    'windsurf coding assistant',
    'windsurf ai ide',
    'windsurf development',
    'windsurf ai agents',
    'windsurf programming',
    'ai coding tools 2025',
    'windsurf vs github copilot'
  ],
  openGraph: {
    title: 'Windsurf AI Coding: Revolutionary Multi-Agent Development',
    description: 'Master Windsurf AI with multi-agent workflows that revolutionize development beyond Cursor and Copilot.',
    type: 'article',
    publishedTime: '2025-01-14T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Windsurf AI', 'AI Coding', 'Multi-Agent', 'IDE', 'Development Tools'],
    images: [
      {
        url: 'https://iimagined.ai/blog/windsurf-ai-coding/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Windsurf AI Coding - Multi-Agent Development'
      }
    ]
  }
}

export default function WindsurfAICodingLayout({ children }: { children: React.ReactNode }) {
  return children
}