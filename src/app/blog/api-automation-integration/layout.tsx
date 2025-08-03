import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Automation & Integration: Build $50K/Month Systems That Connect Everything | IImagined.ai',
  description: 'Master automated API workflows with Zapier, Make, n8n, and more. Learn to sync data, trigger actions, and scale businesses through intelligent API integration.',
  keywords: [
    'api automation',
    'api integration',
    'automated api workflows',
    'api automation tools',
    'zapier automation',
    'make integromat',
    'n8n automation',
    'api workflow automation',
    'rest api automation',
    'api integration platform',
    'webhook automation',
    'api orchestration',
    'automated data sync',
    'api management',
    'enterprise api integration'
  ],
  openGraph: {
    title: 'API Automation & Integration: Build $50K/Month Systems That Connect Everything',
    description: 'Master automated API workflows to sync data, trigger actions, and scale businesses without limits.',
    type: 'article',
    publishedTime: '2024-12-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['API Automation', 'Integration', 'Workflow Automation', 'Business Systems', 'No-Code'],
    images: [
      {
        url: 'https://iimagined.ai/blog/api-automation-integration/og-image.png',
        width: 1200,
        height: 630,
        alt: 'API Automation & Integration - Connect Everything'
      }
    ]
  }
}

export default function APIAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}