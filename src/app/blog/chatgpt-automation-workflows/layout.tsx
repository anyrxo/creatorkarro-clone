import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Automation Workflows: Build AI Systems That Generate $25K+/Month | IImagined.ai',
  description: 'Master ChatGPT automation with advanced workflows and API integrations. Build AI systems that automate businesses and generate massive recurring revenue.',
  keywords: [
    'chatgpt automation',
    'chatgpt workflows',
    'chatgpt api automation',
    'ai automation workflows',
    'chatgpt business automation',
    'openai api automation',
    'chatgpt integration',
    'ai workflow automation',
    'chatgpt custom gpts',
    'chatgpt automation tools',
    'gpt automation systems',
    'chatgpt revenue automation',
    'ai business workflows',
    'chatgpt scaling automation'
  ],
  openGraph: {
    title: 'ChatGPT Automation Workflows: AI Systems Generating $25K+/Month',
    description: 'Advanced ChatGPT automation workflows and API systems that scale businesses to massive revenue.',
    type: 'article',
    publishedTime: '2025-01-07T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['ChatGPT', 'AI Automation', 'OpenAI API', 'Workflow Automation', 'AI Business'],
    images: [
      {
        url: 'https://iimagined.ai/blog/chatgpt-automation-workflows/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ChatGPT Automation Workflows - AI Revenue Systems'
      }
    ]
  }
}

export default function ChatGPTAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}