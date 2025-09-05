'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BarChart3, Maximize2, RefreshCw, Clock } from 'lucide-react'

// Symbol mapping for TradingView charts (from original implementation)
const TRADINGVIEW_SYMBOL_MAP: Record<string, string> = {
  'EURUSD': 'FX:EURUSD',
  'GBPUSD': 'FX:GBPUSD', 
  'USDJPY': 'FX:USDJPY',
  'USDCHF': 'FX:USDCHF',
  'AUDUSD': 'FX:AUDUSD',
  'USDCAD': 'FX:USDCAD',
  'NZDUSD': 'FX:NZDUSD',
  'EURJPY': 'FX:EURJPY',
  'GBPJPY': 'FX:GBPJPY',
  'EURGBP': 'FX:EURGBP',
  'AUDCAD': 'FX:AUDCAD',
  'AUDCHF': 'FX:AUDCHF',
  'AUDJPY': 'FX:AUDJPY',
  'CADJPY': 'FX:CADJPY',
  'CHFJPY': 'FX:CHFJPY',
  'EURAUD': 'FX:EURAUD',
  'EURCAD': 'FX:EURCAD',
  'EURCHF': 'FX:EURCHF',
  'GBPAUD': 'FX:GBPAUD',
  'GBPCAD': 'FX:GBPCAD',
  'GBPCHF': 'FX:GBPCHF',
  'GBPNZD': 'FX:GBPNZD',
  'NZDCAD': 'FX:NZDCAD',
  'NZDCHF': 'FX:NZDCHF',
  'NZDJPY': 'FX:NZDJPY',
  // Indices
  'NAS100': 'NASDAQ:NDX',
  'SPX500': 'SP:SPX',
  'US30': 'DJ:DJI',
  'GER40': 'XETR:DAX',
  'UK100': 'LSE:UKX',
  'FRA40': 'EURONEXT:PX1',
  'JPN225': 'TVC:NI225',
  'AUS200': 'ASX:XJO',
  // Commodities
  'XAUUSD': 'TVC:GOLD',
  'XAGUSD': 'TVC:SILVER',
  'USOIL': 'NYMEX:CL1!',
  'UKOIL': 'ICE:BZ1!',
  'NATGAS': 'NYMEX:NG1!',
  // Crypto
  'BTCUSD': 'BITSTAMP:BTCUSD',
  'ETHUSD': 'BITSTAMP:ETHUSD'
}

interface TradingViewChartProps {
  selectedPair: string
  height?: number
  showControls?: boolean
  className?: string
}

const TradingViewChart: React.FC<TradingViewChartProps> = ({ 
  selectedPair, 
  height = 500,
  showControls = true,
  className = ""
}) => {
  const chartRef = useRef<HTMLDivElement>(null)
  const widgetRef = useRef<any>(null)
  const [timeframe, setTimeframe] = useState('1H')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  // Get TradingView symbol from our pair
  const getTradingViewSymbol = (pair: string): string => {
    // Remove spaces and convert to uppercase for lookup
    const cleanPair = pair.replace(/\s+/g, '').replace('/', '').toUpperCase()
    return TRADINGVIEW_SYMBOL_MAP[cleanPair] || `FX:${cleanPair}`
  }

  const createChart = () => {
    if (!chartRef.current) return

    setIsLoading(true)
    setError(null)

    try {
      // Clear existing chart
      if (widgetRef.current) {
        chartRef.current.innerHTML = ''
      }

      const tradingViewSymbol = getTradingViewSymbol(selectedPair)
      
      const script = document.createElement('script')
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
      script.type = 'text/javascript'
      script.async = true
      
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: tradingViewSymbol,
        interval: timeframe,
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        withdateranges: true,
        range: "3M",
        hide_side_toolbar: false,
        allow_symbol_change: false,
        details: true,
        hotlist: true,
        calendar: false,
        studies: [
          "RSI@tv-basicstudies",
          "MASimple@tv-basicstudies"
        ],
        support_host: "https://www.tradingview.com"
      })
      
      script.onload = () => {
        setIsLoading(false)
      }
      
      script.onerror = () => {
        setError('Failed to load TradingView chart')
        setIsLoading(false)
      }
      
      if (chartRef.current) {
        chartRef.current.appendChild(script)
        widgetRef.current = script
      }
      
    } catch (err) {
      console.error('Error creating TradingView chart:', err)
      setError('Error initializing chart')
      setIsLoading(false)
    }
  }

  // Recreate chart when symbol or timeframe changes
  useEffect(() => {
    const timer = setTimeout(() => {
      createChart()
    }, 100)
    
    return () => clearTimeout(timer)
  }, [selectedPair, timeframe])

  const refreshChart = () => {
    createChart()
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const timeframes = [
    { value: '1', label: '1m' },
    { value: '5', label: '5m' },
    { value: '15', label: '15m' },
    { value: '30', label: '30m' },
    { value: '1H', label: '1H' },
    { value: '4H', label: '4H' },
    { value: '1D', label: '1D' },
    { value: '1W', label: '1W' }
  ]

  return (
    <Card className={`${className} ${isFullscreen ? 'fixed inset-4 z-50' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            <CardTitle className="text-lg">Live Chart - {selectedPair}</CardTitle>
            <Badge variant="secondary" className="text-xs">
              {getTradingViewSymbol(selectedPair)}
            </Badge>
          </div>
          
          {showControls && (
            <div className="flex items-center gap-2">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map(tf => (
                    <SelectItem key={tf.value} value={tf.value}>
                      {tf.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={refreshChart}
                disabled={isLoading}
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={toggleFullscreen}
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <CardDescription className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          Real-time market data powered by TradingView
          {isLoading && (
            <Badge variant="secondary" className="animate-pulse">Loading...</Badge>
          )}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-0">
        {error ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              Unable to load chart for {selectedPair}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {error}
            </p>
            <Button onClick={refreshChart} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry
            </Button>
          </div>
        ) : (
          <div 
            ref={chartRef}
            style={{ height: `${height}px` }}
            className="tradingview-widget-container w-full relative"
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <div className="flex flex-col items-center gap-2">
                  <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Loading {selectedPair} chart...
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      {isFullscreen && (
        <div className="absolute top-4 right-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleFullscreen}
            className="bg-background"
          >
            Exit Fullscreen
          </Button>
        </div>
      )}
    </Card>
  )
}

export default TradingViewChart