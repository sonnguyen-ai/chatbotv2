import ChatHeader from '../chat-header';

describe('ChatHeader Component', () => {
  it('renders ChatHeader component', () => {
    document.body.innerHTML = '<chat-header></chat-header>';
    const chatHeader = document.querySelector('chat-header');
    expect(document.body.contains(chatHeader)).toBe(true);
  });
});
