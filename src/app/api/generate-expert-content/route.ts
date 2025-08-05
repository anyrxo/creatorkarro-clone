// ORYANA Expert Content Generation API - Gemini Flash 2.0 Powered
import { NextRequest, NextResponse } from 'next/server'
import { geminiGenerator } from '@/lib/ai/gemini'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      contentType, 
      platform, 
      topic, 
      n8nType, 
      fanvueAngle 
    } = body

    let generatedContent = ''

    switch (contentType) {
      case 'social-media':
        if (!platform || !topic) {
          return NextResponse.json(
            { error: 'Platform and topic are required for social media content' },
            { status: 400 }
          )
        }
        generatedContent = await geminiGenerator.generateSocialMediaExpertContent(platform, topic)
        break

      case 'n8n':
        if (!n8nType) {
          return NextResponse.json(
            { error: 'N8N type is required for N8N content' },
            { status: 400 }
          )
        }
        generatedContent = await geminiGenerator.generateN8NExpertContent(n8nType)
        break

      case 'fanvue':
        if (!fanvueAngle) {
          return NextResponse.json(
            { error: 'Fanvue angle is required for Fanvue content' },
            { status: 400 }
          )
        }
        generatedContent = await geminiGenerator.generateFanvueExpertContent(fanvueAngle)
        break

      default:
        return NextResponse.json(
          { error: 'Invalid content type' },
          { status: 400 }
        )
    }

    // Log successful generation for analytics
    console.log(` Generated ${contentType} expert content:`, {
      platform,
      topic,
      n8nType,
      fanvueAngle,
      contentLength: generatedContent.length,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      content: generatedContent,
      metadata: {
        contentType,
        platform,
        topic,
        n8nType,
        fanvueAngle,
        generatedAt: new Date().toISOString(),
        model: 'gemini-2.0-flash-exp'
      }
    })

  } catch (error) {
    console.error('Expert content generation error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to generate expert content',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// GET endpoint for content type options
export async function GET() {
  const contentOptions = {
    socialMedia: {
      platforms: ['twitter', 'linkedin', 'instagram', 'tiktok'],
      topics: [
        'AI Automation',
        'N8N Workflows', 
        'Instagram Growth',
        'Digital Products',
        'Fanvue Monetization',
        'Content Creation',
        'Social Media Marketing',
        'Passive Income',
        'AI Tools',
        'Creator Economy'
      ]
    },
    n8n: {
      types: ['tutorial', 'workflow', 'integration', 'case-study']
    },
    fanvue: {
      angles: ['strategy', 'optimization', 'case-study', 'comparison']
    }
  }

  return NextResponse.json({
    success: true,
    options: contentOptions,
    description: 'Expert content generation powered by Gemini 2.0 Flash'
  })
}