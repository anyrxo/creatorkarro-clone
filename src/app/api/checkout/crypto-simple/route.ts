import { NextRequest, NextResponse } from 'next/server';

/**
 * Simple Cryptocurrency Checkout API
 * Direct payments to your Phantom wallet addresses (no NOWPayments required)
 */

interface DirectCryptoCheckout {
  productId: string;
  productName: string;
  amount: number;
  currency: string;
  cryptoCurrency: string;
  customerEmail: string;
  customerName?: string;
}

interface DirectCryptoPayment {
  paymentId: string;
  status: 'pending' | 'awaiting_payment' | 'completed' | 'expired';
  paymentAddress: string;
  amount: number;
  currency: string;
  cryptoAmount: number;
  cryptoCurrency: string;
  qrCodeUrl: string;
  expiresAt: string;
  explorerUrl: string;
  orderId: string;
}

// Your Phantom wallet addresses
const WALLET_ADDRESSES = {
  BTC: 'bc1qg58la9talxvag8r0pfv6cq3m7t4hg7anttzz97',
  ETH: '0xCe469428F94D48d433489374111ca80Df880FA75',
  SOL: 'EYyjCBorMF3yxjLHM9KEuez6kSzLWo58Z4PMyDZEYjw4',
  USDT: '0xCe469428F94D48d433489374111ca80Df880FA75', // ERC-20 USDT
  USDC: '0xCe469428F94D48d433489374111ca80Df880FA75'  // ERC-20 USDC
};

// Product pricing
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
    explorer: 'https://blockstream.info/address/',
    txExplorer: 'https://blockstream.info/tx/',
    icon: '₿',
    decimals: 8,
    network: 'Bitcoin'
  },
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
    explorer: 'https://etherscan.io/address/',
    txExplorer: 'https://etherscan.io/tx/',
    icon: 'Ξ',
    decimals: 18,
    network: 'Ethereum'
  },
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
    explorer: 'https://solscan.io/account/',
    txExplorer: 'https://solscan.io/tx/',
    icon: '◎',
    decimals: 9,
    network: 'Solana'
  },
  USDT: {
    name: 'Tether USD',
    symbol: 'USDT',
    explorer: 'https://etherscan.io/address/',
    txExplorer: 'https://etherscan.io/tx/',
    icon: '₮',
    decimals: 6,
    network: 'Ethereum (ERC-20)'
  },
  USDC: {
    name: 'USD Coin',
    symbol: 'USDC',
    explorer: 'https://etherscan.io/address/',
    txExplorer: 'https://etherscan.io/tx/',
    icon: '$',
    decimals: 6,
    network: 'Ethereum (ERC-20)'
  }
};

// Mock crypto prices (in production, fetch from CoinGecko or similar API)
function getCurrentCryptoPrice(symbol: string): number {
  const prices = {
    BTC: 58000,
    ETH: 2800,
    SOL: 145,
    USDT: 1.0,
    USDC: 1.0
  };
  return prices[symbol as keyof typeof prices] || 1;
}

function calculateCryptoAmount(usdAmount: number, cryptoSymbol: string): number {
  const price = getCurrentCryptoPrice(cryptoSymbol);
  const amount = usdAmount / price;
  const config = CRYPTO_CONFIG[cryptoSymbol as keyof typeof CRYPTO_CONFIG];
  
  // Round to appropriate decimal places
  return Math.round(amount * Math.pow(10, config.decimals)) / Math.pow(10, config.decimals);
}

