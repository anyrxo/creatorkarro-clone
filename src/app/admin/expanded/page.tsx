'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { 
  Eye, EyeOff, Settings, Database, BarChart3, Shield, Globe, Users, TrendingUp, 
  Activity, AlertTriangle, FileText, Link2, Mail, ShoppingCart, CreditCard,
  BookOpen, Image, Download, Upload, Server, Zap, MessageSquare, Share2,
  PieChart, Calendar, Target, Briefcase, Gift, Star, Bell, Search, Filter,
  Edit, Trash2, Plus, RefreshCw, ExternalLink, Copy, Save, Lock, Unlock
} from 'lucide-react'

interface User {
  id: string
  email: string
  name: string
  role: 'customer' | 'vip' | 'affiliate'
  status: 'active' | 'suspended' | 'banned'
  registeredAt: string
  lastLogin: string
  totalSpent: number
  ordersCount: number
  courses: string[]
}

interface Order {
  id: string
  userId: string
  userEmail: string
  amount: number
  status: 'completed' | 'pending' | 'refunded' | 'failed'
  product: string
  createdAt: string
  paymentMethod: 'stripe' | 'paypal'
}

interface Course {
  id: string
  title: string
  price: number
  status: 'active' | 'draft' | 'archived'
  enrollments: number
  revenue: number
  completionRate: number
  rating: number
  createdAt: string
}

interface EmailCampaign {
  id: string
  name: string
  subject: string
  status: 'draft' | 'scheduled' | 'sent'
  recipients: number
  openRate: number
  clickRate: number
  sentAt?: string
}

