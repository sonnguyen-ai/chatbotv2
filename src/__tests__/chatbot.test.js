import { ChatBot } from '../chatbot';

describe('ChatBot', () => {
  let chatbot;

  beforeEach(() => {
    chatbot = new ChatBot();
    document.body.appendChild(chatbot);
  });

  afterEach(() => {
    chatbot.remove();
  });

  it('renders without errors', () => {
    expect(chatbot).toBeInstanceOf(ChatBot);
  });

  it('toggles chat window when open property changes', async () => {
    chatbot.open = false;
    await chatbot.updateComplete;
    expect(chatbot.open).toBe(false);

    chatbot.open = true;
    await chatbot.updateComplete;
    expect(chatbot.open).toBe(true);
  });

  it('adds user message to messages array when sending message', () => {
    const message = 'Hello';
    chatbot._handleSendMessage({ detail: { message } });
    expect(chatbot.messages).toEqual([{ text: message, sender: 'user' }]);
  });

  it('bot replies after user message', (done) => {
    const message = 'Hello';
    chatbot._handleSendMessage({ detail: { message } });
    setTimeout(() => {
      expect(chatbot.messages.length).toBe(2);
      expect(chatbot.messages[1].sender).toBe('bot');
      done();
    }, 600);
  });

  it('unread count increases when chat is closed and new message arrives', (done) => {
    chatbot.open = false;
    chatbot._botReply('New message');
    setTimeout(() => {
      expect(chatbot.unreadCount).toBe(1);
      done();
    }, 100);
  });
});
