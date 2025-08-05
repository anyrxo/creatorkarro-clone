/**
 * SSR-SAFE UTILITIES
 * Prevents "self is not defined" and other SSR errors
 */

// Check if we're in a browser environment
export const isBrowser = typeof window !== 'undefined';

// Check if we're in a Node.js environment
export const isServer = typeof window === 'undefined';

// Safe access to window object
export const safeWindow = isBrowser ? window : undefined;

// Safe access to document object
export const safeDocument = isBrowser ? document : undefined;

// Safe access to self object
export const safeSelf = (() => {
  if (isBrowser) {
    return window.self || window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  return undefined;
})();

// Wrapper for client-side only code
export function clientOnly<T>(callback: () => T, fallback?: T): T | undefined {
  if (isBrowser) {
    try {
      return callback();
    } catch (error) {
      console.warn('Client-side code failed:', error);
      return fallback;
    }
  }
  return fallback;
}

// Wrapper for server-side only code
export function serverOnly<T>(callback: () => T, fallback?: T): T | undefined {
  if (isServer) {
    try {
      return callback();
    } catch (error) {
      console.warn('Server-side code failed:', error);
      return fallback;
    }
  }
  return fallback;
}

// Safe localStorage access
export const safeLocalStorage = clientOnly(() => window.localStorage);

// Safe sessionStorage access
export const safeSessionStorage = clientOnly(() => window.sessionStorage);

// Safe access to user agent
export const safeUserAgent = clientOnly(() => navigator.userAgent, '');

// Dynamic import wrapper for client-side modules
export async function dynamicImport<T>(
  importFn: () => Promise<T>,
  fallback?: T
): Promise<T | undefined> {
  if (isBrowser) {
    try {
      return await importFn();
    } catch (error) {
      console.warn('Dynamic import failed:', error);
      return fallback;
    }
  }
  return fallback;
}