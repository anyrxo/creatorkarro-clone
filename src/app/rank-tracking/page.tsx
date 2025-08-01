'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface RankTracker {
  id: string
  domain: string
  keywords: {
    total: number
    tracked: number
    improved: number
    declined: number
    unchanged: number
    new: number
    lost: number
  }
  rankings: {
    top3: number
    top10: number
    top20: number
    top50: number
    top100: number
    notRanking: number
  }
  visibility: {
    score: number
    change: number
    trend: 'up' | 'down' | 'stable'
    estimatedTraffic: number
  }
  updateFrequency: string
  competitors: string[]
  lastUpdate: string
}

interface RankAlert {
  id: string
  type: string
  severity: string
  keyword: string
  details: {
    previousPosition: number
    currentPosition: number
    change: number
    competitor?: string
    feature?: string
  }
  timestamp: string
  acknowledged: boolean
}

interface SERPFeature {
  type: string
  position: number
  url?: string
  competitor?: string
}

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#6b7280']

export default function RankTrackingPage() {
  const [trackers, setTrackers] = useState<RankTracker[]>([])
  const [selectedTracker, setSelectedTracker] = useState<RankTracker | null>(null)
  const [alerts, setAlerts] = useState<RankAlert[]>([])
  const [serpFeatures, setSerpFeatures] = useState<SERPFeature[]>([])
  const [report, setReport] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [newTracker, setNewTracker] = useState({
    domain: '',
    keywords: '',
    updateFrequency: 'daily',
    competitors: '',
    locations: 'us',
    devices: 'desktop,mobile',
    alertEmail: true,
    alertSlack: true
  })

  useEffect(() => {
    loadTrackers()
  }, [])

  const loadTrackers = async () => {
    try {
      const response = await fetch('/api/rank-tracking?action=getAllTrackers')
      const data = await response.json()
      if (data.success) {
        setTrackers(data.trackers)
        if (data.trackers.length > 0 && !selectedTracker) {
          setSelectedTracker(data.trackers[0])
          loadTrackerDetails(data.trackers[0].id)
        }
      }
    } catch (error) {
      console.error('Error loading trackers:', error)
    }
  }

  const loadTrackerDetails = async (trackerId: string) => {
    try {
      const [alertsRes, reportRes] = await Promise.all([
        fetch('/api/rank-tracking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'getAlerts', trackerId })
        }),
        fetch(`/api/rank-tracking?trackerId=${trackerId}&action=report`)
      ])

      const alertsData = await alertsRes.json()
      const reportData = await reportRes.json()

      if (alertsData.success) setAlerts(alertsData.alerts)
      if (reportData.success) setReport(reportData.report)
    } catch (error) {
      console.error('Error loading tracker details:', error)
    }
  }

  const handleDeployTracker = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/rank-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'deploy',
          domain: newTracker.domain,
          keywords: newTracker.keywords.split(',').map(k => k.trim()),
          options: {
            updateFrequency: newTracker.updateFrequency,
            competitors: newTracker.competitors ? newTracker.competitors.split(',').map(c => c.trim()) : [],
            locations: newTracker.locations.split(',').map(l => l.trim()),
            devices: newTracker.devices.split(',').map(d => d.trim()),
            alerts: {
              email: newTracker.alertEmail,
              slack: newTracker.alertSlack
            }
          }
        })
      })

      const data = await response.json()
      if (data.success) {
        await loadTrackers()
        setNewTracker({
          domain: '',
          keywords: '',
          updateFrequency: 'daily',
          competitors: '',
          locations: 'us',
          devices: 'desktop,mobile',
          alertEmail: true,
          alertSlack: true
        })
      }
    } catch (error) {
      console.error('Error deploying tracker:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateRankings = async () => {
    if (!selectedTracker) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/rank-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          trackerId: selectedTracker.id
        })
      })

      const data = await response.json()
      if (data.success) {
        await loadTrackers()
        await loadTrackerDetails(selectedTracker.id)
      }
    } catch (error) {
      console.error('Error updating rankings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCheckSERPFeatures = async (keyword: string) => {
    if (!selectedTracker) return

    try {
      const response = await fetch('/api/rank-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'detectSERPFeatures',
          trackerId: selectedTracker.id,
          keyword
        })
      })

      const data = await response.json()
      if (data.success) {
        setSerpFeatures(data.features)
      }
    } catch (error) {
      console.error('Error checking SERP features:', error)
    }
  }

  const getRankingDistributionData = () => {
    if (!selectedTracker) return []
    
    return [
      { name: 'Top 3', value: selectedTracker.rankings.top3, fill: COLORS[0] },
      { name: 'Top 10', value: selectedTracker.rankings.top10, fill: COLORS[1] },
      { name: 'Top 20', value: selectedTracker.rankings.top20, fill: COLORS[2] },
      { name: 'Top 50', value: selectedTracker.rankings.top50, fill: COLORS[3] },
      { name: 'Top 100', value: selectedTracker.rankings.top100, fill: COLORS[4] },
      { name: 'Not Ranking', value: selectedTracker.rankings.notRanking, fill: COLORS[5] }
    ]
  }

  const getKeywordChangeData = () => {
    if (!selectedTracker) return []
    
    return [
      { category: 'Improved', value: selectedTracker.keywords.improved, fill: '#22c55e' },
      { category: 'Declined', value: selectedTracker.keywords.declined, fill: '#ef4444' },
      { category: 'Unchanged', value: selectedTracker.keywords.unchanged, fill: '#6b7280' },
      { category: 'New', value: selectedTracker.keywords.new, fill: '#3b82f6' },
      { category: 'Lost', value: selectedTracker.keywords.lost, fill: '#f59e0b' }
    ]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Real-Time Rank Tracking System</h1>
          <p className="text-muted-foreground">
            Monitor SERP positions across locations, devices, and search engines
          </p>
        </div>
        <div className="flex gap-4">
          {selectedTracker && (
            <Button 
              onClick={handleUpdateRankings}
              disabled={loading}
            >
              Update Rankings
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="deploy">Deploy New</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {selectedTracker ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Visibility Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        {selectedTracker.visibility.score.toFixed(1)}
                      </span>
                      <Badge variant={selectedTracker.visibility.trend === 'up' ? 'default' : selectedTracker.visibility.trend === 'down' ? 'destructive' : 'secondary'}>
                        {selectedTracker.visibility.trend}
                      </Badge>
                    </div>
                    <Progress value={selectedTracker.visibility.score} className="mt-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Est. Traffic</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {selectedTracker.visibility.estimatedTraffic.toLocaleString()}
                    </div>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Tracked Keywords</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {selectedTracker.keywords.tracked}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedTracker.keywords.improved} improved
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Top 10 Rankings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {selectedTracker.rankings.top10}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedTracker.rankings.top3} in top 3
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ranking Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={getRankingDistributionData()}
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}`}
                        >
                          {getRankingDistributionData().map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Changes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={getKeywordChangeData()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Tracker Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Domain:</span>
                    <span className="text-sm">{selectedTracker.domain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Update Frequency:</span>
                    <Badge>{selectedTracker.updateFrequency}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Competitors:</span>
                    <span className="text-sm">{selectedTracker.competitors.length} tracked</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Last Update:</span>
                    <span className="text-sm">{formatDate(selectedTracker.lastUpdate)}</span>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  No trackers deployed yet. Go to the "Deploy New" tab to create one.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          {report && report.keywordAnalysis ? (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Keywords</CardTitle>
                  <CardDescription>Keywords ranking in top 10</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {report.topPerformers.map((keyword: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{keyword.keyword}</p>
                            <div className="flex gap-4 mt-1">
                              <Badge variant="outline">Pos: {keyword.avgPosition}</Badge>
                              <Badge variant="outline">Vol: {keyword.searchVolume.toLocaleString()}</Badge>
                              <Badge variant="outline">{keyword.intent}</Badge>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleCheckSERPFeatures(keyword.keyword)}
                          >
                            Check SERP
                          </Button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opportunity Keywords</CardTitle>
                  <CardDescription>Keywords ranking 11-20 with high potential</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <div className="space-y-4">
                      {report.opportunities.map((keyword: any, index: number) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{keyword.keyword}</p>
                            <div className="flex gap-4 mt-1">
                              <Badge variant="outline">Pos: {keyword.avgPosition}</Badge>
                              <Badge variant="outline">Vol: {keyword.searchVolume.toLocaleString()}</Badge>
                              <Badge variant="outline">Difficulty: {keyword.difficulty}</Badge>
                            </div>
                          </div>
                          <Badge variant={keyword.trend === 'improving' ? 'default' : keyword.trend === 'declining' ? 'destructive' : 'secondary'}>
                            {keyword.trend}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  No keyword data available. Deploy a tracker first.
                </p>
              </CardContent>
            </Card>
          )}

          {serpFeatures.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>SERP Features Detected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {serpFeatures.map((feature, index) => (
                    <Alert key={index}>
                      <AlertDescription>
                        <Badge className="mr-2">{feature.type}</Badge>
                        Position: {feature.position}
                        {feature.competitor && ` • Owned by: ${feature.competitor}`}
                        {feature.url && ` • URL: ${feature.url}`}
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>
                Ranking changes and important notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <Alert key={alert.id} variant={alert.severity === 'critical' ? 'destructive' : 'default'}>
                      <AlertDescription>
                        <div className="flex items-center justify-between">
                          <div>
                            <Badge className="mr-2" variant={alert.severity === 'critical' ? 'destructive' : alert.severity === 'warning' ? 'default' : 'secondary'}>
                              {alert.type}
                            </Badge>
                            <span className="font-medium">{alert.keyword}</span>
                            <p className="text-sm mt-1">
                              Position: {alert.details.previousPosition} → {alert.details.currentPosition}
                              ({alert.details.change > 0 ? '+' : ''}{alert.details.change})
                            </p>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {formatDate(alert.timestamp)}
                          </span>
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          {report && report.keywordAnalysis ? (
            <Card>
              <CardHeader>
                <CardTitle>Competitor Analysis</CardTitle>
                <CardDescription>
                  Compare your rankings with competitors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedTracker?.competitors.map((competitor, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <p className="font-medium">{competitor}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tracking performance across shared keywords
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  No competitor data available.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="deploy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Deploy New Rank Tracker</CardTitle>
              <CardDescription>
                Set up real-time SERP monitoring for your domain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="domain">Domain</Label>
                  <Input
                    id="domain"
                    placeholder="example.com"
                    value={newTracker.domain}
                    onChange={(e) => setNewTracker({ ...newTracker, domain: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="updateFrequency">Update Frequency</Label>
                  <Select
                    value={newTracker.updateFrequency}
                    onValueChange={(value) => setNewTracker({ ...newTracker, updateFrequency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="real-time">Real-time (1 min)</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                  <Textarea
                    id="keywords"
                    placeholder="seo tool, rank tracker, serp monitor, keyword position checker"
                    value={newTracker.keywords}
                    onChange={(e) => setNewTracker({ ...newTracker, keywords: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="competitors">Competitors (comma-separated)</Label>
                  <Input
                    id="competitors"
                    placeholder="competitor1.com, competitor2.com"
                    value={newTracker.competitors}
                    onChange={(e) => setNewTracker({ ...newTracker, competitors: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="locations">Locations (comma-separated)</Label>
                  <Input
                    id="locations"
                    placeholder="us, uk, ca"
                    value={newTracker.locations}
                    onChange={(e) => setNewTracker({ ...newTracker, locations: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="devices">Devices (comma-separated)</Label>
                  <Input
                    id="devices"
                    placeholder="desktop, mobile"
                    value={newTracker.devices}
                    onChange={(e) => setNewTracker({ ...newTracker, devices: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="alertEmail"
                    checked={newTracker.alertEmail}
                    onChange={(e) => setNewTracker({ ...newTracker, alertEmail: e.target.checked })}
                  />
                  <Label htmlFor="alertEmail">Email Alerts</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="alertSlack"
                    checked={newTracker.alertSlack}
                    onChange={(e) => setNewTracker({ ...newTracker, alertSlack: e.target.checked })}
                  />
                  <Label htmlFor="alertSlack">Slack Alerts</Label>
                </div>
              </div>

              <Button
                onClick={handleDeployTracker}
                disabled={loading || !newTracker.domain || !newTracker.keywords}
                className="w-full"
              >
                {loading ? 'Deploying...' : 'Deploy Rank Tracker'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Trackers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {trackers.map((tracker) => (
                  <div
                    key={tracker.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedTracker?.id === tracker.id ? 'bg-muted' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => {
                      setSelectedTracker(tracker)
                      loadTrackerDetails(tracker.id)
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{tracker.domain}</p>
                        <p className="text-sm text-muted-foreground">
                          {tracker.keywords.tracked} keywords • {tracker.updateFrequency} updates
                        </p>
                      </div>
                      <Badge variant={tracker.visibility.trend === 'up' ? 'default' : tracker.visibility.trend === 'down' ? 'destructive' : 'secondary'}>
                        {tracker.visibility.score.toFixed(1)}%
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