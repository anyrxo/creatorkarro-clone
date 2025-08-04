import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N8N AI Automations Course - Complete No-Code Workflow Builder Training | Business Process Automation Mastery | Advanced AI Integration & Systems | Save 40+ Hours Weekly',
  description: 'Master N8N automation with 50+ proven workflows that save 40+ hours weekly. Complete business process automation training with AI integration, no coding required. Join 1,600+ successful students.',
  keywords: [
    'n8n automation',
    'n8n course',
    'ai automation workflows',
    'n8n ai integration',
    'workflow automation',
    'n8n tutorials',
    'ai process automation',
    'n8n training',
    'business automation',
    'ai workflow builder',
    'n8n ai nodes',
    'automation systems',
    'n8n advanced workflows',
    'ai business automation',
    'no code automation'
  ],
  openGraph: {
    title: 'N8N AI Automations Course - Complete No-Code Workflow Builder Training | Business Process Automation Mastery',
    description: 'Master N8N automation with 50+ proven workflows that save 40+ hours weekly. Complete business automation training with AI integration, no coding required.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/n8n-ai-automations-og.png',
        width: 1200,
        height: 630,
        alt: 'N8N AI Automations Course - Advanced Workflow Builder Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8N AI Automations Course - Complete No-Code Workflow Builder Training | Save 40+ Hours Weekly',
    description: 'Master N8N automation with 50+ proven workflows that save 40+ hours weekly. Complete business automation training, no coding required.',
    creator: '@anyro'
  }
}

export default function N8NAutomationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}