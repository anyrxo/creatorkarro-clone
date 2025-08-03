import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IoT Automation Systems: Build Smart Cities & $500K Systems with Connected Devices | IImagined.ai',
  description: 'Master IoT automation for smart cities, industrial systems, and connected devices. Learn to build intelligent infrastructure that operates 24/7.',
  keywords: [
    'iot automation systems',
    'internet of things automation',
    'smart city iot',
    'industrial iot',
    'iot device management',
    'connected device automation',
    'iot infrastructure',
    'smart home automation',
    'iot analytics platform',
    'edge computing automation',
    'iot sensor networks',
    'smart grid automation',
    'iot data processing',
    'connected vehicle systems',
    'iot security automation'
  ],
  openGraph: {
    title: 'IoT Automation Systems: Build Smart Cities & $500K Systems with Connected Devices',
    description: 'Transform physical spaces with IoT automation - from smart cities to industrial systems.',
    type: 'article',
    publishedTime: '2024-12-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['IoT Automation', 'Smart Cities', 'Industrial IoT', 'Connected Devices', 'Edge Computing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/iot-automation-systems/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IoT Automation Systems - Connected Intelligence'
      }
    ]
  }
}

export default function IoTAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}
