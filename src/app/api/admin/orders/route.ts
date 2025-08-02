import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Orders API
 * Manages customer orders, refunds, and transactions
 */

interface Order {
  id: string;
  userId: string;
  userEmail: string;
  userName: string;
  amount: number;
  status: 'completed' | 'pending' | 'refunded' | 'failed';
  product: string;
  productId: string;
  createdAt: string;
  paymentMethod: 'stripe' | 'paypal';
  transactionId: string;
  couponCode?: string;
  discount?: number;
  affiliateCode?: string;
  refundReason?: string;
  refundedAt?: string;
}

// Mock order data - replace with database queries
const getOrders = async (): Promise<Order[]> => {
  return [
    {
      id: 'ord_2025_001',
      userId: '1',
      userEmail: 'marcus.rivera@email.com',
      userName: 'Marcus Rivera',
      amount: 297,
      status: 'completed',
      product: 'Instagram Ignited',
      productId: 'instagram-ignited',
      createdAt: '2025-01-15T08:30:00Z',
      paymentMethod: 'stripe',
      transactionId: 'pi_1234567890',
      couponCode: 'EARLY25',
      discount: 50,
      affiliateCode: 'ALEX2025'
    },
    {
      id: 'ord_2025_002',
      userId: '2',
      userEmail: 'sarah.johnson@email.com',
      userName: 'Sarah Johnson',
      amount: 197,
      status: 'completed',
      product: 'Digital Products Masterclass',
      productId: 'digital-products',
      createdAt: '2025-01-14T14:20:00Z',
      paymentMethod: 'paypal',
      transactionId: 'paypal_9876543210'
    },
    {
      id: 'ord_2025_003',
      userId: '3',
      userEmail: 'alex.chen@email.com',
      userName: 'Alex Chen',
      amount: 497,
      status: 'pending',
      product: 'AI Automation Suite',
      productId: 'ai-automation',
      createdAt: '2025-01-15T11:45:00Z',
      paymentMethod: 'stripe',
      transactionId: 'pi_0987654321'
    },
    {
      id: 'ord_2025_004',
      userId: '4',
      userEmail: 'emma.davis@email.com',
      userName: 'Emma Davis',
      amount: 97,
      status: 'refunded',
      product: 'ComfyUI Workflows',
      productId: 'comfyui',
      createdAt: '2025-01-12T09:15:00Z',
      paymentMethod: 'stripe',
      transactionId: 'pi_1122334455',
      refundReason: 'Customer requested refund within 30 days',
      refundedAt: '2025-01-13T10:30:00Z'
    },
    {
      id: 'ord_2025_005',
      userId: '5',
      userEmail: 'john.smith@email.com',
      userName: 'John Smith',
      amount: 397,
      status: 'completed',
      product: 'Instagram Ignited + Digital Products Bundle',
      productId: 'bundle-ig-dp',
      createdAt: '2025-01-13T16:45:00Z',
      paymentMethod: 'stripe',
      transactionId: 'pi_5566778899',
      couponCode: 'BUNDLE20',
      discount: 100
    },
    {
      id: 'ord_2025_006',
      userId: '1',
      userEmail: 'marcus.rivera@email.com',
      userName: 'Marcus Rivera',
      amount: 300,
      status: 'failed',
      product: 'AI Automation Suite',
      productId: 'ai-automation',
      createdAt: '2025-01-11T12:30:00Z',
      paymentMethod: 'stripe',
      transactionId: 'pi_failed_123'
    }
  ];
};

const getOrderStats = async () => {
  const orders = await getOrders();
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  const completedOrders = orders.filter(o => o.status === 'completed');
  const thisMonthOrders = orders.filter(o => new Date(o.createdAt) > thirtyDaysAgo);
  const todayOrders = orders.filter(o => new Date(o.createdAt) > today);
  
  return {
    totalOrders: orders.length,
    completedOrders: completedOrders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    refundedOrders: orders.filter(o => o.status === 'refunded').length,
    failedOrders: orders.filter(o => o.status === 'failed').length,
    totalRevenue: completedOrders.reduce((sum, o) => sum + o.amount, 0),
    avgOrderValue: completedOrders.reduce((sum, o) => sum + o.amount, 0) / completedOrders.length,
    thisMonthRevenue: thisMonthOrders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.amount, 0),
    todayOrders: todayOrders.length,
    todayRevenue: todayOrders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.amount, 0),
    topProducts: getTopProducts(orders),
    revenueByDay: getRevenueByDay(orders),
    paymentMethods: {
      stripe: orders.filter(o => o.paymentMethod === 'stripe').length,
      paypal: orders.filter(o => o.paymentMethod === 'paypal').length
    }
  };
};

