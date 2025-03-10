import ChatInput from '../chat-input';

describe('ChatInput Component', () => {
  it('renders ChatInput component', () => {
    document.body.innerHTML = '<chat-input></chat-input>';
    const chatInput = document.querySelector('chat-input');
    expect(document.body.contains(chatInput)).toBe(true);
  });
});