export default function ExpandedAdminDashboard() {
  const [authToken, setAuthToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  
  // Data states
  const [users, setUsers] = useState<User[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [campaigns, setCampaigns] = useState<EmailCampaign[]>([])
  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: 0,
    totalRevenue: 0,
    totalOrders: 0,
    activeCourses: 0,
    conversionRate: 0,
    avgOrderValue: 0,
    churnRate: 0,
    ltv: 0
  })

  // Search and filter states
  const [userSearch, setUserSearch] = useState('')
  const [orderSearch, setOrderSearch] = useState('')
  const [courseSearch, setCourseSearch] = useState('')
  const [selectedUserRole, setSelectedUserRole] = useState('all')
  const [selectedOrderStatus, setSelectedOrderStatus] = useState('all')

  const loadAllData = useCallback(async () => {
    setLoading(true)
    try {
      // Simulate loading comprehensive admin data
      await Promise.all([
        loadUsers(),
        loadOrders(),
        loadCourses(),
        loadEmailCampaigns(),
        loadDashboardStats()
      ])
    } catch (error) {
      console.error('Failed to load admin data:', error)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData()
    }
  }, [isAuthenticated, loadAllData])

  const loadUsers = async () => {
    // Mock user data - replace with real API
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'marcus.rivera@email.com',
        name: 'Marcus Rivera',
        role: 'vip',
        status: 'active',
        registeredAt: '2024-11-15',
        lastLogin: '2025-01-15T10:30:00Z',
        totalSpent: 597,
        ordersCount: 3,
        courses: ['instagram-ignited', 'digital-products']
      },
      {
        id: '2',
        email: 'sarah.johnson@email.com',
        name: 'Sarah Johnson',
        role: 'customer',
        status: 'active',
        registeredAt: '2024-12-01',
        lastLogin: '2025-01-14T15:45:00Z',
        totalSpent: 297,
        ordersCount: 1,
        courses: ['instagram-ignited']
      },
      {
        id: '3',
        email: 'alex.chen@email.com',
        name: 'Alex Chen',
        role: 'affiliate',
        status: 'active',
        registeredAt: '2024-10-20',
        lastLogin: '2025-01-15T09:15:00Z',
        totalSpent: 1247,
        ordersCount: 5,
        courses: ['instagram-ignited', 'digital-products', 'ai-automation', 'comfyui']
      }
    ]
    setUsers(mockUsers)
  }

  const loadOrders = async () => {
    // Mock order data
    const mockOrders: Order[] = [
      {
        id: 'ord_1',
        userId: '1',
        userEmail: 'marcus.rivera@email.com',
        amount: 297,
        status: 'completed',
        product: 'Instagram Ignited',
        createdAt: '2025-01-15T08:30:00Z',
        paymentMethod: 'stripe'
      },
      {
        id: 'ord_2',
        userId: '2',
        userEmail: 'sarah.johnson@email.com',
        amount: 197,
        status: 'completed',
        product: 'Digital Products Masterclass',
        createdAt: '2025-01-14T14:20:00Z',
        paymentMethod: 'paypal'
      },
      {
        id: 'ord_3',
        userId: '3',
        userEmail: 'alex.chen@email.com',
        amount: 497,
        status: 'pending',
        product: 'AI Automation Suite',
        createdAt: '2025-01-15T11:45:00Z',
        paymentMethod: 'stripe'
      }
    ]
    setOrders(mockOrders)
  }

  const loadCourses = async () => {
    // Mock course data
    const mockCourses: Course[] = [
      {
        id: 'instagram-ignited',
        title: 'Instagram Ignited',
        price: 297,
        status: 'active',
        enrollments: 2847,
        revenue: 845859,
        completionRate: 78,
        rating: 4.9,
        createdAt: '2024-08-15'
      },
      {
        id: 'digital-products',
        title: 'Digital Products Masterclass',
        price: 197,
        status: 'active',
        enrollments: 1956,
        revenue: 385372,
        completionRate: 82,
        rating: 4.8,
        createdAt: '2024-09-10'
      },
      {
        id: 'ai-automation',
        title: 'AI Automation Suite',
        price: 497,
        status: 'active',
        enrollments: 1234,
        revenue: 613298,
        completionRate: 71,
        rating: 4.9,
        createdAt: '2024-10-05'
      }
    ]
    setCourses(mockCourses)
  }

  const loadEmailCampaigns = async () => {
    // Mock email campaign data
    const mockCampaigns: EmailCampaign[] = [
      {
        id: 'camp_1',
        name: 'Instagram Growth Tips',
        subject: '🔥 The Instagram Algorithm Secret That Changed Everything',
        status: 'sent',
        recipients: 15847,
        openRate: 34.2,
        clickRate: 8.7,
        sentAt: '2025-01-14T10:00:00Z'
      },
      {
        id: 'camp_2',
        name: 'New Course Launch',
        subject: '🚀 NEW: AI Automation Course (50% OFF)',
        status: 'sent',
        recipients: 18234,
        openRate: 41.3,
        clickRate: 12.4,
        sentAt: '2025-01-12T14:30:00Z'
      },
      {
        id: 'camp_3',
        name: 'Weekly Newsletter',
        subject: 'This Week: 3 Students Hit $10K/Month',
        status: 'scheduled',
        recipients: 19567,
        openRate: 0,
        clickRate: 0
      }
    ]
    setCampaigns(mockCampaigns)
  }

  const loadDashboardStats = async () => {
    setDashboardStats({
      totalUsers: 15847,
      totalRevenue: 2847563,
      totalOrders: 8934,
      activeCourses: 5,
      conversionRate: 4.7,
      avgOrderValue: 318,
      churnRate: 2.3,
      ltv: 847
    })
  }

  const handleAuth = () => {
    if (authToken === 'Onfroy1738!') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid admin token')
    }
  }

  // User management functions
  const updateUserStatus = async (userId: string, status: 'active' | 'suspended' | 'banned') => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status } : user
    ))
    console.log(`Updated user ${userId} status to ${status}`)
  }

  const processRefund = async (orderId: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: 'refunded' } : order
    ))
    alert(`Refund processed for order ${orderId}`)
  }

  const updateCourseStatus = async (courseId: string, status: 'active' | 'draft' | 'archived') => {
    setCourses(courses.map(course => 
      course.id === courseId ? { ...course, status } : course
    ))
    console.log(`Updated course ${courseId} status to ${status}`)
  }

  // Filter functions
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
                         user.email.toLowerCase().includes(userSearch.toLowerCase())
    const matchesRole = selectedUserRole === 'all' || user.role === selectedUserRole
    return matchesSearch && matchesRole
  })

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.userEmail.toLowerCase().includes(orderSearch.toLowerCase()) ||
                         order.product.toLowerCase().includes(orderSearch.toLowerCase()) ||
                         order.id.toLowerCase().includes(orderSearch.toLowerCase())
    const matchesStatus = selectedOrderStatus === 'all' || order.status === selectedOrderStatus
    return matchesSearch && matchesStatus
  })

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(courseSearch.toLowerCase())
  )

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
              Enter admin token to access expanded dashboard
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
              Access Expanded Dashboard
            </Button>
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
            IImagined.ai - Complete Admin Dashboard
          </h1>
          <p className="text-gray-400">Full site management, analytics, and business intelligence</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Users</p>
                  <p className="text-2xl font-bold">{dashboardStats.totalUsers.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Revenue</p>
                  <p className="text-2xl font-bold">${dashboardStats.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Orders</p>
                  <p className="text-2xl font-bold">{dashboardStats.totalOrders.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-sm text-gray-400">Conversion Rate</p>
                  <p className="text-2xl font-bold">{dashboardStats.conversionRate}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700 grid grid-cols-4 lg:grid-cols-8 w-full">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gray-700">
              <BarChart3 className="w-4 h-4 mr-1" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-gray-700">
              <Users className="w-4 h-4 mr-1" />
              Users
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-gray-700">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-gray-700">
              <BookOpen className="w-4 h-4 mr-1" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-gray-700">
              <FileText className="w-4 h-4 mr-1" />
              Content
            </TabsTrigger>
            <TabsTrigger value="marketing" className="data-[state=active]:bg-gray-700">
              <Mail className="w-4 h-4 mr-1" />
              Marketing
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-gray-700">
              <PieChart className="w-4 h-4 mr-1" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gray-700">
              <Settings className="w-4 h-4 mr-1" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Revenue Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>This Month</span>
                      <span className="text-2xl font-bold text-green-400">$247,563</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Last Month</span>
                      <span className="text-lg">$198,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Growth</span>
                      <span className="text-green-400">+24.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top Courses */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    Top Performing Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {courses.slice(0, 3).map((course, index) => (
                      <div key={course.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded">
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-gray-400">{course.enrollments} students</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${course.revenue.toLocaleString()}</p>
                          <p className="text-sm text-yellow-400">★ {course.rating}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>New order: Instagram Ignited - $297</span>
                    <span className="text-sm text-gray-400 ml-auto">2 minutes ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>New user registration: sarah.johnson@email.com</span>
                    <span className="text-sm text-gray-400 ml-auto">15 minutes ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Course completion: Digital Products Masterclass</span>
                    <span className="text-sm text-gray-400 ml-auto">1 hour ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage user accounts, roles, and access permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* User Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Input
                    placeholder="Search users..."
                    value={userSearch}
                    onChange={(e) => setUserSearch(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white flex-1"
                  />
                  <select
                    value={selectedUserRole}
                    onChange={(e) => setSelectedUserRole(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                  >
                    <option value="all">All Roles</option>
                    <option value="customer">Customer</option>
                    <option value="vip">VIP</option>
                    <option value="affiliate">Affiliate</option>
                  </select>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>

                {/* Users List */}
                <div className="space-y-4">
                  {filteredUsers.map((user) => (
                    <Card key={user.id} className="bg-gray-700/50 border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">{user.name}</h3>
                              <Badge variant={user.role === 'vip' ? 'default' : 'secondary'}>
                                {user.role.toUpperCase()}
                              </Badge>
                              <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                                {user.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-400 mb-2">
                              <span>{user.email}</span>
                              <span>Orders: {user.ordersCount}</span>
                              <span>Spent: ${user.totalSpent}</span>
                              <span>Last Login: {new Date(user.lastLogin).toLocaleDateString()}</span>
                            </div>
                            <div className="flex gap-2">
                              {user.courses.map((course) => (
                                <Badge key={course} variant="outline" className="text-xs">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <select
                              value={user.status}
                              onChange={(e) => updateUserStatus(user.id, e.target.value as any)}
                              className="bg-gray-600 border border-gray-500 rounded px-2 py-1 text-sm"
                            >
                              <option value="active">Active</option>
                              <option value="suspended">Suspended</option>
                              <option value="banned">Banned</option>
                            </select>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Mail className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-green-400" />
                  Order Management
                </CardTitle>
                <CardDescription>
                  View and manage all customer orders and transactions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Order Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Input
                    placeholder="Search orders..."
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white flex-1"
                  />
                  <select
                    value={selectedOrderStatus}
                    onChange={(e) => setSelectedOrderStatus(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white"
                  >
                    <option value="all">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="refunded">Refunded</option>
                    <option value="failed">Failed</option>
                  </select>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>

                {/* Orders List */}
                <div className="space-y-4">
                  {filteredOrders.map((order) => (
                    <Card key={order.id} className="bg-gray-700/50 border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">#{order.id}</h3>
                              <Badge variant={
                                order.status === 'completed' ? 'default' :
                                order.status === 'pending' ? 'secondary' :
                                order.status === 'refunded' ? 'outline' : 'destructive'
                              }>
                                {order.status.toUpperCase()}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                              <span>{order.userEmail}</span>
                              <span>{order.product}</span>
                              <span>${order.amount}</span>
                              <span>{order.paymentMethod.toUpperCase()}</span>
                              <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {order.status === 'completed' && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => processRefund(order.id)}
                                className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                              >
                                Refund
                              </Button>
                            )}
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  Course Management
                </CardTitle>
                <CardDescription>
                  Manage your courses, content, and student progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Course Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <Input
                    placeholder="Search courses..."
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white flex-1"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    New Course
                  </Button>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="bg-gray-700/50 border-gray-600">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <Badge variant={course.status === 'active' ? 'default' : 'secondary'}>
                              {course.status}
                            </Badge>
                          </div>
                          <div className="text-2xl font-bold text-green-400 mb-2">
                            ${course.price}
                          </div>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-400 mb-4">
                          <div className="flex justify-between">
                            <span>Enrollments:</span>
                            <span>{course.enrollments.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Revenue:</span>
                            <span className="text-green-400">${course.revenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Completion:</span>
                            <span>{course.completionRate}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Rating:</span>
                            <span className="text-yellow-400">★ {course.rating}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateCourseStatus(
                              course.id, 
                              course.status === 'active' ? 'draft' : 'active'
                            )}
                          >
                            {course.status === 'active' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                          <Button variant="outline" size="sm">
                            <BarChart3 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Blog Management */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    Blog Posts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Published Posts</span>
                      <span className="font-bold">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Draft Posts</span>
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total Views</span>
                      <span className="font-bold">156,847</span>
                    </div>
                    <Button className="w-full mt-4">
                      <Link2 className="w-4 h-4 mr-2" />
                      Manage Blog Posts
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Media Library */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Image className="w-5 h-5 text-purple-400" />
                    Media Library
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Total Files</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Storage Used</span>
                      <span className="font-bold">2.4 GB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Storage Limit</span>
                      <span className="font-bold">10 GB</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                    <Button className="w-full mt-4">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Marketing Tab */}
          <TabsContent value="marketing" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-400" />
                  Email Campaigns
                </CardTitle>
                <CardDescription>
                  Manage email marketing campaigns and subscriber lists
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Campaign
                  </Button>
                </div>

                {/* Campaign List */}
                <div className="space-y-4">
                  {campaigns.map((campaign) => (
                    <Card key={campaign.id} className="bg-gray-700/50 border-gray-600">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold">{campaign.name}</h3>
                              <Badge variant={
                                campaign.status === 'sent' ? 'default' :
                                campaign.status === 'scheduled' ? 'secondary' : 'outline'
                              }>
                                {campaign.status.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-gray-400 mb-2">{campaign.subject}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                              <span>Recipients: {campaign.recipients.toLocaleString()}</span>
                              {campaign.status === 'sent' && (
                                <>
                                  <span>Open Rate: {campaign.openRate}%</span>
                                  <span>Click Rate: {campaign.clickRate}%</span>
                                </>
                              )}
                              {campaign.sentAt && (
                                <span>Sent: {new Date(campaign.sentAt).toLocaleDateString()}</span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <BarChart3 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Traffic Analytics */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Traffic Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Visitors</span>
                      <span className="text-2xl font-bold">45,782</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Page Views</span>
                      <span className="text-xl font-bold">156,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Bounce Rate</span>
                      <span className="text-lg">38.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Avg. Session</span>
                      <span className="text-lg">5:24</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conversion Analytics */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Conversion Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Conversion Rate</span>
                      <span className="text-2xl font-bold text-green-400">4.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Avg. Order Value</span>
                      <span className="text-xl font-bold">${dashboardStats.avgOrderValue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Customer LTV</span>
                      <span className="text-lg">${dashboardStats.ltv}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Churn Rate</span>
                      <span className="text-lg">{dashboardStats.churnRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* General Settings */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-gray-400" />
                    General Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Site Name</label>
                    <Input defaultValue="IImagined.ai" className="bg-gray-700 border-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Site Description</label>
                    <Input defaultValue="Creating Content. Building Products. Sharing My Journey." className="bg-gray-700 border-gray-600" />
                  </div>
                  <Button className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-red-400" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Fortress Protection</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Rate Limiting</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Bot Detection</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>DevTools Blocking</span>
                    <Switch defaultChecked />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Shield className="w-4 h-4 mr-2" />
                    Security Dashboard
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}