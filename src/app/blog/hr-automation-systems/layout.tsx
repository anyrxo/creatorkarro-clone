import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Automation Systems: Streamline Human Resources & Reduce Admin by 80% | IImagined.ai',
  description: 'Master HR automation with recruitment, onboarding, payroll, and performance management systems. Automate HR processes and improve employee experience.',
  keywords: [
    'hr automation systems',
    'human resources automation',
    'automated hr processes',
    'hr automation software',
    'recruitment automation',
    'onboarding automation',
    'payroll automation',
    'hr workflow automation',
    'employee management automation',
    'performance management automation',
    'hr administrative automation',
    'automated hr tasks',
    'hr process optimization',
    'human resources software'
  ],
  openGraph: {
    title: 'HR Automation Systems: Streamline Human Resources & Reduce Admin by 80%',
    description: 'Advanced HR automation systems for recruitment, onboarding, and employee management processes.',
    type: 'article',
    publishedTime: '2024-07-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['HR Automation', 'Human Resources', 'Employee Management', 'Recruitment', 'Business Operations'],
    images: [
      {
        url: 'https://iimagined.ai/blog/hr-automation-systems/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HR Automation Systems - Human Resources Process Automation'
      }
    ]
  }
}

export default function HRAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}