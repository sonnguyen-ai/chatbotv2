import '@testing-library/jest-dom';
import { configureAxe } from 'jest-axe';

// Extend Jest matchers
expect.extend({
  toHaveBooleanAttribute(element, attributeName) {
    const hasAttribute = element.hasAttribute(attributeName);
    
    return {
      pass: hasAttribute,
      message: () => `Expected element ${hasAttribute ? 'not ' : ''}to have boolean attribute "${attributeName}"`,
    };
  },
});

// Configure axe for accessibility testing
configureAxe({
  rules: {
    // Add any custom rules here
  },
});

// Mock window methods that are not implemented in JSDOM
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Silence Web Component warnings during tests
const originalWarn = console.warn;
console.warn = function(msg) {
  if (msg.includes('Custom Elements')) return;
  if (msg.includes('Lit is in dev mode')) return;
  originalWarn.apply(console, arguments);
};