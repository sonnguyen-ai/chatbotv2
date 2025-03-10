/**
 * @jest-environment jsdom
 */

import '../chat-header.js';

describe('ChatHeader', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('chat-header');
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  it('should be defined as a custom element', () => {
    expect(customElements.get('chat-header')).toBeDefined();
  });

  it('should create with shadow DOM', () => {
    expect(element.shadowRoot).toBeTruthy();
  });

  it('should render in the document', () => {
    expect(document.body.contains(element)).toBeTruthy();
  });

  // Add more specific tests based on your chat-header implementation
  // For example, testing specific slots, attributes, or methods:
  
  it('should reflect attribute changes', () => {
    element.setAttribute('title', 'Test Chat');
    expect(element.getAttribute('title')).toBe('Test Chat');
  });
});