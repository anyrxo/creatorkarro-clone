import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Management Automation: Streamline Projects & Boost Team Productivity 300% | IImagined.ai',
  description: 'Master project management automation with task scheduling, progress tracking, and team coordination systems. Automate project workflows for maximum efficiency.',
  keywords: [
    'project management automation',
    'automated project workflows',
    'project automation tools',
    'task automation',
    'project scheduling automation',
    'team collaboration automation',
    'project tracking automation',
    'automated project reporting',
    'project management software',
    'workflow automation project management',
    'automated task assignment',
    'project milestone automation',
    'team productivity automation',
    'project coordination automation'
  ],
  openGraph: {
    title: 'Project Management Automation: Streamline Projects & Boost Team Productivity 300%',
    description: 'Advanced project management automation for task scheduling, tracking, and team coordination.',
    type: 'article',
    publishedTime: '2024-06-30T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Project Management', 'Team Productivity', 'Workflow Automation', 'Task Management', 'Business Operations'],
    images: [
      {
        url: 'https://iimagined.ai/blog/project-management-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Project Management Automation - Team Productivity Systems'
      }
    ]
  }
}

export default function ProjectManagementLayout({ children }: { children: React.ReactNode }) {
  return children
}