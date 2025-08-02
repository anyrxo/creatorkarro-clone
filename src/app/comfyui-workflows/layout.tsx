import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ComfyUI Workflows Course - Master Professional AI Image Generation | IImagined.ai',
  description: 'Master ComfyUI workflows with 50+ professional templates. Learn advanced image generation, batch processing, and automation. Generate professional AI content 10x faster with proven systems.',
  keywords: [
    'comfyui workflows',
    'comfyui course',
    'ai image generation',
    'stable diffusion workflows',
    'comfyui tutorial',
    'ai art workflows',
    'comfyui automation',
    'professional ai images',
    'comfyui training',
    'ai content creation',
    'batch processing ai',
    'controlnet workflows',
    'ai image tools',
    'stable diffusion automation',
    'comfyui mastery'
  ],
  openGraph: {
    title: 'ComfyUI Workflows Mastery - 50+ Professional Templates & Training',
    description: 'Transform from frustrated AI user to workflow master. Create professional content 10x faster with bulletproof ComfyUI systems.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/comfyui-workflows-og.png',
        width: 1200,
        height: 630,
        alt: 'ComfyUI Workflows Course - Professional AI Image Generation Training'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComfyUI Workflows Mastery Course - Professional AI Image Generation',
    description: 'Master ComfyUI with 50+ professional workflows. Generate stunning AI content 10x faster.',
    creator: '@anyro'
  }
}

export default function ComfyUIWorkflowsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}