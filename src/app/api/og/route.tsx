// ORYANA Dynamic OG Image Generator - Social Sharing Domination
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    const title = searchParams.get('title') || 'IImagined.ai'
    const description = searchParams.get('description') || 'AI Automation & Digital Products'
    const type = searchParams.get('type') || 'default'
    
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #581c87 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            }}
          />
          
          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '60px',
              zIndex: 1,
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                lineHeight: 1.1,
                maxWidth: '1000px',
              }}
            >
              {title}
            </h1>
            
            <p
              style={{
                fontSize: '32px',
                color: '#e2e8f0',
                marginBottom: '40px',
                maxWidth: '800px',
                lineHeight: 1.3,
              }}
            >
              {description}
            </p>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '24px',
                color: '#60a5fa',
                fontWeight: '600',
              }}
            >
              <span>IImagined.ai</span>
              <span style={{ color: '#94a3b8' }}>•</span>
              <span style={{ color: '#94a3b8' }}>AI Automation Experts</span>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '40px',
              width: '80px',
              height: '80px',
              background: 'linear-gradient(45deg, #3b82f6, #9333ea)',
              borderRadius: '20px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #9333ea, #ec4899)',
              borderRadius: '15px',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error('OG image generation error:', error)
    return new Response('Failed to generate image', { status: 500 })
  }
}