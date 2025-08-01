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
  MousePointer, 
  Activity, 
  Globe, 
  TrendingUp, 
  Eye, 
  Target, 
  Shield, 
  Zap,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Settings,
  Play,
  Pause,
  Download,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react'

interface CTRBot {
  id: string
  type: 'residential' | 'datacenter' | 'mobile' | 'premium'
  location: {
    country: string
    city: string
  }
  status: 'active' | 'inactive' | 'cooldown' | 'maintenance'
  metrics: {
    totalClicks: number
    successRate: number
    detectionRate: number
  }
}

interface CTRCampaign {
  id: string
  name: string
  targetUrl: string
  keywords: string[]
  bots: number
  schedule: {
    dailyClicks: number
  }
  clickBehavior: {
    targetCTR: number
    organicCTR: number
  }
  status: 'draft' | 'active' | 'paused' | 'completed'
}

interface NetworkStatus {
  botNetwork: {
    totalBots: number
    activeBots: number
    cooldownBots: number
    maintenanceBots: number
    geographic: {
      countries: string[]
      regions: number
      timezones: number
    }
    botTypes: {
      residential: number
      datacenter: number
      mobile: number
      premium: number
    }
    capabilities: {
      dailyClickCapacity: number
      simultaneousCampaigns: number
      keywordTracking: number
    }
  }
  performance: {
    averageSuccessRate: number
    averageDetectionRate: number
    totalClicksToday: number
    activeCampaigns: number
    averageCTRImprovement: number
    uptime: number
  }
  safetyMetrics: {
    proxyDiversification: number
    userAgentRotation: number
    behaviorRandomization: number
    detectionAvoidance: number
    complianceScore: number
  }
}

