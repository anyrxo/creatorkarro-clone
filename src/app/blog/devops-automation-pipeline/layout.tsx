import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevOps Automation Pipeline: Build CI/CD Systems That Deploy 100+ Times/Day | IImagined.ai',
  description: 'Master DevOps automation with CI/CD pipelines, infrastructure as code, and deployment automation. Build scalable development workflows that ship faster.',
  keywords: [
    'devops automation',
    'ci cd pipeline',
    'infrastructure as code',
    'deployment automation',
    'build automation',
    'continuous integration',
    'continuous deployment',
    'devops tools automation',
    'automated testing pipeline',
    'infrastructure automation',
    'container automation',
    'kubernetes automation',
    'docker automation',
    'devops workflow automation'
  ],
  openGraph: {
    title: 'DevOps Automation Pipeline: Build CI/CD Systems Deploying 100+ Times/Day',
    description: 'Advanced DevOps automation with CI/CD pipelines and infrastructure as code for rapid deployment cycles.',
    type: 'article',
    publishedTime: '2024-06-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['DevOps', 'CI/CD', 'Infrastructure Automation', 'Deployment', 'Software Development'],
    images: [
      {
        url: 'https://iimagined.ai/blog/devops-automation-pipeline/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevOps Automation Pipeline - CI/CD Systems'
      }
    ]
  }
}

export default function DevOpsAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}