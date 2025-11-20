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

// ... (keep platformUrls and platformColors) ...

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
