import { NextRequest, NextResponse } from 'next/server'
import { algorithmUpdateDefenseEngine } from '@/lib/algorithm-update-defense'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    switch (action) {
      case 'deploy': {
        const { domain, protectionLevel, options } = params
        const defenseSystem = await algorithmUpdateDefenseEngine.deployDefenseSystem(
          domain,
          protectionLevel,
          options
        )
        return NextResponse.json({ success: true, defenseSystem })
      }

      case 'detectUpdate': {
        const { systemId, metrics } = params
        const detection = await algorithmUpdateDefenseEngine.detectAlgorithmUpdate(
          systemId,
          metrics
        )
        return NextResponse.json({ success: true, detection })
      }

      case 'runAudit': {
        const { systemId } = params
        const auditResults = await algorithmUpdateDefenseEngine.runDefenseAudit(systemId)
        return NextResponse.json({ success: true, auditResults })
      }

      case 'getSystem': {
        const { systemId } = params
        const system = algorithmUpdateDefenseEngine.getDefenseSystemById(systemId)
        if (!system) {
          return NextResponse.json({ error: 'Defense system not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, system })
      }

      case 'getAllSystems': {
        const systems = algorithmUpdateDefenseEngine.getAllDefenseSystems()
        return NextResponse.json({ success: true, systems })
      }

      case 'getKnownUpdates': {
        const updates = algorithmUpdateDefenseEngine.getKnownUpdates()
        return NextResponse.json({ success: true, updates })
      }

      case 'getStrategies': {
        const strategies = algorithmUpdateDefenseEngine.getDefenseStrategies()
        return NextResponse.json({ success: true, strategies })
      }

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Algorithm defense API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const systemId = searchParams.get('systemId')
    const type = searchParams.get('type')

    if (type === 'updates') {
      const updates = algorithmUpdateDefenseEngine.getKnownUpdates()
      return NextResponse.json({ success: true, updates })
    }

    if (type === 'strategies') {
      const strategies = algorithmUpdateDefenseEngine.getDefenseStrategies()
      return NextResponse.json({ success: true, strategies })
    }

    if (systemId) {
      const system = algorithmUpdateDefenseEngine.getDefenseSystemById(systemId)
      if (!system) {
        return NextResponse.json({ error: 'Defense system not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, system })
    }

    const systems = algorithmUpdateDefenseEngine.getAllDefenseSystems()
    return NextResponse.json({ success: true, systems })
  } catch (error) {
    console.error('Algorithm defense API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}