import React from 'react'

// Professional SVG icons for pain points and features
export type PainPointIconType = 
  | 'chart-down' 
  | 'fire' 
  | 'skull' 
  | 'ghost' 
  | 'money-off' 
  | 'flame'
  | 'target'
  | 'diamond'
  | 'graduation'
  | 'rocket'
  | 'analytics'
  | 'automation'
  | 'monetization'
  | 'content'
  | 'platform'
  | 'scaling'
  | 'psychology'

interface PainPointIconProps {
  type: PainPointIconType
  size?: number
  className?: string
  color?: string
}

export default function PainPointIcon({ 
  type, 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}: PainPointIconProps) {
  const getIcon = () => {
    switch (type) {
      case 'chart-down':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M7 18V12L10 15L13 9L16 12V18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 21H21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M16 8L20 4L16 4L16 8Z" fill={color}/>
          </svg>
        )
      
      case 'fire':
      case 'flame':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 2C12 2 19 8.5 19 13.5C19 18.194 15.418 22 11 22C6.582 22 3 18.194 3 13.5C3 8.5 12 2 12 2Z" fill={color} opacity="0.2"/>
            <path d="M12 2C12 2 19 8.5 19 13.5C19 18.194 15.418 22 11 22C6.582 22 3 18.194 3 13.5C3 8.5 12 2 12 2Z" stroke={color} strokeWidth="2"/>
            <path d="M12 7C12 7 15 10 15 12.5C15 14.433 13.433 16 11.5 16C9.567 16 8 14.433 8 12.5C8 10 12 7 12 7Z" fill={color}/>
          </svg>
        )
      
      case 'skull':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 2C7.03 2 3 6.47 3 12C3 15.5 4.5 18.58 7 20.5V22H17V20.5C19.5 18.58 21 15.5 21 12C21 6.47 16.97 2 12 2Z" fill={color} opacity="0.2"/>
            <path d="M12 2C7.03 2 3 6.47 3 12C3 15.5 4.5 18.58 7 20.5V22H17V20.5C19.5 18.58 21 15.5 21 12C21 6.47 16.97 2 12 2Z" stroke={color} strokeWidth="2"/>
            <circle cx="9" cy="11" r="1.5" fill={color}/>
            <circle cx="15" cy="11" r="1.5" fill={color}/>
            <path d="M10 16L12 18L14 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      
      case 'ghost':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 3C8.134 3 5 6.134 5 10V18C5 18.552 5.448 19 6 19C6.552 19 7 18.552 7 18V17L9 19L11 17L13 19L15 17L17 19V18C17 18.552 17.448 19 18 19C18.552 19 19 18.552 19 18V10C19 6.134 15.866 3 12 3Z" fill={color} opacity="0.2"/>
            <path d="M12 3C8.134 3 5 6.134 5 10V18C5 18.552 5.448 19 6 19C6.552 19 7 18.552 7 18V17L9 19L11 17L13 19L15 17L17 19V18C17 18.552 17.448 19 18 19C18.552 19 19 18.552 19 18V10C19 6.134 15.866 3 12 3Z" stroke={color} strokeWidth="2"/>
            <circle cx="9" cy="10" r="1" fill={color}/>
            <circle cx="15" cy="10" r="1" fill={color}/>
          </svg>
        )
      
      case 'money-off':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
            <path d="M12 6V8M12 16V18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 9.5C15 8.119 13.657 7 12 7C10.343 7 9 8.119 9 9.5S10.343 12 12 12C13.657 12 15 13.119 15 14.5S13.657 17 12 17C10.343 17 9 15.881 9 14.5" stroke={color} strokeWidth="2"/>
            <line x1="3" y1="3" x2="21" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      
      case 'target':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
            <circle cx="12" cy="12" r="7" stroke={color} strokeWidth="2"/>
            <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2"/>
            <circle cx="12" cy="12" r="1" fill={color}/>
          </svg>
        )
      
      case 'diamond':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M6 9H18L21 12L12 22L3 12L6 9Z" fill={color} opacity="0.2"/>
            <path d="M6 9H18L21 12L12 22L3 12L6 9Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2L16 2L18 9L6 9L8 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9V22" stroke={color} strokeWidth="1" strokeLinecap="round"/>
          </svg>
        )
      
      case 'graduation':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M22 10L12 5L2 10L12 15L22 10Z" fill={color} opacity="0.2"/>
            <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 13V16C6 17.105 8.686 20 12 20S18 17.105 18 16V13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 10V16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      
      case 'rocket':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M4.5 16.5C4.5 16.5 5.5 17.5 8 15S15 8 15 8L16 7L17 8L9 16L8 15L4.5 16.5Z" fill={color} opacity="0.2"/>
            <path d="M4.5 16.5C4.5 16.5 5.5 17.5 8 15S15 8 15 8" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 8L22 2L18 6L15 8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 22L4.5 16.5L7.5 19.5L2 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12L12 9" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="6" r="2" fill={color}/>
          </svg>
        )
      
      case 'analytics':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="3" y="3" width="18" height="18" rx="2" fill={color} opacity="0.1"/>
            <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2"/>
            <path d="M8 12L12 8L16 12L20 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="8" cy="12" r="2" fill={color}/>
            <circle cx="12" cy="8" r="2" fill={color}/>
            <circle cx="16" cy="12" r="2" fill={color}/>
          </svg>
        )
      
      case 'automation':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="2" y="6" width="20" height="12" rx="2" fill={color} opacity="0.1"/>
            <rect x="2" y="6" width="20" height="12" rx="2" stroke={color} strokeWidth="2"/>
            <circle cx="8" cy="12" r="2" stroke={color} strokeWidth="2"/>
            <circle cx="16" cy="12" r="2" stroke={color} strokeWidth="2"/>
            <path d="M10 12H14" stroke={color} strokeWidth="2"/>
            <path d="M6 3V6M18 3V6M6 18V21M18 18V21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      
      case 'monetization':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <circle cx="12" cy="12" r="10" fill={color} opacity="0.1"/>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
            <path d="M12 6V8M12 16V18" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 9.5C15 8.119 13.657 7 12 7C10.343 7 9 8.119 9 9.5S10.343 12 12 12C13.657 12 15 13.119 15 14.5S13.657 17 12 17C10.343 17 9 15.881 9 14.5" stroke={color} strokeWidth="2"/>
          </svg>
        )
      
      case 'content':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="3" y="4" width="18" height="16" rx="2" fill={color} opacity="0.1"/>
            <rect x="3" y="4" width="18" height="16" rx="2" stroke={color} strokeWidth="2"/>
            <path d="M7 8H17M7 12H13M7 16H15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      
      case 'platform':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="2" y="2" width="20" height="20" rx="2" fill={color} opacity="0.1"/>
            <rect x="2" y="2" width="20" height="20" rx="2" stroke={color} strokeWidth="2"/>
            <rect x="6" y="6" width="4" height="4" rx="1" fill={color}/>
            <rect x="14" y="6" width="4" height="4" rx="1" fill={color}/>
            <rect x="6" y="14" width="4" height="4" rx="1" fill={color}/>
            <rect x="14" y="14" width="4" height="4" rx="1" fill={color}/>
          </svg>
        )
      
      case 'scaling':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M3 12L9 6L13 10L21 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2L21 2L21 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="2" y="18" width="4" height="4" fill={color} opacity="0.6"/>
            <rect x="7" y="15" width="4" height="7" fill={color} opacity="0.7"/>
            <rect x="12" y="12" width="4" height="10" fill={color} opacity="0.8"/>
            <rect x="17" y="8" width="4" height="14" fill={color}/>
          </svg>
        )
      
      case 'psychology':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill={color}/>
            <path d="M21 9V7L15 4L13 5V7H11L10.5 7.5C9.88 8.13 9 8.52 8 8.5C7 8.48 6.12 8.06 5.5 7.5L5 7H4C2.89 7 2 7.89 2 9V11C2 12.11 2.89 13 4 13H5V19C5 20.11 5.89 21 7 21H9C10.11 21 11 20.11 11 19V15H13V19C13 20.11 13.89 21 15 21H17C18.11 21 19 20.11 19 19V13H20C21.11 13 22 12.11 22 11V9C22 7.89 21.11 7 20 7H21Z" fill={color} opacity="0.2"/>
            <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2"/>
            <path d="M12 9V15M9 12H15" stroke={color} strokeWidth="1"/>
          </svg>
        )
      
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
          </svg>
        )
    }
  }

  return getIcon()
}