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
  BarChart3, 
  Globe, 
  Shield, 
  Target, 
  TrendingUp, 
  Network, 
  Eye, 
  Clock, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Settings,
  Download,
  ExternalLink
} from 'lucide-react'

interface PBNNetwork {
  id: string
  name: string
  domains: number
  totalAuthority: number
  linkingMatrix: {
    moneyLinks: number
    innerLinks: number
    bufferLinks: number
    crossLinks: number
  }
  contentStrategy: {
    totalPosts: number
    uniqueContent: number
    publishingSchedule: string
  }
  diversification: {
    tlds: string[]
    registrars: string[]
    hostingProviders: string[]
  }
}

interface DomainPoolStatus {
  totalDomains: number
  activeDomains: number
  buildingDomains: number
  indexedDomains: number
  averageAuthority: number
  totalBacklinks: number
  totalTraffic: number
  diversification: {
    tlds: string[]
    registrars: string[]
    hostingProviders: string[]
    themes: string[]
  }
  safetyMetrics: {
    diversificationScore: number
    riskLevel: string
    footprintSafety: number
    linkingVelocity: string
  }
}

export default function PBNQuickDeployPage() {
  const [domainPool, setDomainPool] = useState<DomainPoolStatus | null>(null)
  const [networks, setNetworks] = useState<PBNNetwork[]>([])
  const [loading, setLoading] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState<string | null>(null)
  
  // Form state
  const [networkName, setNetworkName] = useState('')
  const [moneysite, setMoneysite] = useState('')
  const [targetKeywords, setTargetKeywords] = useState('')
  const [networkType, setNetworkType] = useState('custom')
  const [networkSize, setNetworkSize] = useState(8)
  const [minAuthority, setMinAuthority] = useState(35)
  const [riskLevel, setRiskLevel] = useState('moderate')
  const [linkVelocity, setLinkVelocity] = useState('medium')

  useEffect(() => {
    fetchDomainPoolStatus()
  }, [])

  const fetchDomainPoolStatus = async () => {
    try {
      const response = await fetch('/api/pbn')
      const data = await response.json()
      setDomainPool(data.domainPool)
    } catch (error) {
      console.error('Failed to fetch domain pool status:', error)
    }
  }

  const deployPBNNetwork = async () => {
    if (!networkName || !moneysite || !targetKeywords) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)
    setDeploymentStatus('Initializing PBN deployment...')
    
    try {
      const keywords = targetKeywords.split(',').map(k => k.trim())
      
      const response = await fetch('/api/pbn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          networkName,
          moneysite,
          targetKeywords: keywords,
          networkType,
          options: {
            networkSize,
            minAuthority,
            riskLevel,
            linkVelocity
          }
        })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setDeploymentStatus('PBN network deployed successfully!')
        setNetworks(prev => [...prev, result.network])
        
        // Reset form
        setNetworkName('')
        setMoneysite('')
        setTargetKeywords('')
        
        // Refresh domain pool
        fetchDomainPoolStatus()
      } else {
        setDeploymentStatus(`Deployment failed: ${result.error}`)
      }
    } catch (error) {
      setDeploymentStatus(`Deployment error: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  const exportNetworkData = async (networkId: string, format: string) => {
    try {
      const response = await fetch(`/api/pbn?networkId=${networkId}&format=${format}`)
      
      if (format === 'json') {
        const data = await response.json()
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `pbn-network-${networkId}.json`
        a.click()
      } else {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `pbn-network-${networkId}.${format}`
        a.click()
      }
    } catch (error) {
      console.error('Export failed:', error)
    }
  }

  const getRiskLevelColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'text-green-600'
      case 'medium': return 'text-yellow-600'
      case 'high': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Network className="h-12 w-12 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">PBN Quick Deploy</h1>
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Private Blog Network Infrastructure - Deploy High-Authority Link Networks with Enterprise-Grade Safety
          </p>
        </div>

        {/* Domain Pool Status */}
        {domainPool && (
          <Card className="bg-gray-800/50 border-purple-500/30">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-400" />
                <CardTitle className="text-white">Domain Pool Status</CardTitle>
              </div>
              <CardDescription className="text-purple-200">
                High-authority expired domain inventory and safety metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Domain Inventory</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{domainPool.totalDomains}</div>
                  <div className="text-sm text-gray-400">
                    {domainPool.activeDomains} active, {domainPool.buildingDomains} building
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Average Authority</span>
                  </div>
                  <div className="text-2xl font-bold text-white">DA{domainPool.averageAuthority}</div>
                  <div className="text-sm text-gray-400">
                    {domainPool.totalBacklinks.toLocaleString()} total backlinks
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Traffic Potential</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{domainPool.totalTraffic.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">monthly organic visits</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Safety Score</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">{domainPool.safetyMetrics.diversificationScore}/100</div>
                  <div className={`text-sm ${getRiskLevelColor(domainPool.safetyMetrics.riskLevel)}`}>
                    {domainPool.safetyMetrics.riskLevel} risk level
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Diversification</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-400">TLDs: </span>
                      <span className="text-white">{domainPool.diversification.tlds.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Registrars: </span>
                      <span className="text-white">{domainPool.diversification.registrars.slice(0, 3).join(', ')}...</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Hosting: </span>
                      <span className="text-white">{domainPool.diversification.hostingProviders.slice(0, 3).join(', ')}...</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Safety Protocols</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">Footprint mitigation active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">Natural linking velocity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-gray-300">Content diversification</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="deploy" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
            <TabsTrigger value="deploy" className="text-white">Deploy Network</TabsTrigger>
            <TabsTrigger value="manage" className="text-white">Manage Networks</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
          </TabsList>
          
          {/* Deploy Network Tab */}
          <TabsContent value="deploy" className="space-y-6">
            <Card className="bg-gray-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Target className="h-6 w-6 text-purple-400" />
                  <span>Deploy New PBN Network</span>
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Create a private blog network with intelligent domain selection and safety protocols
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="networkName" className="text-white">Network Name *</Label>
                      <Input
                        id="networkName"
                        value={networkName}
                        onChange={(e) => setNetworkName(e.target.value)}
                        placeholder="e.g., Tech Authority Network"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="moneysite" className="text-white">Money Site Domain *</Label>
                      <Input
                        id="moneysite"
                        value={moneysite}
                        onChange={(e) => setMoneysite(e.target.value)}
                        placeholder="e.g., yourdomain.com"
                        className="bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="keywords" className="text-white">Target Keywords *</Label>
                      <Textarea
                        id="keywords"
                        value={targetKeywords}
                        onChange={(e) => setTargetKeywords(e.target.value)}
                        placeholder="automation, productivity, business tools"
                        className="bg-gray-700 border-gray-600 text-white"
                        rows={3}
                      />
                      <p className="text-sm text-gray-400">Separate keywords with commas</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="networkType" className="text-white">Network Type</Label>
                      <Select value={networkType} onValueChange={setNetworkType}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-700 border-gray-600">
                          <SelectItem value="small">Small Network (5 domains)</SelectItem>
                          <SelectItem value="power">Power Network (12 domains)</SelectItem>
                          <SelectItem value="custom">Custom Configuration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {networkType === 'custom' && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="networkSize" className="text-white">Network Size</Label>
                          <Input
                            id="networkSize"
                            type="number"
                            value={networkSize}
                            onChange={(e) => setNetworkSize(parseInt(e.target.value))}
                            min="3"
                            max="15"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="minAuthority" className="text-white">Minimum Authority</Label>
                          <Input
                            id="minAuthority"
                            type="number"
                            value={minAuthority}
                            onChange={(e) => setMinAuthority(parseInt(e.target.value))}
                            min="20"
                            max="60"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                      </>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="riskLevel" className="text-white">Risk Level</Label>
                      <Select value={riskLevel} onValueChange={setRiskLevel}>
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
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    * Estimated deployment time: 7-14 days
                  </div>
                  <Button
                    onClick={deployPBNNetwork}
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
                        <Network className="h-4 w-4 mr-2" />
                        Deploy PBN Network
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
          
          {/* Manage Networks Tab */}
          <TabsContent value="manage" className="space-y-6">
            {networks.length === 0 ? (
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="text-center py-12">
                  <Network className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No Networks Deployed</h3>
                  <p className="text-gray-400 mb-4">Deploy your first PBN network to start building authority links</p>
                  <Button
                    onClick={() => (document.querySelector('[value="deploy"]') as HTMLElement)?.click()}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Deploy First Network
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {networks.map((network) => (
                  <Card key={network.id} className="bg-gray-800/50 border-purple-500/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{network.name}</CardTitle>
                        <Badge variant="secondary" className="bg-green-900 text-green-300">
                          Active
                        </Badge>
                      </div>
                      <CardDescription className="text-purple-200">
                        {network.domains} domains • DA{Math.round(network.totalAuthority / network.domains)} avg
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-white">{network.linkingMatrix.moneyLinks}</div>
                          <div className="text-sm text-gray-400">Money Links</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">{network.contentStrategy.totalPosts}</div>
                          <div className="text-sm text-gray-400">Content Posts</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Diversification</span>
                          <span className="text-white">85%</span>
                        </div>
                        <Progress value={85} className="bg-gray-700" />
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => exportNetworkData(network.id, 'json')}
                          size="sm"
                          variant="outline"
                          className="text-purple-300 border-purple-500"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Export
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-purple-300 border-purple-500"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Manage
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
                    <BarChart3 className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Total Networks</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">{networks.length}</div>
                  <div className="text-sm text-green-400 mt-1">+{networks.length} this month</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Total Domains</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {networks.reduce((sum, n) => sum + n.domains, 0)}
                  </div>
                  <div className="text-sm text-blue-400 mt-1">Active domains</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">Money Links</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    {networks.reduce((sum, n) => sum + n.linkingMatrix.moneyLinks, 0)}
                  </div>
                  <div className="text-sm text-purple-400 mt-1">Authority links</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-purple-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-yellow-400" />
                    <span className="text-gray-300">Investment</span>
                  </div>
                  <div className="text-3xl font-bold text-white mt-2">
                    ${(networks.reduce((sum, n) => sum + n.domains, 0) * 3000).toLocaleString()}
                  </div>
                  <div className="text-sm text-yellow-400 mt-1">Total deployed</div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-gray-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Network Performance</CardTitle>
                <CardDescription className="text-purple-200">
                  Projected impact and ROI from deployed PBN networks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Network analytics will appear here after deployment</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}