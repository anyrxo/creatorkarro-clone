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

export default function SocialIcon({
  platform,
  variant = 'color',
  size = 24,
  className = '',
  href,
  target = '_blank',
  onClick
}: SocialIconProps) {
  const iconSrc = `/social-icons/${platform}-${variant}.svg`
  const defaultHref = href || platformUrls[platform]
  
  const iconElement = (
    <Image
      src={iconSrc}
      alt={`${platform} icon`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      onClick={onClick}
    />
  )

  if (href !== null && !onClick) {
    return (
      <a
        href={defaultHref}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="inline-block hover:opacity-75 transition-opacity"
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
              variant="black" 
              size={32} 
              className="text-white"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Colored Icons</h3>
        <div className="flex flex-wrap gap-4">
          {businessPlatforms.slice(0, 8).map(platform => (
            <SocialIcon 
              key={platform} 
              platform={platform} 
              variant="black" 
              size={32} 
              className="text-blue-500 hover:text-blue-600 transition-colors"
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Social Links Component</h3>
        <SocialLinks
          platforms={[
            { platform: 'instagram', href: 'https://instagram.com/yourhandle' },
            { platform: 'youtube', href: 'https://youtube.com/yourchannel' },
            { platform: 'twitter', href: 'https://twitter.com/yourhandle' },
            { platform: 'tiktok', href: 'https://tiktok.com/@yourhandle' }
          ]}
          size={28}
          gap="gap-6"
        />
      </div>
    </div>
  )
}