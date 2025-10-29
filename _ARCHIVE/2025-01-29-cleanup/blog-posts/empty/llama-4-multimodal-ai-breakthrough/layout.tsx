import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Llama 4 Multimodal AI Breakthrough: Revolutionary Visual & Text AI | IImagined.ai',
  description: 'Llama 4 multimodal AI analysis - Meta\'s revolutionary breakthrough combining vision and language. Complete guide to capabilities, benchmarks, and real-world applications.',
  keywords: [
    'llama 4 multimodal',
    'llama 4 visual ai',
    'meta llama 4',
    'multimodal ai breakthrough',
    'llama 4 capabilities',
    'llama 4 vs gpt 4',
    'llama 4 vision',
    'meta ai breakthrough',
    'llama 4 performance',
    'open source multimodal ai',
    'llama 4 review',
    'visual language model',
    'llama 4 features',
    'ai image understanding'
  ],
  openGraph: {
    title: 'Llama 4 Multimodal AI Breakthrough: Revolutionary Visual & Text AI',
    description: 'Complete analysis of Llama 4 multimodal capabilities - Meta\'s breakthrough combining vision and language AI.',
    type: 'article',
    publishedTime: '2025-01-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Llama 4', 'Multimodal AI', 'Meta AI', 'Visual AI', 'AI Breakthrough'],
    images: [
      {
        url: 'https://iimagined.ai/blog/llama-4-multimodal-ai-breakthrough/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Llama 4 Multimodal AI Breakthrough'
      }
    ]
  }
}

export default function Llama4MultimodalLayout({ children }: { children: React.ReactNode }) {
  return children
}