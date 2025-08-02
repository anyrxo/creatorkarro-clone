import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeepSeek Janus: Revolutionary Multimodal AI Breakthrough | IImagined.ai',
  description: 'DeepSeek Janus analysis - revolutionary multimodal AI breakthrough with unified vision-language understanding. Open source alternative changing AI development.',
  keywords: [
    'deepseek janus',
    'deepseek multimodal',
    'janus multimodal ai',
    'deepseek janus capabilities',
    'open source multimodal',
    'janus ai model',
    'deepseek janus review',
    'multimodal ai breakthrough',
    'vision language model',
    'deepseek janus vs gpt',
    'deepseek janus features',
    'unified multimodal ai',
    'janus ai analysis',
    'deepseek vision'
  ],
  openGraph: {
    title: 'DeepSeek Janus: Revolutionary Multimodal AI Breakthrough',
    description: 'Complete analysis of DeepSeek Janus - the revolutionary multimodal AI with unified vision-language capabilities.',
    type: 'article',
    publishedTime: '2025-01-12T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['DeepSeek Janus', 'Multimodal AI', 'Open Source AI', 'Vision-Language', 'AI Breakthrough'],
    images: [
      {
        url: 'https://iimagined.ai/blog/deepseek-janus-multimodal-breakthrough/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeepSeek Janus Multimodal AI Breakthrough'
      }
    ]
  }
}

export default function DeepSeekJanusLayout({ children }: { children: React.ReactNode }) {
  return children
}