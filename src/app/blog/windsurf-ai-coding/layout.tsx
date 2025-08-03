import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Windsurf AI Coding: The Cursor Killer That\'s 10x Faster | IImagined.ai',
  description: 'Discover why developers are switching from Cursor to Windsurf AI for blazing-fast code generation, multi-file workflows, and superior AI assistance.',
  keywords: [
    'windsurf ai coding',
    'windsurf vs cursor',
    'ai coding assistant',
    'windsurf cascade',
    'cursor alternative',
    'ai code editor',
    'windsurf ide',
    'supermaven integration',
    'ai programming tool',
    'code generation ai',
    'windsurf flows',
    'multi file refactoring',
    'ai powered ide',
    'windsurf tutorial',
    'cursor replacement'
  ],
  openGraph: {
    title: 'Windsurf AI Coding: The Cursor Killer That\'s 10x Faster',
    description: 'Why developers are switching from Cursor to Windsurf AI for superior code generation and development speed.',
    type: 'article',
    publishedTime: '2024-12-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Coding', 'Windsurf', 'Developer Tools', 'IDE', 'Code Generation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/windsurf-ai-coding/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Windsurf AI Coding - The Cursor Alternative'
      }
    ]
  }
}

export default function WindsurfLayout({ children }: { children: React.ReactNode }) {
  return children
}