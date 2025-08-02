import { NextRequest, NextResponse } from 'next/server';

/**
 * Cryptocurrency Checkout API
 * Handles crypto payment creation and processing via NOWPayments
 */

const NOWPAYMENTS_CONFIG = {
  apiKey: 'FQTHSZD-1G6MC7D-NN5K7AQ-5PSGR2V',
  publicKey: '59999bf5-b303-4e10-bce1-70fabe96d81a',
  baseUrl: 'https://api.nowpayments.io/v1',
  sandboxUrl: 'https://api-sandbox.nowpayments.io/v1'
};

interface CryptoCheckoutRequest {
  productId: string;
  productName: string;
  amount: number;
  currency: string;
  cryptoCurrency: string;
  customerEmail: string;
  customerName?: string;
  successUrl?: string;
  cancelUrl?: string;
  webhookUrl?: string;
}

interface CryptoPaymentResponse {
  paymentId: string;
  status: string;
  paymentAddress: string;
  amount: number;
  currency: string;
  cryptoAmount: number;
  cryptoCurrency: string;
  qrCodeUrl: string;
  expiresAt: string;
  explorerUrl?: string;
  requiredConfirmations: number;
}

// Product pricing data
const PRODUCTS = {
  'instagram-ignited': {
    name: 'Instagram Ignited: 0 to 500K Followers',
    price: 297,
    description: 'Complete Instagram growth system'
  },
  'digital-products': {
    name: 'Digital Products Masterclass',
    price: 197,
    description: 'Learn to create profitable digital products'
  },
  'ai-automation': {
    name: 'AI Automation Suite',
    price: 497,
    description: 'Automate your workflow with AI'
  },
  'comfyui': {
    name: 'ComfyUI Workflows',
    price: 97,
    description: 'Master AI image generation'
  },
  'bundle-ig-dp': {
    name: 'Instagram + Digital Products Bundle',
    price: 397,
    description: 'Complete growth and product creation bundle'
  }
};

// Cryptocurrency configurations
const CRYPTO_CONFIG = {
  BTC: {
    name: 'Bitcoin',
    symbol: 'BTC',
    confirmations: 3,
    explorer: 'https://blockstream.info/tx/',
    icon: '₿'
  },
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    confirmations: 12,
    explorer: 'https://etherscan.io/tx/',
    icon: 'Ξ'
  },
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    confirmations: 3,
    explorer: 'https://tronscan.org/#/transaction/',
    icon: '₮'
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    confirmations: 12,
    explorer: 'https://etherscan.io/tx/',
    icon: '$'
  },
  LTC: {
    name: 'Litecoin',
    symbol: 'LTC',
    confirmations: 6,
    explorer: 'https://blockchair.com/litecoin/transaction/',
    icon: 'Ł'
  },
  TRX: {
    name: 'TRON',
    symbol: 'TRX',
    confirmations: 1,
    explorer: 'https://tronscan.org/#/transaction/',
    icon: 'T'
  }
};

async function createNOWPayment(paymentData: any) {
  try {
    // In a real implementation, make actual API call to NOWPayments
    // const response = await fetch(`${NOWPAYMENTS_CONFIG.baseUrl}/payment`, {
    //   method: 'POST',
    //   headers: {
    //     'x-api-key': NOWPAYMENTS_CONFIG.apiKey,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(paymentData)
    // });
    // const result = await response.json();
    
    // For now, return mock data
    const cryptoConfig = CRYPTO_CONFIG[paymentData.pay_currency.toUpperCase() as keyof typeof CRYPTO_CONFIG];
    const mockAddresses = {
      BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      ETH: '0x742d35Cc6434C0532925a3b8D9c7D5E7aE3e27f9',
      USDT: 'TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE',
      USDC: '0x742d35Cc6434C0532925a3b8D9c7D5E7aE3e27f9',
      LTC: 'ltc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      TRX: 'TLPpXqjJjsH6yoJqMJqwKnXE9pKyZGCZD'
    };
    
    const payAddress = mockAddresses[paymentData.pay_currency.toUpperCase() as keyof typeof mockAddresses];
    const payAmount = paymentData.price_amount / (paymentData.pay_currency === 'BTC' ? 58000 : 
                                                 paymentData.pay_currency === 'ETH' ? 2800 :
                                                 paymentData.pay_currency === 'LTC' ? 120 :
                                                 paymentData.pay_currency === 'TRX' ? 0.034 : 1);
    
    return {
      payment_id: `np_${Date.now()}`,
      payment_status: 'waiting',
      pay_address: payAddress,
      price_amount: paymentData.price_amount,
      price_currency: paymentData.price_currency,
      pay_amount: Math.round(payAmount * 100000) / 100000,
      pay_currency: paymentData.pay_currency.toUpperCase(),
      order_id: paymentData.order_id,
      order_description: paymentData.order_description,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      expiration_estimate_date: new Date(Date.now() + 60 * 60 * 1000).toISOString() // 1 hour
    };
  } catch (error) {
    console.error('NOWPayments API error:', error);
    throw new Error('Failed to create crypto payment');
  }
}

