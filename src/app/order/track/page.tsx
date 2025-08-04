'use client'

import { useState } from 'react'
import { Search, Clock, CheckCircle, XCircle, AlertCircle, ExternalLink, Copy } from 'lucide-react'

interface OrderStatus {
  orderId: string;
  status: 'pending' | 'paid' | 'completed' | 'failed' | 'expired';
  paymentMethod: 'nowpayments' | 'direct_wallet';
  productName: string;
  amountUsd: number;
  cryptoCurrency: string;
  cryptoAmount: number;
  paymentAddress?: string;
  txHash?: string;
  confirmations?: number;
  requiredConfirmations?: number;
  createdAt: string;
  expiresAt?: string;
  completedAt?: string;
  accessGranted: boolean;
  accessUrl?: string;
  downloadLinks?: string[];
  statusInfo: {
    title: string;
    description: string;
    color: string;
  };
  explorerUrl?: string;
  timeRemaining?: string;
  progress: {
    steps: Array<{
      title: string;
      completed: boolean;
      timestamp?: string;
    }>;
  };
  supportInfo: {
    email: string;
    instructions: string[];
  };
}

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('')
  const [order, setOrder] = useState<OrderStatus | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')

  const handleSearch = async () => {
    if (!orderId.trim()) {
      setError('Please enter an order ID')
      return
    }

    setLoading(true)
    setError('')
    setOrder(null)

    try {
      const response = await fetch(`/api/order/status/${orderId.trim()}`)
      const data = await response.json()

      if (data.success) {
        setOrder(data.order)
      } else {
        setError(data.error || 'Order not found')
      }
    } catch (err) {
      setError('Failed to fetch order status. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-6 h-6 text-yellow-500" />
      case 'paid':
        return <AlertCircle className="w-6 h-6 text-blue-500" />
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'failed':
      case 'expired':
        return <XCircle className="w-6 h-6 text-red-500" />
      default:
        return <AlertCircle className="w-6 h-6 text-gray-500" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="min-h-screen bg-dark py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Track Your Order</h1>
          <p className="text-xl text-gray-400">
            Enter your order ID to check payment status and access your course
          </p>
        </div>

        {/* Search */}
        <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID (e.g., ord_2025_001)"
                className="w-full p-4 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>{loading ? 'Searching...' : 'Track Order'}</span>
            </button>
          </div>
          
          {error && (
            <div className="mt-4 p-4 bg-red-900/20 border border-red-500 rounded-lg">
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* Order Details */}
        {order && (
          <div className="space-y-8">
            {/* Status Overview */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(order.status)}
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {order.statusInfo.title}
                    </h2>
                    <p className="text-gray-400">{order.statusInfo.description}</p>
                  </div>
                </div>
                {order.timeRemaining && (
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Time Remaining</div>
                    <div className="text-xl font-bold text-yellow-400">
                      {order.timeRemaining}
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {order.progress.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      step.completed
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-zinc-700 bg-zinc-800'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      {step.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-zinc-600" />
                      )}
                      <span className={`font-medium ${step.completed ? 'text-green-400' : 'text-gray-400'}`}>
                        {step.title}
                      </span>
                    </div>
                    {step.timestamp && (
                      <div className="text-xs text-gray-500">
                        {formatDate(step.timestamp)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Information */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Order Information</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400">Order ID</label>
                    <div className="flex items-center space-x-2">
                      <div className="font-mono text-white">{order.orderId}</div>
                      <button
                        onClick={() => copyToClipboard(order.orderId, 'orderId')}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    {copied === 'orderId' && (
                      <p className="text-xs text-green-400 mt-1">Copied!</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Product</label>
                    <div className="text-white">{order.productName}</div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Amount</label>
                    <div className="text-white">
                      ${order.amountUsd} USD ({order.cryptoAmount} {order.cryptoCurrency})
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Payment Method</label>
                    <div className="text-white capitalize">
                      {order.paymentMethod === 'nowpayments' ? 'NOWPayments (Automated)' : 'Direct Wallet'}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {order.paymentAddress && (
                    <div>
                      <label className="text-sm text-gray-400">Payment Address</label>
                      <div className="flex items-center space-x-2">
                        <div className="font-mono text-white text-sm break-all">
                          {order.paymentAddress}
                        </div>
                        <button
                          onClick={() => copyToClipboard(order.paymentAddress!, 'address')}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      {copied === 'address' && (
                        <p className="text-xs text-green-400 mt-1">Copied!</p>
                      )}
                    </div>
                  )}

                  {order.txHash && (
                    <div>
                      <label className="text-sm text-gray-400">Transaction Hash</label>
                      <div className="flex items-center space-x-2">
                        <div className="font-mono text-white text-sm break-all">
                          {order.txHash}
                        </div>
                        <button
                          onClick={() => copyToClipboard(order.txHash!, 'txHash')}
                          className="text-blue-400 hover:text-blue-300"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                      {copied === 'txHash' && (
                        <p className="text-xs text-green-400 mt-1">Copied!</p>
                      )}
                    </div>
                  )}

                  {order.confirmations !== undefined && (
                    <div>
                      <label className="text-sm text-gray-400">Confirmations</label>
                      <div className="text-white">
                        {order.confirmations} / {order.requiredConfirmations} required
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-sm text-gray-400">Created</label>
                    <div className="text-white">{formatDate(order.createdAt)}</div>
                  </div>
                </div>
              </div>

              {order.explorerUrl && (
                <div className="mt-6 pt-6 border-t border-zinc-700">
                  <a
                    href={order.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View on Blockchain Explorer</span>
                  </a>
                </div>
              )}
            </div>

            {/* Course Access */}
            {order.accessGranted && (
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-green-400 mb-4"> Course Access Granted!</h3>
                
                {order.accessUrl && (
                  <div className="mb-6">
                    <a
                      href={order.accessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      Access Your Course
                    </a>
                  </div>
                )}

                {order.downloadLinks && order.downloadLinks.length > 0 && (
                  <div>
                    <h4 className="font-bold text-white mb-3">Direct Downloads:</h4>
                    <div className="space-y-2">
                      {order.downloadLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-green-400 hover:text-green-300 underline"
                        >
                          📎 Download Course Materials {order.downloadLinks!.length > 1 ? `(Part ${index + 1})` : ''}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Support Information */}
            <div className="bg-zinc-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Support & Instructions</h3>
              
              <div className="space-y-4">
                {order.supportInfo.instructions.map((instruction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{instruction}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-700">
                <h4 className="font-bold text-white mb-2">Need Help?</h4>
                <p className="text-gray-300 mb-2">
                  Contact us at:{' '}
                  <a
                    href={`mailto:${order.supportInfo.email}`}
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {order.supportInfo.email}
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  Include your order ID ({order.orderId}) in your message for faster support.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-zinc-900 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Don't have your order ID?</h3>
            <p className="text-gray-400 mb-4">
              Check your email for the order confirmation. The order ID starts with "ord_" followed by numbers.
            </p>
            <p className="text-sm text-gray-500">
              Still can't find it? Contact{' '}
              <a
                href="mailto:support@iimagined.ai"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                support@iimagined.ai
              </a>{' '}
              with your email address and we'll help you locate your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}