// Global polyfills for SSR compatibility
if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
  globalThis.self = globalThis;
}

if (typeof global !== 'undefined' && typeof global.self === 'undefined') {
  global.self = global;
}