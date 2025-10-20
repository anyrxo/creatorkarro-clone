/**
 * Production-safe logger
 * Logs to console in development, silent in production
 */

type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug'

const isDevelopment = process.env.NODE_ENV === 'development'

class Logger {
  private prefix: string

  constructor(prefix: string = '[App]') {
    this.prefix = prefix
  }

  private formatMessage(level: LogLevel, message: string, ...args: any[]): string {
    const timestamp = new Date().toISOString()
    return `${timestamp} ${level.toUpperCase()} ${this.prefix} ${message}`
  }

  /**
   * General log - only in development
   */
  log(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.log(this.formatMessage('log', message), ...args)
    }
  }

  /**
   * Info log - only in development
   */
  info(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.info(this.formatMessage('info', message), ...args)
    }
  }

  /**
   * Warning log - only in development
   */
  warn(message: string, ...args: any[]): void {
    if (isDevelopment) {
      console.warn(this.formatMessage('warn', message), ...args)
    }
  }

  /**
   * Error log - ALWAYS logged (even in production)
   */
  error(message: string, ...args: any[]): void {
    // Errors are always logged for debugging
    console.error(this.formatMessage('error', message), ...args)
  }

  /**
   * Debug log - only in development
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
