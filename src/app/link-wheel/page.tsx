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
  Link, 
  Activity, 
  Globe, 
  TrendingUp, 
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
  Network,
  Layers,
  Shuffle,
  Crown,
  Eye,
  Trash2
} from 'lucide-react'

interface LinkWheelTier {
  tier1: number
  tier2: number
  tier3: number
  buffer: number
  total: number
}

interface LinkWheel {
  id: string
  name: string
  moneysite: string
  pattern: 'circular' | 'pyramid' | 'hybrid' | 'fortress'
  tiers: LinkWheelTier
  safetyProfile: {
    qualityScore: number
    penaltyRisk: 'low' | 'medium' | 'high'
    footprintDiversification: number
  }
  projectedImpact: {
    linkJuiceFlow: number
    rankingBoost: string
    trafficIncrease: string
    timeToImpact: string
  }
  status: 'deploying' | 'active' | 'paused' | 'maintenance'
}

interface SystemStatus {
  linkWheelTypes: any
  tiers: any
  safetyFeatures: any
  automationCapabilities: any
  pricingStructure: any
}

export default function LinkWheelPage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null)
  const [linkWheels, setLinkWheels] = useState<LinkWheel[]>([])
  const [loading, setLoading] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null)
  
  // Form state
  const [wheelName, setWheelName] = useState('')
  const [moneysite, setMoneysite] = useState('')
  const [targetKeywords, setTargetKeywords] = useState('')
  const [wheelType, setWheelType] = useState('hybrid')
  const [size, setSize] = useState('medium')
  const [authority, setAuthority] = useState('mixed')
  const [safetyLevel, setSafetyLevel] = useState('moderate')
  const [linkVelocity, setLinkVelocity] = useState('medium')
  const [contentThemes, setContentThemes] = useState<string[]>(['technology', 'business', 'marketing'])

  useEffect(() => {
    fetchSystemStatus()
  }, [])

  const fetchSystemStatus = async () => {
    try {
      const response = await fetch('/api/link-wheel')
      const data = await response.json()
      setSystemStatus(data.system)
    } catch (error) {
      console.error('Failed to fetch system status:', error)
    }
  }

  const deployLinkWheel = async () => {
    if (!wheelName || !moneysite || !targetKeywords) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)
    setDeploymentStatus('Initializing link wheel construction...')
    
    try {
      const keywords = targetKeywords.split(',').map(k => k.trim())
      
      const options: any = {
        safetyLevel,
        linkVelocity,
        contentThemes
      }

      if (wheelType === 'circular') {
        options.size = size
      } else if (wheelType === 'pyramid') {
        options.authority = authority
      }
      
      const response = await fetch('/api/link-wheel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          wheelName,
          moneysite,
          targetKeywords: keywords,
          wheelType,
          options
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setDeploymentStatus('Link wheel deployment initiated successfully!')
        setLinkWheels(prev => [...prev, {
          id: result.wheel.id,
          name: result.wheel.name,
          moneysite: result.wheel.moneysite,
          pattern: result.wheel.pattern,
          tiers: result.wheel.tiers,
          safetyProfile: result.wheel.safetyProfile,
          projectedImpact: result.projections,
          status: 'deploying'
        }])
        
        // Reset form
        setWheelName('')
        setMoneysite('')
        setTargetKeywords('')
        
        // Refresh system status
        fetchSystemStatus()
      } else {
        setDeploymentStatus(`Deployment failed: ${result.error}`)
      }
    } catch (error) {
      setDeploymentStatus(`Deployment error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const exportWheelData = async (wheelId: string, format: string) => {
    try {
      const response = await fetch(`/api/link-wheel?wheelId=${wheelId}&format=${format}`)
      
      if (format === 'json' || format === 'report') {
        const data = await response.json()
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `link-wheel-${wheelId}.${format === 'report' ? 'report.json' : 'json'}`
        a.click()
      } else {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `link-wheel-${wheelId}.csv`
        a.click()
      }
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'text-green-600'
      case 'deploying': return 'text-blue-600'
      case 'paused': return 'text-yellow-600'
      case 'maintenance': return 'text-orange-600'
      default: return 'text-gray-600'
    }
  }

  const getPatternIcon = (pattern: string) => {
    switch (pattern) {
      case 'circular': return <Shuffle className="h-4 w-4" />
      case 'pyramid': return <Layers className="h-4 w-4" />
      case 'fortress': return <Shield className="h-4 w-4" />
      case 'hybrid': return <Network className="h-4 w-4" />
      default: return <Network className="h-4 w-4" />
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600'
      case 'medium': return 'text-yellow-600'
      case 'high': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Link className="h-12 w-12 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Multi-Tier Link Wheel Construction</h1>
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Advanced Link Juice Distribution System - Build Powerful Link Wheels for Maximum SEO Impact
          </p>
        </div>

        {/* System Status */}
        {systemStatus && (
          <Card className="bg-gray-800/50 border-purple-500/30">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Activity className="h-6 w-6 text-green-400" />
                <CardTitle className="text-white">Link Wheel System Status</CardTitle>
              </div>
              <CardDescription className="text-purple-200">
                Multi-tier link construction with advanced safety protocols
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Link Wheel Types</span>
                  </div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-gray-400">
                    Circular, Pyramid, Hybrid, Fortress
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Crown className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Authority Tiers</span>
                  </div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-gray-400">
                    T1, T2, T3, Buffer tiers
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Safety Features</span>
                  </div>
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-sm text-gray-400">
                    Advanced protection protocols
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Automation Level</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-sm text-gray-400">
                    Fully automated deployment
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Tier Distribution</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-purple-900 text-purple-300">Tier 1</Badge>
                        <span className="text-gray-300">Premium Authority</span>
                      </div>
                      <div className="text-white font-medium">DA 40+ Sites</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-blue-900 text-blue-300">Tier 2</Badge>
                        <span className="text-gray-300">Quality Authority</span>
                      </div>
                      <div className="text-white font-medium">DA 25-40 Sites</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-900 text-green-300">Tier 3</Badge>
                        <span className="text-gray-300">Mid Authority</span>
                      </div>
                      <div className="text-white font-medium">DA 15-25 Sites</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-gray-700 text-gray-300">Buffer</Badge>
                        <span className="text-gray-300">Volume Buffer</span>
                      </div>
                      <div className="text-white font-medium">DA 10-15 Sites</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Safety Protocols</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Footprint Diversification</span>
                        <span className="text-white">95%</span>
                      </div>
                      <Progress value={95} className="bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Hosting Diversification</span>
                        <span className="text-white">88%</span>
                      </div>
                      <Progress value={88} className="bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Content Uniqueness</span>
                        <span className="text-white">92%</span>
                      </div>
                      <Progress value={92} className="bg-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="deploy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
            <TabsTrigger value="deploy" className="text-white">Deploy Link Wheel</TabsTrigger>
            <TabsTrigger value="manage" className="text-white">Manage Wheels</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
          </TabsList>
          
          {/* Deploy Link Wheel Tab */}
          <TabsContent value="deploy" className="space-y-6">
            <Card className="bg-gray-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Target className="h-6 w-6 text-purple-400" />
                  <span>Deploy Multi-Tier Link Wheel</span>
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Construct advanced link wheels with intelligent tier distribution and safety protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="wheelName" className="text-white">Link Wheel Name *</Label>
                      <Input
                        id="wheelName"
                        value={wheelName}
                        onChange={(e) => setWheelName(e.target.value)}
                        placeholder="e.g., Enterprise Authority Wheel"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="moneysite" className="text-white">Money Site URL *</Label>
                      <Input
                        id="moneysite"
                        value={moneysite}
                        onChange={(e) => setMoneysite(e.target.value)}
                        placeholder="https://yourdomain.com"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="keywords" className="text-white">Target Keywords *</Label>
                      <Textarea
                        id="keywords"
                        value={targetKeywords}
                        onChange={(e) => setTargetKeywords(e.target.value)}
                        placeholder="business automation, productivity software, enterprise solutions"
                        className="bg-gray-700 border-gray-600 text-white"
                        rows={3}
                      />
                      <p className="text-sm text-gray-400">Separate keywords with commas</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="wheelType" className="text-white">Link Wheel Pattern</Label>
                      <Select value={wheelType} onValueChange={setWheelType}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="circular">Circular (Balanced Distribution)</SelectItem>
                          <SelectItem value="pyramid">Pyramid (Maximum Authority)</SelectItem>
                          <SelectItem value="hybrid">Hybrid (Optimal Performance)</SelectItem>
                          <SelectItem value="fortress">Fortress (Maximum Protection)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {wheelType === 'circular' && (
                      <div className="space-y-2">
                        <Label htmlFor="size" className="text-white">Wheel Size</Label>
                        <Select value={size} onValueChange={setSize}>
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="small">Small (60 sites)</SelectItem>
                            <SelectItem value="medium">Medium (111 sites)</SelectItem>
                            <SelectItem value="large">Large (176 sites)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    {wheelType === 'pyramid' && (
                      <div className="space-y-2">
                        <Label htmlFor="authority" className="text-white">Authority Focus</Label>
                        <Select value={authority} onValueChange={setAuthority}>
                          <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-700 border-gray-600">
                            <SelectItem value="high">High Authority (Conservative)</SelectItem>
                            <SelectItem value="medium">Medium Authority (Balanced)</SelectItem>
                            <SelectItem value="mixed">Mixed Authority (Volume)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="safetyLevel" className="text-white">Safety Level</Label>
                      <Select value={safetyLevel} onValueChange={setSafetyLevel}>
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
                      <Label htmlFor="linkVelocity" className="text-white">Link Velocity</Label>
                      <Select value={linkVelocity} onValueChange={setLinkVelocity}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="slow">Slow (Natural)</SelectItem>
                          <SelectItem value="medium">Medium (Optimal)</SelectItem>
                          <SelectItem value="fast">Fast (Aggressive)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white">Content Themes</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {['technology', 'business', 'marketing', 'finance', 'health', 'education'].map(theme => (
                          <div key={theme} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={theme}
                              checked={contentThemes.includes(theme)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setContentThemes([...contentThemes, theme])
                                } else {
                                  setContentThemes(contentThemes.filter(t => t !== theme))
                                }
                              }}
                              className="rounded border-gray-600"
                            />
                            <label htmlFor={theme} className="text-gray-300 capitalize">{theme}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    * Estimated deployment time: 7-14 days
                  </div>
                  <Button
                    onClick={deployLinkWheel}
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                  >
                    {loading ? (
                      <>
                        <Settings className="h-4 w-4 mr-2 animate-spin" />
                        Deploying...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Deploy Link Wheel
                      </>
                    )}
                  </Button>
                </div>
                
                {deploymentStatus && (
                  <Alert className="border-purple-500/30 bg-purple-900/20">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle className="text-white">Deployment Status</AlertTitle>
                    <AlertDescription className="text-purple-200">
                      {deploymentStatus}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Manage Link Wheels Tab */}
          <TabsContent value="manage" className="space-y-6">
            {linkWheels.length === 0 ? (
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="text-center py-12">
                  <Link className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Link Wheels Deployed</h3>
                  <p className="text-gray-400 mb-4">Deploy your first link wheel to start dominating search rankings</p>
                  <Button
                    onClick={() => document.querySelector('[value="deploy"]')?.click()}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Deploy First Link Wheel
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {linkWheels.map((wheel) => (
                  <Card key={wheel.id} className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white flex items-center space-x-2">
                          {getPatternIcon(wheel.pattern)}
                          <span>{wheel.name}</span>
                        </CardTitle>
                        <Badge variant="secondary" className={`${getStatusColor(wheel.status)} bg-gray-700`}>
                          {wheel.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-purple-200">
                        {wheel.pattern} pattern • {wheel.tiers.total} total sites
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-white">{wheel.projectedImpact.linkJuiceFlow}</div>
                          <div className="text-sm text-gray-400">Link Juice Flow</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{wheel.safetyProfile.qualityScore}/100</div>
                          <div className="text-sm text-gray-400">Safety Score</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Penalty Risk</span>
                          <span className={getRiskColor(wheel.safetyProfile.penaltyRisk)}>
                            {wheel.safetyProfile.penaltyRisk}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Footprint Diversification</span>
                          <span className="text-white">{wheel.safetyProfile.footprintDiversification}%</span>
                        </div>
                        <Progress 
                          value={wheel.safetyProfile.footprintDiversification} 
                          className="bg-gray-700" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Tier Distribution:</div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="text-center">
                            <div className="text-lg font-bold text-purple-400">{wheel.tiers.tier1}</div>
                            <div className="text-xs text-gray-400">T1</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-400">{wheel.tiers.tier2}</div>
                            <div className="text-xs text-gray-400">T2</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{wheel.tiers.tier3}</div>
                            <div className="text-xs text-gray-400">T3</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-gray-400">{wheel.tiers.buffer}</div>
                            <div className="text-xs text-gray-400">Buffer</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Money Site:</div>
                        <div className="text-sm text-white break-all">{wheel.moneysite}</div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">Projected Impact:</div>
                        <div className="text-sm text-white">
                          {wheel.projectedImpact.rankingBoost} • {wheel.projectedImpact.trafficIncrease} • {wheel.projectedImpact.timeToImpact}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-purple-300 border-purple-500"
                        >
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                        <Button
                          onClick={() => exportWheelData(wheel.id, 'csv')}
                          size="sm"
                          variant="outline"
                          className="text-purple-300 border-purple-500"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Export
                        </Button>
                        <Button
                          onClick={() => exportWheelData(wheel.id, 'report')}
                          size="sm"
                          variant="outline"
                          className="text-purple-300 border-purple-500"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Report
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
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Active Wheels</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">{linkWheels.length}</div>
                  <div className="text-sm text-purple-400 mt-1">+{linkWheels.length} this month</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Total Sites</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {linkWheels.reduce((sum, w) => sum + w.tiers.total, 0)}
                  </div>
                  <div className="text-sm text-blue-400 mt-1">Across all tiers</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Link Juice Flow</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {linkWheels.reduce((sum, w) => sum + w.projectedImpact.linkJuiceFlow, 0)}
                  </div>
                  <div className="text-sm text-yellow-400 mt-1">Combined power</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Avg Safety Score</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {linkWheels.length > 0 
                      ? Math.round(linkWheels.reduce((sum, w) => sum + w.safetyProfile.qualityScore, 0) / linkWheels.length)
                      : 0
                    }/100
                  </div>
                  <div className="text-sm text-green-400 mt-1">Quality metric</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Link Wheel Performance</CardTitle>
                <CardDescription className="text-purple-200">
                  Authority distribution and safety metrics across all deployed wheels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Performance analytics will appear here after deployment</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}