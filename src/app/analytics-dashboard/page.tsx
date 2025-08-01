'use client'

import { useState, useEffect } from 'react'
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
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
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

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#6b7280']

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

  useEffect(() => {
    loadDashboards()
  }, [])

  const loadDashboards = async () => {
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
  }

  const loadReports = async (domain: string) => {
    try {
      const response = await fetch(`/api/analytics-dashboard?domain=${domain}&type=reports`)
      const data = await response.json()
      if (data.success) {
        setReports(data.reports)
      }
    } catch (error) {
      console.error('Error loading reports:', error)
    }
  }

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

  const getTrafficData = () => {
    if (!selectedDashboard) return []
    
    // Simulate historical data
    return Array.from({ length: 7 }, (_, i) => ({
      day: `Day ${i + 1}`,
      traffic: Math.floor(selectedDashboard.organic.traffic * (0.8 + Math.random() * 0.4)),
      sessions: Math.floor(selectedDashboard.organic.sessions * (0.8 + Math.random() * 0.4))
    }))
  }

  const getRankingDistribution = () => {
    if (!selectedDashboard) return []
    
    return [
      { name: 'Top 3', value: selectedDashboard.rankings.top3, fill: COLORS[0] },
      { name: 'Top 10', value: selectedDashboard.rankings.top10 - selectedDashboard.rankings.top3, fill: COLORS[1] },
      { name: 'Top 20', value: 200, fill: COLORS[2] },
      { name: 'Top 50', value: selectedDashboard.rankings.top100 - selectedDashboard.rankings.top10 - 200, fill: COLORS[3] },
      { name: '50-100', value: 300, fill: COLORS[4] },
      { name: 'Not Ranking', value: selectedDashboard.rankings.total - selectedDashboard.rankings.top100, fill: COLORS[5] }
    ]
  }

  const getConversionData = () => {
    if (!selectedDashboard) return []
    
    return [
      { name: 'Signups', value: selectedDashboard.conversions.goalCompletions.signups },
      { name: 'Purchases', value: selectedDashboard.conversions.goalCompletions.purchases },
      { name: 'Downloads', value: selectedDashboard.conversions.goalCompletions.downloads },
      { name: 'Contacts', value: selectedDashboard.conversions.goalCompletions.contacts }
    ]
  }

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
          {selectedDashboard ? (
            <>
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
                      {formatNumber(selectedDashboard.organic.traffic)}
                    </div>
                    <p className="text-sm">
                      <span className={selectedDashboard.organic.growth > 0 ? 'text-green-600' : 'text-red-600'}>
                        {selectedDashboard.organic.growth > 0 ? '+' : ''}{selectedDashboard.organic.growth.toFixed(1)}%
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
                      {selectedDashboard.rankings.top10}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedDashboard.rankings.top3} in top 3
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
                      {formatNumber(selectedDashboard.backlinks.total)}
                    </div>
                    <p className="text-sm">
                      <span className="text-green-600">+{selectedDashboard.backlinks.new}</span>
                      {' / '}
                      <span className="text-red-600">-{selectedDashboard.backlinks.lost}</span>
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
                      ${formatNumber(selectedDashboard.conversions.revenue)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedDashboard.conversions.rate.toFixed(2)}% conversion
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Traffic Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={getTrafficData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="traffic" stroke="#3b82f6" name="Traffic" />
                        <Line type="monotone" dataKey="sessions" stroke="#22c55e" name="Sessions" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ranking Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={getRankingDistribution()}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}`}
                        >
                          {getRankingDistribution().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
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
                        <span className="text-sm font-medium">{selectedDashboard.technical.pageSpeed.mobile}</span>
                        <Progress value={selectedDashboard.technical.pageSpeed.mobile} className="w-20" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Crawl Errors</span>
                      <Badge variant={selectedDashboard.technical.crawlErrors > 10 ? 'destructive' : 'secondary'}>
                        {selectedDashboard.technical.crawlErrors}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Core Web Vitals</span>
                      <Badge variant={selectedDashboard.technical.coreWebVitals.lcp > 2.5 ? 'destructive' : 'default'}>
                        {selectedDashboard.technical.coreWebVitals.lcp > 2.5 ? 'Needs Work' : 'Good'}
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
                      <span className="text-sm font-medium">{formatNumber(selectedDashboard.content.totalPages)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Avg Word Count</span>
                      <span className="text-sm font-medium">{selectedDashboard.content.avgWordCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Content Score</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{selectedDashboard.content.contentScore}</span>
                        <Progress value={selectedDashboard.content.contentScore} className="w-20" />
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
                      <span className="text-sm font-medium">{selectedDashboard.competitors.tracked}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Outranking</span>
                      <Badge variant="default">{selectedDashboard.competitors.outranking}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Visibility Gap</span>
                      <span className={`text-sm font-medium ${selectedDashboard.competitors.visibilityGap > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedDashboard.competitors.visibilityGap > 0 ? '+' : ''}{selectedDashboard.competitors.visibilityGap.toFixed(1)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  No dashboards created yet. Go to the "Create New" tab to set up your first dashboard.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="traffic" className="space-y-6">
          {selectedDashboard && (
            <>
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
                      <p className="text-2xl font-bold">{formatNumber(selectedDashboard.organic.sessions)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pageviews</p>
                      <p className="text-2xl font-bold">{formatNumber(selectedDashboard.organic.pageviews)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Bounce Rate</p>
                      <p className="text-2xl font-bold">{selectedDashboard.organic.bounceRate.toFixed(1)}%</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg Duration</p>
                      <p className="text-2xl font-bold">{Math.floor(selectedDashboard.organic.avgDuration / 60)}:{(selectedDashboard.organic.avgDuration % 60).toString().padStart(2, '0')}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pages/Session</p>
                      <p className="text-2xl font-bold">{(selectedDashboard.organic.pageviews / selectedDashboard.organic.sessions).toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                      <p className={`text-2xl font-bold ${selectedDashboard.organic.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedDashboard.organic.growth > 0 ? '+' : ''}{selectedDashboard.organic.growth.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        <TabsContent value="rankings" className="space-y-6">
          {selectedDashboard && (
            <>
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
                      <p className="text-3xl font-bold text-green-600">{selectedDashboard.rankings.improved}</p>
                      <p className="text-sm text-muted-foreground mt-1">Improved</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-3xl font-bold text-red-600">{selectedDashboard.rankings.declined}</p>
                      <p className="text-sm text-muted-foreground mt-1">Declined</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-3xl font-bold">{selectedDashboard.rankings.total}</p>
                      <p className="text-sm text-muted-foreground mt-1">Total Keywords</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-3xl font-bold">{selectedDashboard.rankings.averagePosition.toFixed(1)}</p>
                      <p className="text-sm text-muted-foreground mt-1">Avg Position</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        <TabsContent value="technical" className="space-y-6">
          {selectedDashboard && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Core Web Vitals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">LCP (Largest Contentful Paint)</span>
                        <span className="text-sm font-medium">{selectedDashboard.technical.coreWebVitals.lcp.toFixed(2)}s</span>
                      </div>
                      <Progress 
                        value={Math.min(100, (2.5 / selectedDashboard.technical.coreWebVitals.lcp) * 100)} 
                        className={selectedDashboard.technical.coreWebVitals.lcp > 2.5 ? 'bg-red-100' : ''}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">FID (First Input Delay)</span>
                        <span className="text-sm font-medium">{selectedDashboard.technical.coreWebVitals.fid.toFixed(0)}ms</span>
                      </div>
                      <Progress 
                        value={Math.min(100, (100 / selectedDashboard.technical.coreWebVitals.fid) * 100)} 
                        className={selectedDashboard.technical.coreWebVitals.fid > 100 ? 'bg-red-100' : ''}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">CLS (Cumulative Layout Shift)</span>
                        <span className="text-sm font-medium">{selectedDashboard.technical.coreWebVitals.cls.toFixed(3)}</span>
                      </div>
                      <Progress 
                        value={Math.min(100, (0.1 / selectedDashboard.technical.coreWebVitals.cls) * 100)} 
                        className={selectedDashboard.technical.coreWebVitals.cls > 0.1 ? 'bg-red-100' : ''}
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
                      <span className="font-medium">{formatNumber(selectedDashboard.technical.indexedPages)}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span>Sitemap Status</span>
                      <Badge variant={selectedDashboard.technical.sitemapStatus === 'healthy' ? 'default' : 'destructive'}>
                        {selectedDashboard.technical.sitemapStatus}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span>Robots.txt Status</span>
                      <Badge variant={selectedDashboard.technical.robotsStatus === 'healthy' ? 'default' : 'destructive'}>
                        {selectedDashboard.technical.robotsStatus}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="conversions" className="space-y-6">
          {selectedDashboard && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Metrics</CardTitle>
                  <CardDescription>
                    Goal completions and revenue tracking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={getConversionData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold">{selectedDashboard.conversions.total}</p>
                      <p className="text-sm text-muted-foreground">Total Conversions</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold">{selectedDashboard.conversions.rate.toFixed(2)}%</p>
                      <p className="text-sm text-muted-foreground">Conversion Rate</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold">${formatNumber(selectedDashboard.conversions.revenue)}</p>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
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
                {dashboards.map((dashboard) => (
                  <div
                    key={dashboard.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedDashboard?.id === dashboard.id ? 'bg-muted' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => {
                      setSelectedDashboard(dashboard)
                      loadReports(dashboard.domain)
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{dashboard.domain}</p>
                        <p className="text-sm text-muted-foreground">
                          Traffic: {formatNumber(dashboard.organic.traffic)} • Rankings: {dashboard.rankings.top10} top 10
                        </p>
                      </div>
                      <Badge variant={dashboard.organic.growth > 0 ? 'default' : 'destructive'}>
                        {dashboard.organic.growth > 0 ? '+' : ''}{dashboard.organic.growth.toFixed(1)}%
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