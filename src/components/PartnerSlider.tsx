'use client'

import SocialIcon from './SocialIcon'
import { motion } from 'framer-motion'

export default function PartnerSlider() {
  const partners = [
    { platform: 'nvidia', name: 'NVIDIA' },
    { platform: 'digitalocean', name: 'DigitalOcean' },
    { platform: 'n8n', name: 'N8N' },
    { platform: 'zapier', name: 'Zapier' },
    { platform: 'make', name: 'Make' },
    { platform: 'loom', name: 'Loom' },
    { platform: 'beehiiv', name: 'Beehiiv' },
    { platform: 'whop', name: 'Whop' },
    { platform: 'claude', name: 'Claude' },
    { platform: 'gemini', name: 'Gemini' },
    { platform: 'runpod', name: 'RunPod' },
    { platform: 'fanvue', name: 'Fanvue' },
    { platform: 'manus', name: 'Manus' },
    { platform: 'kling', name: 'Kling AI' }
  ]

  // Double the array for seamless loop
  const doubledPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Creators Using
        </motion.h2>
        <motion.p 
          className="text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Tools and platforms that power modern creator businesses
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {doubledPartners.map((partner, index) => (
            <div
              key={`${partner.platform}-${index}`}
              className="flex-shrink-0 w-36 mx-3 flex flex-col items-center justify-center p-6 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-zinc-700/50 hover:border-zinc-600/50 transition-colors group"
            >
              <SocialIcon 
                platform={partner.platform as any}
                variant="color"
                size={32}
                href={undefined}
                className="mb-3 group-hover:scale-110 transition-transform"
              />
              <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors font-medium">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}