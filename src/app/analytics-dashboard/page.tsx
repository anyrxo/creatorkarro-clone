'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Activity, DollarSign, Users, Globe, Link, FileText } from 'lucide-react'

interface DashboardMetrics {
  id: string
  domain: string
  timestamp: string
  organic: {
    traffic: number
    growth: number
    sessions: number
    bounceRate: number
    avgDuration: number
    pageviews: number
  }
  rankings: {
    total: number
    top3: number
    top10: number
    top100: number
    improved: number
    declined: number
    averagePosition: number
  }
  backlinks: {
    total: number
    new: number
    lost: number
    dofollow: number
    nofollow: number
    domainAuthority: number
    toxicityScore: number
  }
  technical: {
    crawlErrors: number
    indexedPages: number
    sitemapStatus: string
    robotsStatus: string
    pageSpeed: {
      mobile: number
      desktop: number
    }
    coreWebVitals: {
      lcp: number
      fid: number
      cls: number
    }
  }
  content: {
    totalPages: number
    newPages: number
    updatedPages: number
    thinPages: number
    duplicatePages: number
    avgWordCount: number
    contentScore: number
  }
  conversions: {
    total: number
    rate: number
    revenue: number
    goalCompletions: {
      signups: number
      purchases: number
      downloads: number
      contacts: number
    }
  }
  competitors: {
    tracked: number
    outranking: number
    beingOutranked: number
    sharedKeywords: number
    visibilityGap: number
  }
}

