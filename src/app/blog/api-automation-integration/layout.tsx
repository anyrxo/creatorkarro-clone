import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Automation & Integration: Connect 1000+ Services & Build Powerful Workflows | IImagined.ai',
  description: 'Master API automation with REST, GraphQL, and webhook integrations. Build powerful automated workflows that connect unlimited services and platforms.',
  keywords: [
    'api automation',
    'api integration',
    'rest api automation',
    'graphql automation',
    'webhook automation',
    'api workflow automation',
    'automated api testing',
    'api orchestration',
    'microservices automation',
    'api management automation',
    'automated data synchronization',
    'api gateway automation',
    'service integration automation',
    'api automation tools'
  ],
  openGraph: {
    title: 'API Automation & Integration: Connect 1000+ Services & Build Powerful Workflows',
    description: 'Advanced API automation and integration for connecting unlimited services and building powerful automated workflows.',
    type: 'article',
    publishedTime: '2024-06-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['API Automation', 'System Integration', 'Workflow Automation', 'Microservices', 'Developer Tools'],
    images: [
      {
        url: 'https://iimagined.ai/blog/api-automation-integration/og-image.png',
        width: 1200,
        height: 630,
        alt: 'API Automation & Integration - Service Connection Systems'
      }
    ]
  }
}

export default function APIAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}