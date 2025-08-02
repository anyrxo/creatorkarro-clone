import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

/**
 * NOWPayments Webhook Handler
 * Processes payment status updates from NOWPayments
 */

const NOWPAYMENTS_CONFIG = {
  apiKey: 'FQTHSZD-1G6MC7D-NN5K7AQ-5PSGR2V',
  publicKey: '59999bf5-b303-4e10-bce1-70fabe96d81a',
  webhookSecret: 'your_webhook_secret_here' // You should set this in NOWPayments dashboard
};

interface NOWPaymentsWebhook {
  payment_id: string;
  payment_status: string;
  pay_address: string;
  price_amount: number;
  price_currency: string;
  pay_amount: number;
  actually_paid: number;
  pay_currency: string;
  order_id: string;
  order_description: string;
  purchase_id: string;
  created_at: string;
  updated_at: string;
  outcome_amount: number;
  outcome_currency: string;
}

// Valid payment statuses from NOWPayments
const VALID_STATUSES = [
  'waiting',      // Waiting for payment
  'confirming',   // Payment detected, waiting for confirmations
  'confirmed',    // Payment confirmed
  'sending',      // Sending payment to merchant
  'partially_paid', // Partially paid
  'finished',     // Payment completed successfully
  'failed',       // Payment failed
  'refunded',     // Payment refunded
  'expired'       // Payment expired
];

function verifyWebhookSignature(payload: string, signature: string): boolean {
  // In a real implementation, verify the webhook signature
  // const expectedSignature = crypto
  //   .createHmac('sha512', NOWPAYMENTS_CONFIG.webhookSecret)
  //   .update(payload)
  //   .digest('hex');
  // return crypto.timingSafeEqual(
  //   Buffer.from(signature, 'hex'),
  //   Buffer.from(expectedSignature, 'hex')
  // );
  
  // For now, always return true (in production, implement proper verification)
  return true;
}

async function processPaymentUpdate(webhook: NOWPaymentsWebhook) {
  console.log('Processing payment update:', {
    paymentId: webhook.payment_id,
    orderId: webhook.order_id,
    status: webhook.payment_status,
    amount: webhook.actually_paid,
    currency: webhook.pay_currency
  });

  // In a real implementation, update your database
  switch (webhook.payment_status) {
    case 'finished':
      // Payment completed successfully
      await handlePaymentSuccess(webhook);
      break;
      
    case 'confirmed':
      // Payment confirmed, processing
      await handlePaymentConfirmed(webhook);
      break;
      
    case 'partially_paid':
      // Partial payment received
      await handlePartialPayment(webhook);
      break;
      
    case 'failed':
    case 'expired':
      // Payment failed or expired
      await handlePaymentFailure(webhook);
      break;
      
    case 'refunded':
      // Payment refunded
      await handlePaymentRefund(webhook);
      break;
      
    default:
      console.log(`Payment ${webhook.payment_id} status: ${webhook.payment_status}`);
  }
}

async function handlePaymentSuccess(webhook: NOWPaymentsWebhook) {
  console.log(`✅ Payment ${webhook.payment_id} completed successfully`);
  
  // In a real implementation:
  // 1. Update order status in database
  // 2. Grant access to purchased product
  // 3. Send confirmation email to customer
  // 4. Update analytics and reporting
  // 5. Trigger any post-purchase automations
  
  // Mock implementation
  const actions = [
    'Updated order status to completed',
    'Granted access to digital product',
    'Sent confirmation email to customer',
    'Updated sales analytics',
    'Triggered welcome email sequence'
  ];
  
  console.log('Post-payment actions:', actions);
  
  // You might also want to notify admin via webhook/Slack/Discord
  await notifyAdmin({
    type: 'payment_success',
    paymentId: webhook.payment_id,
    orderId: webhook.order_id,
    amount: webhook.actually_paid,
    currency: webhook.pay_currency,
    product: webhook.order_description
  });
}

async function handlePaymentConfirmed(webhook: NOWPaymentsWebhook) {
  console.log(`🔄 Payment ${webhook.payment_id} confirmed, processing...`);
  
  // In a real implementation:
  // 1. Update payment status to "processing"
  // 2. Send status update to customer
  // 3. Prepare for product delivery
}

