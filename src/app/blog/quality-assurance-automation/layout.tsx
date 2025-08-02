import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quality Assurance Automation: Build Testing Systems That Catch 99% of Bugs | IImagined.ai',
  description: 'Master QA automation with test frameworks, continuous testing, and automated quality controls. Build robust testing systems that ensure software quality.',
  keywords: [
    'quality assurance automation',
    'automated testing',
    'qa automation tools',
    'test automation framework',
    'continuous testing',
    'automated quality control',
    'software testing automation',
    'regression testing automation',
    'performance testing automation',
    'automated test execution',
    'quality management automation',
    'automated bug detection',
    'testing workflow automation',
    'qa process automation'
  ],
  openGraph: {
    title: 'Quality Assurance Automation: Build Testing Systems Catching 99% of Bugs',
    description: 'Advanced QA automation with test frameworks and continuous testing for robust software quality assurance.',
    type: 'article',
    publishedTime: '2024-05-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Quality Assurance', 'Software Testing', 'Test Automation', 'QA Tools', 'Software Quality'],
    images: [
      {
        url: 'https://iimagined.ai/blog/quality-assurance-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quality Assurance Automation - Automated Testing Systems'
      }
    ]
  }
}

export default function QualityAssuranceLayout({ children }: { children: React.ReactNode }) {
  return children
}