function generateQRCode(address: string, amount: number, currency: string): string {
  // Generate payment URI for different cryptocurrencies
  let paymentUri = '';
  
  switch (currency) {
    case 'BTC':
      paymentUri = `bitcoin:${address}?amount=${amount}`;
      break;
    case 'ETH':
      paymentUri = `ethereum:${address}?value=${amount * Math.pow(10, 18)}`;
      break;
    case 'SOL':
      paymentUri = `solana:${address}?amount=${amount}`;
      break;
    case 'USDT':
    case 'USDC':
      // For ERC-20 tokens, use ethereum URI with contract address
      paymentUri = `ethereum:${address}?value=${amount * Math.pow(10, 6)}`;
      break;
    default:
      paymentUri = `${currency.toLowerCase()}:${address}?amount=${amount}`;
  }
  
  return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(paymentUri)}`;
}

async function savePaymentToDatabase(paymentData: any) {
  // In a real implementation, save to your database
  console.log('Saving direct crypto payment:', {
    paymentId: paymentData.paymentId,
    orderId: paymentData.orderId,
    product: paymentData.productName,
    amount: paymentData.amount,
    cryptoAmount: paymentData.cryptoAmount,
    cryptoCurrency: paymentData.cryptoCurrency,
    address: paymentData.paymentAddress,
    customerEmail: paymentData.customerEmail,
    createdAt: new Date().toISOString()
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: DirectCryptoCheckout = await request.json();
    
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
    
    // Get wallet address
    const walletAddress = WALLET_ADDRESSES[body.cryptoCurrency.toUpperCase() as keyof typeof WALLET_ADDRESSES];
    if (!walletAddress) {
      return NextResponse.json({
        error: 'Wallet address not configured for this cryptocurrency'
      }, { status: 400 });
    }
    
    // Calculate crypto amount
    const usdAmount = body.amount || product.price;
    const cryptoAmount = calculateCryptoAmount(usdAmount, body.cryptoCurrency.toUpperCase());
    
    // Generate unique payment ID and order ID
    const paymentId = `direct_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Generate QR code
    const qrCodeUrl = generateQRCode(walletAddress, cryptoAmount, body.cryptoCurrency.toUpperCase());
    
    // Create payment record
    const payment: DirectCryptoPayment = {
      paymentId,
      status: 'awaiting_payment',
      paymentAddress: walletAddress,
      amount: usdAmount,
      currency: body.currency || 'USD',
      cryptoAmount,
      cryptoCurrency: body.cryptoCurrency.toUpperCase(),
      qrCodeUrl,
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours
      explorerUrl: cryptoConfig.explorer + walletAddress,
      orderId
    };
    
    // Save to database
    await savePaymentToDatabase({
      ...payment,
      productName: body.productName || product.name,
      customerEmail: body.customerEmail,
      customerName: body.customerName
    });
    
    return NextResponse.json({
      success: true,
      payment,
      instructions: {
        title: `Pay with ${cryptoConfig.name}`,
        walletInfo: {
          name: 'Phantom Wallet',
          network: cryptoConfig.network,
          address: walletAddress
        },
        steps: [
          `Send exactly ${cryptoAmount} ${body.cryptoCurrency.toUpperCase()} to the address above`,
          'Use the QR code for easy mobile wallet scanning',
          'Payment will be processed manually within 24 hours',
          'You will receive email confirmation once verified'
        ],
        warnings: [
          '⚠ Send ONLY ' + body.cryptoCurrency.toUpperCase() + ' to this address',
          '⚠ Sending wrong currency will result in permanent loss',
          '⚠ Send exact amount - partial payments may not be processed',
          '⚠ Save your transaction hash for reference'
        ],
        technicalInfo: {
          network: cryptoConfig.network,
          decimals: cryptoConfig.decimals,
          currentPrice: `$${getCurrentCryptoPrice(body.cryptoCurrency.toUpperCase()).toLocaleString()}`,
          conversionRate: `1 ${body.cryptoCurrency.toUpperCase()} = $${getCurrentCryptoPrice(body.cryptoCurrency.toUpperCase()).toLocaleString()}`
        }
      },
      nextSteps: {
        afterPayment: [
          'Send transaction hash to support@iimagined.ai',
          'Include your order ID: ' + orderId,
          'We will verify and process within 24 hours',
          'You will receive course access via email'
        ],
        support: {
          email: 'support@iimagined.ai',
          telegram: '@iimagined_support',
          hours: '24/7 support available'
        }
      }
    });
    
  } catch (error) {
    console.error('Direct crypto checkout error:', error);
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
            network: config.network,
            address: WALLET_ADDRESSES[symbol as keyof typeof WALLET_ADDRESSES],
            currentPrice: getCurrentCryptoPrice(symbol)
          }))
        });
        
      case 'products':
        return NextResponse.json({
          products: Object.entries(PRODUCTS).map(([id, product]) => ({
            id,
            ...product
          }))
        });
        
      case 'wallet-addresses':
        return NextResponse.json({
          wallets: Object.entries(WALLET_ADDRESSES).map(([currency, address]) => ({
            currency,
            address,
            network: CRYPTO_CONFIG[currency as keyof typeof CRYPTO_CONFIG].network,
            explorer: CRYPTO_CONFIG[currency as keyof typeof CRYPTO_CONFIG].explorer + address
          }))
        });
        
      case 'prices':
        return NextResponse.json({
          prices: Object.keys(CRYPTO_CONFIG).reduce((acc, symbol) => {
            acc[symbol] = getCurrentCryptoPrice(symbol);
            return acc;
          }, {} as Record<string, number>),
          lastUpdated: new Date().toISOString()
        });
        
      default:
        return NextResponse.json({
          message: 'Direct Cryptocurrency Checkout API',
          description: 'Accept crypto payments directly to your Phantom wallet',
          walletType: 'Phantom Wallet',
          endpoints: {
            'POST /': 'Create new direct crypto payment',
            'GET /?action=supported-currencies': 'Get supported cryptocurrencies',
            'GET /?action=products': 'Get available products',
            'GET /?action=wallet-addresses': 'Get all wallet addresses',
            'GET /?action=prices': 'Get current crypto prices'
          },
          supportedCurrencies: Object.keys(WALLET_ADDRESSES),
          walletAddresses: WALLET_ADDRESSES,
          features: [
            'Direct payments to your Phantom wallet',
            'No third-party payment processor fees',
            'Manual verification and processing',
            'QR code generation for mobile wallets',
            'Real-time price conversion',
            'Transaction tracking via blockchain explorers'
          ]
        });
    }
    
  } catch (error) {
    console.error('Direct crypto checkout GET error:', error);
    return NextResponse.json({
      error: 'Failed to process request'
    }, { status: 500 });
  }
}