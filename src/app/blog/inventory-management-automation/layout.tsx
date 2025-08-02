import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory Management Automation: Optimize Stock Control & Reduce Costs by 60% | IImagined.ai',
  description: 'Master inventory management automation with stock tracking, reorder automation, and demand forecasting. Optimize inventory levels and reduce carrying costs automatically.',
  keywords: [
    'inventory management automation',
    'automated inventory tracking',
    'stock management automation',
    'inventory automation software',
    'automated reorder systems',
    'inventory optimization automation',
    'warehouse automation systems',
    'inventory control automation',
    'supply chain automation',
    'automated stock replenishment',
    'inventory forecasting automation',
    'automated inventory alerts',
    'inventory management systems',
    'stock level automation'
  ],
  openGraph: {
    title: 'Inventory Management Automation: Optimize Stock Control & Reduce Costs by 60%',
    description: 'Advanced inventory management automation with stock tracking and demand forecasting for cost optimization.',
    type: 'article',
    publishedTime: '2024-07-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Inventory Management', 'Supply Chain', 'Warehouse Automation', 'Business Operations', 'Cost Optimization'],
    images: [
      {
        url: 'https://iimagined.ai/blog/inventory-management-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inventory Management Automation - Stock Control Systems'
      }
    ]
  }
}

export default function InventoryManagementLayout({ children }: { children: React.ReactNode }) {
  return children
}