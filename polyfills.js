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

// Prevent ReferenceError during SSR
try {
  if (typeof self === 'undefined') {
    // This will be handled by webpack DefinePlugin
  }
} catch (e) {
  // Ignore ReferenceError: self is not defined
}