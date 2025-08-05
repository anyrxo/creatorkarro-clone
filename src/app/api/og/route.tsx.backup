// ORYANA Dynamic OG Image Generator - Social Sharing Domination
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract parameters
    const title = searchParams.get('title') || 'IImagined.ai - AI Automation & Instagram Growth'
    const subtitle = searchParams.get('subtitle') || 'Join 127K+ Students Getting Real Results'
    const urgency = searchParams.get('urgency') === 'true'
    const type = searchParams.get('type') || 'course' // course, blog, geo, success
    const location = searchParams.get('location') || ''
    const stats = searchParams.get('stats') || '127K+ Students'
    
    // Dynamic background gradients based on type
    const backgrounds = {
      course: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      blog: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      geo: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      success: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      ai: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      automation: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
    
    // Urgency indicators
    const urgencyBadge = urgency ? (
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          background: '#FF4444',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '50px',
          fontSize: '24px',
          fontWeight: 'bold',
          boxShadow: '0 8px 32px rgba(255, 68, 68, 0.4)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        =¨ LIMITED TIME
      </div>
    ) : null
    
    // Location badge for geo-targeted pages
    const locationBadge = location ? (
      <div
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          background: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '50px',
          fontSize: '24px',
          fontWeight: 'bold',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        =Í {location}
      </div>
    ) : null
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: backgrounds[type as keyof typeof backgrounds] || backgrounds.course,
            fontSize: 32,
            fontWeight: 600,
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
              background: `
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
              `,
            }}
          />
          
          {urgencyBadge}
          {locationBadge}
          
          {/* Logo */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#1a1a1a',
              padding: '16px 32px',
              borderRadius: '16px',
              fontSize: '28px',
              fontWeight: 'bold',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            > IImagined.ai
          </div>
          
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '900px',
              textAlign: 'center',
              color: 'white',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              marginTop: '60px',
            }}
          >
            {/* Main Title */}
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
            </h1>
            
            {/* Subtitle */}
            <p
              style={{
                fontSize: '36px',
                fontWeight: '500',
                margin: '0 0 32px 0',
                opacity: 0.9,
              }}
            >
              {subtitle}
            </p>
            
            {/* Stats Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '16px 32px',
                borderRadius: '50px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              P 4.97/5 Rating " {stats} " =° $2.7M+ Generated
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#1a1a1a',
              padding: '20px 40px',
              borderRadius: '50px',
              fontSize: '28px',
              fontWeight: 'bold',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            =€ Get Started Today - 73% OFF
          </div>
          
          {/* Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              top: '200px',
              left: '60px',
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '48px',
            }}
          >
            ¡
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: '200px',
              right: '60px',
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
            }}
          >
            <¯
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await fetch(
              new URL('./Inter-Bold.ttf', import.meta.url)
            ).then((res) => res.arrayBuffer()),
            weight: 700,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`Failed to generate OG image: ${e.message}`)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}

// Pregenerate common OG images for better performance
export const ogImagePresets = {
  'instagram-ignited': {
    type: 'course',
    title: 'Instagram Ignited',
    subtitle: 'Master Instagram Growth - 127K+ Students',
    urgency: true,
    stats: '127K+ Students'
  },
  'digital-products': {
    type: 'course',
    title: 'Digital Products Empire',
    subtitle: 'Build & Scale Profitable Products',
    urgency: true,
    stats: '85K+ Students'
  },
  'ai-automation': {
    type: 'automation',
    title: 'AI Automation Mastery',
    subtitle: 'Build Profitable AI Workflows',
    urgency: true,
    stats: '62K+ Students'
  },
  'blog-default': {
    type: 'blog',
    title: 'Latest AI & Growth Strategies',
    subtitle: 'Proven Methods for Real Results',
    urgency: false,
    stats: 'Expert Insights'
  }
}