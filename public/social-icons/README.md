# Social Media Icons

This folder contains SVG icons for popular social media platforms in both colored and black/white versions.

## Available Icons

### Format: `{platform}-{color|black}.svg`

| Platform | Colored Version | Black Version | Brand Color |
|----------|----------------|---------------|-------------|
| Instagram | `instagram-color.svg` | `instagram-black.svg` | Gradient (Pink/Purple/Orange) |
| YouTube | `youtube-color.svg` | `youtube-black.svg` | #FF0000 |
| Twitter/X | `twitter-color.svg` | `twitter-black.svg` | #1DA1F2 |
| TikTok | `tiktok-color.svg` | `tiktok-black.svg` | #FF004F |
| Facebook | `facebook-color.svg` | `facebook-black.svg` | #1877F2 |
| LinkedIn | `linkedin-color.svg` | `linkedin-black.svg` | #0077B5 |
| GitHub | `github-color.svg` | `github-black.svg` | #181717 |
| Discord | `discord-color.svg` | `discord-black.svg` | #5865F2 |
| Telegram | `telegram-color.svg` | `telegram-black.svg` | #0088CC |
| Snapchat | `snapchat-color.svg` | `snapchat-black.svg` | #FFFC00 |
| WhatsApp | `whatsapp-color.svg` | `whatsapp-black.svg` | #25D366 |

## Usage

### In React Components
```jsx
import Image from 'next/image'

// Colored version
<Image 
  src="/social-icons/instagram-color.svg" 
  alt="Instagram" 
  width={24} 
  height={24} 
/>

// Black version (uses currentColor, adapts to text color)
<Image 
  src="/social-icons/instagram-black.svg" 
  alt="Instagram" 
  width={24} 
  height={24} 
  className="text-blue-500" // Will be blue
/>
```

### Direct SVG Usage
```jsx
// For more control, import SVG directly
<svg width="24" height="24" className="text-blue-500">
  <use href="/social-icons/instagram-black.svg#svg" />
</svg>
```

## Features

- **SVG Format**: Scalable and crisp at any size
- **Small File Size**: Optimized for web performance
- **Brand Accurate**: Official brand colors for colored versions
- **Flexible**: Black versions use `currentColor` for theming
- **Consistent**: 24x24 viewBox for uniform sizing

## Best Practices

1. **Use colored versions** for brand recognition
2. **Use black versions** when you need custom colors or dark/light theme support
3. **Size appropriately**: 16px-32px typical for social links
4. **Add proper alt text** for accessibility
5. **Consider hover effects** for better UX

## Icon Specifications

- **ViewBox**: 24x24 (consistent across all icons)
- **Colors**: Brand-accurate or `currentColor` for flexibility
- **Optimization**: Minified and optimized for web use
- **Format**: SVG (scalable, small file size)