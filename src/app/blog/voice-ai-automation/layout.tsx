import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voice AI Automation: Build Speaking Systems That Generate $30K+/Month Revenue | IImagined.ai',
  description: 'Master Voice AI automation with speech synthesis, voice cloning, and automated calling systems. Build voice-powered businesses that scale massively.',
  keywords: [
    'voice ai automation',
    'voice automation systems',
    'ai voice generation',
    'voice cloning automation',
    'automated voice calls',
    'voice ai business',
    'speech synthesis automation',
    'voice ai scaling',
    'automated voice assistants',
    'voice ai revenue',
    'voice automation tools',
    'ai voice marketing',
    'voice ai customer service',
    'automated speech systems'
  ],
  openGraph: {
    title: 'Voice AI Automation: Build Speaking Systems Generating $30K+/Month',
    description: 'Advanced Voice AI automation with speech synthesis and voice cloning for scalable voice-powered businesses.',
    type: 'article',
    publishedTime: '2024-09-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Voice AI', 'Speech Technology', 'AI Automation', 'Voice Cloning', 'Conversational AI'],
    images: [
      {
        url: 'https://iimagined.ai/blog/voice-ai-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Voice AI Automation - Speaking Revenue Systems'
      }
    ]
  }
}

export default function VoiceAILayout({ children }: { children: React.ReactNode }) {
  return children
}