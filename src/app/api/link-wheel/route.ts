// Multi-Tier Link Wheel Construction API - Link Juice Distribution System
import { NextRequest, NextResponse } from 'next/server'
import { linkWheelEngine, deployCircularLinkWheel, deployPyramidLinkWheel, deployFortressLinkWheel } from '@/lib/link-wheel-construction'

// GET: Retrieve link wheel information and system capabilities
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const wheelId = searchParams.get('wheelId')
    const format = searchParams.get('format') as 'json' | 'csv' | 'report' || 'json'
    
    if (wheelId) {
      if (format === 'report') {
        const report = await linkWheelEngine.generateLinkWheelReport(wheelId)
        return NextResponse.json(report)
      }
      
      const wheel = linkWheelEngine.getLinkWheelById(wheelId)
      if (!wheel) {
        return NextResponse.json(
          { error: 'Link wheel not found' },
          { status: 404 }
        )
      }
      
      if (format === 'csv') {
        const csvData = generateWheelCSV(wheel)
        return new NextResponse(csvData, {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="link-wheel-${wheelId}.csv"`
          }
        })
      }
      
      return NextResponse.json(wheel)
    }
    
    // Return system capabilities and templates
    const systemStatus = {
      linkWheelTypes: {
        circular: {
          description: 'Circular link distribution with rotating patterns',
          efficiency: '85%',
          bestFor: 'Balanced link juice distribution',
          riskLevel: 'medium',
          timeToImpact: '30-60 days'
        },
        pyramid: {
          description: 'Traditional pyramid structure with tier hierarchy',
          efficiency: '90%',
          bestFor: 'Maximum authority flow',
          riskLevel: 'medium-high',
          timeToImpact: '45-90 days'
        },
        hybrid: {
          description: 'Advanced hybrid combining multiple patterns',
          efficiency: '95%',
          bestFor: 'Optimal performance and safety',
          riskLevel: 'low-medium',
          timeToImpact: '21-45 days'
        },
        fortress: {
          description: 'Maximum protection with multiple buffer layers',
          efficiency: '92%',
          bestFor: 'High-value sites requiring protection',
          riskLevel: 'low',
          timeToImpact: '60-120 days'
        }
      },
      tiers: {
        tier1: {
          description: 'Premium authority sites (DA 40+)',
          typical_sites: '4-8 sites',
          link_power: 'Maximum (80% efficiency)',
          cost_per_site: '$150',
          examples: ['Medium.com', 'LinkedIn.com', 'Reddit.com']
        },
        tier2: {
          description: 'Quality authority sites (DA 25-40)',
          typical_sites: '10-20 sites',
          link_power: 'High (60% efficiency)',
          cost_per_site: '$75',
          examples: ['Blogger.com', 'WordPress.com', 'Substack.com']
        },
        tier3: {
          description: 'Mid-authority sites (DA 15-25)',
          typical_sites: '20-50 sites',
          link_power: 'Medium (40% efficiency)',
          cost_per_site: '$35',
          examples: ['Joomla.com', 'Drupal.org', 'Squarespace.com']
        },
        buffer: {
          description: 'Volume buffer sites (DA 10-15)',
          typical_sites: '40-100 sites',
          link_power: 'Low (20% efficiency)',
          cost_per_site: '$15',
          examples: ['Ucoz.com', 'Webflow.com', 'Notion.so']
        }
      },
      safetyFeatures: {
        footprintDiversification: 'Multi-niche, multi-platform distribution',
        hostingDiversification: 'Global hosting provider spread',
        registrarDiversification: 'Multiple domain registrars',
        contentVariation: 'AI-generated unique content per site',
        linkVelocity: 'Natural, gradual link building patterns',
        anchorDiversification: 'Branded, exact, partial, and generic anchors'
      },
      automationCapabilities: {
        contentGeneration: 'AI-powered article creation',
        linkInsertion: 'Automated contextual link placement',
        performanceMonitoring: 'Real-time site and link health tracking',
        maintenanceAlerts: 'Proactive issue detection and notification',
        reportGeneration: 'Comprehensive analytics and ROI tracking',
        safetyCompliance: 'Continuous penalty risk assessment'
      },
      pricingStructure: {
        small_wheel: '$1,800 setup + $270/month maintenance',
        medium_wheel: '$4,125 setup + $618/month maintenance',
        large_wheel: '$7,920 setup + $1,188/month maintenance',
        enterprise_custom: 'Contact for custom pricing'
      }
    }
    
    return NextResponse.json({
      status: 'operational',
      system: systemStatus,
      activeWheels: linkWheelEngine.getAllLinkWheels().length,
      quickDeploy: ['Circular Link Wheel', 'Pyramid Link Wheel', 'Fortress Link Wheel'],
      features: [
        'Multi-tier link wheel construction with intelligent site selection',
        'Advanced linking patterns for maximum link juice distribution',
        'Automated content generation and contextual link insertion',
        'Comprehensive safety protocols with penalty risk mitigation',
        'Real-time monitoring and performance optimization',
        'ROI tracking with detailed analytics and reporting'
      ]
    })
    
  } catch (error) {
    console.error('Link Wheel API Error:', error)
    return NextResponse.json(
      { error: 'Failed to process link wheel request' },
      { status: 500 }
    )
  }
}

// POST: Deploy new link wheel
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      wheelName,
      moneysite,
      targetKeywords,
      wheelType = 'hybrid',
      options = {}
    } = body
    
    if (!wheelName || !moneysite || !targetKeywords) {
      return NextResponse.json(
        { error: 'Missing required fields: wheelName, moneysite, targetKeywords' },
        { status: 400 }
      )
    }
    
    console.log(`🔗 Deploying Link Wheel: ${wheelName}`)
    console.log(` Money Site: ${moneysite}`)
    console.log(`🔑 Keywords: ${targetKeywords.join(', ')}`)
    console.log(`🏗 Type: ${wheelType}`)
    
    let wheel
    
    // Deploy based on wheel type
    switch (wheelType) {
      case 'circular':
        wheel = await deployCircularLinkWheel(
          moneysite,
          targetKeywords,
          options.size || 'medium'
        )
        break
        
      case 'pyramid':
        wheel = await deployPyramidLinkWheel(
          moneysite,
          targetKeywords,
          options.authority || 'mixed'
        )
        break
        
      case 'fortress':
        wheel = await deployFortressLinkWheel(
          moneysite,
          targetKeywords
        )
        break
        
      case 'hybrid':
      default:
        wheel = await linkWheelEngine.constructLinkWheel(
          wheelName,
          moneysite,
          targetKeywords,
          {
            pattern: 'hybrid',
            tier1Sites: options.tier1Sites || 6,
            tier2Sites: options.tier2Sites || 15,
            tier3Sites: options.tier3Sites || 30,
            bufferSites: options.bufferSites || 60,
            linkVelocity: options.linkVelocity || 'medium',
            safetyLevel: options.safetyLevel || 'moderate',
            contentThemes: options.contentThemes || ['technology', 'business', 'marketing'],
            geographicTargets: options.geographicTargets || ['united-states', 'canada', 'united-kingdom']
          }
        )
        break
    }
    
    // Deploy the link wheel
    const deployment = await linkWheelEngine.deployLinkWheel(wheel.id)
    
    // Calculate investment and ROI
    const tierCosts = {
      tier1: wheel.tiers.tier1.length * 150,
      tier2: wheel.tiers.tier2.length * 75,
      tier3: wheel.tiers.tier3.length * 35,
      buffer: wheel.tiers.buffer.length * 15
    }
    
    const totalSetup = Object.values(tierCosts).reduce((sum, cost) => sum + cost, 0)
    const monthlyMaintenance = Math.round(totalSetup * 0.15)
    
    // Calculate projected results
    const projections = {
      rankingImprovement: wheel.projectedImpact.rankingBoost,
      trafficIncrease: wheel.projectedImpact.trafficIncrease,
      linkJuiceFlow: wheel.projectedImpact.linkJuiceFlow,
      timeToImpact: wheel.projectedImpact.timeToImpact,
      seoVisibility: `+${Math.min(500, wheel.strategy.totalSites * 3)}%`,
      domainAuthority: `+${Math.round(wheel.projectedImpact.linkJuiceFlow / 15)} points`
    }
    
    return NextResponse.json({
      success: true,
      wheel: {
        id: wheel.id,
        name: wheel.name,
        moneysite: wheel.moneysite,
        pattern: wheel.linkingPattern,
        tiers: {
          tier1: wheel.tiers.tier1.length,
          tier2: wheel.tiers.tier2.length,
          tier3: wheel.tiers.tier3.length,
          buffer: wheel.tiers.buffer.length,
          total: wheel.strategy.totalSites
        },
        safetyProfile: wheel.safetyProfile,
        automation: wheel.automation
      },
      deployment,
      projections,
      investment: {
        setup: {
          tier1: tierCosts.tier1,
          tier2: tierCosts.tier2,
          tier3: tierCosts.tier3,
          buffer: tierCosts.buffer,
          total: totalSetup
        },
        ongoing: {
          monthly: monthlyMaintenance,
          annual: monthlyMaintenance * 12
        },
        roi: {
          projected: '250-400%',
          timeframe: '6-12 months',
          paybackPeriod: '4-8 months'
        }
      },
      qualityMetrics: {
        linkJuiceFlow: wheel.projectedImpact.linkJuiceFlow,
        safetyScore: wheel.safetyProfile.qualityScore + '/100',
        penaltyRisk: wheel.safetyProfile.penaltyRisk,
        diversification: wheel.safetyProfile.footprintDiversification + '%',
        anchorVariation: wheel.strategy.anchorDiversification + '%'
      }
    })
    
  } catch (error) {
    console.error('Link Wheel Deployment Error:', error)
    return NextResponse.json(
      { error: 'Failed to deploy link wheel' },
      { status: 500 }
    )
  }
}

// PUT: Update existing link wheel
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { wheelId, updates } = body
    
    if (!wheelId || !updates) {
      return NextResponse.json(
        { error: 'Missing wheelId or updates' },
        { status: 400 }
      )
    }
    
    const wheel = linkWheelEngine.getLinkWheelById(wheelId)
    if (!wheel) {
      return NextResponse.json(
        { error: 'Link wheel not found' },
        { status: 404 }
      )
    }
    
    // Simulate update operations
    const updateOperations = []
    
    if (updates.addTier1Sites) {
      updateOperations.push(`${updates.addTier1Sites} tier 1 sites scheduled for integration`)
    }
    
    if (updates.addTier2Sites) {
      updateOperations.push(`${updates.addTier2Sites} tier 2 sites scheduled for integration`)
    }
    
    if (updates.linkVelocity) {
      updateOperations.push(`Link velocity adjusted to ${updates.linkVelocity}`)
    }
    
    if (updates.contentRefresh) {
      updateOperations.push('Content refresh initiated across all tiers')
    }
    
    if (updates.safetyAudit) {
      updateOperations.push('Comprehensive safety audit and optimization scheduled')
    }
    
    if (updates.anchorOptimization) {
      updateOperations.push('Anchor text diversification optimization applied')
    }
    
    return NextResponse.json({
      success: true,
      wheelId,
      updatedAt: new Date().toISOString(),
      operations: updateOperations,
      estimatedCompletion: '3-7 days',
      affectedSites: (updates.addTier1Sites || 0) + (updates.addTier2Sites || 0),
      message: 'Link wheel update initiated successfully'
    })
    
  } catch (error) {
    console.error('Link Wheel Update Error:', error)
    return NextResponse.json(
      { error: 'Failed to update link wheel' },
      { status: 500 }
    )
  }
}

// DELETE: Dismantle link wheel
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const wheelId = searchParams.get('wheelId')
    const mode = searchParams.get('mode') || 'gradual' // 'gradual' or 'immediate'
    
    if (!wheelId) {
      return NextResponse.json(
        { error: 'Missing wheelId parameter' },
        { status: 400 }
      )
    }
    
    const wheel = linkWheelEngine.getLinkWheelById(wheelId)
    if (!wheel) {
      return NextResponse.json(
        { error: 'Link wheel not found' },
        { status: 404 }
      )
    }
    
    // Different dismantling strategies
    const dismantleSteps = mode === 'gradual' ? [
      'Phase 1: Remove buffer tier links gradually over 30 days',
      'Phase 2: Reduce tier 3 site linking over 14 days',
      'Phase 3: Phase out tier 2 connections over 21 days',
      'Phase 4: Carefully remove tier 1 links over 45 days',
      'Phase 5: Archive all content and redirect where beneficial',
      'Phase 6: Complete wheel dismantling with link preservation where possible'
    ] : [
      'Immediate removal of all non-tier 1 links',
      'Preserve tier 1 connections temporarily',
      'Set up 301 redirects for valuable pages',
      'Archive all content for future reference',
      'Monitor money site rankings closely',
      'Complete wheel removal within 7 days'
    ]
    
    const timeline = mode === 'gradual' ? '90-120 days' : '7-14 days'
    
    // Calculate potential impact
    const impactAssessment = {
      linkJuiceLoss: mode === 'gradual' ? 'Minimal with proper transitions' : 'Immediate but manageable',
      rankingImpact: mode === 'gradual' ? 'Low risk with gradual reduction' : 'Medium risk requiring close monitoring',
      recoveryTime: mode === 'gradual' ? '2-4 weeks' : '6-12 weeks',
      preservationOptions: 'High-value links can be redirected to money site'
    }
    
    return NextResponse.json({
      success: true,
      wheelId,
      mode,
      dismantledAt: new Date().toISOString(),
      steps: dismantleSteps,
      timeline,
      impactAssessment,
      sitesAffected: wheel.strategy.totalSites,
      recommendations: mode === 'gradual' ? [
        'Monitor rankings during transition phases',
        'Preserve high-authority tier 1 connections',
        'Implement strategic redirects for valuable pages',
        'Document link removal process for compliance'
      ] : [
        'Strengthen money site\'s on-page SEO immediately',
        'Implement alternative link building strategies',
        'Monitor for significant ranking drops',
        'Be prepared to restore critical connections if needed'
      ],
      message: `Link wheel dismantling initiated (${mode} mode)`
    })
    
  } catch (error) {
    console.error('Link Wheel Dismantling Error:', error)
    return NextResponse.json(
      { error: 'Failed to dismantle link wheel' },
      { status: 500 }
    )
  }
}

// Helper function to generate CSV data for link wheel
function generateWheelCSV(wheel: any): string {
  const headers = ['Tier', 'Site', 'Domain', 'Authority', 'Niche', 'Status', 'Domain Rating', 'Organic Traffic', 'Backlinks']
  
  const allSites = [
    ...wheel.tiers.tier1.map((s: any) => ({ ...s, tierName: 'Tier 1' })),
    ...wheel.tiers.tier2.map((s: any) => ({ ...s, tierName: 'Tier 2' })),
    ...wheel.tiers.tier3.map((s: any) => ({ ...s, tierName: 'Tier 3' })),
    ...wheel.tiers.buffer.map((s: any) => ({ ...s, tierName: 'Buffer' }))
  ]
  
  const rows = allSites.map(site => [
    site.tierName,
    site.id,
    site.domain,
    site.authority,
    site.niche,
    site.status,
    site.metrics.domainRating,
    site.metrics.organicTraffic.toLocaleString(),
    site.metrics.backlinks.toLocaleString()
  ])
  
  return [headers.join(','), ...rows.map(row => row.join(','))].join('\n')
}