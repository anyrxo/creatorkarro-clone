import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N8N Beginner\'s Guide 2025: Complete Workflow Automation Tutorial | IImagined.ai',
  description: 'Master N8N automation from scratch. Complete beginner\'s guide to building powerful workflows, connecting APIs, and automating your business processes with N8N.',
  keywords: [
    'n8n beginners guide',
    'n8n tutorial',
    'workflow automation',
    'n8n automation',
    'no code automation',
    'api automation',
    'business process automation',
    'n8n workflows',
    'automation tutorial',
    'n8n guide',
    'workflow builder',
    'automation tools',
    'n8n setup',
    'n8n examples'
  ],
  openGraph: {
    title: 'N8N Beginner\'s Guide 2025: Complete Workflow Automation Tutorial',
    description: 'Master N8N automation from scratch with this complete beginner\'s guide. Build powerful workflows and automate your business.',
    type: 'article',
    publishedTime: '2025-01-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['N8N', 'Automation', 'Workflow', 'No Code', 'Business Process'],
    images: [
      {
        url: 'https://iimagined.ai/blog/n8n-beginners-guide/og-image.png',
        width: 1200,
        height: 630,
        alt: 'N8N Beginner\'s Guide - Complete Automation Tutorial'
      }
    ]
  }
}

export default function N8NBeginnersGuideLayout({ children }: { children: React.ReactNode }) {
  return children
}