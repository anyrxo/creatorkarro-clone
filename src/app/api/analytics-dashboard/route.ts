import { NextRequest, NextResponse } from 'next/server'
import { analyticsDashboardEngine } from '@/lib/analytics-dashboard'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    switch (action) {
      case 'create': {
        const { domain, options } = params
        const dashboard = await analyticsDashboardEngine.createDashboard(
          domain,
          options
        )
        return NextResponse.json({ success: true, dashboard })
      }

      case 'generateReport': {
        const { domain, period } = params
        const report = await analyticsDashboardEngine.generateReport(
          domain,
          period
        )
        return NextResponse.json({ success: true, report })
      }

      case 'getDashboard': {
        const { domain } = params
        const dashboard = analyticsDashboardEngine.getDashboardByDomain(domain)
        if (!dashboard) {
          return NextResponse.json({ error: 'Dashboard not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, dashboard })
      }

      case 'getAllDashboards': {
        const dashboards = analyticsDashboardEngine.getAllDashboards()
        return NextResponse.json({ success: true, dashboards })
      }

      case 'getReports': {
        const { domain } = params
        const reports = analyticsDashboardEngine.getReportsByDomain(domain)
        return NextResponse.json({ success: true, reports })
      }

      case 'getHistorical': {
        const { domain } = params
        const historical = analyticsDashboardEngine.getHistoricalData(domain)
        return NextResponse.json({ success: true, historical })
      }

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Analytics dashboard API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const domain = searchParams.get('domain')
    const type = searchParams.get('type')

    if (type === 'reports' && domain) {
      const reports = analyticsDashboardEngine.getReportsByDomain(domain)
      return NextResponse.json({ success: true, reports })
    }

    if (type === 'historical' && domain) {
      const historical = analyticsDashboardEngine.getHistoricalData(domain)
      return NextResponse.json({ success: true, historical })
    }

    if (domain) {
      const dashboard = analyticsDashboardEngine.getDashboardByDomain(domain)
      if (!dashboard) {
        return NextResponse.json({ error: 'Dashboard not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, dashboard })
    }

    const dashboards = analyticsDashboardEngine.getAllDashboards()
    return NextResponse.json({ success: true, dashboards })
  } catch (error) {
    console.error('Analytics dashboard API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}