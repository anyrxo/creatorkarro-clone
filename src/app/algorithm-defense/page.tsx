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
import { Shield, AlertTriangle, CheckCircle, XCircle, TrendingDown, TrendingUp, Activity } from 'lucide-react'

interface DefenseSystem {
  id: string
  domain: string
  protectionLevel: string
  activeDefenses: any[]
  vulnerabilities: any[]
  healthScore: number
  lastAudit: string
  nextAudit: string
  updateHistory: any[]
  recoveryPlans: any[]
}

interface AlgorithmUpdate {
  name: string
  type: string
  severity: string
  rolloutDate: string
  affectedAreas: string[]
  description: string
  recoveryDifficulty: string
}

export default function AlgorithmDefensePage() {
  const [systems, setSystems] = useState<DefenseSystem[]>([])
  const [selectedSystem, setSelectedSystem] = useState<DefenseSystem | null>(null)
  const [knownUpdates, setKnownUpdates] = useState<AlgorithmUpdate[]>([])
  const [strategies, setStrategies] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [auditResults, setAuditResults] = useState<any>(null)
  const [detectionResults, setDetectionResults] = useState<any>(null)
  const [newSystem, setNewSystem] = useState({
    domain: '',
    protectionLevel: 'enhanced',
    autoAudit: true,
    auditFrequency: 'weekly',
    autoMitigation: true,
    recoveryMode: 'semi-auto'
  })

  const loadSystems = useCallback(async () => {
    try {
      const response = await fetch('/api/algorithm-defense?action=getAllSystems')
      const data = await response.json()
      if (data.success) {
        setSystems(data.systems)
        if (data.systems.length > 0 && !selectedSystem) {
          setSelectedSystem(data.systems[0])
        }
      }
    } catch (error) {
      console.error('Error loading defense systems:', error)
    }
  }, [selectedSystem])

  const loadKnownUpdates = useCallback(async () => {
    try {
      const response = await fetch('/api/algorithm-defense?type=updates')
      const data = await response.json()
      if (data.success) {
        setKnownUpdates(data.updates)
      }
    } catch (error) {
      console.error('Error loading known updates:', error)
    }
  }, [])

  const loadStrategies = useCallback(async () => {
    try {
      const response = await fetch('/api/algorithm-defense?type=strategies')
      const data = await response.json()
      if (data.success) {
        setStrategies(data.strategies)
      }
    } catch (error) {
      console.error('Error loading strategies:', error)
    }
  }, [])

  useEffect(() => {
    loadSystems()
    loadKnownUpdates()
    loadStrategies()
  }, [loadSystems, loadKnownUpdates, loadStrategies])

  const handleDeploySystem = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/algorithm-defense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'deploy',
          domain: newSystem.domain,
          protectionLevel: newSystem.protectionLevel,
          options: {
            autoAudit: newSystem.autoAudit,
            auditFrequency: newSystem.auditFrequency,
            autoMitigation: newSystem.autoMitigation,
            recoveryMode: newSystem.recoveryMode
          }
        })
      })

      const data = await response.json()
      if (data.success) {
        await loadSystems()
        setNewSystem({
          domain: '',
          protectionLevel: 'enhanced',
          autoAudit: true,
          auditFrequency: 'weekly',
          autoMitigation: true,
          recoveryMode: 'semi-auto'
        })
      }
    } catch (error) {
      console.error('Error deploying defense system:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRunAudit = async () => {
    if (!selectedSystem) return
    
    setLoading(true)
    try {
      const response = await fetch('/api/algorithm-defense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'runAudit',
          systemId: selectedSystem.id
        })
      })

      const data = await response.json()
      if (data.success) {
        setAuditResults(data.auditResults)
        await loadSystems()
      }
    } catch (error) {
      console.error('Error running audit:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDetectUpdate = async () => {
    if (!selectedSystem) return
    
    setLoading(true)
    try {
      // Simulate metrics for detection
      const metrics = {
        trafficChange: -25,
        rankingChange: -18,
        timeframe: '7 days'
      }

      const response = await fetch('/api/algorithm-defense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'detectUpdate',
          systemId: selectedSystem.id,
          metrics
        })
      })

      const data = await response.json()
      if (data.success) {
        setDetectionResults(data.detection)
      }
    } catch (error) {
      console.error('Error detecting update:', error)
    } finally {
      setLoading(false)
    }
  }

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-yellow-600'
    if (score >= 40) return 'text-orange-600'
    return 'text-red-600'
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive'
      case 'high': return 'destructive'
      case 'medium': return 'default'
      case 'low': return 'secondary'
      default: return 'outline'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8" />
            Algorithm Update Defense System
          </h1>
          <p className="text-muted-foreground">
            Protect against Google algorithm updates with intelligent defense strategies
          </p>
        </div>
        <div className="flex gap-4">
          {selectedSystem && (
            <>
              <Button onClick={handleRunAudit} disabled={loading}>
                Run Security Audit
              </Button>
              <Button onClick={handleDetectUpdate} disabled={loading} variant="outline">
                Detect Algorithm Update
              </Button>
            </>
          )}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
          <TabsTrigger value="strategies">Defense Strategies</TabsTrigger>
          <TabsTrigger value="updates">Known Updates</TabsTrigger>
          <TabsTrigger value="deploy">Deploy New</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {selectedSystem ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${getHealthScoreColor(selectedSystem.healthScore)}`}>
                        {selectedSystem.healthScore}
                      </span>
                      <span className="text-muted-foreground">/100</span>
                    </div>
                    <Progress value={selectedSystem.healthScore} className="mt-2" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Protection Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="text-lg py-1 px-3" variant="default">
                      {selectedSystem.protectionLevel}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">
                      {selectedSystem.activeDefenses.length} active defenses
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">
                        {selectedSystem.vulnerabilities.length}
                      </span>
                      <div className="flex gap-1">
                        {selectedSystem.vulnerabilities.filter(v => v.severity === 'critical').length > 0 && (
                          <Badge variant="destructive" className="text-xs">
                            {selectedSystem.vulnerabilities.filter(v => v.severity === 'critical').length} critical
                          </Badge>
                        )}
                        {selectedSystem.vulnerabilities.filter(v => v.severity === 'high').length > 0 && (
                          <Badge variant="default" className="text-xs">
                            {selectedSystem.vulnerabilities.filter(v => v.severity === 'high').length} high
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Update History</CardTitle>
                  <CardDescription>
                    How your site performed during recent algorithm updates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedSystem.updateHistory.map((update, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{update.updateName}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatDate(update.date)}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm">
                              Traffic: 
                              <span className={update.trafficChange > 0 ? 'text-green-600' : 'text-red-600'}>
                                {update.trafficChange > 0 ? '+' : ''}{update.trafficChange}%
                              </span>
                            </p>
                            <p className="text-sm">
                              Rankings: 
                              <span className={update.rankingChange > 0 ? 'text-green-600' : 'text-red-600'}>
                                {update.rankingChange > 0 ? '+' : ''}{update.rankingChange}%
                              </span>
                            </p>
                          </div>
                          <Badge variant={update.impact === 'positive' ? 'default' : update.impact === 'negative' ? 'destructive' : 'secondary'}>
                            {update.impact}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Domain:</span>
                    <span className="text-sm">{selectedSystem.domain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Last Audit:</span>
                    <span className="text-sm">{formatDate(selectedSystem.lastAudit)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Next Audit:</span>
                    <span className="text-sm">{formatDate(selectedSystem.nextAudit)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Recovery Plans:</span>
                    <span className="text-sm">{selectedSystem.recoveryPlans.length} active</span>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  No defense systems deployed yet. Go to the "Deploy New" tab to create one.
                </p>
              </CardContent>
            </Card>
          )}

          {auditResults && (
            <Alert>
              <Activity className="h-4 w-4" />
              <AlertTitle>Audit Results</AlertTitle>
              <AlertDescription>
                <div className="mt-2 space-y-1">
                  <p>Vulnerabilities found: {auditResults.vulnerabilitiesFound}</p>
                  <p>Vulnerabilities fixed: {auditResults.vulnerabilitiesFixed}</p>
                  <p>New threats: {auditResults.newThreats}</p>
                  <p>Health score change: {auditResults.healthScoreChange > 0 ? '+' : ''}{auditResults.healthScoreChange}</p>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {detectionResults && detectionResults.detected && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Algorithm Update Detected!</AlertTitle>
              <AlertDescription>
                <div className="mt-2 space-y-2">
                  <p>Suspected update: {detectionResults.suspectedUpdate}</p>
                  <p>Severity: {detectionResults.severity}</p>
                  <div className="mt-3">
                    <p className="font-medium mb-1">Recommendations:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {detectionResults.recommendations?.map((rec: string, index: number) => (
                        <li key={index} className="text-sm">{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="vulnerabilities" className="space-y-6">
          {selectedSystem ? (
            <Card>
              <CardHeader>
                <CardTitle>Active Vulnerabilities</CardTitle>
                <CardDescription>
                  Security issues that could impact your algorithm resistance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px]">
                  <div className="space-y-4">
                    {selectedSystem.vulnerabilities.map((vuln, index) => (
                      <div key={index} className="p-4 border rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{vuln.type.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant={getSeverityColor(vuln.severity)}>
                              {vuln.severity}
                            </Badge>
                            <Badge variant={vuln.status === 'active' ? 'destructive' : vuln.status === 'mitigating' ? 'default' : 'secondary'}>
                              {vuln.status}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{vuln.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span>Area: {vuln.area}</span>
                          <span>Detected: {formatDate(vuln.detectedDate)}</span>
                        </div>
                        {vuln.mitigation && (
                          <Alert>
                            <CheckCircle className="h-4 w-4" />
                            <AlertDescription>{vuln.mitigation}</AlertDescription>
                          </Alert>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  Select a defense system to view vulnerabilities.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="strategies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Defense Strategies</CardTitle>
              <CardDescription>
                Available protection strategies against algorithm updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {strategies.map((strategy) => (
                  <div key={strategy.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{strategy.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Targets: {strategy.targetedUpdates.join(', ')}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant={strategy.priority === 'critical' ? 'destructive' : strategy.priority === 'high' ? 'default' : 'secondary'}>
                          {strategy.priority}
                        </Badge>
                        <Badge variant="outline">
                          {strategy.effectiveness}% effective
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Actions:</p>
                      <ul className="text-sm space-y-1">
                        {strategy.actions.slice(0, 3).map((action: any, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary rounded-full" />
                            {action.action}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Type: {strategy.type}</span>
                      <span>Automation: {strategy.automationLevel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="updates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Known Algorithm Updates</CardTitle>
              <CardDescription>
                Major Google algorithm updates and their characteristics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {knownUpdates.map((update, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{update.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {update.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant={update.severity === 'catastrophic' ? 'destructive' : update.severity === 'major' ? 'destructive' : 'default'}>
                          {update.severity}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {update.rolloutDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {update.affectedAreas.map((area, i) => (
                        <Badge key={i} variant="outline">
                          {area}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Type: {update.type}</span>
                      <span>Recovery: {update.recoveryDifficulty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deploy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Deploy New Defense System</CardTitle>
              <CardDescription>
                Protect your domain against algorithm updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="domain">Domain</Label>
                  <Input
                    id="domain"
                    placeholder="example.com"
                    value={newSystem.domain}
                    onChange={(e) => setNewSystem({ ...newSystem, domain: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="protectionLevel">Protection Level</Label>
                  <Select
                    value={newSystem.protectionLevel}
                    onValueChange={(value) => setNewSystem({ ...newSystem, protectionLevel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (Critical defenses only)</SelectItem>
                      <SelectItem value="enhanced">Enhanced (Critical + High priority)</SelectItem>
                      <SelectItem value="fortress">Fortress (All except low priority)</SelectItem>
                      <SelectItem value="military-grade">Military-Grade (All defenses)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="auditFrequency">Audit Frequency</Label>
                  <Select
                    value={newSystem.auditFrequency}
                    onValueChange={(value) => setNewSystem({ ...newSystem, auditFrequency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recoveryMode">Recovery Mode</Label>
                  <Select
                    value={newSystem.recoveryMode}
                    onValueChange={(value) => setNewSystem({ ...newSystem, recoveryMode: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="semi-auto">Semi-Automatic</SelectItem>
                      <SelectItem value="full-auto">Fully Automatic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="autoAudit"
                    checked={newSystem.autoAudit}
                    onChange={(e) => setNewSystem({ ...newSystem, autoAudit: e.target.checked })}
                  />
                  <Label htmlFor="autoAudit">Auto Audit</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="autoMitigation"
                    checked={newSystem.autoMitigation}
                    onChange={(e) => setNewSystem({ ...newSystem, autoMitigation: e.target.checked })}
                  />
                  <Label htmlFor="autoMitigation">Auto Mitigation</Label>
                </div>
              </div>

              <Button
                onClick={handleDeploySystem}
                disabled={loading || !newSystem.domain}
                className="w-full"
              >
                {loading ? 'Deploying...' : 'Deploy Defense System'}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Defense Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {systems.map((system) => (
                  <div
                    key={system.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedSystem?.id === system.id ? 'bg-muted' : 'hover:bg-muted/50'
                    }`}
                    onClick={() => setSelectedSystem(system)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{system.domain}</p>
                        <p className="text-sm text-muted-foreground">
                          {system.protectionLevel} protection • {system.vulnerabilities.length} vulnerabilities
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold ${getHealthScoreColor(system.healthScore)}`}>
                          {system.healthScore}
                        </span>
                        <Shield className="h-5 w-5 text-muted-foreground" />
                      </div>
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