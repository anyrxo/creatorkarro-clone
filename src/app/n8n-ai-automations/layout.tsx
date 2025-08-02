import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N8N AI Automations Course - Build Advanced AI Workflows & Systems | IImagined.ai',
  description: 'Master N8N AI automations with 50+ advanced workflows. Build intelligent systems, automate complex processes, and scale your business with cutting-edge AI automation techniques.',
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
    title: 'N8N AI Automations Mastery - 50+ Advanced Workflows & Training',
    description: 'Build intelligent automation systems with N8N and AI. Master advanced workflows that scale your business operations automatically.',
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
    title: 'N8N AI Automations Course - Build Advanced AI Workflows',
    description: 'Master N8N with 50+ AI automation workflows. Build intelligent systems that scale your business.',
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