import MessageList from '../message-list';

describe('MessageList Component', () => {
  it('renders MessageList component', () => {
    document.body.innerHTML = '<message-list></message-list>';
    const messageList = document.querySelector('message-list');
    expect(messageList).toBeInTheDocument();
  });
});
