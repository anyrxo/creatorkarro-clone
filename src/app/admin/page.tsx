'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Shield, Globe, EyeOff, Database, BarChart3, Settings } from 'lucide-react'

export default function AdminDashboard() {
  const [authToken, setAuthToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = () => {
    if (authToken === 'Onfroy1738!') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid admin token')
    }
  }

  const stats = {
    total: 108,
    hidden: 12,
    active: 96,
    seoTools: 12,
    totalVisits: 15234
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-800/50 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              Admin Access
            </CardTitle>
            <CardDescription className="text-gray-400">
              Enter admin token to manage site
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Admin Token"
              value={authToken}
              onChange={(e) => setAuthToken(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
            />
            <Button onClick={handleAuth} className="w-full bg-blue-600 hover:bg-blue-700">
              Access Dashboard
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Secure admin panel for site management
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Settings className="w-8 h-8 text-blue-400" />
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage your site configuration</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Pages</p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <EyeOff className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-sm text-gray-400">Hidden Pages</p>
                  <p className="text-2xl font-bold">{stats.hidden}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">SEO Tools</p>
                  <p className="text-2xl font-bold">{stats.seoTools}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Active Pages</p>
                  <p className="text-2xl font-bold">{stats.active}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Visits</p>
                  <p className="text-2xl font-bold">{stats.totalVisits.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red-400" />
              Site Status
            </CardTitle>
            <CardDescription>
              Basic site management and monitoring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <div>
                <h3 className="font-semibold text-green-400">Site Online ✅</h3>
                <p className="text-sm text-gray-400">All systems operational</p>
              </div>
              <Badge variant="outline" className="border-green-400 text-green-400">
                Active
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <div>
                <h3 className="font-semibold">Domain: iimagined.ai</h3>
                <p className="text-sm text-gray-400">Hosted on Vercel</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => window.open('https://iimagined.ai', '_blank')}
              >
                Visit Site
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <div>
                <h3 className="font-semibold">Build Status</h3>
                <p className="text-sm text-gray-400">Last deployed successfully</p>
              </div>
              <Badge variant="outline" className="border-blue-400 text-blue-400">
                Deployed
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}