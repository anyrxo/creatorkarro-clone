import { NextRequest, NextResponse } from 'next/server'
import { rankTrackingEngine } from '@/lib/rank-tracking-system'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    switch (action) {
      case 'deploy': {
        const { domain, keywords, options } = params
        const tracker = await rankTrackingEngine.deployRankTracker(
          domain,
          keywords,
          options
        )
        return NextResponse.json({ success: true, tracker })
      }

      case 'update': {
        const { trackerId } = params
        const updates = await rankTrackingEngine.updateRankings(trackerId)
        return NextResponse.json({ success: true, updates })
      }

      case 'getTracker': {
        const { trackerId } = params
        const tracker = rankTrackingEngine.getTrackerById(trackerId)
        if (!tracker) {
          return NextResponse.json({ error: 'Tracker not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, tracker })
      }

      case 'getAllTrackers': {
        const trackers = rankTrackingEngine.getAllTrackers()
        return NextResponse.json({ success: true, trackers })
      }

      case 'getAlerts': {
        const { trackerId } = params
        const alerts = rankTrackingEngine.getAlerts(trackerId)
        return NextResponse.json({ success: true, alerts })
      }

      case 'detectSERPFeatures': {
        const { trackerId, keyword } = params
        const features = await rankTrackingEngine.detectSERPFeatures(trackerId, keyword)
        return NextResponse.json({ success: true, features })
      }

      case 'generateReport': {
        const { trackerId } = params
        const report = await rankTrackingEngine.generateRankingReport(trackerId)
        return NextResponse.json({ success: true, report })
      }

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Rank tracking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const trackerId = searchParams.get('trackerId')
    const action = searchParams.get('action')

    if (action === 'report' && trackerId) {
      const report = await rankTrackingEngine.generateRankingReport(trackerId)
      return NextResponse.json({ success: true, report })
    }

    if (trackerId) {
      const tracker = rankTrackingEngine.getTrackerById(trackerId)
      if (!tracker) {
        return NextResponse.json({ error: 'Tracker not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, tracker })
    }

    const trackers = rankTrackingEngine.getAllTrackers()
    return NextResponse.json({ success: true, trackers })
  } catch (error) {
    console.error('Rank tracking API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}