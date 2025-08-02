import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '500+ ChatGPT Prompts for Business: Marketing, Sales & Operations | IImagined.ai',
  description: 'Massive collection of 500+ ChatGPT prompts for business growth. Marketing, sales, operations, and strategy prompts to boost productivity and revenue.',
  keywords: [
    'chatgpt prompts for business',
    'business chatgpt prompts',
    'chatgpt marketing prompts',
    'chatgpt sales prompts',
    'ai prompts for business',
    'chatgpt business use cases',
    'business ai prompts',
    'chatgpt productivity prompts',
    'chatgpt strategy prompts',
    'business automation prompts',
    'chatgpt operations prompts',
    'ai business tools',
    'chatgpt for entrepreneurs',
    'business growth prompts'
  ],
  openGraph: {
    title: '500+ ChatGPT Prompts for Business: Marketing, Sales & Operations',
    description: 'Complete collection of business ChatGPT prompts to boost productivity, sales, and growth in your business.',
    type: 'article',
    publishedTime: '2024-11-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['ChatGPT', 'Business Prompts', 'AI for Business', 'Productivity', 'Marketing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/chatgpt-prompts-for-business/og-image.png',
        width: 1200,
        height: 630,
        alt: '500+ ChatGPT Prompts for Business'
      }
    ]
  }
}

export default function ChatGPTBusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}