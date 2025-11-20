'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Unlock, Sparkles } from 'lucide-react'

interface PasscodeGateProps {
  onUnlock: () => void
}

export default function PasscodeGate({ onUnlock }: PasscodeGateProps) {
  const [code, setCode] = useState(['', '', '', ''])
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  // Handle input
  const handleInput = (value: string) => {
    if (value.length > 4) return
    
    const newCode = value.split('').slice(0, 4)
    // Pad with empty strings
    while (newCode.length < 4) newCode.push('')
    
    setCode(newCode)
    setError(false)

    // Check code when 4 digits entered
    if (value.length === 4) {
      if (value === '1400') {
        setSuccess(true)
        setTimeout(() => {
          onUnlock()
        }, 1500)
      } else {
        setError(true)
        setTimeout(() => {
          setCode(['', '', '', ''])
          setError(false)
        }, 500)
      }
    }
  }

  // Handle physical keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (success) return
      
      // Allow numbers
      if (/^[0-9]$/.test(e.key)) {
        const currentStr = code.join('')
        if (currentStr.length < 4) {
          handleInput(currentStr + e.key)
        }
      }
      // Backspace
      if (e.key === 'Backspace') {
        const currentStr = code.join('')
        handleInput(currentStr.slice(0, -1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [code, success])

  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50 overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
            {success ? (
              <Unlock className="w-8 h-8 text-green-400" />
            ) : (
              <Lock className="w-8 h-8 text-white/70" />
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-2">
            Restricted Access
          </h1>
          <p className="text-zinc-500 text-sm uppercase tracking-widest">
            Enter Passcode to Enter the Vault
          </p>
        </motion.div>

        {/* Input Display */}
        <motion.div
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="flex gap-4 mb-12"
        >
          {code.map((digit, i) => (
            <div
              key={i}
              className={`w-14 h-20 rounded-xl border-2 flex items-center justify-center text-3xl font-mono transition-all duration-300 ${
                digit
                  ? 'border-purple-500 bg-purple-500/10 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                  : 'border-white/10 bg-white/5 text-transparent'
              } ${success ? 'border-green-500 bg-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.5)]' : ''}`}
            >
              {digit}
            </div>
          ))}
        </motion.div>

        {/* Success Message */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-400 font-medium"
            >
              <Sparkles className="w-5 h-5" />
              <span>Access Granted. Welcome, Creator.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-12 text-red-400 font-medium text-sm"
            >
              Access Denied. Invalid Passcode.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
