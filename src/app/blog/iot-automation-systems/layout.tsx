import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IoT Automation Systems: Build Smart Networks That Generate $300K+/Year Revenue | IImagined.ai',
  description: 'Master IoT automation with smart devices, sensor networks, and edge computing. Build intelligent systems that automate physical processes and generate revenue.',
  keywords: [
    'iot automation',
    'internet of things automation',
    'smart device automation',
    'iot sensor automation',
    'industrial iot automation',
    'smart home automation',
    'iot data automation',
    'edge computing automation',
    'iot device management',
    'automated iot systems',
    'iot monitoring automation',
    'smart city automation',
    'iot analytics automation',
    'connected device automation'
  ],
  openGraph: {
    title: 'IoT Automation Systems: Build Smart Networks Generating $300K+/Year Revenue',
    description: 'Advanced IoT automation with smart devices and sensor networks for intelligent revenue-generating systems.',
    type: 'article',
    publishedTime: '2024-05-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['IoT', 'Smart Devices', 'Industrial Automation', 'Edge Computing', 'Connected Systems'],
    images: [
      {
        url: 'https://iimagined.ai/blog/iot-automation-systems/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IoT Automation Systems - Smart Device Networks'
      }
    ]
  }
}

export default function IoTAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}