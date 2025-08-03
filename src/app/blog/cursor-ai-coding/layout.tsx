import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cursor AI Coding: Build Full-Stack Apps 100x Faster with AI Pair Programming | IImagined.ai',
  description: 'Master Cursor AI IDE with Chat Mode, Cmd+K generation, Copilot++, and AI debugging. Learn how developers ship production apps in hours, not weeks.',
  keywords: [
    'cursor ai coding',
    'cursor ide',
    'ai pair programming',
    'cursor chat mode',
    'cursor cmd k',
    'cursor copilot++',
    'ai code editor',
    'cursor codebase q&a',
    'ai debugging tool',
    'cursor terminal ai',
    'cursor vs github copilot',
    'ai powered development',
    'cursor tutorial',
    'cursor ai features',
    'automated coding assistant'
  ],
  openGraph: {
    title: 'Cursor AI Coding: Build Full-Stack Apps 100x Faster with AI Pair Programming',
    description: 'Discover how developers are shipping production apps in hours using Cursor AI\'s revolutionary features.',
    type: 'article',
    publishedTime: '2024-12-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Coding', 'Cursor', 'Developer Tools', 'IDE', 'Pair Programming'],
    images: [
      {
        url: 'https://iimagined.ai/blog/cursor-ai-coding/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cursor AI Coding - Revolutionary AI IDE'
      }
    ]
  }
}

export default function CursorAILayout({ children }: { children: React.ReactNode }) {
  return children
}
