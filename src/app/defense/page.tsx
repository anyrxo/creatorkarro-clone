'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  TrendingDown, 
  Eye, 
  Target, 
  Lock, 
  Zap,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Settings,
  Play,
  Pause,
  Download,
  CheckCircle,
  XCircle,
  FileX,
  Link,
  MessageSquare,
  Bug,
  RefreshCw,
  AlertOctagon,
  ShieldCheck,
  ShieldOff
} from 'lucide-react'

interface Threat {
  id: string
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  detectedAt: string
  source: string
  impact: {
    rankingDrop: number
    trafficLoss: number
    reputationDamage: number
  }
  status: 'detected' | 'analyzing' | 'mitigating' | 'resolved'
}

interface DefenseSystem {
  id: string
  domain: string
  protectionLevel: 'basic' | 'enhanced' | 'fortress' | 'military-grade'
  healthScore: number
  activeProtocols: number
  monitoringFrequency: string
  backlinkProfile: {
    total: number
    healthy: number
    suspicious: number
    toxic: number
    disavowed: number
  }
  threats?: Threat[]
}

interface SystemCapabilities {
  protectionLevels: any
  threatTypes: any
  defenseProtocols: any
  monitoringTools: any
}

export default function NegativeSEODefensePage() {
  const [systemCapabilities, setSystemCapabilities] = useState<SystemCapabilities | null>(null)
  const [defenseSystems, setDefenseSystems] = useState<DefenseSystem[]>([])
  const [loading, setLoading] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null)
  
  // Form state
  const [domain, setDomain] = useState('')
  const [protectionLevel, setProtectionLevel] = useState('enhanced')
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [slackAlerts, setSlackAlerts] = useState(true)
  const [dashboardAlerts, setDashboardAlerts] = useState(true)

  useEffect(() => {
    fetchSystemCapabilities()
  }, [])

  const fetchSystemCapabilities = async () => {
    try {
      const response = await fetch('/api/defense')
      const data = await response.json()
      setSystemCapabilities(data.capabilities)
    } catch (error) {
      console.error('Failed to fetch system capabilities:', error)
    }
  }

  const deployDefenseSystem = async () => {
    if (!domain) {
      alert('Please enter a domain')
      return
    }

    setLoading(true)
    setDeploymentStatus('Initializing defense system deployment...')
    
    try {
      const response = await fetch('/api/defense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain,
          protectionLevel,
          options: {
            alerts: {
              email: emailAlerts,
              sms: smsAlerts,
              slack: slackAlerts,
              dashboard: dashboardAlerts
            }
          }
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setDeploymentStatus('Defense system deployed successfully!')
        setDefenseSystems(prev => [...prev, {
          id: result.system.id,
          domain: result.system.domain,
          protectionLevel: result.system.protectionLevel,
          healthScore: result.system.healthScore,
          activeProtocols: result.system.activeProtocols,
          monitoringFrequency: result.system.monitoringFrequency,
          backlinkProfile: result.backlinkProfile,
          threats: result.threatAnalysis.detected > 0 ? [] : undefined
        }])
        
        // Reset form
        setDomain('')
      } else {
        setDeploymentStatus(`Deployment failed: ${result.error}`)
      }
    } catch (error) {
      setDeploymentStatus(`Deployment error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const mitigateThreat = async (systemId: string, threatId: string) => {
    try {
      const response = await fetch('/api/defense', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          systemId,
          threatId,
          action: 'mitigate'
        })
      })
      
      const result = await response.json()
      if (result.success) {
        // Update threat status in UI
        alert('Threat mitigation initiated successfully')
      }
    } catch (error) {
      console.error('Mitigation failed:', error)
    }
  }

  const downloadDisavowFile = async (systemId: string) => {
    try {
      const response = await fetch(`/api/defense?systemId=${systemId}&action=disavow`)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `disavow-${systemId}.txt`
      a.click()
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const generateReport = async (systemId: string) => {
    try {
      const response = await fetch(`/api/defense?systemId=${systemId}&action=report`)
      const data = await response.json()
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `defense-report-${systemId}.json`
      a.click()
    } catch (error) {
      console.error('Report generation failed:', error)
    }
  }

  const getProtectionColor = (level: string) => {
    switch (level) {
      case 'basic': return 'text-blue-600'
      case 'enhanced': return 'text-green-600'
      case 'fortress': return 'text-purple-600'
      case 'military-grade': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-900 text-green-300'
      case 'medium': return 'bg-yellow-900 text-yellow-300'
      case 'high': return 'bg-orange-900 text-orange-300'
      case 'critical': return 'bg-red-900 text-red-300'
      default: return 'bg-gray-700 text-gray-300'
    }
  }

  const getThreatIcon = (type: string) => {
    switch (type) {
      case 'toxic-backlinks': return <Link className="h-4 w-4" />
      case 'content-scraping': return <FileX className="h-4 w-4" />
      case 'fake-reviews': return <MessageSquare className="h-4 w-4" />
      case 'ddos': return <Bug className="h-4 w-4" />
      default: return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-12 w-12 text-red-400" />
            <h1 className="text-4xl font-bold text-white">Negative SEO Defense System</h1>
          </div>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            Enterprise-Grade Protection Against Malicious SEO Attacks and Ranking Sabotage
          </p>
        </div>

        {/* System Overview */}
        {systemCapabilities && (
          <Card className="bg-gray-800/50 border-red-500/30">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Activity className="h-6 w-6 text-green-400" />
                <CardTitle className="text-white">Defense System Overview</CardTitle>
              </div>
              <CardDescription className="text-red-200">
                Multi-layer protection against negative SEO attacks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-400" />
                    <span className="text-gray-300">Protection Levels</span>
                  </div>
                  <div className="text-2xl font-bold text-white">4</div>
                  <div className="text-sm text-gray-400">
                    Basic to Military-Grade
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Threat Types</span>
                  </div>
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-sm text-gray-400">
                    Monitored attack vectors
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Defense Protocols</span>
                  </div>
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-sm text-gray-400">
                    Active countermeasures
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Monitoring Tools</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">20+</div>
                  <div className="text-sm text-gray-400">
                    Integrated platforms
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Common Threats</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Link className="h-4 w-4 text-red-400" />
                        <span className="text-gray-300">Toxic Backlinks</span>
                      </div>
                      <Badge className="bg-red-900 text-red-300">Very High</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FileX className="h-4 w-4 text-orange-400" />
                        <span className="text-gray-300">Content Scraping</span>
                      </div>
                      <Badge className="bg-orange-900 text-orange-300">High</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-300">Fake Reviews</span>
                      </div>
                      <Badge className="bg-yellow-900 text-yellow-300">Medium</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Defense Effectiveness</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Threat Detection Rate</span>
                        <span className="text-white">95%</span>
                      </div>
                      <Progress value={95} className="bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Mitigation Success</span>
                        <span className="text-white">88%</span>
                      </div>
                      <Progress value={88} className="bg-gray-700" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Recovery Speed</span>
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
            <TabsTrigger value="deploy" className="text-white">Deploy Defense</TabsTrigger>
            <TabsTrigger value="monitor" className="text-white">Monitor Threats</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
          </TabsList>
          
          {/* Deploy Defense Tab */}
          <TabsContent value="deploy" className="space-y-6">
            <Card className="bg-gray-800/50 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <ShieldCheck className="h-6 w-6 text-red-400" />
                  <span>Deploy Negative SEO Defense</span>
                </CardTitle>
                <CardDescription className="text-red-200">
                  Protect your domain against malicious SEO attacks and ranking sabotage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="domain" className="text-white">Domain to Protect *</Label>
                      <Input
                        id="domain"
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="https://yourdomain.com"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="protectionLevel" className="text-white">Protection Level</Label>
                      <Select value={protectionLevel} onValueChange={setProtectionLevel}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Protection ($500/mo)</SelectItem>
                          <SelectItem value="enhanced">Enhanced Protection ($1,500/mo)</SelectItem>
                          <SelectItem value="fortress">Fortress Protection ($3,000/mo)</SelectItem>
                          <SelectItem value="military-grade">Military-Grade ($5,000/mo)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white">Alert Notifications</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="emailAlerts"
                            checked={emailAlerts}
                            onChange={(e) => setEmailAlerts(e.target.checked)}
                            className="rounded border-gray-600"
                          />
                          <label htmlFor="emailAlerts" className="text-gray-300">Email Alerts</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="smsAlerts"
                            checked={smsAlerts}
                            onChange={(e) => setSmsAlerts(e.target.checked)}
                            className="rounded border-gray-600"
                          />
                          <label htmlFor="smsAlerts" className="text-gray-300">SMS Alerts (Fortress+)</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="slackAlerts"
                            checked={slackAlerts}
                            onChange={(e) => setSlackAlerts(e.target.checked)}
                            className="rounded border-gray-600"
                          />
                          <label htmlFor="slackAlerts" className="text-gray-300">Slack Integration</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="dashboardAlerts"
                            checked={dashboardAlerts}
                            onChange={(e) => setDashboardAlerts(e.target.checked)}
                            className="rounded border-gray-600"
                          />
                          <label htmlFor="dashboardAlerts" className="text-gray-300">Dashboard Alerts</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700/50 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Protection Features</h4>
                      <div className="space-y-2 text-sm text-gray-300">
                        {protectionLevel === 'basic' && (
                          <>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Backlink monitoring</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Content protection</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Automated disavow</span>
                            </div>
                          </>
                        )}
                        {(protectionLevel === 'enhanced' || protectionLevel === 'fortress' || protectionLevel === 'military-grade') && (
                          <>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>All basic features</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Brand monitoring</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Security hardening</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>DMCA filing</span>
                            </div>
                          </>
                        )}
                        {(protectionLevel === 'fortress' || protectionLevel === 'military-grade') && (
                          <>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Review dispute system</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Toxic link removal</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>SMS alerts</span>
                            </div>
                          </>
                        )}
                        {protectionLevel === 'military-grade' && (
                          <>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Penalty recovery</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Reputation repair</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Dedicated team</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-red-900/20 rounded-lg">
                      <h4 className="text-white font-semibold mb-2">Monitoring Frequency</h4>
                      <div className="text-sm text-gray-300">
                        {protectionLevel === 'basic' && 'Weekly monitoring and reports'}
                        {protectionLevel === 'enhanced' && 'Daily monitoring with instant alerts'}
                        {protectionLevel === 'fortress' && 'Hourly monitoring with rapid response'}
                        {protectionLevel === 'military-grade' && 'Real-time 24/7 monitoring'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    * Setup time: 1-12 hours depending on protection level
                  </div>
                  <Button
                    onClick={deployDefenseSystem}
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
                        <Shield className="h-4 w-4 mr-2" />
                        Deploy Defense System
                      </>
                    )}
                  </Button>
                </div>
                
                {deploymentStatus && (
                  <Alert className="border-red-500/30 bg-red-900/20">
                    <AlertOctagon className="h-4 w-4" />
                    <AlertTitle className="text-white">Deployment Status</AlertTitle>
                    <AlertDescription className="text-red-200">
                      {deploymentStatus}
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Monitor Threats Tab */}
          <TabsContent value="monitor" className="space-y-6">
            {defenseSystems.length === 0 ? (
              <Card className="bg-gray-800/50 border-red-500/30">
                <CardContent className="text-center py-12">
                  <ShieldOff className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Defense Systems Active</h3>
                  <p className="text-gray-400 mb-4">Deploy a defense system to start protecting your domain</p>
                  <Button
                    onClick={() => document.querySelector('[value="deploy"]')?.click()}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Deploy First Defense System
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {defenseSystems.map((system) => (
                  <Card key={system.id} className="bg-gray-800/50 border-red-500/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{system.domain}</CardTitle>
                        <Badge className={getProtectionColor(system.protectionLevel)}>
                          {system.protectionLevel}
                        </Badge>
                      </div>
                      <CardDescription className="text-red-200">
                        Health Score: {system.healthScore}/100 • {system.activeProtocols} protocols active
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{system.backlinkProfile.total.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Total Backlinks</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400">{system.backlinkProfile.healthy.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Healthy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">{system.backlinkProfile.suspicious.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Suspicious</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-400">{system.backlinkProfile.toxic.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Toxic</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Health Score</span>
                          <span className="text-white">{system.healthScore}/100</span>
                        </div>
                        <Progress value={system.healthScore} className="bg-gray-700" />
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => downloadDisavowFile(system.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-300 border-red-500"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Disavow File
                        </Button>
                        <Button
                          onClick={() => generateReport(system.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-300 border-red-500"
                        >
                          <BarChart3 className="h-4 w-4 mr-1" />
                          Report
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-300 border-red-500"
                        >
                          <RefreshCw className="h-4 w-4 mr-1" />
                          Scan
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
              <Card className="bg-gray-800/50 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-red-400" />
                    <span className="text-gray-300">Protected Domains</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">{defenseSystems.length}</div>
                  <div className="text-sm text-red-400 mt-1">Active systems</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Threats Detected</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">0</div>
                  <div className="text-sm text-yellow-400 mt-1">This month</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Threats Mitigated</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">0</div>
                  <div className="text-sm text-green-400 mt-1">Success rate: 0%</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-red-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Toxic Links</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {defenseSystems.reduce((sum, s) => sum + s.backlinkProfile.toxic, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-purple-400 mt-1">Identified</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-800/50 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white">Threat Analysis</CardTitle>
                <CardDescription className="text-red-200">
                  Real-time monitoring and threat detection across all protected domains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Threat analytics will appear here after system deployment</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}