/**
 * Smooth scroll implementation inspired by award-winning websites
 * Uses native browser APIs for performance
 */

export class SmoothScroll {
  private current: number = 0
  private target: number = 0
  private ease: number = 0.075
  private rafId: number | null = null
  private isScrolling: boolean = false
  private callbacks: Set<(progress: number) => void> = new Set()

  constructor() {
    this.init()
  }

  private init() {
    // Override default scroll behavior
    document.documentElement.style.scrollBehavior = 'auto'
    
    // Set up custom scroll
    window.addEventListener('wheel', this.handleWheel.bind(this), { passive: false })
    window.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false })
    
    // Start animation loop
    this.animate()
  }

  private handleWheel(e: WheelEvent) {
    e.preventDefault()
    
    // Calculate scroll delta with momentum
    const delta = e.deltaY * 0.5
    this.target += delta
    
    // Clamp to document bounds
    const maxScroll = document.body.scrollHeight - window.innerHeight
    this.target = Math.max(0, Math.min(this.target, maxScroll))
    
    this.isScrolling = true
  }

  private handleTouchMove(e: TouchEvent) {
    // Handle touch scrolling for mobile
    if (e.touches.length > 1) return
    
    // Touch logic here if needed
  }

  private animate() {
    // Smooth interpolation
    this.current += (this.target - this.current) * this.ease
    
    // Apply transform for smooth scroll
    if (Math.abs(this.target - this.current) > 0.1) {
      window.scrollTo(0, this.current)
      
      // Notify callbacks with progress
      const progress = this.current / (document.body.scrollHeight - window.innerHeight)
      this.callbacks.forEach(callback => callback(progress))
    } else if (this.isScrolling) {
      this.isScrolling = false
    }
    
    this.rafId = requestAnimationFrame(this.animate.bind(this))
  }

  public onScroll(callback: (progress: number) => void) {
    this.callbacks.add(callback)
    return () => this.callbacks.delete(callback)
  }

  public scrollTo(position: number, instant: boolean = false) {
    this.target = position
    if (instant) {
      this.current = position
      window.scrollTo(0, position)
    }
  }

  public destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
    window.removeEventListener('wheel', this.handleWheel.bind(this))
    window.removeEventListener('touchmove', this.handleTouchMove.bind(this))
  }
}

// Parallax effect helper
export function createParallaxEffect(element: HTMLElement, speed: number = 0.5) {
  const smoothScroll = new SmoothScroll()
  
  smoothScroll.onScroll((progress) => {
    const rect = element.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const screenCenter = window.innerHeight / 2
    const distance = centerY - screenCenter
    
    // Apply parallax transform
    element.style.transform = `translateY(${distance * speed}px)`
  })
  
  return smoothScroll
}

// Reveal animation helper
export function createRevealAnimation(elements: NodeListOf<Element>, options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    stagger: 100,
    ...options
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed')
        }, index * defaultOptions.stagger)
        
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: defaultOptions.threshold,
    rootMargin: defaultOptions.rootMargin
  })

  elements.forEach(element => {
    element.classList.add('reveal-animation')
    observer.observe(element)
  })

  return observer
}

// Magnetic hover effect
export function createMagneticHover(element: HTMLElement, strength: number = 0.3) {
  let animationId: number | null = null
  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0
  
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    targetX = (e.clientX - centerX) * strength
    targetY = (e.clientY - centerY) * strength
  }
  
  const handleMouseLeave = () => {
    targetX = 0
    targetY = 0
  }
  
  const animate = () => {
    currentX += (targetX - currentX) * 0.1
    currentY += (targetY - currentY) * 0.1
    
    element.style.transform = `translate(${currentX}px, ${currentY}px)`
    
    if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
      animationId = requestAnimationFrame(animate)
    }
  }
  
  element.addEventListener('mousemove', handleMouseMove)
  element.addEventListener('mouseleave', handleMouseLeave)
  
  animate()
  
  return () => {
    element.removeEventListener('mousemove', handleMouseMove)
    element.removeEventListener('mouseleave', handleMouseLeave)
    if (animationId) cancelAnimationFrame(animationId)
  }
}

// CSS for reveal animations
export const revealAnimationStyles = `
  .reveal-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .reveal-animation.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Stagger children */
  .stagger-children > * {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .stagger-children > *.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Fade variations */
  .fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .fade-up.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  .fade-scale {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .fade-scale.revealed {
    opacity: 1;
    transform: scale(1);
  }
`