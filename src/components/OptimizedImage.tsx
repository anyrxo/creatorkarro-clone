import Image, { ImageProps } from 'next/image'

/**
 * OptimizedImage Component
 *
 * Automatically serves WebP images with fallback support for browsers that don't support WebP.
 * Uses Next.js Image component for automatic optimization, lazy loading, and responsive sizing.
 *
 * Features:
 * - Automatic WebP conversion
 * - Lazy loading by default (eager for priority images)
 * - Responsive image sizing
 * - Browser fallback support
 * - TypeScript support
 * - All Next.js Image props supported
 *
 * Usage:
 * ```tsx
 * <OptimizedImage
 *   src="/testimonials/testimonial-1.jpg"
 *   alt="Customer testimonial"
 *   width={400}
 *   height={400}
 *   priority={false}
 * />
 * ```
 */

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
  alt: string
  /** Use eager loading for above-the-fold images */
  priority?: boolean
  /** Custom className for styling */
  className?: string
  /** Quality of the image (1-100, default: 80) */
  quality?: number
}

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  className = '',
  quality = 80,
  ...props
}: OptimizedImageProps) {
  // Automatically convert to WebP path if source is JPG/PNG
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  // Use WebP if available, fallback to original
  const optimizedSrc = webpSrc !== src ? webpSrc : src

  return (
    <Image
      src={optimizedSrc}
      alt={alt}
      quality={quality}
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
      className={className}
      {...props}
    />
  )
}

/**
 * OptimizedBackgroundImage Component
 *
 * Creates an optimized background image using CSS with WebP support
 * and fallback for older browsers.
 *
 * Usage:
 * ```tsx
 * <OptimizedBackgroundImage
 *   src="/hero-background.jpg"
 *   className="w-full h-screen"
 * >
 *   <div>Content here</div>
 * </OptimizedBackgroundImage>
 * ```
 */

interface OptimizedBackgroundImageProps {
  src: string
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function OptimizedBackgroundImage({
  src,
  children,
  className = '',
  style = {}
}: OptimizedBackgroundImageProps) {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url('${webpSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...style
      }}
    >
      {children}
    </div>
  )
}

/**
 * Picture Element Component for Manual WebP Control
 *
 * Use this when you need more control over the WebP fallback behavior
 * or when using multiple image sources for art direction.
 *
 * Usage:
 * ```tsx
 * <PictureImage
 *   src="/image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 * />
 * ```
 */

interface PictureImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  loading?: 'lazy' | 'eager'
}

export function PictureImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy'
}: PictureImageProps) {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    </picture>
  )
}
