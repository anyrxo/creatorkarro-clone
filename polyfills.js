// Enhanced global polyfills for SSR compatibility
// Fix 'self is not defined' errors during server-side rendering

// Node.js environment (server-side)
if (typeof global !== 'undefined') {
  // Define self as global in Node.js
  if (typeof global.self === 'undefined') {
    global.self = global;
  }
  
  // Define window and document as undefined for SSR
  if (typeof global.window === 'undefined') {
    global.window = undefined;
  }
  
  if (typeof global.document === 'undefined') {
    global.document = undefined;
  }
}

// Modern environments with globalThis
if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.self === 'undefined') {
    globalThis.self = globalThis;
  }
}

// Legacy browser compatibility
if (typeof window !== 'undefined' && typeof window.self === 'undefined') {
  window.self = window;
}

// Fix navigator property SSR issues - More careful approach
if (typeof global !== 'undefined') {
  try {
    if (typeof global.navigator === 'undefined') {
      // Define a basic navigator object for SSR
      Object.defineProperty(global, 'navigator', {
        value: {
          userAgent: 'SSR-Node',
          platform: 'node',
          language: 'en-US',
          languages: ['en-US'],
          cookieEnabled: false,
          onLine: true,
          doNotTrack: null,
          maxTouchPoints: 0,
          hardwareConcurrency: 1,
          javaEnabled: () => false,
          taintEnabled: () => false,
          sendBeacon: () => false,
        },
        writable: false,
        configurable: false,
        enumerable: true
      });
    }
  } catch (e) {
    // If we can't define navigator, just ignore it
    console.warn('Could not define navigator polyfill:', e.message);
  }
}

// Prevent ReferenceError during SSR
try {
  if (typeof self === 'undefined') {
    // This will be handled by webpack DefinePlugin
  }
} catch (e) {
  // Ignore ReferenceError: self is not defined
}