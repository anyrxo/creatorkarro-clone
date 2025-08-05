'use client'

import { useEffect, useState } from 'react'

interface ScrambleTextProps {
  text: string
  className?: string
  scrambleSpeed?: number
  revealSpeed?: number
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

export default function ScrambleText({ 
  text, 
  className = '', 
  scrambleSpeed = 50, 
  revealSpeed = 100 
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    let animationId: number

    const scrambleChar = () => {
      return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    }

    const animate = () => {
      if (currentIndex <= text.length) {
        const revealed = text.slice(0, currentIndex)
        const scrambled = Array.from({ length: text.length - currentIndex }, () => scrambleChar()).join('')
        
        setDisplayText(revealed + scrambled)
        
        // Move to next character every revealSpeed ms
        const now = Date.now()
        if (now % revealSpeed < scrambleSpeed) {
          currentIndex++
        }
        
        if (currentIndex > text.length) {
          setDisplayText(text)
          setIsComplete(true)
          return
        }
        
        animationId = requestAnimationFrame(animate)
      }
    }

    // Start animation after a brief delay
    const startTimeout = setTimeout(() => {
      animate()
    }, 500)

    return () => {
      clearTimeout(startTimeout)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [text, scrambleSpeed, revealSpeed])

  return (
    <span className={className}>
      {displayText}
    </span>
  )
}