function generateQRCode(address: string, amount: number, currency: string): string {
  // In a real implementation, you might use a QR code service
  const qrData = currency === 'BTC' ? `bitcoin:${address}?amount=${amount}` :
                 currency === 'ETH' ? `ethereum:${address}?value=${amount}` :
                 `${currency.toLowerCase()}:${address}?amount=${amount}`;
  
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`;
}

export async function POST(request: NextRequest) {
  try {
    const body: CryptoCheckoutRequest = await request.json();
    
    // Validate required fields
    if (!body.productId || !body.cryptoCurrency || !body.customerEmail) {
      return NextResponse.json({
        error: 'Missing required fields: productId, cryptoCurrency, customerEmail'
      }, { status: 400 });
    }
    
    // Get product information
    const product = PRODUCTS[body.productId as keyof typeof PRODUCTS];
    if (!product) {
      return NextResponse.json({
        error: 'Invalid product ID'
      }, { status: 400 });
    }
    
    // Validate cryptocurrency
    const cryptoConfig = CRYPTO_CONFIG[body.cryptoCurrency.toUpperCase() as keyof typeof CRYPTO_CONFIG];
    if (!cryptoConfig) {
      return NextResponse.json({
        error: 'Unsupported cryptocurrency'
      }, { status: 400 });
    }
    
    // Generate unique order ID
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Prepare payment data for NOWPayments
    const paymentData = {
      price_amount: body.amount || product.price,
      price_currency: body.currency || 'USD',
      pay_currency: body.cryptoCurrency.toLowerCase(),
      order_id: orderId,
      order_description: body.productName || product.name,
      success_url: body.successUrl || 'https://iimagined.ai/success',
      cancel_url: body.cancelUrl || 'https://iimagined.ai/checkout',
      ipn_callback_url: body.webhookUrl || 'https://iimagined.ai/api/webhook/nowpayments'
    };
    
    // Create payment via NOWPayments
    const payment = await createNOWPayment(paymentData);
    
    // Generate QR code
    const qrCodeUrl = generateQRCode(payment.pay_address, payment.pay_amount, payment.pay_currency);
    
    // Prepare response
    const response: CryptoPaymentResponse = {
      paymentId: payment.payment_id,
      status: payment.payment_status,
      paymentAddress: payment.pay_address,
      amount: payment.price_amount,
      currency: payment.price_currency,
      cryptoAmount: payment.pay_amount,
      cryptoCurrency: payment.pay_currency,
      qrCodeUrl,
      expiresAt: payment.expiration_estimate_date,
      explorerUrl: cryptoConfig.explorer,
      requiredConfirmations: cryptoConfig.confirmations
    };
    
    // Log the payment creation for admin tracking
    console.log('Crypto payment created:', {
      paymentId: payment.payment_id,
      orderId,
      product: product.name,
      amount: payment.price_amount,
      currency: payment.price_currency,
      cryptoAmount: payment.pay_amount,
      cryptoCurrency: payment.pay_currency,
      customerEmail: body.customerEmail,
      createdAt: payment.created_at
    });
    
    return NextResponse.json({
      success: true,
      payment: response,
      instructions: {
        title: `Pay with ${cryptoConfig.name}`,
        steps: [
          `Send exactly ${payment.pay_amount} ${payment.pay_currency} to the address below`,
          `Payment will be confirmed after ${cryptoConfig.confirmations} network confirmations`,
          'Do not send any other cryptocurrency to this address',
          'Payment expires in 1 hour'
        ],
        warnings: [
          'Sending incorrect amount may result in payment failure',
          'Only send from wallets you control (not exchanges)',
          'Save your transaction hash for reference'
        ]
      }
    });
    
  } catch (error) {
    console.error('Crypto checkout error:', error);
    return NextResponse.json({
      error: 'Failed to create crypto payment',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const action = searchParams.get('action');
    
    switch (action) {
      case 'supported-currencies':
        return NextResponse.json({
          currencies: Object.entries(CRYPTO_CONFIG).map(([symbol, config]) => ({
            symbol,
            name: config.name,
            icon: config.icon,
            confirmations: config.confirmations
          }))
        });
        
      case 'products':
        return NextResponse.json({
          products: Object.entries(PRODUCTS).map(([id, product]) => ({
            id,
            ...product
          }))
        });
        
      case 'payment-status':
        const paymentId = searchParams.get('paymentId');
        if (!paymentId) {
          return NextResponse.json({ error: 'Payment ID required' }, { status: 400 });
        }
        
        // In a real implementation, fetch from NOWPayments API
        // const response = await fetch(`${NOWPAYMENTS_CONFIG.baseUrl}/payment/${paymentId}`, {
        //   headers: { 'x-api-key': NOWPAYMENTS_CONFIG.apiKey }
        // });
        // const payment = await response.json();
        
        // Mock response for now
        return NextResponse.json({
          paymentId,
          status: 'waiting', // waiting, confirming, confirmed, sending, partially_paid, finished, failed, refunded, expired
          confirmations: 0,
          requiredConfirmations: 3,
          txHash: null,
          updatedAt: new Date().toISOString()
        });
        
      default:
        return NextResponse.json({
          message: 'Cryptocurrency checkout API',
          endpoints: {
            'POST /': 'Create new crypto payment',
            'GET /?action=supported-currencies': 'Get supported cryptocurrencies',
            'GET /?action=products': 'Get available products',
            'GET /?action=payment-status&paymentId=X': 'Check payment status'
          },
          config: {
            publicKey: NOWPAYMENTS_CONFIG.publicKey,
            supportedCurrencies: Object.keys(CRYPTO_CONFIG)
          }
        });
    }
    
  } catch (error) {
    console.error('Crypto checkout GET error:', error);
    return NextResponse.json({
      error: 'Failed to process request'
    }, { status: 500 });
  }
}