export default function AnalyticsDashboardPage() {
  const [dashboards, setDashboards] = useState<DashboardMetrics[]>([])
  const [selectedDashboard, setSelectedDashboard] = useState<DashboardMetrics | null>(null)
  const [reports, setReports] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [newDashboard, setNewDashboard] = useState({
    domain: '',
    refreshInterval: '15min',
    googleAnalytics: true,
    searchConsole: true,
    ahrefs: false,
    semrush: false,
    competitors: ''
  })

  const loadReports = useCallback(async (domain: string) => {
    try {
      const response = await fetch(`/api/analytics-dashboard?domain=${domain}&type=reports`)
      const data = await response.json()
      if (data.success) {
        setReports(data.reports)
      }
    } catch (error) {
      console.error('Error loading reports:', error)
    }
  }, [])

  const loadDashboards = useCallback(async () => {
    try {
      const response = await fetch('/api/analytics-dashboard?action=getAllDashboards')
      const data = await response.json()
      if (data.success) {
        setDashboards(data.dashboards)
        if (data.dashboards.length > 0 && !selectedDashboard) {
          setSelectedDashboard(data.dashboards[0])
          loadReports(data.dashboards[0].domain)
        }
      }
    } catch (error) {
      console.error('Error loading dashboards:', error)
    }
  }, [selectedDashboard, loadReports])

  useEffect(() => {
    loadDashboards()
  }, [loadDashboards])

  const handleCreateDashboard = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/analytics-dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          domain: newDashboard.domain,
          options: {
            refreshInterval: newDashboard.refreshInterval,
            integrations: {
              googleAnalytics: newDashboard.googleAnalytics,
              searchConsole: newDashboard.searchConsole,
              ahrefs: newDashboard.ahrefs,
              semrush: newDashboard.semrush
            },
            competitors: newDashboard.competitors ? newDashboard.competitors.split(',').map(c => c.trim()) : []
          }
        })
      })

      const data = await response.json()
      if (data.success) {
        await loadDashboards()
        setNewDashboard({
          domain: '',
          refreshInterval: '15min',
          googleAnalytics: true,
          searchConsole: true,
          ahrefs: false,
          semrush: false,
          competitors: ''
        })
      }
    } catch (error) {
      console.error('Error creating dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleGenerateReport = async () => {
    if (!selectedDashboard) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/analytics-dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generateReport',
          domain: selectedDashboard.domain,
          period: 'weekly'
        })
      })

      const data = await response.json()
      if (data.success) {
        await loadReports(selectedDashboard.domain)
      }
    } catch (error) {
      console.error('Error generating report:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  // Mock data for demonstration
  const mockDashboard: DashboardMetrics = {
    id: '1',
    domain: 'example.com',
    timestamp: new Date().toISOString(),
    organic: {
      traffic: 125420,
      growth: 15.3,
      sessions: 98650,
      bounceRate: 42.3,
      avgDuration: 245,
      pageviews: 342850
    },
    rankings: {
      total: 4826,
      top3: 287,
      top10: 892,
      top100: 2453,
      improved: 1254,
      declined: 342,
      averagePosition: 8.2
    },
    backlinks: {
      total: 248690,
      new: 4218,
      lost: 892,
      dofollow: 195420,
      nofollow: 53270,
      domainAuthority: 68,
      toxicityScore: 2.1
    },
    technical: {
      crawlErrors: 12,
      indexedPages: 52840,
      sitemapStatus: 'healthy',
      robotsStatus: 'healthy',
      pageSpeed: {
        mobile: 85,
        desktop: 92
      },
      coreWebVitals: {
        lcp: 2.1,
        fid: 45,
        cls: 0.08
      }
    },
    content: {
      totalPages: 52840,
      newPages: 15420,
      updatedPages: 8920,
      thinPages: 234,
      duplicatePages: 12,
      avgWordCount: 1248,
      contentScore: 85
    },
    conversions: {
      total: 8426,
      rate: 3.8,
      revenue: 486250,
      goalCompletions: {
        signups: 3842,
        purchases: 2156,
        downloads: 1842,
        contacts: 586
      }
    },
    competitors: {
      tracked: 5,
      outranking: 3,
      beingOutranked: 2,
      sharedKeywords: 2453,
      visibilityGap: 12.4
    }
  }

  const dashboard = selectedDashboard || mockDashboard

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Activity className="h-8 w-8" />
            Comprehensive Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Real-time SEO intelligence and performance monitoring
          </p>
        </div>
        <div className="flex gap-4">
          {selectedDashboard && (
            <Button onClick={handleGenerateReport} disabled={loading}>
              Generate Report
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="rankings">Rankings</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Organic Traffic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(dashboard.organic.traffic)}
                </div>
                <p className="text-sm">
                  <span className={dashboard.organic.growth > 0 ? 'text-green-600' : 'text-red-600'}>
                    {dashboard.organic.growth > 0 ? '+' : ''}{dashboard.organic.growth.toFixed(1)}%
                  </span>
                  {' '}vs last period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Top 10 Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {dashboard.rankings.top10}
                </div>
                <p className="text-sm text-muted-foreground">
                  {dashboard.rankings.top3} in top 3
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Link className="h-4 w-4" />
                  Total Backlinks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatNumber(dashboard.backlinks.total)}
                </div>
                <p className="text-sm">
                  <span className="text-green-600">+{dashboard.backlinks.new}</span>
                  {' / '}
                  <span className="text-red-600">-{dashboard.backlinks.lost}</span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${formatNumber(dashboard.conversions.revenue)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {dashboard.conversions.rate.toFixed(2)}% conversion
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Technical Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Page Speed (Mobile)</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{dashboard.technical.pageSpeed.mobile}</span>
                    <Progress value={dashboard.technical.pageSpeed.mobile} className="w-20" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Crawl Errors</span>
                  <Badge variant={dashboard.technical.crawlErrors > 10 ? 'destructive' : 'secondary'}>
                    {dashboard.technical.crawlErrors}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Core Web Vitals</span>
                  <Badge variant={dashboard.technical.coreWebVitals.lcp > 2.5 ? 'destructive' : 'default'}>
                    {dashboard.technical.coreWebVitals.lcp > 2.5 ? 'Needs Work' : 'Good'}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Content Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Pages</span>
                  <span className="text-sm font-medium">{formatNumber(dashboard.content.totalPages)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Avg Word Count</span>
                  <span className="text-sm font-medium">{dashboard.content.avgWordCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Score</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{dashboard.content.contentScore}</span>
                    <Progress value={dashboard.content.contentScore} className="w-20" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Competitor Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tracked Competitors</span>
                  <span className="text-sm font-medium">{dashboard.competitors.tracked}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Outranking</span>
                  <Badge variant="default">{dashboard.competitors.outranking}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Visibility Gap</span>
                  <span className={`text-sm font-medium ${dashboard.competitors.visibilityGap > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {dashboard.competitors.visibilityGap > 0 ? '+' : ''}{dashboard.competitors.visibilityGap.toFixed(1)}%
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Analytics</CardTitle>
              <CardDescription>
                Detailed organic traffic metrics and user behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Sessions</p>
                  <p className="text-2xl font-bold">{formatNumber(dashboard.organic.sessions)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pageviews</p>
                  <p className="text-2xl font-bold">{formatNumber(dashboard.organic.pageviews)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Bounce Rate</p>
                  <p className="text-2xl font-bold">{dashboard.organic.bounceRate.toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Duration</p>
                  <p className="text-2xl font-bold">{Math.floor(dashboard.organic.avgDuration / 60)}:{(dashboard.organic.avgDuration % 60).toString().padStart(2, '0')}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pages/Session</p>
                  <p className="text-2xl font-bold">{(dashboard.organic.pageviews / dashboard.organic.sessions).toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                  <p className={`text-2xl font-bold ${dashboard.organic.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {dashboard.organic.growth > 0 ? '+' : ''}{dashboard.organic.growth.toFixed(1)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rankings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Rankings</CardTitle>
              <CardDescription>
                Position tracking and keyword performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-3xl font-bold text-green-600">{dashboard.rankings.improved}</p>
                  <p className="text-sm text-muted-foreground mt-1">Improved</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-3xl font-bold text-red-600">{dashboard.rankings.declined}</p>
                  <p className="text-sm text-muted-foreground mt-1">Declined</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-3xl font-bold">{dashboard.rankings.total}</p>
                  <p className="text-sm text-muted-foreground mt-1">Total Keywords</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-3xl font-bold">{dashboard.rankings.averagePosition.toFixed(1)}</p>
                  <p className="text-sm text-muted-foreground mt-1">Avg Position</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Core Web Vitals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">LCP (Largest Contentful Paint)</span>
                    <span className="text-sm font-medium">{dashboard.technical.coreWebVitals.lcp.toFixed(2)}s</span>
                  </div>
                  <Progress 
                    value={Math.min(100, (2.5 / dashboard.technical.coreWebVitals.lcp) * 100)} 
                    className={dashboard.technical.coreWebVitals.lcp > 2.5 ? 'bg-red-100' : ''}
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">FID (First Input Delay)</span>
                    <span className="text-sm font-medium">{dashboard.technical.coreWebVitals.fid.toFixed(0)}ms</span>
                  </div>
                  <Progress 
                    value={Math.min(100, (100 / dashboard.technical.coreWebVitals.fid) * 100)} 
                    className={dashboard.technical.coreWebVitals.fid > 100 ? 'bg-red-100' : ''}
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">CLS (Cumulative Layout Shift)</span>
                    <span className="text-sm font-medium">{dashboard.technical.coreWebVitals.cls.toFixed(3)}</span>
                  </div>
                  <Progress 
                    value={Math.min(100, (0.1 / dashboard.technical.coreWebVitals.cls) * 100)} 
                    className={dashboard.technical.coreWebVitals.cls > 0.1 ? 'bg-red-100' : ''}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Indexed Pages</span>
                  <span className="font-medium">{formatNumber(dashboard.technical.indexedPages)}</span>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Sitemap Status</span>
                  <Badge variant={dashboard.technical.sitemapStatus === 'healthy' ? 'default' : 'destructive'}>
                    {dashboard.technical.sitemapStatus}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span>Robots.txt Status</span>
                  <Badge variant={dashboard.technical.robotsStatus === 'healthy' ? 'default' : 'destructive'}>
                    {dashboard.technical.robotsStatus}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Metrics</CardTitle>
              <CardDescription>
                Goal completions and revenue tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold">{dashboard.conversions.total}</p>
                  <p className="text-sm text-muted-foreground">Total Conversions</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold">{dashboard.conversions.rate.toFixed(2)}%</p>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <p className="text-2xl font-bold">${formatNumber(dashboard.conversions.revenue)}</p>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 border rounded-lg">
                  <p className="text-sm text-muted-foreground">Signups</p>
                  <p className="text-xl font-semibold">{dashboard.conversions.goalCompletions.signups}</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm text-muted-foreground">Purchases</p>
                  <p className="text-xl font-semibold">{dashboard.conversions.goalCompletions.purchases}</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-xl font-semibold">{dashboard.conversions.goalCompletions.downloads}</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm text-muted-foreground">Contacts</p>
                  <p className="text-xl font-semibold">{dashboard.conversions.goalCompletions.contacts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Analytics Dashboard</CardTitle>
              <CardDescription>
                Set up comprehensive SEO monitoring for your domain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="domain">Domain</Label>
                  <Input
                    id="domain"
                    placeholder="example.com"
                    value={newDashboard.domain}
                    onChange={(e) => setNewDashboard({ ...newDashboard, domain: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="refreshInterval">Refresh Interval</Label>
                  <Select
                    value={newDashboard.refreshInterval}
                    onValueChange={(value) => setNewDashboard({ ...newDashboard, refreshInterval: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-time">Real-time (1 min)</SelectItem>
                      <SelectItem value="5min">5 minutes</SelectItem>
                      <SelectItem value="15min">15 minutes</SelectItem>
                      <SelectItem value="30min">30 minutes</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="competitors">Competitors (comma-separated)</Label>
                  <Input
                    id="competitors"
                    placeholder="competitor1.com, competitor2.com"
                    value={newDashboard.competitors}
                    onChange={(e) => setNewDashboard({ ...newDashboard, competitors: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Integrations</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="googleAnalytics"
                      checked={newDashboard.googleAnalytics}
                      onChange={(e) => setNewDashboard({ ...newDashboard, googleAnalytics: e.target.checked })}
                    />
                    <Label htmlFor="googleAnalytics">Google Analytics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="searchConsole"
                      checked={newDashboard.searchConsole}
                      onChange={(e) => setNewDashboard({ ...newDashboard, searchConsole: e.target.checked })}
                    />
                    <Label htmlFor="searchConsole">Search Console</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="ahrefs"
                      checked={newDashboard.ahrefs}
                      onChange={(e) => setNewDashboard({ ...newDashboard, ahrefs: e.target.checked })}
                    />
                    <Label htmlFor="ahrefs">Ahrefs</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="semrush"
                      checked={newDashboard.semrush}
                      onChange={(e) => setNewDashboard({ ...newDashboard, semrush: e.target.checked })}
                    />
                    <Label htmlFor="semrush">SEMrush</Label>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCreateDashboard}
                disabled={loading || !newDashboard.domain}
                className="w-full"
              >
                {loading ? 'Creating...' : 'Create Dashboard'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Dashboards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {dashboards.map((db) => (
                  <div
                    key={db.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedDashboard?.id === db.id ? 'bg-muted' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => {
                      setSelectedDashboard(db)
                      loadReports(db.domain)
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{db.domain}</p>
                        <p className="text-sm text-muted-foreground">
                          Traffic: {formatNumber(db.organic.traffic)} • Rankings: {db.rankings.top10} top 10
                        </p>
                      </div>
                      <Badge variant={db.organic.growth > 0 ? 'default' : 'destructive'}>
                        {db.organic.growth > 0 ? '+' : ''}{db.organic.growth.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}