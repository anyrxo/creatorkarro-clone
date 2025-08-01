'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { 
  Target, 
  Activity, 
  Globe, 
  Link, 
  TrendingUp, 
  Eye, 
  Settings,
  Play,
  Pause,
  Download,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Network,
  Zap
} from 'lucide-react'

interface Campaign {
  id: string
  name: string
  strategy: 'aggressive' | 'social-authority' | 'educational'
  status: 'active' | 'paused' | 'completed' | 'draft'
  platforms: string[]
  targetKeywords: string[]
  deployed: Array<{
    platform: string
    title: string
    url: string
    targetKeyword: string
    backlinks: Array<{ url: string; anchor: string }>
  }>
  projectedMetrics: {
    totalBacklinks: number
    averageAuthority: number
    estimatedTraffic: number
    indexationRate: number
  }
  createdAt: string
  lastUpdated: string
}

interface ParasiteCampaignDashboardProps {
  campaigns?: Campaign[]
  onDeployCampaign?: (campaignData: any) => void
  onPauseCampaign?: (campaignId: string) => void
  onResumeCampaign?: (campaignId: string) => void
}

export default function ParasiteCampaignDashboard({ 
  campaigns = [],
  onDeployCampaign,
  onPauseCampaign,
  onResumeCampaign
}: ParasiteCampaignDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(false)
  const [newCampaign, setNewCampaign] = useState<{
    name: string
    strategy: 'aggressive' | 'social-authority' | 'educational'
    keywords: string
    platforms: string[]
    budget: number
  }>({
    name: '',
    strategy: 'aggressive',
    keywords: '',
    platforms: [],
    budget: 1000
  })

  // Calculate aggregate metrics
  const totalCampaigns = campaigns.length
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length
  const totalContent = campaigns.reduce((sum, c) => sum + c.deployed.length, 0)
  const totalBacklinks = campaigns.reduce((sum, c) => sum + c.projectedMetrics.totalBacklinks, 0)
  const avgAuthority = campaigns.length > 0 
    ? Math.round(campaigns.reduce((sum, c) => sum + c.projectedMetrics.averageAuthority, 0) / campaigns.length)
    : 0

  const handleDeployCampaign = async () => {
    if (!newCampaign.name || !newCampaign.keywords) {
      alert('Please fill in campaign name and keywords')
      return
    }

    setLoading(true)
    try {
      const campaignData = {
        ...newCampaign,
        targetKeywords: newCampaign.keywords.split(',').map(k => k.trim())
      }
      
      if (onDeployCampaign) {
        await onDeployCampaign(campaignData)
      }
      
      // Reset form
      setNewCampaign({
        name: '',
        strategy: 'aggressive',
        keywords: '',
        platforms: [],
        budget: 1000
      })
    } catch (error) {
      console.error('Campaign deployment error:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStrategyColor = (strategy: string) => {
    switch (strategy) {
      case 'aggressive': return 'bg-red-600'
      case 'social-authority': return 'bg-blue-600'
      case 'educational': return 'bg-green-600'
      default: return 'bg-gray-600'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600'
      case 'paused': return 'text-yellow-600'
      case 'completed': return 'text-blue-600'
      case 'draft': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="bg-gray-800/50 border-red-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Network className="h-4 w-4 text-red-400" />
              <span className="text-sm text-gray-300">Campaigns</span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">{totalCampaigns}</div>
            <div className="text-xs text-red-400">{activeCampaigns} active</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-blue-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">Content</span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">{totalContent}</div>
            <div className="text-xs text-blue-400">Deployed</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-green-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Link className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-300">Backlinks</span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">{totalBacklinks}</div>
            <div className="text-xs text-green-400">Generated</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-purple-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-purple-400" />
              <span className="text-sm text-gray-300">Authority</span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">{avgAuthority}</div>
            <div className="text-xs text-purple-400">Average</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-yellow-500/30">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-gray-300">Traffic</span>
            </div>
            <div className="text-2xl font-bold text-white mt-2">
              {Math.round(campaigns.reduce((sum, c) => sum + c.projectedMetrics.estimatedTraffic, 0) / 1000)}K
            </div>
            <div className="text-xs text-yellow-400">Monthly</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 bg-gray-800/50">
          <TabsTrigger value="overview" className="text-white">Overview</TabsTrigger>
          <TabsTrigger value="campaigns" className="text-white">Campaigns</TabsTrigger>
          <TabsTrigger value="deploy" className="text-white">Deploy New</TabsTrigger>
          <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-gray-800/50 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Activity className="h-6 w-6 text-red-400" />
                <span>Campaign Performance</span>
              </CardTitle>
              <CardDescription className="text-red-200">
                Real-time metrics across all active parasite SEO campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.slice(0, 3).map((campaign, index) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${getStrategyColor(campaign.strategy)}`}></div>
                      <div>
                        <h4 className="text-white font-medium">{campaign.name}</h4>
                        <p className="text-sm text-gray-400">
                          {campaign.deployed.length} content • {campaign.platforms.length} platforms
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">
                        {campaign.projectedMetrics.totalBacklinks} links
                      </div>
                      <div className="text-sm text-gray-400">
                        {campaign.projectedMetrics.averageAuthority}/100 authority
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="bg-gray-800/50 border-red-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${getStrategyColor(campaign.strategy)}`}></div>
                      <CardTitle className="text-white">{campaign.name}</CardTitle>
                      <Badge variant="outline" className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      {campaign.status === 'active' ? (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onPauseCampaign?.(campaign.id)}
                          className="text-yellow-300 border-yellow-500"
                        >
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => onResumeCampaign?.(campaign.id)}
                          className="text-green-300 border-green-500"
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Resume
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-blue-300 border-blue-500"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Export
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="text-red-200">
                    {campaign.deployed.length} content pieces • {campaign.targetKeywords.length} keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {campaign.projectedMetrics.totalBacklinks}
                      </div>
                      <div className="text-sm text-gray-400">Backlinks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        {campaign.projectedMetrics.estimatedTraffic.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">Traffic/Month</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        {campaign.projectedMetrics.averageAuthority}/100
                      </div>
                      <div className="text-sm text-gray-400">Authority</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {campaign.projectedMetrics.indexationRate}%
                      </div>
                      <div className="text-sm text-gray-400">Indexed</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Campaign Progress</span>
                      <span className="text-white">
                        {Math.round((campaign.deployed.length / (campaign.targetKeywords.length * 3)) * 100)}%
                      </span>
                    </div>
                    <Progress 
                      value={Math.round((campaign.deployed.length / (campaign.targetKeywords.length * 3)) * 100)} 
                      className="bg-gray-700" 
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deploy" className="space-y-6">
          <Card className="bg-gray-800/50 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Target className="h-6 w-6 text-red-400" />
                <span>Deploy New Parasite Campaign</span>
              </CardTitle>
              <CardDescription className="text-red-200">
                Launch strategic content across high-authority platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaignName" className="text-white">Campaign Name *</Label>
                    <Input
                      id="campaignName"
                      value={newCampaign.name}
                      onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                      placeholder="e.g., Tech Authority Domination"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="strategy" className="text-white">Campaign Strategy</Label>
                    <Select value={newCampaign.strategy} onValueChange={(value: any) => setNewCampaign({ ...newCampaign, strategy: value })}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="aggressive">Aggressive Tech Domination</SelectItem>
                        <SelectItem value="social-authority">Social Authority Building</SelectItem>
                        <SelectItem value="educational">Educational Content Strategy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="keywords" className="text-white">Target Keywords *</Label>
                    <Textarea
                      id="keywords"
                      value={newCampaign.keywords}
                      onChange={(e) => setNewCampaign({ ...newCampaign, keywords: e.target.value })}
                      placeholder="ai automation, instagram growth, digital marketing"
                      className="bg-gray-700 border-gray-600 text-white"
                      rows={3}
                    />
                    <p className="text-sm text-gray-400">Separate keywords with commas</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Strategy Features</h4>
                    <div className="space-y-2 text-sm text-gray-300">
                      {newCampaign.strategy === 'aggressive' && (
                        <>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>High-authority tech platforms</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Maximum link velocity</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Developer audience targeting</span>
                          </div>
                        </>
                      )}
                      {newCampaign.strategy === 'social-authority' && (
                        <>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Professional networks</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Thought leadership content</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Business audience focus</span>
                          </div>
                        </>
                      )}
                      {newCampaign.strategy === 'educational' && (
                        <>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Learning platforms</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Tutorial content focus</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>Resource sharing approach</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  * Deployment time: 24-48 hours
                </div>
                <Button
                  onClick={handleDeployCampaign}
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-700 text-white px-8"
                >
                  {loading ? (
                    <>
                      <Settings className="h-4 w-4 mr-2 animate-spin" />
                      Deploying...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Deploy Campaign
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Platform Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['Medium', 'LinkedIn', 'Reddit', 'GitHub'].map((platform, index) => {
                    const count = Math.floor(Math.random() * 20) + 5
                    const percentage = Math.floor(Math.random() * 30) + 10
                    return (
                      <div key={platform}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">{platform}</span>
                          <span className="text-white">{count} pieces</span>
                        </div>
                        <Progress value={percentage} className="bg-gray-700" />
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Success Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Indexation Rate</span>
                    <span className="text-green-400 font-semibold">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Link Survival Rate</span>
                    <span className="text-blue-400 font-semibold">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Traffic Growth</span>
                    <span className="text-purple-400 font-semibold">+245%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Authority Increase</span>
                    <span className="text-yellow-400 font-semibold">+12 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}