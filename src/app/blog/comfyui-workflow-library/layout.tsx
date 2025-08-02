import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ComfyUI Workflow Library: 50+ Professional AI Image Generation Workflows | IImagined.ai',
  description: 'Access 50+ professional ComfyUI workflows for AI image generation. Ready-to-use templates for portraits, landscapes, products, and artistic styles. Free download included.',
  keywords: [
    'comfyui workflows',
    'comfyui templates',
    'ai image generation',
    'stable diffusion workflows',
    'comfyui library',
    'ai art workflows',
    'comfyui examples',
    'image generation templates',
    'ai workflow collection',
    'comfyui automation',
    'stable diffusion templates',
    'ai image workflows',
    'comfyui nodes',
    'professional workflows'
  ],
  openGraph: {
    title: 'ComfyUI Workflow Library: 50+ Professional AI Image Templates',
    description: 'Professional ComfyUI workflows for every use case. Download ready-to-use templates for AI image generation.',
    type: 'article',
    publishedTime: '2025-01-01T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['ComfyUI', 'AI Art', 'Workflows', 'Stable Diffusion', 'Templates'],
    images: [
      {
        url: 'https://iimagined.ai/blog/comfyui-workflow-library/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ComfyUI Workflow Library - 50+ Professional Templates'
      }
    ]
  }
}

export default function ComfyUIWorkflowLibraryLayout({ children }: { children: React.ReactNode }) {
  return children
}