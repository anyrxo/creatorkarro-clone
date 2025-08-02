import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gemini 2 Pro + Bolt.DIY: The Full-Stack AI Revolution That\'s Killing Traditional Development | IImagined.ai',
  description: 'Gemini 2 Pro Flash + Bolt.DIY creates full-stack applications in minutes. Learn how this AI-powered development revolution is replacing traditional coding with natural language programming.',
  keywords: [
    'gemini 2 pro',
    'gemini 2 pro flash',
    'bolt diy',
    'full stack ai',
    'ai development',
    'no code development',
    'ai coding tools',
    'gemini 2 flash',
    'ai web development',
    'full stack automation',
    'ai programming',
    'google gemini 2',
    'bolt ai development',
    'automated web development'
  ],
  openGraph: {
    title: 'Gemini 2 Pro + Bolt.DIY: Full-Stack AI Revolution',
    description: 'Create full-stack applications in minutes with Gemini 2 Pro Flash and Bolt.DIY. The future of AI-powered development.',
    type: 'article',
    publishedTime: '2025-01-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Gemini 2 Pro', 'AI Development', 'Full Stack', 'Bolt DIY', 'No Code'],
    images: [
      {
        url: 'https://iimagined.ai/blog/gemini-2-pro-bolt-diy/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gemini 2 Pro + Bolt.DIY Full-Stack AI Revolution'
      }
    ]
  }
}

export default function Gemini2ProBoltLayout({ children }: { children: React.ReactNode }) {
  return children
}