const getTopProducts = (orders: Order[]) => {
  const productStats: { [key: string]: { name: string; sales: number; revenue: number } } = {};
  
  orders.filter(o => o.status === 'completed').forEach(order => {
    if (!productStats[order.productId]) {
      productStats[order.productId] = {
        name: order.product,
        sales: 0,
        revenue: 0
      };
    }
    productStats[order.productId].sales += 1;
    productStats[order.productId].revenue += order.amount;
  });
  
  return Object.values(productStats).sort((a, b) => b.revenue - a.revenue);
};

const getRevenueByDay = (orders: Order[]) => {
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();
  
  return last7Days.map(date => {
    const dayOrders = orders.filter(o => 
      o.status === 'completed' && 
      o.createdAt.startsWith(date)
    );
    return {
      date,
      revenue: dayOrders.reduce((sum, o) => sum + o.amount, 0),
      orders: dayOrders.length
    };
  });
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

    const orders = await getOrders();
    const stats = await getOrderStats();

    // Apply filters
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const product = searchParams.get('product');
    const paymentMethod = searchParams.get('paymentMethod');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    let filteredOrders = orders;

    if (search) {
      filteredOrders = filteredOrders.filter(order => 
        order.userEmail.toLowerCase().includes(search.toLowerCase()) ||
        order.userName.toLowerCase().includes(search.toLowerCase()) ||
        order.product.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toLowerCase().includes(search.toLowerCase()) ||
        order.transactionId.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status && status !== 'all') {
      filteredOrders = filteredOrders.filter(order => order.status === status);
    }

    if (product && product !== 'all') {
      filteredOrders = filteredOrders.filter(order => order.productId === product);
    }

    if (paymentMethod && paymentMethod !== 'all') {
      filteredOrders = filteredOrders.filter(order => order.paymentMethod === paymentMethod);
    }

    if (startDate) {
      filteredOrders = filteredOrders.filter(order => 
        new Date(order.createdAt) >= new Date(startDate)
      );
    }

    if (endDate) {
      filteredOrders = filteredOrders.filter(order => 
        new Date(order.createdAt) <= new Date(endDate)
      );
    }

    // Sort by creation date (newest first)
    filteredOrders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      orders: filteredOrders,
      stats,
      pagination: {
        total: filteredOrders.length,
        page: 1,
        limit: 50
      }
    });

  } catch (error) {
    console.error('Failed to fetch orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
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
    const { action, orderId, data } = body;

    switch (action) {
      case 'process_refund':
        // In a real implementation, this would process refund via payment provider
        console.log(`Processing refund for order ${orderId}:`, data);
        
        // Simulate refund processing
        const refundAmount = data.amount || 'full';
        const refundReason = data.reason || 'Admin initiated refund';
        
        return NextResponse.json({
          success: true,
          message: `Refund processed successfully for order ${orderId}`,
          refundAmount,
          refundId: `ref_${Date.now()}`,
          processedAt: new Date().toISOString()
        });

      case 'update_status':
        // In a real implementation, this would update order status in database
        console.log(`Updating order ${orderId} status to ${data.status}`);
        return NextResponse.json({
          success: true,
          message: 'Order status updated successfully'
        });

      case 'resend_receipt':
        // In a real implementation, this would resend the receipt email
        console.log(`Resending receipt for order ${orderId}`);
        return NextResponse.json({
          success: true,
          message: 'Receipt resent successfully'
        });

      case 'add_note':
        // In a real implementation, this would add a note to the order
        console.log(`Adding note to order ${orderId}:`, data.note);
        return NextResponse.json({
          success: true,
          message: 'Note added to order'
        });

      case 'bulk_export':
        // Handle bulk export
        console.log('Exporting orders:', data.orderIds);
        return NextResponse.json({
          success: true,
          message: `Exported ${data.orderIds.length} orders`,
          downloadUrl: '/api/admin/orders/export?token=temp_export_token'
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process order action:', error);
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
    const { orderId, updates } = body;

    // In a real implementation, this would update the order in the database
    console.log(`Updating order ${orderId}:`, updates);

    const allowedUpdates = ['status', 'notes', 'trackingNumber'];
    const validUpdates = Object.keys(updates).filter(key => allowedUpdates.includes(key));

    if (validUpdates.length === 0) {
      return NextResponse.json({ error: 'No valid updates provided' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Order updated successfully',
      updatedFields: validUpdates
    });

  } catch (error) {
    console.error('Failed to update order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}