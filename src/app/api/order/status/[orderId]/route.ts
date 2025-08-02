import { NextRequest, NextResponse } from 'next/server';

/**
 * Order Status API
 * Allows customers to check their payment status and order details
 */

interface OrderStatus {
  orderId: string;
  status: 'pending' | 'paid' | 'completed' | 'failed' | 'expired';
  paymentMethod: 'nowpayments' | 'direct_wallet';
  productId: string;
  productName: string;
  amountUsd: number;
  cryptoCurrency?: string;
  cryptoAmount?: number;
  paymentAddress?: string;
  txHash?: string;
  confirmations?: number;
  requiredConfirmations?: number;
  createdAt: string;
  expiresAt?: string;
  completedAt?: string;
  customerEmail: string;
  accessGranted: boolean;
  accessUrl?: string;
  downloadLinks?: string[];
  supportInfo: {
    email: string;
    instructions: string[];
  };
}

// Mock database function - replace with real database in production
async function getOrderStatus(orderId: string): Promise<OrderStatus | null> {
  // In production, query your database
  console.log('Fetching order status for:', orderId);
  
  // Mock order data based on order ID
  const mockOrders: Record<string, OrderStatus> = {
    'ord_2025_001': {
      orderId: 'ord_2025_001',
      status: 'completed',
      paymentMethod: 'nowpayments',
      productId: 'instagram-ignited',
      productName: 'Instagram Ignited: 0 to 500K Followers',
      amountUsd: 297,
      cryptoCurrency: 'BTC',
      cryptoAmount: 0.00512,
      paymentAddress: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      txHash: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z',
      confirmations: 6,
      requiredConfirmations: 3,
      createdAt: '2025-01-15T10:30:00Z',
      expiresAt: '2025-01-15T11:30:00Z',
      completedAt: '2025-01-15T10:45:00Z',
      customerEmail: 'customer@example.com',
      accessGranted: true,
      accessUrl: 'https://iimagined.ai/access/instagram-ignited?token=abc123xyz',
      downloadLinks: [
        'https://iimagined.ai/downloads/instagram-ignited-modules.zip',
        'https://iimagined.ai/downloads/bonus-materials.zip'
      ],
      supportInfo: {
        email: 'support@iimagined.ai',
        instructions: [
          'Your payment has been confirmed and course access has been granted',
          'Check your email for the access link and download instructions',
          'If you need help, contact support with your order ID'
        ]
      }
    },
    'ord_2025_002': {
      orderId: 'ord_2025_002',
      status: 'paid',
      paymentMethod: 'nowpayments',
      productId: 'digital-products',
      productName: 'Digital Products Masterclass',
      amountUsd: 197,
      cryptoCurrency: 'USDT',
      cryptoAmount: 197.50,
      paymentAddress: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE',
      txHash: '9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a',
      confirmations: 2,
      requiredConfirmations: 3,
      createdAt: '2025-01-15T13:20:00Z',
      expiresAt: '2025-01-15T14:20:00Z',
      customerEmail: 'customer2@example.com',
      accessGranted: false,
      supportInfo: {
        email: 'support@iimagined.ai',
        instructions: [
          'Payment received and is being confirmed on the blockchain',
          'Access will be granted automatically once confirmations are complete',
          'This usually takes 10-30 minutes depending on network congestion'
        ]
      }
    },
    'ord_2025_003': {
      orderId: 'ord_2025_003',
      status: 'pending',
      paymentMethod: 'direct_wallet',
      productId: 'ai-automation',
      productName: 'AI Automation Suite',
      amountUsd: 497,
      cryptoCurrency: 'ETH',
      cryptoAmount: 1.234,
      paymentAddress: '0xCe469428F94D48d433489374111ca80Df880FA75',
      confirmations: 0,
      requiredConfirmations: 12,
      createdAt: '2025-01-15T14:00:00Z',
      expiresAt: '2025-01-15T15:00:00Z',
      customerEmail: 'customer3@example.com',
      accessGranted: false,
      supportInfo: {
        email: 'support@iimagined.ai',
        instructions: [
          'Waiting for payment to your direct wallet address',
          'Send exactly 1.234 ETH to the provided address',
          'Email your transaction hash to support@iimagined.ai',
          'Include your order ID in the email for faster processing'
        ]
      }
    },
    'ord_2025_004': {
      orderId: 'ord_2025_004',
      status: 'expired',
      paymentMethod: 'nowpayments',
      productId: 'comfyui',
      productName: 'ComfyUI Workflows',
      amountUsd: 97,
      cryptoCurrency: 'TRX',
      cryptoAmount: 2847.56,
      paymentAddress: 'TLPpXqjJjsH6yoJqMJqwKnXE9pKyZGCZD',
      confirmations: 0,
      requiredConfirmations: 1,
      createdAt: '2025-01-14T16:30:00Z',
      expiresAt: '2025-01-14T17:30:00Z',
      customerEmail: 'customer4@example.com',
      accessGranted: false,
      supportInfo: {
        email: 'support@iimagined.ai',
        instructions: [
          'This payment has expired after 60 minutes',
          'You can create a new order to try again',
          'If you already sent payment, contact support with transaction details',
          'Expired payments are typically refunded within 24-48 hours'
        ]
      }
    }
  };
  
  return mockOrders[orderId] || null;
}

