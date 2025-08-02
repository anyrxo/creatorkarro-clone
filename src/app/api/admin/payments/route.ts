import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Payments API
 * Manages payment processing, cryptocurrency payments via NOWPayments, and transaction monitoring
 */

interface PaymentProvider {
  id: string;
  name: string;
  type: 'fiat' | 'crypto' | 'hybrid';
  status: 'active' | 'inactive' | 'testing';
  processingFee: number;
  supportedCurrencies: string[];
  monthlyVolume: number;
  monthlyTransactions: number;
  successRate: number;
  avgProcessingTime: string;
  lastTransaction: string;
}

interface CryptoPayment {
  id: string;
  orderId: string;
  amount: number;
  currency: string;
  cryptoAmount: number;
  cryptoCurrency: string;
  status: 'waiting' | 'confirming' | 'confirmed' | 'sending' | 'partially_paid' | 'finished' | 'failed' | 'refunded' | 'expired';
  paymentAddress: string;
  txHash?: string;
  confirmations: number;
  requiredConfirmations: number;
  createdAt: string;
  expiresAt: string;
  completedAt?: string;
  customerEmail: string;
  productName: string;
}

interface PaymentStats {
  totalRevenue: number;
  totalTransactions: number;
  successfulTransactions: number;
  failedTransactions: number;
  pendingTransactions: number;
  averageTransactionValue: number;
  cryptoPercentage: number;
  fiatPercentage: number;
  topCryptoCurrencies: Array<{
    currency: string;
    transactions: number;
    volume: number;
    percentage: number;
  }>;
}

// NOWPayments configuration
const NOWPAYMENTS_CONFIG = {
  apiKey: 'FQTHSZD-1G6MC7D-NN5K7AQ-5PSGR2V',
  publicKey: '59999bf5-b303-4e10-bce1-70fabe96d81a',
  baseUrl: 'https://api.nowpayments.io/v1',
  sandboxUrl: 'https://api-sandbox.nowpayments.io/v1'
};

// Mock payment providers data
const getPaymentProviders = async (): Promise<PaymentProvider[]> => {
  return [
    {
      id: 'stripe',
      name: 'Stripe',
      type: 'fiat',
      status: 'active',
      processingFee: 2.9,
      supportedCurrencies: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
      monthlyVolume: 847623,
      monthlyTransactions: 3241,
      successRate: 97.8,
      avgProcessingTime: '2-3 seconds',
      lastTransaction: '2025-01-15T14:32:00Z'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      type: 'fiat',
      status: 'active',
      processingFee: 3.5,
      supportedCurrencies: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY'],
      monthlyVolume: 234567,
      monthlyTransactions: 892,
      successRate: 95.2,
      avgProcessingTime: '5-10 seconds',
      lastTransaction: '2025-01-15T13:45:00Z'
    },
    {
      id: 'nowpayments',
      name: 'NOWPayments (Crypto)',
      type: 'crypto',
      status: 'active',
      processingFee: 1.5,
      supportedCurrencies: ['BTC', 'ETH', 'USDT', 'USDC', 'LTC', 'XRP', 'ADA', 'DOT', 'MATIC', 'TRX'],
      monthlyVolume: 156789,
      monthlyTransactions: 234,
      successRate: 98.9,
      avgProcessingTime: '10-60 minutes',
      lastTransaction: '2025-01-15T12:18:00Z'
    }
  ];
};

