'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Eye, EyeOff, Settings, Database, BarChart3, Shield, Globe } from 'lucide-react'

interface PageConfig {
  path: string
  title: string
  category: 'seo-tools' | 'blog' | 'main' | 'api'
  isHidden: boolean
  isActive: boolean
  description: string
  lastModified: string
  visits: number
}

export default function AdminDashboard() {
  const [pages, setPages] = useState<PageConfig[]>([])
  const [authToken, setAuthToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [filter, setFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Initialize pages data
  useEffect(() => {
    const initialPages: PageConfig[] = [
      // SEO Tools
      { path: '/analytics-dashboard', title: 'Analytics Dashboard', category: 'seo-tools', isHidden: true, isActive: true, description: 'Advanced SEO analytics and monitoring', lastModified: '2025-01-15', visits: 156 },
      { path: '/rank-tracking', title: 'Rank Tracking System', category: 'seo-tools', isHidden: true, isActive: true, description: 'Real-time SERP position monitoring', lastModified: '2025-01-14', visits: 89 },
      { path: '/competitor-backlinks', title: 'Competitor Backlink Analysis', category: 'seo-tools', isHidden: true, isActive: true, description: 'Backlink replication and analysis', lastModified: '2025-01-13', visits: 234 },
      { path: '/pbn', title: 'PBN Quick Deploy', category: 'seo-tools', isHidden: true, isActive: true, description: 'Private blog network management', lastModified: '2025-01-12', visits: 67 },
      { path: '/ctr', title: 'CTR Manipulation Network', category: 'seo-tools', isHidden: true, isActive: true, description: 'Click-through rate optimization', lastModified: '2025-01-11', visits: 145 },
      { path: '/defense', title: 'Negative SEO Defense', category: 'seo-tools', isHidden: true, isActive: true, description: 'Protection against SEO attacks', lastModified: '2025-01-10', visits: 78 },
      { path: '/parasite', title: 'Parasite SEO Engine', category: 'seo-tools', isHidden: true, isActive: true, description: 'High-authority domain exploitation', lastModified: '2025-01-09', visits: 123 },
      { path: '/link-wheel', title: 'Link Wheel Construction', category: 'seo-tools', isHidden: true, isActive: true, description: 'Advanced link building networks', lastModified: '2025-01-08', visits: 91 },
      { path: '/guest-posts', title: 'Guest Post Automation', category: 'seo-tools', isHidden: true, isActive: true, description: 'Automated guest posting campaigns', lastModified: '2025-01-07', visits: 167 },
      { path: '/social-signals', title: 'Social Signal Automation', category: 'seo-tools', isHidden: true, isActive: true, description: 'Social media engagement automation', lastModified: '2025-01-06', visits: 203 },
      { path: '/clusters', title: 'Content Cluster Engine', category: 'seo-tools', isHidden: true, isActive: true, description: 'Topical authority content generation', lastModified: '2025-01-05', visits: 134 },
      { path: '/algorithm-defense', title: 'Algorithm Defense System', category: 'seo-tools', isHidden: true, isActive: true, description: 'Algorithm update protection', lastModified: '2025-01-04', visits: 98 },

      // Main Pages
      { path: '/', title: 'Homepage', category: 'main', isHidden: false, isActive: true, description: 'Main landing page', lastModified: '2025-01-15', visits: 2456 },
      { path: '/instagram-ignited', title: 'Instagram Ignited Course', category: 'main', isHidden: false, isActive: true, description: 'Instagram growth course', lastModified: '2025-01-14', visits: 1234 },
      { path: '/digital-products', title: 'Digital Products', category: 'main', isHidden: false, isActive: true, description: 'Digital product marketplace', lastModified: '2025-01-13', visits: 876 },
      { path: '/comfyui-workflows', title: 'ComfyUI Workflows', category: 'main', isHidden: false, isActive: true, description: 'AI workflow templates', lastModified: '2025-01-12', visits: 654 },
      { path: '/n8n-ai-automations', title: 'N8N AI Automations', category: 'main', isHidden: false, isActive: true, description: 'Automation workflows', lastModified: '2025-01-11', visits: 432 },

      // Blog Pages
      { path: '/blog', title: 'Blog Index', category: 'blog', isHidden: false, isActive: true, description: 'Main blog page', lastModified: '2025-01-15', visits: 3456 },
      { path: '/blog/ai-automation-guide', title: 'AI Automation Guide', category: 'blog', isHidden: false, isActive: true, description: 'Complete AI automation tutorial', lastModified: '2025-01-14', visits: 567 },
      { path: '/blog/instagram-growth-2025', title: 'Instagram Growth 2025', category: 'blog', isHidden: false, isActive: true, description: 'Latest Instagram growth strategies', lastModified: '2025-01-13', visits: 789 },
      { path: '/blog/passive-income-blueprint', title: 'Passive Income Blueprint', category: 'blog', isHidden: false, isActive: true, description: 'Complete passive income guide', lastModified: '2025-01-12', visits: 1023 },

      // API Endpoints
      { path: '/api/analytics-dashboard', title: 'Analytics API', category: 'api', isHidden: true, isActive: true, description: 'Analytics data endpoints', lastModified: '2025-01-15', visits: 0 },
      { path: '/api/rank-tracking', title: 'Rank Tracking API', category: 'api', isHidden: true, isActive: true, description: 'SERP tracking endpoints', lastModified: '2025-01-14', visits: 0 },
      { path: '/api/competitor-backlinks', title: 'Backlinks API', category: 'api', isHidden: true, isActive: true, description: 'Backlink analysis endpoints', lastModified: '2025-01-13', visits: 0 },
    ]
    setPages(initialPages)
  }, [])

  const handleAuth = () => {
    if (authToken === 'Onfroy1738!') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid admin token')
    }
  }

  const togglePageVisibility = (path: string) => {
    setPages(pages.map(page => 
      page.path === path 
        ? { ...page, isHidden: !page.isHidden }
        : page
    ))
  }

  const togglePageStatus = (path: string) => {
    setPages(pages.map(page => 
      page.path === path 
        ? { ...page, isActive: !page.isActive }
        : page
    ))
  }

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(filter.toLowerCase()) || 
                         page.path.toLowerCase().includes(filter.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || page.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const stats = {
    total: pages.length,
    hidden: pages.filter(p => p.isHidden).length,
    active: pages.filter(p => p.isActive).length,
    seoTools: pages.filter(p => p.category === 'seo-tools').length,
    totalVisits: pages.reduce((sum, p) => sum + p.visits, 0)
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
          <p className="text-gray-400">Manage your hidden SEO pages and site configuration</p>
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
        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="pages" className="data-[state=active]:bg-gray-700">Page Management</TabsTrigger>
            <TabsTrigger value="seo-tools" className="data-[state=active]:bg-gray-700">SEO Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            {/* Filters */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    placeholder="Search pages..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white flex-1"
                  />
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                  >
                    <option value="all">All Categories</option>
                    <option value="seo-tools">SEO Tools</option>
                    <option value="main">Main Pages</option>
                    <option value="blog">Blog</option>
                    <option value="api">API</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Pages List */}
            <div className="space-y-4">
              {filteredPages.map((page) => (
                <Card key={page.path} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{page.title}</h3>
                          <Badge variant={page.category === 'seo-tools' ? 'destructive' : 'secondary'}>
                            {page.category}
                          </Badge>
                          {page.isHidden && (
                            <Badge variant="outline" className="border-orange-400 text-orange-400">
                              <EyeOff className="w-3 h-3 mr-1" />
                              Hidden
                            </Badge>
                          )}
                          {!page.isActive && (
                            <Badge variant="outline" className="border-red-400 text-red-400">
                              Inactive
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-400 mb-2">{page.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Path: {page.path}</span>
                          <span>Modified: {page.lastModified}</span>
                          <span>Visits: {page.visits}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {page.isHidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          <Switch
                            checked={!page.isHidden}
                            onCheckedChange={() => togglePageVisibility(page.path)}
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">Active</span>
                          <Switch
                            checked={page.isActive}
                            onCheckedChange={() => togglePageStatus(page.path)}
                          />
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => window.open(page.path, '_blank')}
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="seo-tools" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  SEO Weapon Arsenal
                </CardTitle>
                <CardDescription>
                  Manage your hidden SEO automation tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pages.filter(p => p.category === 'seo-tools').map((tool) => (
                    <Card key={tool.path} className="bg-gray-700/50 border-gray-600">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{tool.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant={tool.isHidden ? 'outline' : 'secondary'}>
                            {tool.isHidden ? 'Hidden' : 'Visible'}
                          </Badge>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => window.open(tool.path, '_blank')}
                          >
                            Launch
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
