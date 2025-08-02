import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Automation Tools 2025: Complete Business Automation Guide | IImagined.ai',
  description: 'Discover the best AI automation tools for 2025. Learn how to automate your business with Claude 4, N8N, Zapier, and more. Complete guide with setup tutorials and real-world examples.',
  keywords: [
    'ai automation tools 2025',
    'best ai automation',
    'business automation',
    'ai workflow automation',
    'claude 4 automation',
    'n8n automation',
    'zapier automation',
    'ai business tools',
    'automation software',
    'ai process automation',
    'workflow automation',
    'ai tools for business',
    'automation guide',
    'ai productivity tools'
  ],
  openGraph: {
    title: 'Best AI Automation Tools 2025: Complete Business Automation Guide',
    description: 'Master business automation with the latest AI tools. Complete guide to Claude 4, N8N, Zapier, and more advanced automation systems.',
    type: 'article',
    publishedTime: '2025-01-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Automation', 'Business Tools', 'Productivity', 'Workflow Automation', 'AI Tools'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-automation-guide/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best AI Automation Tools 2025 - Complete Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Automation Tools 2025: Complete Business Guide',
    description: 'Master business automation with Claude 4, N8N, Zapier and more AI tools.',
    creator: '@anyro'
  }
}

export default function AIAutomationGuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}