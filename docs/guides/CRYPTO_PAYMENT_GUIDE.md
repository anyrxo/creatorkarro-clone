# 🚀 Cryptocurrency Payment Setup Guide

## 💎 Your Wallet Addresses (Phantom Wallet)

Your Phantom wallet addresses have been integrated into the payment system:

- **Bitcoin (BTC):** `bc1qg58la9talxvag8r0pfv6cq3m7t4hg7anttzz97`
- **Ethereum (ETH):** `0xCe469428F94D48d433489374111ca80Df880FA75`
- **Solana (SOL):** `EYyjCBorMF3yxjLHM9KEuez6kSzLWo58Z4PMyDZEYjw4`
- **USDT (ERC-20):** `0xCe469428F94D48d433489374111ca80Df880FA75`
- **USDC (ERC-20):** `0xCe469428F94D48d433489374111ca80Df880FA75`

## 🎯 Two Payment Options Available

### Option 1: NOWPayments (Automated)
- **API Key:** `FQTHSZD-1G6MC7D-NN5K7AQ-5PSGR2V`
- **Public Key:** `59999bf5-b303-4e10-bce1-70fabe96d81a`
- **Benefits:** Automatic processing, instant confirmations, 100+ cryptocurrencies
- **Fees:** ~1.5% processing fee
- **Endpoint:** `/api/checkout/crypto`

### Option 2: Direct Phantom Wallet (Manual)
- **Your Addresses:** Direct payments to your Phantom wallet
- **Benefits:** 0% fees, you keep 100% of payments
- **Process:** Manual verification required
- **Endpoint:** `/api/checkout/crypto-simple`

## 🔧 Admin Settings Configuration

In your admin settings (`/api/admin/settings`), you now have:

```json
{
  "payment": {
    "nowpaymentsEnabled": true,
    "nowpaymentsApiKey": "FQTHSZD-1G6MC7D-NN5K7AQ-5PSGR2V",
    "nowpaymentsPublicKey": "59999bf5-b303-4e10-bce1-70fabe96d81a",
    "directWalletEnabled": true,
    "walletAddresses": {
      "BTC": "bc1qg58la9talxvag8r0pfv6cq3m7t4hg7anttzz97",
      "ETH": "0xCe469428F94D48d433489374111ca80Df880FA75",
      "SOL": "EYyjCBorMF3yxjLHM9KEuez6kSzLWo58Z4PMyDZEYjw4",
      "USDT": "0xCe469428F94D48d433489374111ca80Df880FA75",
      "USDC": "0xCe469428F94D48d433489374111ca80Df880FA75"
    },
    "paymentMethod": "both"
  }
}
```

## 📊 Available Endpoints

### 1. Admin Payments Dashboard
- **URL:** `/api/admin/payments`
- **Features:** Complete crypto payment analytics, transaction monitoring
- **Displays:** Both NOWPayments and direct wallet transactions

### 2. NOWPayments Checkout (Automated)
- **URL:** `/api/checkout/crypto`
- **Process:** Automated with instant confirmations
- **Currencies:** 100+ supported via NOWPayments

### 3. Direct Wallet Checkout (Manual)
- **URL:** `/api/checkout/crypto-simple`
- **Process:** Direct to your Phantom wallet, manual verification
- **Currencies:** BTC, ETH, SOL, USDT, USDC

### 4. NOWPayments Webhook
- **URL:** `/api/webhook/nowpayments`
- **Purpose:** Automatic order processing when payments are confirmed

## 🎮 How It Works

### For NOWPayments (Automated):
1. Customer selects crypto payment
2. NOWPayments generates temporary address
3. Customer sends payment
4. NOWPayments confirms and forwards to you
5. Order automatically processed

### For Direct Wallet (Manual):
1. Customer selects crypto payment
2. System shows your Phantom wallet address
3. Customer sends payment directly to you
4. Customer emails transaction hash
5. You manually verify and process order

## 💰 Revenue Comparison

### NOWPayments:
- **Fee:** ~1.5% processing fee
- **Example:** $297 course = ~$292.50 after fees
- **Benefit:** Fully automated, no manual work

### Direct Wallet:
- **Fee:** $0 (you keep 100%)
- **Example:** $297 course = $297.00 full amount
- **Benefit:** Maximum revenue, but requires manual verification

## 🚀 Getting Started

### Step 1: Choose Your Preference
Edit the payment method in admin settings:
- `"both"` - Offer both options to customers
- `"nowpayments"` - Only automated NOWPayments
- `"direct_wallet"` - Only direct wallet payments

### Step 2: Test the System
1. Go to `/api/checkout/crypto-simple?action=wallet-addresses`
2. Verify your wallet addresses are correct
3. Test with a small amount first

### Step 3: Customer Experience
Customers will see:
- QR codes for easy mobile payments
- Clear payment instructions
- Transaction tracking links
- Support contact information

## 🔒 Security Best Practices

1. **Keep Your Phantom Wallet Secure**
   - Never share your seed phrase
   - Use hardware wallet for large amounts
   - Enable all security features

2. **Monitor Transactions**
   - Check your wallet regularly
   - Verify amounts match orders
   - Keep transaction records

3. **Customer Support**
   - Respond to payment inquiries quickly
   - Verify transactions on blockchain
   - Process orders within 24 hours

## 📞 Support Setup

For direct wallet payments, customers should contact:
- **Email:** support@iimagined.ai
- **Include:** Order ID and transaction hash
- **Response Time:** Within 24 hours

## 🎯 Recommended Setup

For maximum flexibility and revenue:

1. **Enable both payment methods** (`"paymentMethod": "both"`)
2. **Offer NOWPayments** for customers who want instant processing
3. **Offer Direct Wallet** for customers who prefer 0% fees
4. **Monitor both** through the admin dashboard

This gives you the best of both worlds - automated processing when needed and maximum revenue when customers are willing to wait for manual verification.

## 🔧 Admin Dashboard Features

Your admin dashboard now shows:
- Real-time crypto payment status
- Transaction confirmations and amounts
- Revenue breakdown by payment method
- Customer payment preferences
- Geographic crypto adoption data

Both NOWPayments and direct wallet transactions are tracked and displayed in the same unified interface for complete visibility into your crypto payments.