// MINIMAL POLYFILLS - FINAL ATTEMPT
// Only the absolute minimum to prevent errors

if (typeof global !== 'undefined' && typeof global.self === 'undefined') {
  try {
    global.self = global;
  } catch (e) {
    // Ignore if setting fails
  }
}

if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
  try {
    globalThis.self = globalThis;
  } catch (e) {
    // Ignore if setting fails  
  }
}