function getStatusMessage(status: OrderStatus['status']): { title: string; description: string; color: string } {
  switch (status) {
    case 'pending':
      return {
        title: '⏳ Payment Pending',
        description: 'Waiting for your payment to be received',
        color: 'yellow'
      };
    case 'paid':
      return {
        title: '🔄 Payment Confirming',
        description: 'Payment received, waiting for blockchain confirmations',
        color: 'blue'
      };
    case 'completed':
      return {
        title: '✅ Order Complete',
        description: 'Payment confirmed and course access granted',
        color: 'green'
      };
    case 'failed':
      return {
        title: '❌ Payment Failed',
        description: 'Payment could not be processed',
        color: 'red'
      };
    case 'expired':
      return {
        title: '⏰ Payment Expired',
        description: 'Payment window has expired',
        color: 'red'
      };
    default:
      return {
        title: '❓ Unknown Status',
        description: 'Unable to determine payment status',
        color: 'gray'
      };
  }
}

function getBlockchainExplorerUrl(cryptoCurrency: string, txHash?: string, address?: string): string | undefined {
  if (!txHash && !address) return undefined;
  
  const explorers = {
    BTC: 'https://blockstream.info',
    ETH: 'https://etherscan.io',
    USDT: 'https://etherscan.io',
    USDC: 'https://etherscan.io',
    SOL: 'https://solscan.io',
    TRX: 'https://tronscan.org',
    LTC: 'https://blockchair.com/litecoin',
    XRP: 'https://xrpscan.com'
  };
  
  const baseUrl = explorers[cryptoCurrency as keyof typeof explorers];
  if (!baseUrl) return undefined;
  
  if (txHash) {
    return `${baseUrl}/tx/${txHash}`;
  } else if (address) {
    const addressPath = cryptoCurrency === 'SOL' ? 'account' : 'address';
    return `${baseUrl}/${addressPath}/${address}`;
  }
  
  return undefined;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    
    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }
    
    // Get order status from database
    const order = await getOrderStatus(orderId);
    
    if (!order) {
      return NextResponse.json(
        { 
          error: 'Order not found',
          message: 'The specified order ID does not exist or has been removed'
        },
        { status: 404 }
      );
    }
    
    // Get status display information
    const statusInfo = getStatusMessage(order.status);
    
    // Get blockchain explorer URL
    const explorerUrl = getBlockchainExplorerUrl(
      order.cryptoCurrency!,
      order.txHash,
      order.paymentAddress
    );
    
    // Calculate time remaining if order is pending
    let timeRemaining = null;
    if (order.status === 'pending' && order.expiresAt) {
      const now = new Date().getTime();
      const expiry = new Date(order.expiresAt).getTime();
      const remaining = Math.max(0, expiry - now);
      
      if (remaining > 0) {
        const minutes = Math.floor(remaining / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        timeRemaining = `${minutes}m ${seconds}s`;
      }
    }
    
    // Return order status with all relevant information
    return NextResponse.json({
      success: true,
      order: {
        ...order,
        statusInfo,
        explorerUrl,
        timeRemaining,
        progress: {
          steps: [
            {
              title: 'Order Created',
              completed: true,
              timestamp: order.createdAt
            },
            {
              title: 'Payment Received',
              completed: ['paid', 'completed'].includes(order.status),
              timestamp: order.status === 'completed' ? order.completedAt : undefined
            },
            {
              title: 'Payment Confirmed',
              completed: order.status === 'completed',
              timestamp: order.completedAt
            },
            {
              title: 'Access Granted',
              completed: order.accessGranted,
              timestamp: order.accessGranted ? order.completedAt : undefined
            }
          ]
        }
      },
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Order status fetch error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch order status',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Also handle POST for order status updates (from internal systems)
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ orderId: string }> }
) {
  try {
    const { orderId } = await params;
    const body = await request.json();
    
    // This endpoint could be used by your internal systems to update order status
    // For example, when manual verification is complete for direct wallet payments
    
    console.log('Order status update request:', {
      orderId,
      updateData: body
    });
    
    // In production, you would:
    // 1. Verify the request is from an authorized source
    // 2. Update the order status in the database
    // 3. Send notifications if needed
    // 4. Grant access if payment is confirmed
    
    return NextResponse.json({
      success: true,
      message: 'Order status update received',
      orderId,
      updatedAt: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Order status update error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to update order status',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}