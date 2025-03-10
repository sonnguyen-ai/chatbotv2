import ChatWindow from '../chat-window';

describe('ChatWindow Component', () => {
  it('renders ChatWindow component', () => {
    document.body.innerHTML = '<chat-window></chat-window>';
    const chatWindow = document.querySelector('chat-window');
    expect(document.body.contains(chatWindow)).toBe(true);
  });
});
