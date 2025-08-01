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

interface RankTracker {
  id: string
  domain: string
  keywords: {
    keyword: string
    position: number
    previousPosition: number
    change: number
    url: string
    searchVolume: number
    difficulty: number
    lastChecked: string
  }[]
  competitors: string[]
  settings: {
    updateFrequency: string
    locations: string[]
    devices: string[]
    searchEngines: string[]
    alerts: {
      email: boolean
      sms: boolean
      slack: boolean
      webhook: boolean
    }
  }
  stats: {
    totalKeywords: number
    avgPosition: number
    topThree: number
    topTen: number
    improved: number
    declined: number
    unchanged: number
  }
}

export default function RankTrackingPage() {
  const [trackers, setTrackers] = useState<RankTracker[]>([])
  const [selectedTracker, setSelectedTracker] = useState<RankTracker | null>(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [newTracker, setNewTracker] = useState({
    domain: '',
    keywords: '',
    competitors: '',
    updateFrequency: 'daily',
    locations: ['us'],
    devices: ['desktop', 'mobile'],
    searchEngines: ['google'],
    alerts: {
      email: true,
      sms: false,
      slack: false,
      webhook: false
    }
  })

  useEffect(() => {
    loadTrackers()
  }, [])

  const loadTrackers = async () => {
    try {
      const response = await fetch('/api/rank-tracking?action=getAllTrackers')
      const data = await response.json()
      if (data.success) {
        setTrackers(data.trackers || [])
        if (data.trackers && data.trackers.length > 0 && !selectedTracker) {
          setSelectedTracker(data.trackers[0])
        }
      }
    } catch (error) {
      console.error('Error loading trackers:', error)
    }
  }

  const handleCreateTracker = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/rank-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'deploy',
          ...newTracker,
          keywords: newTracker.keywords.split('\n').filter(k => k.trim())
        })
      })

      const data = await response.json()
      if (data.success) {
        await loadTrackers()
        setNewTracker({
          domain: '',
          keywords: '',
          competitors: '',
          updateFrequency: 'daily',
          locations: ['us'],
          devices: ['desktop', 'mobile'],
          searchEngines: ['google'],
          alerts: {
            email: true,
            sms: false,
            slack: false,
            webhook: false
          }
        })
      }
    } catch (error) {
      console.error('Error creating tracker:', error)
    } finally {
      setLoading(false)
    }
  }

  const refreshRankings = async (trackerId: string) => {
    setLoading(true)
    try {
      const response = await fetch('/api/rank-tracking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update',
          trackerId
        })
      })
      
      const data = await response.json()
      if (data.success) {
        await loadTrackers()
      }
    } catch (error) {
      console.error('Error refreshing rankings:', error)
    } finally {
      setLoading(false)
    }
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return '↑'
    if (change < 0) return '↓'
    return '→'
  }

  const getChangeBadgeVariant = (change: number) => {
    if (change > 0) return 'default' as const
    if (change < 0) return 'destructive' as const
    return 'secondary' as const
  }

  // Mock data for demonstration
  const mockTracker: RankTracker = {
    id: 'mock-1',
    domain: 'example.com',
    keywords: [
      {
        keyword: 'ai automation',
        position: 3,
        previousPosition: 5,
        change: 2,
        url: 'https://example.com/ai-automation',
        searchVolume: 2400,
        difficulty: 68,
        lastChecked: new Date().toISOString()
      },
      {
        keyword: 'business automation',
        position: 7,
        previousPosition: 6,
        change: -1,
        url: 'https://example.com/business-automation',
        searchVolume: 1900,
        difficulty: 72,
        lastChecked: new Date().toISOString()
      }
    ],
    competitors: ['competitor1.com', 'competitor2.com'],
    settings: {
      updateFrequency: 'daily',
      locations: ['us'],
      devices: ['desktop', 'mobile'],
      searchEngines: ['google'],
      alerts: {
        email: true,
        sms: false,
        slack: true,
        webhook: false
      }
    },
    stats: {
      totalKeywords: 156,
      avgPosition: 12.3,
      topThree: 23,
      topTen: 67,
      improved: 89,
      declined: 34,
      unchanged: 33
    }
  }

  const tracker = selectedTracker || mockTracker

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Real-Time Rank Tracking System</h1>
          <p className="text-muted-foreground">
            Monitor your keyword rankings across search engines
          </p>
        </div>
        <div className="flex gap-4">
          {selectedTracker && (
            <Button onClick={() => refreshRankings(selectedTracker.id)} disabled={loading}>
              Refresh Rankings
            </Button>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Total Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{tracker.stats.totalKeywords}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Avg Position</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{tracker.stats.avgPosition.toFixed(1)}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Top 3</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{tracker.stats.topThree}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Top 10</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{tracker.stats.topTen}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Improved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{tracker.stats.improved}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Declined</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{tracker.stats.declined}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ranking Distribution</CardTitle>
                <CardDescription>
                  Keywords by position range
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Top 3</span>
                      <span className="text-sm font-medium">{tracker.stats.topThree} keywords</span>
                    </div>
                    <Progress value={(tracker.stats.topThree / tracker.stats.totalKeywords) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Top 10</span>
                      <span className="text-sm font-medium">{tracker.stats.topTen} keywords</span>
                    </div>
                    <Progress value={(tracker.stats.topTen / tracker.stats.totalKeywords) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Top 20</span>
                      <span className="text-sm font-medium">{Math.floor(tracker.stats.totalKeywords * 0.3)} keywords</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Top 50</span>
                      <span className="text-sm font-medium">{Math.floor(tracker.stats.totalKeywords * 0.5)} keywords</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Changes</CardTitle>
                <CardDescription>
                  Keyword movement summary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">↑</span>
                      <div>
                        <p className="font-medium">Improved</p>
                        <p className="text-sm text-muted-foreground">Moved up in rankings</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-green-600">{tracker.stats.improved}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">↓</span>
                      <div>
                        <p className="font-medium">Declined</p>
                        <p className="text-sm text-muted-foreground">Moved down in rankings</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-red-600">{tracker.stats.declined}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">→</span>
                      <div>
                        <p className="font-medium">Unchanged</p>
                        <p className="text-sm text-muted-foreground">No position change</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-600">{tracker.stats.unchanged}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tracking Settings</CardTitle>
              <CardDescription>
                Current configuration for {tracker.domain}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Update Frequency</p>
                  <Badge>{tracker.settings.updateFrequency}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Locations</p>
                  <div className="flex gap-1">
                    {tracker.settings.locations.map(loc => (
                      <Badge key={loc} variant="secondary">{loc.toUpperCase()}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Devices</p>
                  <div className="flex gap-1">
                    {tracker.settings.devices.map(device => (
                      <Badge key={device} variant="secondary">{device}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Search Engines</p>
                  <div className="flex gap-1">
                    {tracker.settings.searchEngines.map(engine => (
                      <Badge key={engine} variant="secondary">{engine}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tracked Keywords</CardTitle>
              <CardDescription>
                Real-time ranking data for all monitored keywords
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px]">
                <div className="space-y-2">
                  {tracker.keywords.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                      <div className="flex-1">
                        <p className="font-medium">{keyword.keyword}</p>
                        <p className="text-sm text-muted-foreground">{keyword.url}</p>
                        <div className="flex gap-4 mt-1">
                          <span className="text-xs text-muted-foreground">
                            Volume: {keyword.searchVolume.toLocaleString()}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Difficulty: {keyword.difficulty}/100
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">#{keyword.position}</span>
                          <Badge variant={getChangeBadgeVariant(keyword.change)}>
                            {getChangeIcon(keyword.change)} {Math.abs(keyword.change)}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Was: #{keyword.previousPosition}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Tracking</CardTitle>
              <CardDescription>
                Monitor your competitors' rankings for the same keywords
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tracker.competitors.map((competitor, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{competitor}</p>
                        <p className="text-sm text-muted-foreground">Tracking {tracker.stats.totalKeywords} keywords</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Add Competitor
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alert Configuration</CardTitle>
              <CardDescription>
                Configure how you want to be notified about ranking changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Email Alerts</p>
                    <p className="text-sm text-muted-foreground">Receive email notifications for ranking changes</p>
                  </div>
                  <Badge variant={tracker.settings.alerts.email ? "default" : "secondary"}>
                    {tracker.settings.alerts.email ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">SMS Alerts</p>
                    <p className="text-sm text-muted-foreground">Get text messages for critical changes</p>
                  </div>
                  <Badge variant={tracker.settings.alerts.sms ? "default" : "secondary"}>
                    {tracker.settings.alerts.sms ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Slack Integration</p>
                    <p className="text-sm text-muted-foreground">Send notifications to your Slack workspace</p>
                  </div>
                  <Badge variant={tracker.settings.alerts.slack ? "default" : "secondary"}>
                    {tracker.settings.alerts.slack ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Webhook</p>
                    <p className="text-sm text-muted-foreground">Send data to your custom endpoint</p>
                  </div>
                  <Badge variant={tracker.settings.alerts.webhook ? "default" : "secondary"}>
                    {tracker.settings.alerts.webhook ? "Enabled" : "Disabled"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Rank Tracker</CardTitle>
              <CardDescription>
                Set up real-time rank tracking for your domain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                <Label htmlFor="keywords">Keywords (one per line)</Label>
                <Textarea
                  id="keywords"
                  placeholder="keyword 1&#10;keyword 2&#10;keyword 3"
                  value={newTracker.keywords}
                  onChange={(e) => setNewTracker({ ...newTracker, keywords: e.target.value })}
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="competitors">Competitors (comma-separated)</Label>
                <Input
                  id="competitors"
                  placeholder="competitor1.com, competitor2.com"
                  value={newTracker.competitors}
                  onChange={(e) => setNewTracker({ ...newTracker, competitors: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Update Frequency</Label>
                <Select
                  value={newTracker.updateFrequency}
                  onValueChange={(value) => setNewTracker({ ...newTracker, updateFrequency: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="real-time">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Alert Channels</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="email"
                      checked={newTracker.alerts.email}
                      onChange={(e) => setNewTracker({
                        ...newTracker,
                        alerts: { ...newTracker.alerts, email: e.target.checked }
                      })}
                    />
                    <Label htmlFor="email">Email Notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="sms"
                      checked={newTracker.alerts.sms}
                      onChange={(e) => setNewTracker({
                        ...newTracker,
                        alerts: { ...newTracker.alerts, sms: e.target.checked }
                      })}
                    />
                    <Label htmlFor="sms">SMS Alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="slack"
                      checked={newTracker.alerts.slack}
                      onChange={(e) => setNewTracker({
                        ...newTracker,
                        alerts: { ...newTracker.alerts, slack: e.target.checked }
                      })}
                    />
                    <Label htmlFor="slack">Slack Integration</Label>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCreateTracker}
                disabled={loading || !newTracker.domain || !newTracker.keywords}
                className="w-full"
              >
                {loading ? 'Creating...' : 'Deploy Rank Tracker'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}