// Parasite SEO Deployment API - Automated Campaign Management
import { NextRequest, NextResponse } from 'next/server'
import { 
  parasiteSEOEngine, 
  deployAggressiveCampaign, 
  deploySocialAuthorityCampaign,
  deployEducationalCampaign 
} from '@/lib/parasite-seo-engine'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      action, 
      strategy, 
      targetKeywords, 
      mainDomain = 'https://iimagined.ai',
      contentCount = 25,
      automationLevel = 'full'
    } = body

    switch (action) {
      case 'deploy-campaign':
        return handleDeployCampaign(strategy, {
          contentCount,
          targetKeywords,
          mainDomain,
          automationLevel
        })
      
      case 'quick-aggressive':
        return handleQuickDeploy('aggressive', targetKeywords, mainDomain)
      
      case 'quick-social':
        return handleQuickDeploy('social', targetKeywords, mainDomain)
      
      case 'quick-educational':
        return handleQuickDeploy('educational', targetKeywords, mainDomain)
      
      case 'export-campaign':
        return handleExportCampaign(strategy, body.format || 'json')
      
      case 'get-platforms':
        return handleGetPlatforms()
      
      default:
        return NextResponse.json(
          { error: 'Invalid action specified' },
          { status: 400 }
        )
    }

  } catch (error) {
    console.error('Parasite SEO API error:', error)
    return NextResponse.json(
      { error: 'Campaign deployment failed' },
      { status: 500 }
    )
  }
}

async function handleDeployCampaign(strategyId: string, options: any) {
  const result = await parasiteSEOEngine.deployParasiteCampaign(strategyId, options)
  
  return NextResponse.json({
    success: true,
    data: {
      strategy: strategyId,
      deployed: result.deployed.length,
      projectedMetrics: result.projectedMetrics,
      contentSample: result.deployed.slice(0, 5).map(content => ({
        platform: content.platform,
        title: content.title,
        url: content.url,
        targetKeyword: content.targetKeyword,
        backlinks: content.backlinks.length
      }))
    },
    metadata: {
      deploymentTime: new Date().toISOString(),
      totalPlatforms: [...new Set(result.deployed.map(c => c.platform))].length,
      averageBacklinksPerContent: Math.round(
        result.deployed.reduce((sum, c) => sum + c.backlinks.length, 0) / result.deployed.length
      )
    }
  })
}

async function handleQuickDeploy(type: string, targetKeywords: string[], mainDomain: string) {
  let result
  
  switch (type) {
    case 'aggressive':
      result = await deployAggressiveCampaign(targetKeywords, mainDomain)
      break
    case 'social':
      result = await deploySocialAuthorityCampaign(targetKeywords, mainDomain)
      break
    case 'educational':
      result = await deployEducationalCampaign(targetKeywords, mainDomain)
      break
    default:
      throw new Error('Invalid deployment type')
  }
  
  return NextResponse.json({
    success: true,
    data: {
      type,
      deployed: result.deployed.length,
      projectedMetrics: result.projectedMetrics,
      platforms: [...new Set(result.deployed.map(c => c.platform))],
      timeline: {
        week1: 'Account setup and authority building',
        week2: 'Content deployment and initial linking',
        week3: 'Link building and optimization',
        week4: 'Monitoring and performance tracking'
      }
    }
  })
}

async function handleExportCampaign(strategyId: string, format: string) {
  const exportData = parasiteSEOEngine.exportCampaign(strategyId, format as any)
  
  const contentType = format === 'csv' ? 'text/csv' : 
                     format === 'markdown' ? 'text/markdown' : 
                     'application/json'
  
  return new NextResponse(exportData, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="parasite-campaign-${strategyId}.${format}"`
    }
  })
}

async function handleGetPlatforms() {
  // Access private platforms data through reflection
  const platformsData = [
    { name: 'Medium', domain: 'medium.com', authority: 96, dofollow: false },
    { name: 'LinkedIn Pulse', domain: 'linkedin.com', authority: 98, dofollow: false },
    { name: 'Reddit', domain: 'reddit.com', authority: 91, dofollow: false },
    { name: 'GitHub', domain: 'github.com', authority: 96, dofollow: true },
    { name: 'Dev.to', domain: 'dev.to', authority: 75, dofollow: true },
    { name: 'Hashnode', domain: 'hashnode.com', authority: 72, dofollow: true },
    { name: 'Quora', domain: 'quora.com', authority: 93, dofollow: false },
    { name: 'Stack Overflow', domain: 'stackoverflow.com', authority: 95, dofollow: false },
    { name: 'YouTube', domain: 'youtube.com', authority: 100, dofollow: false },
    { name: 'Notion Public Pages', domain: 'notion.so', authority: 83, dofollow: true },
    { name: 'Substack', domain: 'substack.com', authority: 82, dofollow: true },
    { name: 'Ghost.org', domain: 'ghost.org', authority: 78, dofollow: true }
  ]
  
  return NextResponse.json({
    success: true,
    data: {
      platforms: platformsData,
      totalPlatforms: platformsData.length,
      averageAuthority: Math.round(
        platformsData.reduce((sum, p) => sum + p.authority, 0) / platformsData.length
      ),
      dofollowCount: platformsData.filter(p => p.dofollow).length,
      strategies: [
        {
          id: 'aggressive-tech-domination',
          name: 'Aggressive Tech Domination',
          platforms: ['Medium', 'Dev.to', 'GitHub', 'Hashnode'],
          recommended: 'High-volume technical keywords'
        },
        {
          id: 'social-authority-blitz',
          name: 'Social Authority Blitz', 
          platforms: ['LinkedIn Pulse', 'Medium', 'Quora', 'Reddit'],
          recommended: 'Thought leadership and social proof'
        },
        {
          id: 'educational-content-parasite',
          name: 'Educational Content Parasite',
          platforms: ['YouTube', 'Notion Public Pages', 'GitHub', 'Stack Overflow'],
          recommended: 'Educational and tutorial content'
        }
      ]
    }
  })
}

// GET endpoint for platform and strategy information
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const action = searchParams.get('action')
  
  if (action === 'platforms') {
    return handleGetPlatforms()
  }
  
  return NextResponse.json({
    success: true,
    data: {
      endpoints: {
        'POST /api/parasite-seo': 'Deploy parasite SEO campaigns',
        'GET /api/parasite-seo?action=platforms': 'Get available platforms and strategies'
      },
      actions: [
        'deploy-campaign',
        'quick-aggressive', 
        'quick-social',
        'quick-educational',
        'export-campaign',
        'get-platforms'
      ],
      quickStart: {
        aggressive: 'Deploy high-authority technical content across dev platforms',
        social: 'Build thought leadership on social and professional networks',
        educational: 'Create educational resources on learning platforms'
      }
    }
  })
}