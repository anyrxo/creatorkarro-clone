// Comprehensive Server-Side Polyfills for Navigator Error
// Fixes: "Cannot set property navigator of #<Object> which has only a getter"

if (typeof global !== 'undefined') {
  // Define missing globals for server-side rendering
  if (!global.self) {
    global.self = global;
  }
  
  if (!global.window) {
    global.window = global;
  }
  
  if (!global.document) {
    global.document = {
      createElement: () => ({}),
      addEventListener: () => {},
      removeEventListener: () => {},
      querySelector: () => null,
      querySelectorAll: () => [],
    };
  }
  
  // Fix navigator property specifically
  if (!global.navigator) {
    global.navigator = {
      userAgent: 'Node.js Server',
      language: 'en-US',
      languages: ['en-US'],
      platform: 'node',
      onLine: true,
      cookieEnabled: false,
      appName: 'Node.js',
      appVersion: process.version,
      vendor: '',
      vendorSub: '',
    };
  }
  
  // Fix localStorage and sessionStorage
  if (!global.localStorage) {
    global.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: () => null,
      length: 0,
    };
  }
  
  if (!global.sessionStorage) {
    global.sessionStorage = global.localStorage;
  }
  
  // Fix location
  if (!global.location) {
    global.location = {
      href: 'http://localhost',
      protocol: 'http:',
      hostname: 'localhost',
      port: '',
      pathname: '/',
      search: '',
      hash: '',
      origin: 'http://localhost',
    };
  }
  
  // Fix fetch if not available
  if (!global.fetch) {
    global.fetch = async () => ({
      ok: true,
      status: 200,
      json: async () => ({}),
      text: async () => '',
    });
  }
  
  // Fix performance
  if (!global.performance) {
    global.performance = {
      now: () => Date.now(),
      mark: () => {},
      measure: () => {},
    };
  }
  
  // Fix requestAnimationFrame
  if (!global.requestAnimationFrame) {
    global.requestAnimationFrame = (callback) => setTimeout(callback, 16);
  }
  
  if (!global.cancelAnimationFrame) {
    global.cancelAnimationFrame = clearTimeout;
  }
}

// Prevent any attempts to modify navigator in browser context
if (typeof window !== 'undefined' && window.navigator) {
  // Create a safe wrapper that prevents modification
  const originalNavigator = window.navigator;
  let navigatorProxy;
  
  try {
    navigatorProxy = new Proxy(originalNavigator, {
      set: (target, property, value) => {
        console.warn(`Prevented attempt to set navigator.${String(property)}`);
        return true; // Pretend the set was successful
      },
      get: (target, property) => {
        return target[property];
      }
    });
    
    // Only attempt to replace if we can
    Object.defineProperty(window, 'navigator', {
      value: navigatorProxy,
      writable: false,
      configurable: false
    });
  } catch (e) {
    // If we can't create the proxy, just continue
    console.warn('Could not create navigator proxy:', e.message);
  }
}