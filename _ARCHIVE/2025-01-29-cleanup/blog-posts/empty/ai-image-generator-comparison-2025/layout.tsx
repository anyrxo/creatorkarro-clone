import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Image Generators 2025: Midjourney vs DALL-E vs Stable Diffusion | IImagined.ai',
  description: 'Complete comparison of top AI image generators - Midjourney, DALL-E 3, Stable Diffusion, and more. Find the best AI art generator for your creative needs.',
  keywords: [
    'ai image generator',
    'best ai art generator',
    'midjourney vs dalle',
    'stable diffusion vs midjourney',
    'ai art generator comparison',
    'dalle 3 vs midjourney',
    'ai image creation',
    'text to image ai',
    'ai art tools 2025',
    'image generation ai',
    'ai artwork generator',
    'creative ai tools',
    'ai picture generator',
    'ai graphics generator'
  ],
  openGraph: {
    title: 'Best AI Image Generators 2025: Midjourney vs DALL-E vs Stable Diffusion',
    description: 'Comprehensive comparison of top AI image generators - find the perfect AI art tool for your creative projects.',
    type: 'article',
    publishedTime: '2025-01-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Image Generation', 'AI Art', 'Creative Tools', 'Midjourney', 'DALL-E'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-image-generator-comparison-2025/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best AI Image Generators 2025 Comparison'
      }
    ]
  }
}

export default function AIImageGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}