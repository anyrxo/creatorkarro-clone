/**
 * API Configuration
 * Centralized API endpoint configuration for production and development
 */

export const API_CONFIG = {
  /**
   * Base URL for the Flask API
   * - Development: http://localhost:8000
   * - Production: Set via NEXT_PUBLIC_API_URL environment variable
   */
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',

  /**
   * Request timeout in milliseconds
   */
  timeout: 10000,

  /**
   * Number of retry attempts for failed requests
   */
  retryAttempts: 3,

  /**
   * Endpoints
   */
  endpoints: {
    price: '/api/price',
    analysis: '/api/analysis',
    news: '/api/news',
    chart: '/api/chart',
    health: '/api/health',
    symbols: '/api/symbols',
  }
} as const

/**
 * Helper function to construct full API URL
 */
export const getApiUrl = (endpoint: string, ...params: string[]): string => {
  let url = `${API_CONFIG.baseURL}${endpoint}`
  if (params.length > 0) {
    url += `/${params.join('/')}`
  }
  return url
}

/**
 * Check if API is configured for production
 */
export const isProductionAPI = (): boolean => {
  return !!process.env.NEXT_PUBLIC_API_URL && !API_CONFIG.baseURL.includes('localhost')
}
