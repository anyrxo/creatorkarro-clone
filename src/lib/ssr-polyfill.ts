// SSR Polyfill to prevent 'self is not defined' errors
if (typeof globalThis !== 'undefined') {
  if (typeof (globalThis as any).self === 'undefined') {
    (globalThis as any).self = globalThis;
  }
}

if (typeof global !== 'undefined') {
  if (typeof (global as any).self === 'undefined') {
    (global as any).self = global;
  }
}

// Additional polyfills for common browser APIs
if (typeof window === 'undefined') {
  (global as any).window = global;
  (global as any).document = {
    createElement: () => ({}),
    addEventListener: () => {},
    removeEventListener: () => {},
    querySelectorAll: () => [],
    head: { appendChild: () => {} },
    body: { appendChild: () => {} }
  };
  (global as any).navigator = {
    userAgent: 'SSR',
    language: 'en-US',
    hardwareConcurrency: 4,
    plugins: { length: 0 },
    webdriver: false
  };
  (global as any).screen = {
    width: 1920,
    height: 1080
  };
  (global as any).location = {
    href: 'https://iimagined.ai',
    origin: 'https://iimagined.ai'
  };
}

export {};