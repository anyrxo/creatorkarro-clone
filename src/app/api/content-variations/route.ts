// AI Content Variation API - Real-time Content Generation
import { NextRequest, NextResponse } from 'next/server'
import { aiContentEngine, spinContent, generateTemplateContent } from '@/lib/ai-content-engine'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      action, 
      content, 
      templateId, 
      variables, 
      options = {} 
    } = body

    switch (action) {
      case 'generate-variations':
        return handleGenerateVariations(content, options)
      
      case 'spin-content':
        return handleSpinContent(content, options.intensity || 'medium')
      
      case 'template-generate':
        return handleTemplateGeneration(templateId, variables, options.count || 5)
      
      case 'bulk-variations':
        return handleBulkVariations(content, options)
      
      case 'blog-post':
        return handleBlogPostGeneration(options)
      
      default:
        return NextResponse.json(
          { error: 'Invalid action specified' },
          { status: 400 }
        )
    }

  } catch (error) {
    console.error('Content variation error:', error)
    return NextResponse.json(
      { error: 'Content generation failed' },
      { status: 500 }
    )
  }
}

async function handleGenerateVariations(content: string, options: any) {
  const variations = aiContentEngine.generateVariations(content, {
    variations: options.variations || 5,
    readabilityTarget: options.readabilityTarget || 'medium',
    seoFocus: options.seoFocus !== false,
    personalityTone: options.personalityTone || 'professional',
    industryContext: options.industryContext || 'digital marketing'
  })

  return NextResponse.json({
    success: true,
    data: variations,
    metadata: {
      originalLength: content.length,
      averageVariationLength: Math.round(
        variations.variations.reduce((sum, v) => sum + v.length, 0) / variations.variations.length
      ),
      processingTime: Date.now()
    }
  })
}

async function handleSpinContent(content: string, intensity: string) {
  const spunContent = spinContent(content, intensity as 'light' | 'medium' | 'heavy')
  
  return NextResponse.json({
    success: true,
    data: {
      original: content,
      spun: spunContent,
      intensity,
      uniquenessImprovement: calculateUniqueness(content, spunContent)
    }
  })
}

async function handleTemplateGeneration(templateId: string, variables: Record<string, string>, count: number) {
  const generated = generateTemplateContent(templateId, variables, count)
  
  return NextResponse.json({
    success: true,
    data: {
      templateId,
      variables,
      generated,
      count: generated.length
    }
  })
}

async function handleBulkVariations(contents: string[], options: any) {
  const results = aiContentEngine.generateBulkContent(
    contents, 
    options.variationsPerContent || 3
  )
  
  const summary = {
    totalContents: contents.length,
    totalVariations: Object.values(results).reduce((sum, r) => sum + r.variations.length, 0),
    averageReadabilityScore: Math.round(
      Object.values(results).reduce((sum, r) => sum + r.readabilityScore, 0) / contents.length
    ),
    averageUniquenessScore: Math.round(
      Object.values(results).reduce((sum, r) => sum + r.uniquenessScore, 0) / contents.length
    )
  }
  
  return NextResponse.json({
    success: true,
    data: results,
    summary
  })
}

async function handleBlogPostGeneration(options: any) {
  const { topic, length = 'medium', variations = 3 } = options
  
  const blogPosts = aiContentEngine.generateBlogPostVariations(topic, length)
  
  return NextResponse.json({
    success: true,
    data: {
      topic,
      length,
      posts: blogPosts.slice(0, variations),
      metadata: {
        averageWordCount: Math.round(
          blogPosts.reduce((sum, post) => sum + post.split(' ').length, 0) / blogPosts.length
        ),
        estimatedReadingTime: Math.round(
          blogPosts[0].split(' ').length / 200 // 200 WPM average
        )
      }
    }
  })
}

function calculateUniqueness(original: string, variation: string): number {
  const originalWords = new Set(original.toLowerCase().split(/\s+/))
  const variationWords = new Set(variation.toLowerCase().split(/\s+/))
  
  const intersection = new Set([...originalWords].filter(x => variationWords.has(x)))
  const union = new Set([...originalWords, ...variationWords])
  
  const similarity = intersection.size / union.size
  return Math.round((1 - similarity) * 100)
}

// GET endpoint for template information
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  
  if (action === 'templates') {
    return NextResponse.json({
      success: true,
      data: {
        templates: aiContentEngine['templates'], // Access private property for API
        categories: ['headlines', 'marketing', 'copywriting', 'testimonials', 'features'],
        totalTemplates: aiContentEngine['templates'].length
      }
    })
  }
  
  if (action === 'synonyms') {
    const category = searchParams.get('category') || 'all'
    const synonyms = aiContentEngine['synonyms']
    
    if (category === 'all') {
      return NextResponse.json({
        success: true,
        data: {
          synonyms,
          totalWords: Object.keys(synonyms).length,
          categories: ['business', 'marketing', 'technology', 'action', 'quality', 'results']
        }
      })
    }
    
    // Filter by category (simplified)
    const categoryWords = Object.entries(synonyms).filter(([word]) => 
      word.includes(category) || synonyms[word].some(syn => syn.includes(category))
    )
    
    return NextResponse.json({
      success: true,
      data: {
        category,
        synonyms: Object.fromEntries(categoryWords),
        count: categoryWords.length
      }
    })
  }
  
  return NextResponse.json({
    success: true,
    data: {
      endpoints: {
        'POST /api/content-variations': 'Generate content variations',
        'GET /api/content-variations?action=templates': 'Get available templates',
        'GET /api/content-variations?action=synonyms': 'Get synonym database'
      },
      actions: [
        'generate-variations',
        'spin-content', 
        'template-generate',
        'bulk-variations',
        'blog-post'
      ]
    }
  })
}