// Mock crypto payments data
const getCryptoPayments = async (): Promise<CryptoPayment[]> => {
  return [
    {
      id: 'np_001',
      orderId: 'ord_2025_007',
      amount: 297,
      currency: 'USD',
      cryptoAmount: 0.00512,
      cryptoCurrency: 'BTC',
      status: 'finished',
      paymentAddress: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      txHash: '1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z',
      confirmations: 6,
      requiredConfirmations: 3,
      createdAt: '2025-01-15T10:30:00Z',
      expiresAt: '2025-01-15T11:30:00Z',
      completedAt: '2025-01-15T10:45:00Z',
      customerEmail: 'crypto.user@email.com',
      productName: 'Instagram Ignited'
    },
    {
      id: 'np_002',
      orderId: 'ord_2025_008',
      amount: 197,
      currency: 'USD',
      cryptoAmount: 197.50,
      cryptoCurrency: 'USDT',
      status: 'confirming',
      paymentAddress: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE',
      txHash: '9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a',
      confirmations: 2,
      requiredConfirmations: 3,
      createdAt: '2025-01-15T13:20:00Z',
      expiresAt: '2025-01-15T14:20:00Z',
      customerEmail: 'ethereum.fan@email.com',
      productName: 'Digital Products Masterclass'
    },
    {
      id: 'np_003',
      orderId: 'ord_2025_009',
      amount: 497,
      currency: 'USD',
      cryptoAmount: 1.234,
      cryptoCurrency: 'ETH',
      status: 'waiting',
      paymentAddress: '0x742d35Cc6434C0532925a3b8D9c7D5E7aE3e27f9',
      confirmations: 0,
      requiredConfirmations: 12,
      createdAt: '2025-01-15T14:00:00Z',
      expiresAt: '2025-01-15T15:00:00Z',
      customerEmail: 'defi.trader@email.com',
      productName: 'AI Automation Suite'
    },
    {
      id: 'np_004',
      orderId: 'ord_2025_010',
      amount: 97,
      currency: 'USD',
      cryptoAmount: 2847.56,
      cryptoCurrency: 'TRX',
      status: 'expired',
      paymentAddress: 'TLPpXqjJjsH6yoJqMJqwKnXE9pKyZGCZD',
      confirmations: 0,
      requiredConfirmations: 1,
      createdAt: '2025-01-14T16:30:00Z',
      expiresAt: '2025-01-14T17:30:00Z',
      customerEmail: 'tron.holder@email.com',
      productName: 'ComfyUI Workflows'
    }
  ];
};

const getPaymentStats = async (): Promise<PaymentStats> => {
  const providers = await getPaymentProviders();
  const cryptoPayments = await getCryptoPayments();
  
  const totalRevenue = providers.reduce((sum, p) => sum + p.monthlyVolume, 0);
  const totalTransactions = providers.reduce((sum, p) => sum + p.monthlyTransactions, 0);
  const cryptoVolume = providers.find(p => p.id === 'nowpayments')?.monthlyVolume || 0;
  
  return {
    totalRevenue,
    totalTransactions,
    successfulTransactions: Math.floor(totalTransactions * 0.97),
    failedTransactions: Math.floor(totalTransactions * 0.02),
    pendingTransactions: Math.floor(totalTransactions * 0.01),
    averageTransactionValue: Math.round(totalRevenue / totalTransactions),
    cryptoPercentage: Math.round((cryptoVolume / totalRevenue) * 100),
    fiatPercentage: Math.round(((totalRevenue - cryptoVolume) / totalRevenue) * 100),
    topCryptoCurrencies: [
      { currency: 'BTC', transactions: 67, volume: 98432, percentage: 62.8 },
      { currency: 'ETH', transactions: 45, volume: 34567, percentage: 22.0 },
      { currency: 'USDT', transactions: 89, volume: 18943, percentage: 12.1 },
      { currency: 'USDC', transactions: 23, volume: 4847, percentage: 3.1 }
    ]
  };
};

