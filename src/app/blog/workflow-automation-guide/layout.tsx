import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workflow Automation Guide: Streamline Business Processes for Maximum Efficiency | IImagined.ai',
  description: 'Complete guide to workflow automation for businesses. Learn to automate repetitive tasks, optimize processes, and increase productivity with proven systems.',
  keywords: [
    'workflow automation',
    'business process automation',
    'workflow optimization',
    'process automation tools',
    'automated workflows',
    'business efficiency automation',
    'workflow management automation',
    'process improvement automation',
    'automated business processes',
    'workflow automation software',
    'business automation strategy',
    'workflow automation guide',
    'process automation guide',
    'workflow efficiency tools'
  ],
  openGraph: {
    title: 'Workflow Automation Guide: Streamline Business Processes for Maximum Efficiency',
    description: 'Complete guide to workflow automation and business process optimization for maximum productivity.',
    type: 'article',
    publishedTime: '2024-08-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Workflow Automation', 'Business Processes', 'Process Optimization', 'Business Efficiency', 'Productivity'],
    images: [
      {
        url: 'https://iimagined.ai/blog/workflow-automation-guide/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Workflow Automation Guide - Business Process Optimization'
      }
    ]
  }
}

export default function WorkflowAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}