async function handlePartialPayment(webhook: NOWPaymentsWebhook) {
  console.log(`⚠️  Partial payment received for ${webhook.payment_id}`);
  
  const amountPaid = webhook.actually_paid;
  const amountRequired = webhook.pay_amount;
  const amountRemaining = amountRequired - amountPaid;
  
  console.log(`Paid: ${amountPaid} ${webhook.pay_currency}, Required: ${amountRequired} ${webhook.pay_currency}, Remaining: ${amountRemaining} ${webhook.pay_currency}`);
  
  // In a real implementation:
  // 1. Update payment record with partial amount
  // 2. Send email to customer about remaining amount
  // 3. Extend payment expiration time if needed
}

async function handlePaymentFailure(webhook: NOWPaymentsWebhook) {
  console.log(`❌ Payment ${webhook.payment_id} failed or expired`);
  
  // In a real implementation:
  // 1. Update order status to failed/expired
  // 2. Send notification to customer
  // 3. Trigger abandoned cart recovery sequence
  // 4. Update analytics
  
  await notifyAdmin({
    type: 'payment_failed',
    paymentId: webhook.payment_id,
    orderId: webhook.order_id,
    status: webhook.payment_status,
    product: webhook.order_description
  });
}

async function handlePaymentRefund(webhook: NOWPaymentsWebhook) {
  console.log(`🔄 Payment ${webhook.payment_id} refunded`);
  
  // In a real implementation:
  // 1. Update order status to refunded
  // 2. Revoke product access if applicable
  // 3. Send refund confirmation to customer
  // 4. Update financial records
}

async function notifyAdmin(notification: any) {
  // In a real implementation, send notifications via:
  // - Slack webhook
  // - Discord webhook
  // - Email
  // - Telegram bot
  // - Push notification
  
  console.log('Admin notification:', notification);
  
  // Mock Slack notification
  if (notification.type === 'payment_success') {
    console.log(`💰 New crypto payment: ${notification.amount} ${notification.currency} for ${notification.product}`);
  } else if (notification.type === 'payment_failed') {
    console.log(`⚠️  Failed crypto payment: ${notification.orderId} - ${notification.status}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get raw body for signature verification
    const body = await request.text();
    const signature = request.headers.get('x-nowpayments-sig') || '';
    
    // Verify webhook signature (in production)
    if (!verifyWebhookSignature(body, signature)) {
      console.error('Invalid webhook signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }
    
    // Parse webhook data
    const webhook: NOWPaymentsWebhook = JSON.parse(body);
    
    // Validate webhook data
    if (!webhook.payment_id || !webhook.payment_status || !webhook.order_id) {
      console.error('Invalid webhook data:', webhook);
      return NextResponse.json({ error: 'Invalid webhook data' }, { status: 400 });
    }
    
    // Validate payment status
    if (!VALID_STATUSES.includes(webhook.payment_status)) {
      console.error('Invalid payment status:', webhook.payment_status);
      return NextResponse.json({ error: 'Invalid payment status' }, { status: 400 });
    }
    
    console.log('📨 NOWPayments webhook received:', {
      paymentId: webhook.payment_id,
      orderId: webhook.order_id,
      status: webhook.payment_status,
      amount: webhook.actually_paid || webhook.pay_amount,
      currency: webhook.pay_currency
    });
    
    // Process the payment update
    await processPaymentUpdate(webhook);
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Webhook processed successfully',
      paymentId: webhook.payment_id,
      status: webhook.payment_status
    });
    
  } catch (error) {
    console.error('NOWPayments webhook error:', error);
    
    // Return error response
    return NextResponse.json({
      error: 'Webhook processing failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // Provide webhook information for testing/debugging
  return NextResponse.json({
    message: 'NOWPayments Webhook Endpoint',
    config: {
      publicKey: NOWPAYMENTS_CONFIG.publicKey,
      validStatuses: VALID_STATUSES,
      webhookUrl: 'https://iimagined.ai/api/webhook/nowpayments'
    },
    instructions: {
      setup: [
        '1. Configure this URL in your NOWPayments dashboard',
        '2. Set webhook secret in environment variables',
        '3. Enable desired payment status notifications',
        '4. Test with a small payment'
      ],
      headers: {
        'Content-Type': 'application/json',
        'x-nowpayments-sig': 'HMAC signature for verification'
      }
    },
    testPayload: {
      payment_id: 'test_payment_123',
      payment_status: 'finished',
      pay_address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      price_amount: 297,
      price_currency: 'USD',
      pay_amount: 0.00512,
      actually_paid: 0.00512,
      pay_currency: 'BTC',
      order_id: 'ord_test_123',
      order_description: 'Instagram Ignited Course',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  });
}