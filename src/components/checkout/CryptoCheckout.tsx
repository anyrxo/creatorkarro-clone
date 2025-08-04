'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Copy, ExternalLink, Clock, Shield, Zap } from 'lucide-react'

interface CryptoCheckoutProps {
  isOpen: boolean
  onClose: () => void
  product: {
    id: string
    name: string
    price: number
    description: string
  }
}

interface CryptoOption {
  symbol: string
  name: string
  icon: string
  network: string
  address: string
  currentPrice: number
}

interface PaymentDetails {
  paymentId: string
  status: string
  paymentAddress: string
  amount: number
  currency: string
  cryptoAmount: number
  cryptoCurrency: string
  qrCodeUrl: string
  expiresAt: string
  explorerUrl: string
  orderId: string
}

const CRYPTO_OPTIONS: CryptoOption[] = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', network: 'Bitcoin', address: 'bc1qg58la9talxvag8r0pfv6cq3m7t4hg7anttzz97', currentPrice: 58000 },
  { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', network: 'Ethereum', address: '0xCe469428F94D48d433489374111ca80Df880FA75', currentPrice: 2800 },
  { symbol: 'SOL', name: 'Solana', icon: '◎', network: 'Solana', address: 'EYyjCBorMF3yxjLHM9KEuez6kSzLWo58Z4PMyDZEYjw4', currentPrice: 145 },
  { symbol: 'USDT', name: 'Tether USD', icon: '₮', network: 'Ethereum (ERC-20)', address: '0xCe469428F94D48d433489374111ca80Df880FA75', currentPrice: 1.0 },
  { symbol: 'USDC', name: 'USD Coin', icon: '$', network: 'Ethereum (ERC-20)', address: '0xCe469428F94D48d433489374111ca80Df880FA75', currentPrice: 1.0 }
]

