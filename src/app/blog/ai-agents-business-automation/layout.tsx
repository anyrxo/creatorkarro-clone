import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents for Business Automation: Build Autonomous Systems That Run 24/7 | IImagined.ai',
  description: 'Create AI agents that automate your entire business. Learn to build autonomous systems with Claude 4, CrewAI, and LangChain that work around the clock.',
  keywords: [
    'ai agents business',
    'business automation ai',
    'ai agents automation',
    'autonomous ai systems',
    'ai agents crewai',
    'ai agents langchain',
    'claude 4 agents',
    'ai workflow automation',
    'ai business systems',
    'automated ai agents',
    'ai agent development',
    'multi-agent systems',
    'ai agent frameworks',
    'business ai automation'
  ],
  openGraph: {
    title: 'AI Agents for Business Automation: Autonomous 24/7 Systems',
    description: 'Build AI agents that automate entire businesses with Claude 4, CrewAI, and advanced frameworks.',
    type: 'article',
    publishedTime: '2025-01-12T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Agents', 'Business Automation', 'Claude 4', 'CrewAI', 'LangChain'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-agents-business-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Agents for Business Automation - Autonomous Systems'
      }
    ]
  }
}

export default function AIAgentsBusinessLayout({ children }: { children: React.ReactNode }) {
  return children
}