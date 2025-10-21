/**
 * Production-safe logger
 * Logs to console in development, silent in production
 *
 * SECURITY: This logger prevents console.log leaks in production builds
 * Only errors are logged in production for critical debugging
 */

type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'

const isDevelopment = process.env.NODE_ENV === 'development'
const isClient = typeof window !== 'undefined'

class Logger {
  private prefix: string

  constructor(prefix: string = '[App]') {
    this.prefix = prefix
  }

  private formatMessage(level: LogLevel, message: string, ...args: any[]): string {
    const timestamp = new Date().toISOString()
    const environment = isClient ? 'CLIENT' : 'SERVER'
    return `[${timestamp}] [${environment}] ${level.toUpperCase()} ${this.prefix} ${message}`
  }

  /**
   * General log - only in development
   * SECURITY: Suppressed in production to prevent information leakage
   */
  log(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.log(this.formatMessage('log', message), ...args)
    }
  }

  /**
   * Info log - only in development
   * SECURITY: Suppressed in production to prevent information leakage
   */
  info(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.info(this.formatMessage('info', message), ...args)
    }
  }

  /**
   * Warning log - only in development
   * SECURITY: Suppressed in production to prevent information leakage
   */
  warn(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.warn(this.formatMessage('warn', message), ...args)
    }
  }

  /**
   * Error log - ALWAYS logged (even in production)
   * SECURITY: Sanitize error messages before logging in production
   */
  error(message: string, ...args: any[]): void {
    if (isDevelopment) {
      // Full error details in development
      console.error(this.formatMessage('error', message), ...args)
    } else {
      // Sanitized errors in production - no stack traces or sensitive data
      console.error(this.formatMessage('error', message))
      // In production, you might want to send errors to a monitoring service
      // e.g., Sentry, LogRocket, etc.
    }
  }

  /**
   * Debug log - only in development
   * SECURITY: Completely suppressed in production
   */
  debug(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.debug(this.formatMessage('debug', message), ...args)
    }
  }

  /**
   * Create a child logger with a new prefix
   */
  child(childPrefix: string): Logger {
    return new Logger(`${this.prefix}:${childPrefix}`)
  }

  /**
   * Performance timing - only in development
   * SECURITY: Suppressed in production
   */
  time(label: string): void {
    if (isDevelopment) {
      console.time(`${this.prefix} ${label}`)
    }
  }

  /**
   * End performance timing - only in development
   * SECURITY: Suppressed in production
   */
  timeEnd(label: string): void {
    if (isDevelopment) {
      console.timeEnd(`${this.prefix} ${label}`)
    }
  }

  /**
   * Group logs - only in development
   * SECURITY: Suppressed in production
   */
  group(label: string): void {
    if (isDevelopment) {
      console.group(`${this.prefix} ${label}`)
    }
  }

  /**
   * End group - only in development
   * SECURITY: Suppressed in production
   */
  groupEnd(): void {
    if (isDevelopment) {
      console.groupEnd()
    }
  }
}

/**
 * Default logger instance
 */
export const logger = new Logger('[IImagined]')

/**
 * Create a named logger for specific modules
 */
export const createLogger = (name: string): Logger => {
  return new Logger(`[${name}]`)
}

/**
 * Performance logging utility
 */
export const measurePerformance = <T>(
  name: string,
  fn: () => T | Promise<T>
): T | Promise<T> => {
  if (!isDevelopment) {
    return fn()
  }

  const startTime = performance.now()
  const result = fn()

  if (result instanceof Promise) {
    return result.finally(() => {
      const duration = performance.now() - startTime
      logger.debug(`${name} took ${duration.toFixed(2)}ms`)
    }) as any
  } else {
    const duration = performance.now() - startTime
    logger.debug(`${name} took ${duration.toFixed(2)}ms`)
    return result
  }
}

export default logger