export default function CryptoCheckout({ isOpen, onClose, product }: CryptoCheckoutProps) {
  const [selectedCrypto, setSelectedCrypto] = useState<string>('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'direct' | 'nowpayments'>('direct')

  if (!isOpen) return null

  const handleCryptoSelect = (crypto: string) => {
    setSelectedCrypto(crypto)
  }

  const createPayment = async () => {
    if (!selectedCrypto || !customerEmail) return

    setLoading(true)
    try {
      const endpoint = paymentMethod === 'direct' ? '/api/checkout/crypto-simple' : '/api/checkout/crypto'
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          amount: product.price,
          currency: 'USD',
          cryptoCurrency: selectedCrypto,
          customerEmail,
          customerName: customerName || 'Anonymous'
        })
      })

      const data = await response.json()
      
      if (data.success) {
        setPaymentDetails(data.payment)
      } else {
        alert('Failed to create payment: ' + data.error)
      }
    } catch (error) {
      alert('Error creating payment: ' + error)
    }
    setLoading(false)
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const selectedCryptoData = CRYPTO_OPTIONS.find(c => c.symbol === selectedCrypto)
  const cryptoAmount = selectedCryptoData ? (product.price / selectedCryptoData.currentPrice) : 0

  // Payment Selection Screen
  if (!paymentDetails) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-700">
            <div>
              <h2 className="text-2xl font-bold text-white">Pay with Cryptocurrency</h2>
              <p className="text-gray-400">Choose your preferred payment method</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Product Info */}
          <div className="p-6 border-b border-zinc-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">${product.price}</div>
                <div className="text-sm text-gray-400">USD</div>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="p-6">
            <h4 className="text-lg font-bold text-white mb-4">Choose Payment Method</h4>
            
            <div className="grid gap-4 mb-6">
              {/* Direct Wallet Option */}
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'direct' 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-zinc-700 hover:border-zinc-600'
                }`}
                onClick={() => setPaymentMethod('direct')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-bold text-white">Direct Wallet (0% Fees)</div>
                      <div className="text-sm text-gray-400">Send directly to our Phantom wallet</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">$0 fees</div>
                    <div className="text-xs text-gray-400">Manual verification</div>
                  </div>
                </div>
              </div>

              {/* NOWPayments Option */}
              <div 
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  paymentMethod === 'nowpayments' 
                    ? 'border-blue-500 bg-blue-500/10' 
                    : 'border-zinc-700 hover:border-zinc-600'
                }`}
                onClick={() => setPaymentMethod('nowpayments')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="font-bold text-white">NOWPayments (Instant)</div>
                      <div className="text-sm text-gray-400">Automated processing with confirmations</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">~1.5% fee</div>
                    <div className="text-xs text-gray-400">Instant processing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cryptocurrency Selection */}
            <h4 className="text-lg font-bold text-white mb-4">Select Cryptocurrency</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {CRYPTO_OPTIONS.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${
                    selectedCrypto === crypto.symbol
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-zinc-700 hover:border-zinc-600'
                  }`}
                  onClick={() => handleCryptoSelect(crypto.symbol)}
                >
                  <div className="text-2xl mb-2">{crypto.icon}</div>
                  <div className="font-bold text-white">{crypto.symbol}</div>
                  <div className="text-xs text-gray-400">{crypto.network}</div>
                  {selectedCrypto === crypto.symbol && (
                    <div className="mt-2 text-sm text-blue-400 font-medium">
                      ≈ {(product.price / crypto.currentPrice).toFixed(6)} {crypto.symbol}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Customer Information */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Create Payment Button */}
            <button
              onClick={createPayment}
              disabled={!selectedCrypto || !customerEmail || loading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <span>Create {paymentMethod === 'direct' ? 'Direct' : 'Instant'} Payment</span>
                  <span className="text-lg">→</span>
                </>
              )}
            </button>

            <p className="text-xs text-gray-400 mt-3 text-center">
              {paymentMethod === 'direct' 
                ? '0% fees • Manual verification within 24 hours • Send transaction hash to support@iimagined.ai'
                : '~1.5% processing fee • Automatic confirmation • Instant access after payment'
              }
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Payment Details Screen
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-700">
          <div>
            <h2 className="text-2xl font-bold text-white">Payment Instructions</h2>
            <p className="text-gray-400">Send exactly the amount below</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Payment Status */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-yellow-400">Awaiting Payment</span>
            </div>
            <p className="text-sm text-gray-300">
              Send the exact amount to complete your purchase
            </p>
          </div>

          {/* Payment Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* QR Code */}
            <div className="text-center">
              <h4 className="font-bold text-white mb-4">Scan QR Code</h4>
              <div className="bg-white p-4 rounded-xl inline-block">
                <Image
                  src={paymentDetails.qrCodeUrl}
                  alt="Payment QR Code"
                  width={200}
                  height={200}
                  className="w-48 h-48"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Scan with your {selectedCryptoData?.name} wallet
              </p>
            </div>

            {/* Payment Info */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Amount to Send</label>
                <div className="flex items-center justify-between bg-zinc-800 p-3 rounded-lg mt-1">
                  <span className="font-mono text-white text-lg">
                    {paymentDetails.cryptoAmount} {paymentDetails.cryptoCurrency}
                  </span>
                  <button
                    onClick={() => copyToClipboard(paymentDetails.cryptoAmount.toString(), 'amount')}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied === 'amount' && (
                  <p className="text-xs text-green-400 mt-1">Copied!</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-400">Send to Address</label>
                <div className="flex items-center justify-between bg-zinc-800 p-3 rounded-lg mt-1">
                  <span className="font-mono text-white text-sm break-all">
                    {paymentDetails.paymentAddress}
                  </span>
                  <button
                    onClick={() => copyToClipboard(paymentDetails.paymentAddress, 'address')}
                    className="text-blue-400 hover:text-blue-300 ml-2"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied === 'address' && (
                  <p className="text-xs text-green-400 mt-1">Copied!</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-400">Network</label>
                <div className="bg-zinc-800 p-3 rounded-lg mt-1">
                  <span className="text-white">{selectedCryptoData?.network}</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400">Order ID</label>
                <div className="flex items-center justify-between bg-zinc-800 p-3 rounded-lg mt-1">
                  <span className="font-mono text-white text-sm">
                    {paymentDetails.orderId}
                  </span>
                  <button
                    onClick={() => copyToClipboard(paymentDetails.orderId, 'order')}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {copied === 'order' && (
                  <p className="text-xs text-green-400 mt-1">Copied!</p>
                )}
              </div>
            </div>
          </div>

          {/* Important Warnings */}
          <div className="bg-red-500/10 border border-red-500 rounded-xl p-4">
            <h4 className="font-bold text-red-400 mb-2">⚠ Important Instructions</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Send ONLY {paymentDetails.cryptoCurrency} to this address</li>
              <li>• Send the EXACT amount shown above</li>
              <li>• Do not send from an exchange (use your own wallet)</li>
              <li>• Save your transaction hash for reference</li>
              {paymentMethod === 'direct' && (
                <li>• Email transaction hash to support@iimagined.ai with your order ID</li>
              )}
            </ul>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-500/10 border border-blue-500 rounded-xl p-4">
            <h4 className="font-bold text-blue-400 mb-2">What happens next?</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              {paymentMethod === 'direct' ? (
                <>
                  <li>1. Send the payment to the address above</li>
                  <li>2. Email your transaction hash to support@iimagined.ai</li>
                  <li>3. Include your order ID: {paymentDetails.orderId}</li>
                  <li>4. We'll verify and send access within 24 hours</li>
                </>
              ) : (
                <>
                  <li>1. Send the payment to the address above</li>
                  <li>2. Wait for blockchain confirmations</li>
                  <li>3. Access will be granted automatically</li>
                  <li>4. Check your email for login details</li>
                </>
              )}
            </ul>
          </div>

          {/* Explorer Link */}
          <div className="text-center">
            <a
              href={paymentDetails.explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View on Blockchain Explorer</span>
            </a>
          </div>

          {/* Support */}
          <div className="text-center text-sm text-gray-400">
            <p>Need help? Email us at support@iimagined.ai</p>
            <p>Include your Order ID: {paymentDetails.orderId}</p>
          </div>
        </div>
      </div>
    </div>
  )
}