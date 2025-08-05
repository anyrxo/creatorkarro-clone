// Minimal polyfill - only set self if absolutely necessary
if (typeof global !== 'undefined' && !global.self) {
  global.self = global;
}