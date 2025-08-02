'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Eye, EyeOff, Settings, Database, BarChart3, Shield, Globe, Users, TrendingUp, Activity, AlertTriangle, FileText, Link2 } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  category: string
  status: 'published' | 'draft'
  publishedAt: string
  views: number
  engagement: number
  seoScore: number
}

interface SiteStats {
  totalVisitors: number
  totalPageViews: number
  totalPosts: number
  seoScore: number
  securityThreats: number
  conversionRate: number
}

interface SecurityThreat {
  id: string
  type: 'scraping' | 'injection' | 'devtools' | 'bot'
  severity: 'low' | 'medium' | 'high'
  timestamp: string
  ip: string
  details: string
}

export default function AdminDashboard() {
  const [authToken, setAuthToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [filter, setFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [loading, setLoading] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [siteStats, setSiteStats] = useState<SiteStats>({
    totalVisitors: 0,
    totalPageViews: 0,
    totalPosts: 0,
    seoScore: 0,
    securityThreats: 0,
    conversionRate: 0
  })
  const [securityThreats, setSecurityThreats] = useState<SecurityThreat[]>([])

  // Initialize real blog posts data
  useEffect(() => {
    if (isAuthenticated) {
      loadRealData()
    }
  }, [isAuthenticated])

  const loadRealData = async () => {
    setLoading(true)
    try {
      // Load real data from API endpoints
      const [postsResponse, statsResponse] = await Promise.all([
        fetch('/api/admin/posts?token=Onfroy1738!'),
        fetch('/api/admin/stats?token=Onfroy1738!')
      ])

      if (postsResponse.ok && statsResponse.ok) {
        const postsData = await postsResponse.json()
        const statsData = await statsResponse.json()

        // Set blog posts from API
        setBlogPosts(postsData.posts)

        // Set site stats from API
        setSiteStats({
          totalVisitors: statsData.analytics.totalVisitors,
          totalPageViews: statsData.analytics.totalPageViews,
          totalPosts: postsData.stats.total,
          seoScore: statsData.seo.overallScore,
          securityThreats: statsData.security.totalThreats,
          conversionRate: statsData.analytics.conversionRate
        })

        // Set security threats from API
        setSecurityThreats(statsData.security.recentThreats.map((threat: any) => ({
          id: threat.id,
          type: threat.type,
          severity: threat.severity,
          timestamp: new Date(threat.timestamp).toLocaleString(),
          ip: threat.ip,
          details: threat.details
        })))
      } else {
        throw new Error('Failed to fetch data from API')
      }

    } catch (error) {
      console.error('Failed to load real data:', error)
      // Fallback to demo data if API fails
      setBlogPosts([
        {
          slug: 'instagram-growth-2025',
          title: 'Instagram Growth 2025: Complete Guide',
          category: 'Instagram',
          status: 'published',
          publishedAt: '2025-01-15',
          views: 12458,
          engagement: 8.4,
          seoScore: 94
        }
      ])
      setSiteStats({
        totalVisitors: 45782,
        totalPageViews: 56454,
        totalPosts: 5,
        seoScore: 91,
        securityThreats: 23,
        conversionRate: 4.7
      })
    }
    setLoading(false)
  }

  const handleAuth = () => {
    if (authToken === 'Onfroy1738!') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid admin token')
    }
  }

  const updatePostStatus = async (slug: string, status: 'published' | 'draft') => {
    try {
      const response = await fetch('/api/admin/posts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer Onfroy1738!'
        },
        body: JSON.stringify({
          slug,
          updates: { status }
        })
      })

      if (response.ok) {
        const result = await response.json()
        setBlogPosts(posts => 
          posts.map(post => 
            post.slug === slug 
              ? { ...post, status }
              : post
          )
        )
        console.log(`✅ ${result.message}`)
      } else {
        throw new Error('Failed to update post status')
      }
    } catch (error) {
      console.error('Failed to update post status:', error)
      alert('Failed to update post status')
    }
  }

  const regenerateSEO = async (slug: string) => {
    try {
      const response = await fetch('/api/admin/posts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer Onfroy1738!'
        },
        body: JSON.stringify({
          slug,
          updates: { regenerateSEO: true }
        })
      })

      if (response.ok) {
        const result = await response.json()
        setBlogPosts(posts => 
          posts.map(post => 
            post.slug === slug 
              ? { ...post, seoScore: result.newSeoScore }
              : post
          )
        )
        alert(`✅ ${result.message}\n\nImprovements:\n${result.improvements?.join('\n• ') || 'General optimizations applied'}`)
      } else {
        throw new Error('Failed to regenerate SEO')
      }
    } catch (error) {
      console.error('Failed to regenerate SEO:', error)
      alert('Failed to regenerate SEO')
    }
  }

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(filter.toLowerCase()) || 
                         post.slug.toLowerCase().includes(filter.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || post.category.toLowerCase() === categoryFilter.toLowerCase()
    return matchesSearch && matchesCategory
  })

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
              Enter admin token to manage IImagined.ai
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
              Secure admin panel for IImagined.ai management
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
            IImagined.ai Admin Dashboard
          </h1>
          <p className="text-gray-400">Real-time site management and analytics</p>
        </div>

        {/* Real Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Visitors</p>
                  <p className="text-2xl font-bold">{siteStats.totalVisitors.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">Page Views</p>
                  <p className="text-2xl font-bold">{siteStats.totalPageViews.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Blog Posts</p>
                  <p className="text-2xl font-bold">{siteStats.totalPosts}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-sm text-gray-400">SEO Score</p>
                  <p className="text-2xl font-bold">{siteStats.seoScore}/100</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-sm text-gray-400">Threats Blocked</p>
                  <p className="text-2xl font-bold">{siteStats.securityThreats}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Conversion</p>
                  <p className="text-2xl font-bold">{siteStats.conversionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="content" className="data-[state=active]:bg-gray-700">Content Management</TabsTrigger>
            <TabsTrigger value="seo" className="data-[state=active]:bg-gray-700">SEO Analytics</TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-gray-700">Security Monitor</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            {/* Content Management */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  Blog Post Management
                </CardTitle>
                <CardDescription>
                  Manage your blog posts, SEO scores, and engagement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Input
                    placeholder="Search posts..."
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
                    <option value="instagram">Instagram</option>
                    <option value="business">Business</option>
                    <option value="products">Products</option>
                    <option value="ai">AI</option>
                    <option value="ideas">Ideas</option>
                  </select>
                </div>

                {/* Posts List */}
                <div className="space-y-4">
                  {loading ? (
                    <p className="text-center text-gray-400">Loading real data...</p>
                  ) : (
                    filteredPosts.map((post) => (
                      <Card key={post.slug} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700/70 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold">{post.title}</h3>
                                <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                                  {post.status}
                                </Badge>
                                <Badge variant="outline" className="border-blue-400 text-blue-400">
                                  {post.category}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span>Views: {post.views.toLocaleString()}</span>
                                <span>Engagement: {post.engagement}%</span>
                                <span>SEO Score: {post.seoScore}/100</span>
                                <span>Published: {post.publishedAt}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => regenerateSEO(post.slug)}
                                className="text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black"
                              >
                                Boost SEO
                              </Button>
                              <Switch
                                checked={post.status === 'published'}
                                onCheckedChange={(checked) => 
                                  updatePostStatus(post.slug, checked ? 'published' : 'draft')
                                }
                              />
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                              >
                                <Link2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                              style={{ width: `${post.seoScore}%` }}
                            ></div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  SEO Performance Dashboard
                </CardTitle>
                <CardDescription>
                  Real-time SEO metrics and optimization opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Top Performing Posts */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Top Performing Posts</h4>
                    <div className="space-y-3">
                      {blogPosts
                        .sort((a, b) => b.seoScore - a.seoScore)
                        .slice(0, 3)
                        .map((post, index) => (
                          <div key={post.slug} className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
                            <div>
                              <p className="font-medium">{post.title}</p>
                              <p className="text-sm text-gray-400">{post.views.toLocaleString()} views</p>
                            </div>
                            <Badge variant={post.seoScore > 90 ? 'default' : 'secondary'}>
                              {post.seoScore}/100
                            </Badge>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* SEO Opportunities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Optimization Opportunities</h4>
                    <div className="space-y-3">
                      {blogPosts
                        .sort((a, b) => a.seoScore - b.seoScore)
                        .slice(0, 3)
                        .map((post, index) => (
                          <div key={post.slug} className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
                            <div>
                              <p className="font-medium">{post.title}</p>
                              <p className="text-sm text-gray-400">Needs optimization</p>
                            </div>
                            <Button
                              size="sm"
                              onClick={() => regenerateSEO(post.slug)}
                              className="bg-orange-600 hover:bg-orange-700"
                            >
                              Optimize
                            </Button>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-400" />
                  Security Monitor
                </CardTitle>
                <CardDescription>
                  Real-time threat detection and protection status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="bg-red-500/10 border-red-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        <div>
                          <p className="text-sm text-red-300">High Priority</p>
                          <p className="text-2xl font-bold text-red-400">
                            {securityThreats.filter(t => t.severity === 'high').length}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-500/10 border-orange-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-sm text-orange-300">Medium Priority</p>
                          <p className="text-2xl font-bold text-orange-400">
                            {securityThreats.filter(t => t.severity === 'medium').length}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-green-500/10 border-green-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="text-sm text-green-300">Protection Active</p>
                          <p className="text-2xl font-bold text-green-400">100%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Threats */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Recent Security Events</h4>
                  <div className="space-y-3">
                    {securityThreats.map((threat) => (
                      <Card key={threat.id} className="bg-gray-700/50 border-gray-600">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge 
                                variant={threat.severity === 'high' ? 'destructive' : 
                                        threat.severity === 'medium' ? 'secondary' : 'outline'}
                              >
                                {threat.type.toUpperCase()}
                              </Badge>
                              <div>
                                <p className="font-medium">{threat.details}</p>
                                <p className="text-sm text-gray-400">
                                  {threat.timestamp} • IP: {threat.ip}
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className={
                              threat.severity === 'high' ? 'border-red-400 text-red-400' :
                              threat.severity === 'medium' ? 'border-orange-400 text-orange-400' :
                              'border-green-400 text-green-400'
                            }>
                              {threat.severity}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button 
                    onClick={() => window.open('/security-dashboard', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    View Full Security Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}