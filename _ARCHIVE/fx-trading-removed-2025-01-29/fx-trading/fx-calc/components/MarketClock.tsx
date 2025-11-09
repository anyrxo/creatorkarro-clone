'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Globe } from 'lucide-react'

const MarketClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getMarketStatus = (openHour: number, closeHour: number, timezone: string) => {
    const now = new Date()
    
    // Convert current time to market timezone
    const marketTime = new Date(now.toLocaleString("en-US", {timeZone: timezone}))
    const currentHour = marketTime.getHours()
    const currentMinute = marketTime.getMinutes()
    const currentTimeInMinutes = currentHour * 60 + currentMinute
    
    // Handle markets that close next day
    const openMinutes = openHour * 60
    const closeMinutes = closeHour * 60
    
    // For markets that span midnight (like Tokyo)
    if (closeHour < openHour) {
      if (currentHour >= openHour || currentHour < closeHour) {
        return { isOpen: true, marketTime }
      }
    } else {
      if (currentTimeInMinutes >= openMinutes && currentTimeInMinutes < closeMinutes) {
        return { isOpen: true, marketTime }
      }
    }
    
    return { isOpen: false, marketTime }
  }

  const markets = [
    {
      name: 'ASX',
      fullName: 'Australian Securities Exchange',
      timezone: 'Australia/Sydney',
      openHour: 10,
      closeHour: 16,
      flag: '🇦🇺'
    },
    {
      name: 'Tokyo',
      fullName: 'Tokyo Stock Exchange', 
      timezone: 'Asia/Tokyo',
      openHour: 9,
      closeHour: 15,
      flag: '🇯🇵'
    },
    {
      name: 'London',
      fullName: 'London Stock Exchange',
      timezone: 'Europe/London',
      openHour: 8,
      closeHour: 16.5,
      flag: '🇬🇧'
    },
    {
      name: 'NYSE', 
      fullName: 'New York Stock Exchange',
      timezone: 'America/New_York',
      openHour: 9.5,
      closeHour: 16,
      flag: '🇺🇸'
    }
  ]

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit', 
      second: '2-digit'
    })
  }

  return (
    <Card className="bg-slate-800/50 border-slate-600/50 mb-6">
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <Globe className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium text-white">Global Markets</span>
          <Clock className="h-3 w-3 text-gray-400" />
          <span className="text-xs text-gray-400">
            UTC: {formatTime(currentTime)}
          </span>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {markets.map((market) => {
            const status = getMarketStatus(market.openHour, market.closeHour, market.timezone)
            
            return (
              <div key={market.name} className="flex flex-col items-center p-2 bg-slate-700/50 rounded-lg">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-sm">{market.flag}</span>
                  <span className="text-xs font-medium text-white">{market.name}</span>
                </div>
                
                <Badge 
                  className={`text-xs px-2 py-0.5 ${
                    status.isOpen 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}
                >
                  {status.isOpen ? 'OPEN' : 'CLOSED'}
                </Badge>
                
                <div className="text-xs text-gray-300 mt-1 text-center">
                  {formatTime(status.marketTime)}
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="mt-2 text-xs text-gray-400 text-center">
          Live market status • Updates every second
        </div>
      </CardContent>
    </Card>
  )
}

export default MarketClock