import { NextRequest, NextResponse } from 'next/server'
import { analyticsDashboardEngine } from '@/lib/analytics-dashboard-system'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, ...params } = body

    switch (action) {
      case 'create': {
        const { domain, options } = params
        const dashboard = await analyticsDashboardEngine.deployAnalyticsDashboard(
          domain,
          options
        )
        return NextResponse.json({ success: true, dashboard })
      }

      case 'generateReport': {
        const { dashboardId, period } = params
        const report = await analyticsDashboardEngine.generateReport(
          dashboardId,
          period
        )
        return NextResponse.json({ success: true, report })
      }

      case 'getDashboard': {
        const { dashboardId } = params
        const dashboard = analyticsDashboardEngine.getDashboardById(dashboardId)
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
        const { dashboardId } = params
        const dashboard = analyticsDashboardEngine.getDashboardById(dashboardId)
        const reports = dashboard ? dashboard.reports : []
        return NextResponse.json({ success: true, reports })
      }

      case 'getHistorical': {
        const { dashboardId } = params
        const historical = analyticsDashboardEngine.getMetricsHistory(dashboardId)
        return NextResponse.json({ success: true, historical })
      }

      case 'refresh': {
        const { dashboardId } = params
        const dashboard = await analyticsDashboardEngine.refreshDashboard(dashboardId)
        return NextResponse.json({ success: true, dashboard })
      }

      case 'export': {
        const { dashboardId, format } = params
        const exportPath = await analyticsDashboardEngine.exportDashboard(dashboardId, format)
        return NextResponse.json({ success: true, exportPath })
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
    const dashboardId = searchParams.get('dashboardId')
    const type = searchParams.get('type')
    const action = searchParams.get('action')

    if (action === 'getAllDashboards') {
      const dashboards = analyticsDashboardEngine.getAllDashboards()
      // Simulate mock data if no dashboards exist
      if (dashboards.length === 0) {
        return NextResponse.json({ 
          success: true, 
          dashboards: []
        })
      }
      return NextResponse.json({ success: true, dashboards })
    }

    if (type === 'reports' && dashboardId) {
      const dashboard = analyticsDashboardEngine.getDashboardById(dashboardId)
      const reports = dashboard ? dashboard.reports : []
      return NextResponse.json({ success: true, reports })
    }

    if (type === 'historical' && dashboardId) {
      const historical = analyticsDashboardEngine.getMetricsHistory(dashboardId)
      return NextResponse.json({ success: true, historical })
    }

    if (dashboardId) {
      const dashboard = analyticsDashboardEngine.getDashboardById(dashboardId)
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