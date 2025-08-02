/**
 * Sound Manager for beautiful website interactions
 * Handles ambient sounds, click effects, and hover sounds
 */

interface SoundConfig {
  volume: number
  loop?: boolean
  fadeIn?: number
  fadeOut?: number
}

interface Sound {
  audio: HTMLAudioElement
  config: SoundConfig
}

export class SoundManager {
  private sounds: Map<string, Sound> = new Map()
  private enabled: boolean = true
  private globalVolume: number = 0.5
  private context: AudioContext | null = null
  private initialized: boolean = false

  constructor() {
    // Initialize on first user interaction
    if (typeof window !== 'undefined') {
      ['click', 'touchstart'].forEach(event => {
        window.addEventListener(event, () => this.init(), { once: true })
      })
    }
  }

  private async init() {
    if (this.initialized) return
    
    try {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)()
      this.initialized = true
      
      // Load default sounds
      await this.loadDefaultSounds()
    } catch (error) {
      console.warn('Audio context initialization failed:', error)
    }
  }

  private async loadDefaultSounds() {
    const defaultSounds = {
      // UI Sounds
      hover: { url: '/sounds/hover.mp3', volume: 0.2 },
      click: { url: '/sounds/click.mp3', volume: 0.3 },
      success: { url: '/sounds/success.mp3', volume: 0.4 },
      error: { url: '/sounds/error.mp3', volume: 0.4 },
      
      // Ambient sounds
      ambient: { url: '/sounds/ambient.mp3', volume: 0.1, loop: true },
      
      // Transition sounds
      swoosh: { url: '/sounds/swoosh.mp3', volume: 0.3 },
      pop: { url: '/sounds/pop.mp3', volume: 0.25 },
      slide: { url: '/sounds/slide.mp3', volume: 0.2 }
    }

    // Note: In production, you would load actual sound files
    // For now, we'll create placeholder sounds
    Object.entries(defaultSounds).forEach(([name, config]) => {
      this.createPlaceholderSound(name, config)
    })
  }

  private createPlaceholderSound(name: string, config: any) {
    // Create a simple oscillator sound as placeholder
    const audio = new Audio()
    audio.volume = config.volume * this.globalVolume
    
    this.sounds.set(name, {
      audio,
      config: {
        volume: config.volume,
        loop: config.loop || false
      }
    })
  }

  public async load(name: string, url: string, config: Partial<SoundConfig> = {}) {
    try {
      const audio = new Audio(url)
      audio.volume = (config.volume || 1) * this.globalVolume
      audio.loop = config.loop || false
      
      // Preload the audio
      await audio.load()
      
      this.sounds.set(name, {
        audio,
        config: {
          volume: config.volume || 1,
          ...config
        }
      })
    } catch (error) {
      console.warn(`Failed to load sound: ${name}`, error)
    }
  }

  public play(name: string, options: { volume?: number; pitch?: number } = {}) {
    if (!this.enabled || !this.initialized) return
    
    const sound = this.sounds.get(name)
    if (!sound) {
      console.warn(`Sound not found: ${name}`)
      return
    }

    try {
      const audio = sound.audio.cloneNode() as HTMLAudioElement
      audio.volume = (options.volume || sound.config.volume) * this.globalVolume
      
      // Add pitch variation if specified
      if (options.pitch && this.context) {
        audio.playbackRate = options.pitch
      }
      
      audio.play().catch(e => {
        // Silently handle autoplay restrictions
      })
      
      // Clean up after playing
      audio.addEventListener('ended', () => {
        audio.remove()
      })
    } catch (error) {
      console.warn(`Failed to play sound: ${name}`, error)
    }
  }

  public playHover() {
    this.play('hover', { 
      volume: 0.15,
      pitch: 0.9 + Math.random() * 0.2 // Slight pitch variation
    })
  }

  public playClick() {
    this.play('click', { volume: 0.3 })
  }

  public playSuccess() {
    this.play('success')
  }

  public playError() {
    this.play('error')
  }

  public startAmbient() {
    const ambient = this.sounds.get('ambient')
    if (ambient && this.enabled) {
      ambient.audio.volume = ambient.config.volume * this.globalVolume * 0.5
      ambient.audio.play().catch(() => {})
    }
  }

  public stopAmbient() {
    const ambient = this.sounds.get('ambient')
    if (ambient) {
      // Fade out
      const fadeOut = setInterval(() => {
        if (ambient.audio.volume > 0.01) {
          ambient.audio.volume *= 0.9
        } else {
          ambient.audio.pause()
          clearInterval(fadeOut)
        }
      }, 50)
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled
    if (!enabled) {
      this.stopAll()
    }
  }

  public setGlobalVolume(volume: number) {
    this.globalVolume = Math.max(0, Math.min(1, volume))
    
    // Update all sound volumes
    this.sounds.forEach(sound => {
      sound.audio.volume = sound.config.volume * this.globalVolume
    })
  }

  public stopAll() {
    this.sounds.forEach(sound => {
      sound.audio.pause()
      sound.audio.currentTime = 0
    })
  }

  public toggle() {
    this.setEnabled(!this.enabled)
    return this.enabled
  }

  // Create Web Audio API effects
  public async createSpatialSound(x: number, y: number, soundName: string) {
    if (!this.context || !this.initialized) return
    
    try {
      const sound = this.sounds.get(soundName)
      if (!sound) return
      
      // Create audio nodes
      const source = this.context.createMediaElementSource(sound.audio)
      const panner = this.context.createPanner()
      const gain = this.context.createGain()
      
      // Configure 3D positioning
      panner.panningModel = 'HRTF'
      panner.distanceModel = 'inverse'
      panner.refDistance = 1
      panner.maxDistance = 10000
      panner.rolloffFactor = 1
      panner.coneInnerAngle = 360
      panner.coneOuterAngle = 0
      panner.coneOuterGain = 0
      
      // Set position
      const listener = this.context.listener
      if (listener.forwardX) {
        listener.forwardX.value = 0
        listener.forwardY.value = 0
        listener.forwardZ.value = -1
        listener.upX.value = 0
        listener.upY.value = 1
        listener.upZ.value = 0
      }
      
      // Convert screen coordinates to 3D space
      const xPos = (x / window.innerWidth - 0.5) * 10
      const yPos = (y / window.innerHeight - 0.5) * 10
      
      panner.setPosition(xPos, yPos, 0)
      
      // Connect nodes
      source.connect(panner)
      panner.connect(gain)
      gain.connect(this.context.destination)
      
      // Play
      sound.audio.play()
    } catch (error) {
      console.warn('Spatial sound error:', error)
    }
  }
}

// Global instance
export const soundManager = new SoundManager()

// React hook for sound effects
export function useSound(soundName: string, options?: { volume?: number; pitch?: number }) {
  const play = () => soundManager.play(soundName, options)
  return play
}

// Interactive sound helpers
export function addHoverSound(element: HTMLElement) {
  const handleMouseEnter = () => soundManager.playHover()
  element.addEventListener('mouseenter', handleMouseEnter)
  
  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter)
  }
}

export function addClickSound(element: HTMLElement) {
  const handleClick = () => soundManager.playClick()
  element.addEventListener('click', handleClick)
  
  return () => {
    element.removeEventListener('click', handleClick)
  }
}

// Initialize interactive sounds on all buttons and links
export function initInteractiveSounds() {
  // Add hover sounds
  document.querySelectorAll('button, a, .interactive').forEach(element => {
    addHoverSound(element as HTMLElement)
  })
  
  // Add click sounds
  document.querySelectorAll('button, a').forEach(element => {
    addClickSound(element as HTMLElement)
  })
  
  // Start ambient sound on user interaction
  document.addEventListener('click', () => {
    soundManager.startAmbient()
  }, { once: true })
}