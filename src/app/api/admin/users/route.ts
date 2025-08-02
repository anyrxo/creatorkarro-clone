import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Users API
 * Manages user accounts, roles, and permissions
 */

interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'vip' | 'affiliate';
  status: 'active' | 'suspended' | 'banned';
  registeredAt: string;
  lastLogin: string;
  totalSpent: number;
  ordersCount: number;
  courses: string[];
  affiliateCode?: string;
  referrals?: number;
}

// Mock user data - replace with database queries
const getUsers = async (): Promise<User[]> => {
  return [
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
      courses: ['instagram-ignited', 'digital-products'],
      affiliateCode: 'MARCUS2025',
      referrals: 12
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
      courses: ['instagram-ignited', 'digital-products', 'ai-automation', 'comfyui'],
      affiliateCode: 'ALEX2025',
      referrals: 47
    },
    {
      id: '4',
      email: 'emma.davis@email.com',
      name: 'Emma Davis',
      role: 'customer',
      status: 'suspended',
      registeredAt: '2024-09-12',
      lastLogin: '2025-01-10T14:20:00Z',
      totalSpent: 97,
      ordersCount: 1,
      courses: []
    },
    {
      id: '5',
      email: 'john.smith@email.com',
      name: 'John Smith',
      role: 'vip',
      status: 'active',
      registeredAt: '2024-08-05',
      lastLogin: '2025-01-15T16:30:00Z',
      totalSpent: 894,
      ordersCount: 4,
      courses: ['instagram-ignited', 'digital-products', 'ai-automation']
    }
  ];
};

const getUserStats = async () => {
  const users = await getUsers();
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  
  return {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'active').length,
    newUsersThisMonth: users.filter(u => new Date(u.registeredAt) > thirtyDaysAgo).length,
    vipUsers: users.filter(u => u.role === 'vip').length,
    affiliateUsers: users.filter(u => u.role === 'affiliate').length,
    totalRevenue: users.reduce((sum, u) => sum + u.totalSpent, 0),
    avgOrderValue: users.reduce((sum, u) => sum + u.totalSpent, 0) / users.reduce((sum, u) => sum + u.ordersCount, 0),
    topSpenders: users.sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 5)
  };
};

function checkAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const token = request.nextUrl.searchParams.get('token');
  return authHeader?.includes('Onfroy1738!') || token === 'Onfroy1738!';
}

export async function GET(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const users = await getUsers();
    const stats = await getUserStats();

    // Apply filters
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const role = searchParams.get('role');
    const status = searchParams.get('status');

    let filteredUsers = users;

    if (search) {
      filteredUsers = filteredUsers.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (role && role !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.role === role);
    }

    if (status && status !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.status === status);
    }

    return NextResponse.json({
      users: filteredUsers,
      stats,
      pagination: {
        total: filteredUsers.length,
        page: 1,
        limit: 50
      }
    });

  } catch (error) {
    console.error('Failed to fetch users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { action, userId, data } = body;

    switch (action) {
      case 'create_user':
        // In a real implementation, this would create a user in the database
        console.log('Creating user:', data);
        return NextResponse.json({
          success: true,
          message: 'User created successfully',
          userId: `user_${Date.now()}`
        });

      case 'update_status':
        // In a real implementation, this would update user status in database
        console.log(`Updating user ${userId} status to ${data.status}`);
        return NextResponse.json({
          success: true,
          message: `User status updated to ${data.status}`
        });

      case 'send_email':
        // In a real implementation, this would send an email to the user
        console.log(`Sending email to user ${userId}:`, data.subject);
        return NextResponse.json({
          success: true,
          message: 'Email sent successfully'
        });

      case 'bulk_action':
        // Handle bulk operations
        console.log(`Bulk action ${data.action} on users:`, data.userIds);
        return NextResponse.json({
          success: true,
          message: `Bulk ${data.action} completed for ${data.userIds.length} users`
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process user action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { userId, updates } = body;

    // In a real implementation, this would update the user in the database
    console.log(`Updating user ${userId}:`, updates);

    const allowedUpdates = ['name', 'email', 'role', 'status'];
    const validUpdates = Object.keys(updates).filter(key => allowedUpdates.includes(key));

    if (validUpdates.length === 0) {
      return NextResponse.json({ error: 'No valid updates provided' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'User updated successfully',
      updatedFields: validUpdates
    });

  } catch (error) {
    console.error('Failed to update user:', error);
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    // In a real implementation, this would soft delete or archive the user
    console.log(`Deleting user ${userId}`);

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully'
    });

  } catch (error) {
    console.error('Failed to delete user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}