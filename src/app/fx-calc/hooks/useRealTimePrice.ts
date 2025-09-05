import { useState, useEffect, useRef } from 'react'

// Symbol mapping for our API (matching Python server symbols)
const SYMBOL_MAPPING: Record<string, string> = {
  // Forex pairs
  'EUR/USD': 'EURUSD',
  'GBP/USD': 'GBPUSD',
  'USD/JPY': 'USDJPY',
  'USD/CHF': 'USDCHF',
  'AUD/USD': 'AUDUSD',
  'USD/CAD': 'USDCAD',
  'NZD/USD': 'NZDUSD',
  'EUR/GBP': 'EURGBP',
  'EUR/JPY': 'EURJPY',
  'GBP/JPY': 'GBPJPY',
  'AUD/CAD': 'AUDCAD',
  'AUD/CHF': 'AUDCHF',
  'AUD/JPY': 'AUDJPY',
  'CAD/JPY': 'CADJPY',
  'CHF/JPY': 'CHFJPY',
  'EUR/AUD': 'EURAUD',
  'EUR/CAD': 'EURCAD',
  'EUR/CHF': 'EURCHF',
  'GBP/AUD': 'GBPAUD',
  'GBP/CAD': 'GBPCAD',
  'GBP/CHF': 'GBPCHF',
  'GBP/NZD': 'GBPNZD',
  'NZD/CAD': 'NZDCAD',
  'NZD/CHF': 'NZDCHF',
  'NZD/JPY': 'NZDJPY',
  
  // Indices  
  'NASDAQ 100': 'NAS100',
  'S&P 500': 'SPX500',
  'Dow Jones 30': 'US30',
  'DAX 40': 'GER40',
  'FTSE 100': 'UK100',
  'CAC 40': 'FRA40',
  'Nikkei 225': 'JPN225',
  'ASX 200': 'AUS200',
  
  // Commodities
  'Gold': 'XAUUSD',
  'Silver': 'XAGUSD',
  'Crude Oil': 'USOIL',
  'Brent Oil': 'UKOIL',
  'Natural Gas': 'NATGAS',
  
  // Crypto
  'Bitcoin': 'BTCUSD',
  'Ethereum': 'ETHUSD'
}

interface PriceData {
  symbol: string
  price: number
  change: number
  change_pct: number
  status: string
}

interface PriceHistory {
  price: number
  timestamp: number
  change: number
  change_pct: number
}

export const useRealTimePrice = (symbol: string, interval = '1m', updateInterval = 1000) => {
  const [price, setPrice] = useState<number | null>(null)
  const [priceData, setPriceData] = useState<PriceData | null>(null)
  const [priceHistory, setPriceHistory] = useState<PriceHistory[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchPrice = async () => {
    if (!symbol) return
    
    setLoading(true)
    setError(null)
    
    try {
      const mappedSymbol = SYMBOL_MAPPING[symbol] || symbol
      const response = await fetch(`http://localhost:5001/api/price/${encodeURIComponent(mappedSymbol)}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.status === 'success' || data.status === 'limited_data') {
        const currentPrice = data.price
        setPrice(currentPrice)
        setPriceData(data)
        
        setPriceHistory(prev => {
          const newHistory = [...prev, { 
            price: currentPrice, 
            timestamp: Date.now(),
            change: data.change || 0,
            change_pct: data.change_pct || 0
          }]
          // Keep only last 100 data points
          return newHistory.slice(-100)
        })
      } else {
        throw new Error(data.error || 'Failed to fetch price data')
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('Error fetching price:', err)
      
      // Fallback to mock data if API fails
      const mockPrices: Record<string, number> = {
        'EUR/USD': 1.08673,
        'GBP/USD': 1.31245,
        'USD/JPY': 149.85,
        'AUD/USD': 0.66789,
        'USD/CAD': 1.35456,
        'USD/CHF': 0.89234,
        'NZD/USD': 0.60123,
        'EUR/GBP': 0.85456,
        'EUR/JPY': 162.34,
        'GBP/JPY': 196.78,
        'NASDAQ 100': 16234.56,
        'S&P 500': 4502.08,
        'Dow Jones 30': 35567.89,
        'DAX 40': 15234.67,
        'FTSE 100': 7456.23,
        'Nikkei 225': 32456.78,
        'Gold': 2034.50,
        'Silver': 24.67,
        'Crude Oil': 78.45,
        'Bitcoin': 67890.12,
        'Ethereum': 3456.78
      }

      const basePrice = mockPrices[symbol] || Math.random() * 100 + 1
      const variation = (Math.random() - 0.5) * 0.002
      const currentPrice = basePrice * (1 + variation)
      
      setPrice(parseFloat(currentPrice.toFixed(5)))
      setPriceData({
        symbol: symbol,
        price: currentPrice,
        change: variation * basePrice,
        change_pct: variation * 100,
        status: 'fallback'
      })
      
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (symbol) {
      // Fetch immediately
      fetchPrice()
      
      // Set up interval for regular updates
      intervalRef.current = setInterval(fetchPrice, updateInterval)
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [symbol, interval, updateInterval])

  const startRealTime = () => {
    if (!intervalRef.current && symbol) {
      fetchPrice()
      intervalRef.current = setInterval(fetchPrice, updateInterval)
    }
  }

  const stopRealTime = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  return {
    price,
    priceData,
    priceHistory,
    loading,
    error,
    startRealTime,
    stopRealTime,
    refetch: fetchPrice
  }
}

// Hook for market analysis
export const useMarketAnalysis = (symbol: string, updateInterval = 5000) => {
  const [analysis, setAnalysis] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchAnalysis = async () => {
    if (!symbol) return
    
    setLoading(true)
    setError(null)
    
    try {
      const mappedSymbol = SYMBOL_MAPPING[symbol] || symbol
      const response = await fetch(`http://localhost:5001/api/analysis/${encodeURIComponent(mappedSymbol)}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.status === 'success') {
        setAnalysis(data)
      } else {
        throw new Error(data.error || 'Failed to fetch analysis')
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('Error fetching analysis:', err)
      
      // Fallback analysis
      setAnalysis({
        symbol: symbol,
        analysis: {
          overall_trend: 'neutral',
          confidence: 50,
          suggested_action: 'hold',
          entry_price: 1.0,
          stop_loss: 0.99,
          take_profit: 1.01,
          risk_level: 'medium',
          reasoning: ['Analysis temporarily unavailable'],
          pip_target: 20
        },
        status: 'fallback'
      })
      
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (symbol) {
      fetchAnalysis()
      intervalRef.current = setInterval(fetchAnalysis, updateInterval)
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
      }
    }
  }, [symbol, updateInterval])

  return {
    analysis,
    loading,
    error,
    refetch: fetchAnalysis
  }
}

// Hook for market news
export const useMarketNews = (updateInterval = 300000) => { // 5 minutes
  const [news, setNews] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const fetchNews = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('http://localhost:5001/api/news')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.status === 'success' || data.status === 'limited') {
        setNews(data.news || [])
      } else {
        throw new Error(data.error || 'Failed to fetch news')
      }
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('Error fetching news:', err)
      
      // Fallback news
      setNews([
        {
          title: 'Market Analysis System Active',
          summary: 'Real-time market data and analysis is now available',
          source: 'Trading Calculator',
          timestamp: new Date().toISOString()
        }
      ])
      
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
    intervalRef.current = setInterval(fetchNews, updateInterval)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [updateInterval])

  return {
    news,
    loading,
    error,
    refetch: fetchNews
  }
}