import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supply Chain Automation: Optimize Logistics & Reduce Costs by 40% | IImagined.ai',
  description: 'Master supply chain automation with demand forecasting, inventory optimization, and logistics coordination. Build resilient automated supply networks.',
  keywords: [
    'supply chain automation',
    'logistics automation',
    'supply chain optimization',
    'automated procurement',
    'demand forecasting automation',
    'supply chain management automation',
    'warehouse automation',
    'automated logistics coordination',
    'supply chain visibility automation',
    'procurement automation',
    'vendor management automation',
    'supply chain analytics automation',
    'automated order fulfillment',
    'supply chain workflow automation'
  ],
  openGraph: {
    title: 'Supply Chain Automation: Optimize Logistics & Reduce Costs by 40%',
    description: 'Advanced supply chain automation for demand forecasting, inventory optimization, and logistics coordination.',
    type: 'article',
    publishedTime: '2024-05-30T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Supply Chain', 'Logistics', 'Operations', 'Inventory Management', 'Business Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/supply-chain-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Supply Chain Automation - Logistics Optimization Systems'
      }
    ]
  }
}

export default function SupplyChainAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}