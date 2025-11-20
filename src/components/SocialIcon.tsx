'use client'

import Image from 'next/image'

export type SocialPlatform = 
  | 'instagram' 
  | 'youtube' 
  | 'twitter' 
  | 'tiktok' 
  | 'facebook' 
  | 'linkedin' 
  | 'github' 
  | 'discord' 
  | 'telegram' 
  | 'snapchat' 
  | 'whatsapp'
  | 'fanvue'
  | 'nvidia'
  | 'digitalocean'
  | 'n8n'
  | 'zapier'
  | 'make'
  | 'loom'
  | 'beehiiv'
  | 'whop'
  | 'manus'
  | 'kling'
  | 'claude'
  | 'gemini'
  | 'runpod'

export interface SocialIconProps {
  platform: SocialPlatform
  variant?: 'color' | 'black' | 'white'
  size?: number
  className?: string
  href?: string
  src?: string // Allow custom image source
  target?: '_blank' | '_self'
  onClick?: () => void
}

const platformUrls: Record<SocialPlatform, string> = {
  instagram: 'https://instagram.com/',
  youtube: 'https://youtube.com/',
  twitter: 'https://twitter.com/',
  tiktok: 'https://tiktok.com/',
  facebook: 'https://facebook.com/',
  linkedin: 'https://linkedin.com/',
  github: 'https://github.com/',
  discord: 'https://discord.com/',
  telegram: 'https://telegram.org/',
  snapchat: 'https://snapchat.com/',
  whatsapp: 'https://whatsapp.com/',
  fanvue: 'https://fanvue.com/',
  nvidia: 'https://nvidia.com/',
  digitalocean: 'https://digitalocean.com/',
  n8n: 'https://n8n.io/',
  zapier: 'https://zapier.com/',
  make: 'https://make.com/',
  loom: 'https://loom.com/',
  beehiiv: 'https://beehiiv.com/',
  whop: 'https://whop.com/',
  manus: 'https://manus.com/',
  kling: 'https://kling.ai/',
  claude: 'https://claude.ai/',
  gemini: 'https://gemini.google.com/',
  runpod: 'https://runpod.io/'
}

// Platform color mapping
const platformColors: Record<SocialPlatform, string> = {
  instagram: '#E4405F',
  youtube: '#FF0000',
  twitter: '#1DA1F2',
  tiktok: '#000000',
  facebook: '#1877F2',
  linkedin: '#0A66C2',
  github: '#181717',
  discord: '#5865F2',
  telegram: '#0088CC',
  snapchat: '#FFFC00',
  whatsapp: '#25D366',
  fanvue: '#FF6B6B',
  nvidia: '#76B900',
  digitalocean: '#0080FF',
  n8n: '#EA4B71',
  zapier: '#FF4A00',
  make: '#6366F1',
  loom: '#625DF5',
  beehiiv: '#3B82F6',
  whop: '#7C3AED',
  manus: '#8B5CF6',
  kling: '#EC4899',
  claude: '#D97706',
  gemini: '#4285F4',
  runpod: '#7C3AED'
}

export default function SocialIcon({
  platform,
  variant = 'color',
  size = 24,
  className = '',
  href,
  src, // Destructure src
  target = '_blank',
  onClick
}: SocialIconProps) {
  const defaultHref = href || platformUrls[platform]
  
  // Map variant to filename suffix
  const iconVariant = variant === 'color' ? 'color' : 'black'
  
  // Use provided src or fallback to constructed path
  const iconPath = src || `/social-icons/${platform}-${iconVariant}.svg`

  const iconElement = (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      onClick={onClick}
    >
      <Image
        src={iconPath}
        alt={`${platform} icon`}
        fill
        className={`object-contain ${variant === 'white' ? 'invert brightness-0 invert' : ''}`}
        onError={(e) => {
            // Fallback to text if image fails (though we should ensure images exist)
            e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )

  if (href !== null && !onClick) {
    return (
      <a
        href={defaultHref}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="inline-block hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-lg"
        aria-label={`Visit ${platform}`}
      >
        {iconElement}
      </a>
    )
  }

  return iconElement
}

// Convenience component for social media link grids
export interface SocialLinksProps {
  platforms: {
    platform: SocialPlatform
    href?: string
    variant?: 'color' | 'black' | 'white'
  }[]
  size?: number
  className?: string
  gap?: string
}

export function SocialLinks({
  platforms,
  size = 24,
  className = '',
  gap = 'gap-4'
}: SocialLinksProps) {
  return (
    <div className={`flex ${gap} ${className}`}>
      {platforms.map(({ platform, href, variant = 'color' }) => (
        <SocialIcon
          key={platform}
          platform={platform}
          variant={variant}
          size={size}
          href={href}
        />
      ))}
    </div>
  )
}

// Example usage component showing different variations
export function SocialIconShowcase() {
  const socialPlatforms: SocialPlatform[] = [
    'instagram', 'youtube', 'twitter', 'tiktok', 'facebook', 
    'linkedin', 'github', 'discord', 'telegram', 'whatsapp'
  ]

  const businessPlatforms: SocialPlatform[] = [
    'fanvue', 'nvidia', 'digitalocean', 'n8n', 'zapier', 'make',
    'loom', 'beehiiv', 'whop', 'claude', 'gemini', 'runpod'
  ]

  return (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Social Media Icons (Colored)</h3>
        <div className="flex flex-wrap gap-4">
          {socialPlatforms.map(platform => (
            <SocialIcon key={platform} platform={platform} variant="color" size={32} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Business Tools Icons (Colored)</h3>
        <div className="flex flex-wrap gap-4">
          {businessPlatforms.map(platform => (
            <SocialIcon key={platform} platform={platform} variant="color" size={32} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Black Icons</h3>
        <div className="flex flex-wrap gap-4">
          {socialPlatforms.slice(0, 6).map(platform => (
            <SocialIcon key={platform} platform={platform} variant="black" size={32} />
          ))}
          {businessPlatforms.slice(0, 6).map(platform => (
            <SocialIcon key={platform} platform={platform} variant="black" size={32} />
          ))}
        </div>
      </div>

      <div className="bg-gray-900 p-4 rounded">
        <h3 className="text-lg font-semibold mb-4 text-white">White Icons on Dark</h3>
        <div className="flex flex-wrap gap-4">
          {socialPlatforms.slice(0, 6).map(platform => (
            <SocialIcon 
              key={platform} 
              platform={platform} 
              variant="white" 
              size={32} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
