import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Voice Generators 2025: ElevenLabs vs Murf vs Speechify | IImagined.ai',
  description: 'Complete comparison of top AI voice generators - ElevenLabs, Murf, Speechify, and more. Find the best text-to-speech AI for your needs in 2025.',
  keywords: [
    'ai voice generator',
    'text to speech ai',
    'elevenlabs voice',
    'murf ai voice',
    'speechify ai',
    'ai voice cloning',
    'realistic ai voice',
    'voice synthesis ai',
    'ai narrator voice',
    'voice generator comparison',
    'best ai voice',
    'ai speech synthesis',
    'voice over ai',
    'ai voice creator'
  ],
  openGraph: {
    title: 'Best AI Voice Generators 2025: ElevenLabs vs Murf vs Speechify',
    description: 'Comprehensive comparison of top AI voice generators - find the best text-to-speech solution for your needs.',
    type: 'article',
    publishedTime: '2025-01-08T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['AI Voice', 'Text-to-Speech', 'AI Tools', 'Voice Technology', 'Content Creation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/ai-voice-generator-comparison/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best AI Voice Generators 2025 Comparison'
      }
    ]
  }
}

export default function AIVoiceGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}