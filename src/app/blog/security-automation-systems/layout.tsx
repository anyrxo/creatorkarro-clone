import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Automation Systems: Build Cyber Defense That Stops 99.9% of Attacks | IImagined.ai',
  description: 'Master security automation with threat detection, incident response, and vulnerability management. Build automated defense systems that protect at scale.',
  keywords: [
    'security automation',
    'cybersecurity automation',
    'automated threat detection',
    'security incident automation',
    'vulnerability management automation',
    'automated security monitoring',
    'security orchestration automation',
    'automated incident response',
    'security compliance automation',
    'threat intelligence automation',
    'automated security scanning',
    'security workflow automation',
    'automated penetration testing',
    'security operations automation'
  ],
  openGraph: {
    title: 'Security Automation Systems: Build Cyber Defense Stopping 99.9% of Attacks',
    description: 'Advanced security automation with threat detection, incident response, and vulnerability management at scale.',
    type: 'article',
    publishedTime: '2024-05-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Cybersecurity', 'Security Automation', 'Threat Detection', 'Incident Response', 'Information Security'],
    images: [
      {
        url: 'https://iimagined.ai/blog/security-automation-systems/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Security Automation Systems - Automated Cyber Defense'
      }
    ]
  }
}

export default function SecurityAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}