// NOWPayments API functions
const nowPaymentsAPI = {
  async getStatus() {
    try {
      // In a real implementation, you would make an actual API call
      // const response = await fetch(`${NOWPAYMENTS_CONFIG.baseUrl}/status`, {
      //   headers: { 'x-api-key': NOWPAYMENTS_CONFIG.apiKey }
      // });
      // return await response.json();
      
      return {
        message: 'OK',
        uptime: 99.98
      };
    } catch (error) {
      console.error('NOWPayments status check failed:', error);
      return { message: 'ERROR', uptime: 0 };
    }
  },

  async getCurrencies() {
    try {
      // In a real implementation:
      // const response = await fetch(`${NOWPAYMENTS_CONFIG.baseUrl}/currencies`);
      // return await response.json();
      
      return {
        currencies: ['btc', 'eth', 'usdt', 'usdc', 'ltc', 'xrp', 'ada', 'dot', 'matic', 'trx', 'bnb', 'sol', 'avax', 'link']
      };
    } catch (error) {
      console.error('Failed to fetch NOWPayments currencies:', error);
      return { currencies: [] };
    }
  },

  async createPayment(paymentData: any) {
    try {
      // In a real implementation:
      // const response = await fetch(`${NOWPAYMENTS_CONFIG.baseUrl}/payment`, {
      //   method: 'POST',
      //   headers: {
      //     'x-api-key': NOWPAYMENTS_CONFIG.apiKey,
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(paymentData)
      // });
      // return await response.json();
      
      return {
        payment_id: `np_${Date.now()}`,
        payment_status: 'waiting',
        pay_address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        price_amount: paymentData.price_amount,
        price_currency: paymentData.price_currency,
        pay_amount: 0.00512,
        pay_currency: paymentData.pay_currency,
        order_id: paymentData.order_id,
        order_description: paymentData.order_description,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    } catch (error) {
      console.error('Failed to create NOWPayments payment:', error);
      throw error;
    }
  },

  async getPaymentStatus(paymentId: string) {
    try {
      // In a real implementation:
      // const response = await fetch(`${NOWPAYMENTS_CONFIG.baseUrl}/payment/${paymentId}`, {
      //   headers: { 'x-api-key': NOWPAYMENTS_CONFIG.apiKey }
      // });
      // return await response.json();
      
      return {
        payment_id: paymentId,
        payment_status: 'finished',
        pay_address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        price_amount: 297,
        price_currency: 'USD',
        pay_amount: 0.00512,
        pay_currency: 'BTC',
        order_id: 'ord_test_123',
        updated_at: new Date().toISOString()
      };
    } catch (error) {
      console.error('Failed to get NOWPayments status:', error);
      throw error;
    }
  }
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

    const searchParams = request.nextUrl.searchParams;
    const endpoint = searchParams.get('endpoint');
    
    switch (endpoint) {
      case 'providers':
        const providers = await getPaymentProviders();
        return NextResponse.json({ providers });
        
      case 'crypto-payments':
        const cryptoPayments = await getCryptoPayments();
        
        // Apply filters
        const status = searchParams.get('status');
        const currency = searchParams.get('currency');
        
        let filteredPayments = cryptoPayments;
        
        if (status && status !== 'all') {
          filteredPayments = filteredPayments.filter(p => p.status === status);
        }
        
        if (currency && currency !== 'all') {
          filteredPayments = filteredPayments.filter(p => p.cryptoCurrency.toLowerCase() === currency.toLowerCase());
        }
        
        return NextResponse.json({ 
          payments: filteredPayments,
          stats: {
            total: cryptoPayments.length,
            waiting: cryptoPayments.filter(p => p.status === 'waiting').length,
            confirming: cryptoPayments.filter(p => p.status === 'confirming').length,
            finished: cryptoPayments.filter(p => p.status === 'finished').length,
            expired: cryptoPayments.filter(p => p.status === 'expired').length
          }
        });
        
      case 'nowpayments-status':
        const nowStatus = await nowPaymentsAPI.getStatus();
        const currencies = await nowPaymentsAPI.getCurrencies();
        return NextResponse.json({ 
          status: nowStatus,
          supportedCurrencies: currencies.currencies,
          config: {
            publicKey: NOWPAYMENTS_CONFIG.publicKey,
            environment: 'production'
          }
        });
        
      case 'payment-stats':
        const stats = await getPaymentStats();
        return NextResponse.json({ stats });
        
      default:
        // Return overview data
        const allProviders = await getPaymentProviders();
        const allStats = await getPaymentStats();
        const recentCryptoPayments = await getCryptoPayments();
        
        return NextResponse.json({
          overview: allStats,
          providers: allProviders,
          recentCryptoPayments: recentCryptoPayments.slice(0, 5),
          nowpaymentsConfig: {
            publicKey: NOWPAYMENTS_CONFIG.publicKey,
            supportedCurrencies: ['BTC', 'ETH', 'USDT', 'USDC', 'LTC', 'XRP', 'ADA', 'DOT', 'MATIC', 'TRX']
          }
        });
    }

  } catch (error) {
    console.error('Failed to fetch payment data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment data' },
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
    const { action, data } = body;

    switch (action) {
      case 'create_crypto_payment':
        // Create new cryptocurrency payment via NOWPayments
        const paymentData = {
          price_amount: data.amount,
          price_currency: data.currency || 'USD',
          pay_currency: data.cryptoCurrency.toLowerCase(),
          order_id: data.orderId,
          order_description: data.description || 'Digital product purchase'
        };
        
        const payment = await nowPaymentsAPI.createPayment(paymentData);
        
        return NextResponse.json({
          success: true,
          message: 'Crypto payment created successfully',
          payment: {
            id: payment.payment_id,
            status: payment.payment_status,
            address: payment.pay_address,
            amount: payment.pay_amount,
            currency: payment.pay_currency.toUpperCase(),
            orderId: payment.order_id
          }
        });

      case 'check_payment_status':
        // Check status of specific payment
        const paymentStatus = await nowPaymentsAPI.getPaymentStatus(data.paymentId);
        
        return NextResponse.json({
          success: true,
          payment: {
            id: paymentStatus.payment_id,
            status: paymentStatus.payment_status,
            address: paymentStatus.pay_address,
            amount: paymentStatus.pay_amount,
            currency: paymentStatus.pay_currency,
            updatedAt: paymentStatus.updated_at
          }
        });

      case 'refund_crypto_payment':
        // Process crypto payment refund
        console.log('Processing crypto refund:', data);
        return NextResponse.json({
          success: true,
          message: 'Crypto refund initiated successfully',
          refundId: `ref_crypto_${Date.now()}`,
          estimatedTime: '24-48 hours'
        });

      case 'test_nowpayments_connection':
        // Test NOWPayments API connection
        const testStatus = await nowPaymentsAPI.getStatus();
        const testCurrencies = await nowPaymentsAPI.getCurrencies();
        
        return NextResponse.json({
          success: testStatus.message === 'OK',
          message: testStatus.message === 'OK' ? 'NOWPayments connection successful' : 'NOWPayments connection failed',
          details: {
            uptime: testStatus.uptime,
            supportedCurrencies: testCurrencies.currencies.length,
            apiKey: NOWPAYMENTS_CONFIG.apiKey.substring(0, 8) + '...',
            publicKey: NOWPAYMENTS_CONFIG.publicKey
          }
        });

      case 'update_crypto_settings':
        // Update cryptocurrency payment settings
        console.log('Updating crypto settings:', data);
        return NextResponse.json({
          success: true,
          message: 'Cryptocurrency settings updated successfully',
          settings: data
        });

      case 'enable_crypto_currency':
        // Enable/disable specific cryptocurrency
        console.log(`${data.enabled ? 'Enabling' : 'Disabling'} ${data.currency}`);
        return NextResponse.json({
          success: true,
          message: `${data.currency} ${data.enabled ? 'enabled' : 'disabled'} successfully`
        });

      case 'generate_payment_report':
        // Generate comprehensive payment report
        console.log('Generating payment report:', data);
        return NextResponse.json({
          success: true,
          message: 'Payment report generated successfully',
          reportId: `payment_report_${Date.now()}`,
          downloadUrl: '/api/admin/payments/report?id=temp_report_id'
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process payment action:', error);
    return NextResponse.json(
      { error: 'Failed to process payment action' },
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
    const { paymentId, updates } = body;

    // In a real implementation, this would update payment status/notes in database
    console.log(`Updating payment ${paymentId}:`, updates);

    const allowedUpdates = ['status', 'notes', 'refundReason'];
    const validUpdates = Object.keys(updates).filter(key => allowedUpdates.includes(key));

    if (validUpdates.length === 0) {
      return NextResponse.json({ error: 'No valid updates provided' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Payment updated successfully',
      paymentId,
      updatedFields: validUpdates
    });

  } catch (error) {
    console.error('Failed to update payment:', error);
    return NextResponse.json(
      { error: 'Failed to update payment' },
      { status: 500 }
    );
  }
}