export default function CTRManipulationPage() {
  const [networkStatus, setNetworkStatus] = useState<NetworkStatus | null>(null)
  const [campaigns, setCampaigns] = useState<CTRCampaign[]>([])
  const [loading, setLoading] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null)
  
  // Form state
  const [campaignName, setCampaignName] = useState('')
  const [targetUrl, setTargetUrl] = useState('')
  const [targetKeywords, setTargetKeywords] = useState('')
  const [campaignType, setCampaignType] = useState('custom')
  const [targetCTR, setTargetCTR] = useState(0.08)
  const [duration, setDuration] = useState(30)
  const [intensity, setIntensity] = useState('moderate')
  const [pattern, setPattern] = useState('natural-growth')
  const [searchEngines, setSearchEngines] = useState<string[]>(['google', 'bing'])
  const [countries, setCountries] = useState<string[]>(['US', 'CA', 'GB', 'AU'])

  useEffect(() => {
    fetchNetworkStatus()
  }, [])

  const fetchNetworkStatus = async () => {
    try {
      const response = await fetch('/api/ctr')
      const data = await response.json()
      setNetworkStatus(data.network)
    } catch (error) {
      console.error('Failed to fetch network status:', error)
    }
  }

  const deployCTRCampaign = async () => {
    if (!campaignName || !targetUrl || !targetKeywords) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)
    setDeploymentStatus('Initializing CTR manipulation network...')
    
    try {
      const keywords = targetKeywords.split(',').map(k => k.trim())
      
      const response = await fetch('/api/ctr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          campaignName,
          targetUrl,
          targetKeywords: keywords,
          campaignType,
          options: {
            targetCTR,
            duration,
            intensity,
            pattern,
            searchEngines,
            geographic: { countries, languages: ['en'] },
            dailyBudget: 500
          }
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setDeploymentStatus('CTR manipulation campaign deployed successfully!')
        setCampaigns(prev => [...prev, result.campaign])
        
        // Reset form
        setCampaignName('')
        setTargetUrl('')
        setTargetKeywords('')
        
        // Refresh network status
        fetchNetworkStatus()
      } else {
        setDeploymentStatus(`Deployment failed: ${result.error}`)
      }
    } catch (error) {
      setDeploymentStatus(`Deployment error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const exportCampaignData = async (campaignId: string, format: string) => {
    try {
      const response = await fetch(`/api/ctr?campaignId=${campaignId}&format=${format}`)
      
      if (format === 'json') {
        const data = await response.json()
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `ctr-campaign-${campaignId}.json`
        a.click()
      } else {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `ctr-campaign-${campaignId}.${format}`
        a.click()
      }
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-green-600'
      case 'paused': return 'text-yellow-600'
      case 'cooldown': return 'text-orange-600'
      case 'maintenance': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getBotTypeIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="h-4 w-4" />
      case 'desktop': return <Monitor className="h-4 w-4" />
      case 'tablet': return <Tablet className="h-4 w-4" />
      default: return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <MousePointer className="h-12 w-12 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">CTR Manipulation Network</h1>
          </div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Advanced Click-Through Rate Enhancement System - Boost Rankings with Intelligent Bot Networks
          </p>
        </div>

        {/* Network Status */}
        {networkStatus && (
          <Card className="bg-gray-800/50 border-blue-500/30">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Activity className="h-6 w-6 text-green-400" />
                <CardTitle className="text-white">Bot Network Status</CardTitle>
              </div>
              <CardDescription className="text-blue-200">
                Distributed click network with advanced anti-detection capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Bot Network</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{networkStatus.botNetwork.totalBots}</div>
                  <div className="text-sm text-gray-400">
                    {networkStatus.botNetwork.activeBots} active, {networkStatus.botNetwork.cooldownBots} cooldown
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Geographic Coverage</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{networkStatus.botNetwork.geographic.countries.length}</div>
                  <div className="text-sm text-gray-400">
                    countries, {networkStatus.botNetwork.geographic.timezones} timezones
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MousePointer className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Daily Capacity</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{networkStatus.botNetwork.capabilities.dailyClickCapacity.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">
                    {networkStatus.performance.totalClicksToday.toLocaleString()} clicks today
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Success Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">{(networkStatus.performance.averageSuccessRate * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-400">
                    {(networkStatus.performance.averageDetectionRate * 100).toFixed(2)}% detection rate
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Bot Distribution</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-900 text-blue-300">Residential</Badge>
                        <span className="text-gray-300">{networkStatus.botNetwork.botTypes.residential} bots</span>
                      </div>
                      <div className="text-white font-medium">Premium IPs</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-900 text-green-300">Mobile</Badge>
                        <span className="text-gray-300">{networkStatus.botNetwork.botTypes.mobile} bots</span>
                      </div>
                      <div className="text-white font-medium">Mobile Devices</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-purple-900 text-purple-300">Datacenter</Badge>
                        <span className="text-gray-300">{networkStatus.botNetwork.botTypes.datacenter} bots</span>
                      </div>
                      <div className="text-white font-medium">High Volume</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Safety Metrics</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Proxy Diversification</span>
                        <span className="text-white">{(networkStatus.safetyMetrics.proxyDiversification * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={networkStatus.safetyMetrics.proxyDiversification * 100} className="bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Detection Avoidance</span>
                        <span className="text-white">{(networkStatus.safetyMetrics.detectionAvoidance * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={networkStatus.safetyMetrics.detectionAvoidance * 100} className="bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Behavior Randomization</span>
                        <span className="text-white">{(networkStatus.safetyMetrics.behaviorRandomization * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={networkStatus.safetyMetrics.behaviorRandomization * 100} className="bg-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="deploy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
            <TabsTrigger value="deploy" className="text-white">Deploy Campaign</TabsTrigger>
            <TabsTrigger value="manage" className="text-white">Manage Campaigns</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
          </TabsList>
          
          {/* Deploy Campaign Tab */}
          <TabsContent value="deploy" className="space-y-6">
            <Card className="bg-gray-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Target className="h-6 w-6 text-blue-400" />
                  <span>Deploy CTR Manipulation Campaign</span>
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Launch intelligent click-through rate enhancement with distributed bot networks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="campaignName" className="text-white">Campaign Name *</Label>
                      <Input
                        id="campaignName"
                        value={campaignName}
                        onChange={(e) => setCampaignName(e.target.value)}
                        placeholder="e.g., Product Launch CTR Boost"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="targetUrl" className="text-white">Target URL *</Label>
                      <Input
                        id="targetUrl"
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        placeholder="https://yourdomain.com/target-page"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="keywords" className="text-white">Target Keywords *</Label>
                      <Textarea
                        id="keywords"
                        value={targetKeywords}
                        onChange={(e) => setTargetKeywords(e.target.value)}
                        placeholder="business automation, productivity tools, workflow software"
                        className="bg-gray-700 border-gray-600 text-white"
                        rows={3}
                      />
                      <p className="text-sm text-gray-400">Separate keywords with commas</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="campaignType" className="text-white">Campaign Type</Label>
                      <Select value={campaignType} onValueChange={setCampaignType}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="quick">Quick CTR Boost (30 days)</SelectItem>
                          <SelectItem value="aggressive">Aggressive Campaign (21 days)</SelectItem>
                          <SelectItem value="custom">Custom Configuration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {campaignType === 'custom' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="targetCTR" className="text-white">Target CTR</Label>
                          <Input
                            id="targetCTR"
                            type="number"
                            step="0.01"
                            value={targetCTR}
                            onChange={(e) => setTargetCTR(parseFloat(e.target.value))}
                            min="0.01"
                            max="0.30"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                          <p className="text-sm text-gray-400">Current: {(targetCTR * 100).toFixed(2)}%</p>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="duration" className="text-white">Duration (days)</Label>
                          <Input
                            id="duration"
                            type="number"
                            value={duration}
                            onChange={(e) => setDuration(parseInt(e.target.value))}
                            min="7"
                            max="90"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="intensity" className="text-white">Campaign Intensity</Label>
                          <Select value={intensity} onValueChange={setIntensity}>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="conservative">Conservative (Safest)</SelectItem>
                              <SelectItem value="moderate">Moderate (Balanced)</SelectItem>
                              <SelectItem value="aggressive">Aggressive (Fastest)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="pattern" className="text-white">Click Pattern</Label>
                          <Select value={pattern} onValueChange={setPattern}>
                            <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="natural-growth">Natural Growth</SelectItem>
                              <SelectItem value="viral-spike">Viral Spike</SelectItem>
                              <SelectItem value="commercial-intent">Commercial Intent</SelectItem>
                              <SelectItem value="local-business">Local Business</SelectItem>
                              <SelectItem value="authority-building">Authority Building</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-2">
                      <Label className="text-white">Geographic Targeting</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {['US', 'CA', 'GB', 'AU', 'DE', 'FR'].map(country => (
                          <div key={country} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={country}
                              checked={countries.includes(country)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setCountries([...countries, country])
                                } else {
                                  setCountries(countries.filter(c => c !== country))
                                }
                              }}
                              className="rounded border-gray-600"
                            />
                            <label htmlFor={country} className="text-gray-300">{country}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white">Search Engines</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {['google', 'bing', 'yahoo', 'duckduckgo'].map(engine => (
                          <div key={engine} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={engine}
                              checked={searchEngines.includes(engine)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSearchEngines([...searchEngines, engine])
                                } else {
                                  setSearchEngines(searchEngines.filter(se => se !== engine))
                                }
                              }}
                              className="rounded border-gray-600"
                            />
                            <label htmlFor={engine} className="text-gray-300 capitalize">{engine}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    * Estimated setup time: 1-2 hours
                  </div>
                  <Button
                    onClick={deployCTRCampaign}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    {loading ? (
                      <>
                        <Settings className="h-4 w-4 mr-2 animate-spin" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Deploy CTR Campaign
                      </>
                    )}
                  </Button>
                </div>
                
                {deploymentStatus && (
                  <Alert className="border-blue-500/30 bg-blue-900/20">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="text-white">Deployment Status</AlertTitle>
                    <AlertDescription className="text-blue-200">
                      {deploymentStatus}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Manage Campaigns Tab */}
          <TabsContent value="manage" className="space-y-6">
            {campaigns.length === 0 ? (
              <Card className="bg-gray-800/50 border-blue-500/30">
                <CardContent className="text-center py-12">
                  <MousePointer className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Campaigns Active</h3>
                  <p className="text-gray-400 mb-4">Deploy your first CTR manipulation campaign to start boosting rankings</p>
                  <Button
                    onClick={() => document.querySelector('[value="deploy"]')?.click()}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Deploy First Campaign
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id} className="bg-gray-800/50 border-blue-500/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{campaign.name}</CardTitle>
                        <Badge variant="secondary" className="bg-green-900 text-green-300">
                          {campaign.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-blue-200">
                        {campaign.bots} bots • {campaign.keywords.length} keywords
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-white">{campaign.schedule.dailyClicks}</div>
                          <div className="text-sm text-gray-400">Daily Clicks</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{(campaign.clickBehavior.targetCTR * 100).toFixed(2)}%</div>
                          <div className="text-sm text-gray-400">Target CTR</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">CTR Improvement</span>
                          <span className="text-white">
                            +{((campaign.clickBehavior.targetCTR - campaign.clickBehavior.organicCTR) * 100).toFixed(2)}%
                          </span>
                        </div>
                        <Progress 
                          value={(campaign.clickBehavior.targetCTR / 0.30) * 100} 
                          className="bg-gray-700" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Target URL:</div>
                        <div className="text-sm text-white break-all">{campaign.targetUrl}</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Keywords:</div>
                        <div className="flex flex-wrap gap-1">
                          {campaign.keywords.slice(0, 3).map((keyword, idx) => (
                            <Badge key={idx} variant="outline" className="text-blue-300 border-blue-500">
                              {keyword}
                            </Badge>
                          ))}
                          {campaign.keywords.length > 3 && (
                            <Badge variant="outline" className="text-gray-400 border-gray-500">
                              +{campaign.keywords.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-300 border-blue-500"
                        >
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                        <Button
                          onClick={() => exportCampaignData(campaign.id, 'json')}
                          size="sm"
                          variant="outline"
                          className="text-blue-300 border-blue-500"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Export
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-300 border-blue-500"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-800/50 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Active Campaigns</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">{campaigns.length}</div>
                  <div className="text-sm text-green-400 mt-1">+{campaigns.length} this month</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <MousePointer className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Total Clicks</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {campaigns.reduce((sum, c) => sum + c.schedule.dailyClicks, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-blue-400 mt-1">Daily capacity</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Avg CTR Boost</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {campaigns.length > 0 
                      ? (campaigns.reduce((sum, c) => sum + (c.clickBehavior.targetCTR - c.clickBehavior.organicCTR), 0) / campaigns.length * 100).toFixed(2)
                      : '0.00'
                    }%
                  </div>
                  <div className="text-sm text-purple-400 mt-1">Above organic</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-blue-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Bot Network</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {campaigns.reduce((sum, c) => sum + c.bots, 0)}
                  </div>
                  <div className="text-sm text-yellow-400 mt-1">Bots deployed</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white">Campaign Performance</CardTitle>
                <CardDescription className="text-blue-200">
                  CTR improvement trends and ranking impact analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Campaign analytics will appear here after deployment</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}