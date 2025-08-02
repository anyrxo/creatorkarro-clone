import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Make.com Automation Mastery: Build Complex Workflows That Scale to $50K+/Month | IImagined.ai',
  description: 'Master Make.com (formerly Integromat) automation with advanced workflows, API integrations, and scaling strategies. Build automated systems that generate massive revenue.',
  keywords: [
    'make.com automation',
    'make automation workflows',
    'integromat automation',
    'make.com tutorials',
    'workflow automation',
    'make.com integrations',
    'api automation make',
    'business automation make',
    'make.com scaling',
    'make.com advanced',
    'no-code automation',
    'automation workflows',
    'make.com revenue',
    'automated business systems'
  ],
  openGraph: {
    title: 'Make.com Automation Mastery: Workflows That Scale to $50K+/Month',
    description: 'Advanced Make.com automation strategies and workflows that scale businesses to massive revenue.',
    type: 'article',
    publishedTime: '2025-01-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Make.com', 'Automation', 'Workflows', 'No-Code', 'Business Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/make-app-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Make.com Automation Mastery - Advanced Workflows'
      }
    ]
  }
}

export default function MakeAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}