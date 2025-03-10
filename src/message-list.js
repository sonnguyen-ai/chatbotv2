import { LitElement, html, css } from "lit";

export class MessageList extends LitElement {
  static properties = {
    messages: { type: Array },
  };

  static styles = css`
    /* Messages Area */
    .messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: var(--fb-grey);
    }

    .message {
      max-width: 80%;
      padding: 8px 12px;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.4;
    }

    .message.user {
      background: var(--fb-blue);
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }

    .message.bot {
      background: white;
      color: var(--fb-text);
      align-self: flex-start;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }
  `;

  updated() {
    this._scrollToBottom();
  }

  _scrollToBottom() {
    const messages = this.shadowRoot.querySelector(".messages");
    messages.scrollTop = messages.scrollHeight;
  }

  render() {
    return html`
      <div class="messages">
        ${this.messages.map(
          (msg) => html` <div class="message ${msg.sender}">${msg.text}</div> `
        )}
      </div>
    `;
  }
}

customElements.define("message-list", MessageList);
