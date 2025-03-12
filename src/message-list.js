import { LitElement, html, css } from "lit";
import { formatLLMResponse } from "./utilities.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
export class MessageList extends LitElement {
  static properties = {
    messages: { type: Array },
    loading: { type: Boolean },
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

    .message.model {
      background: white;
      color: var(--fb-text);
      align-self: flex-start;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .llm-list {
      margin: 8px 0;
      padding-left: 20px;
    }
    .llm-list li {
      margin: 4px 0;
    }
    .message-content p {
      margin: 8px 0;
    }
    .message-content strong {
      font-weight: bold;
    }

    .message-content {
      word-break: break-word;
    }

    .message .message-content {
      line-height: 1.4;
    }

    .message .message-content ul {
      margin: 8px 0;
      padding-left: 20px;
    }

    .message.model .message-content li {
      margin: 4px 0;
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
          (msg) => html`
            <div class="message ${msg.sender}">
              <div class="message-content">
                ${msg.isHtml
                  ? unsafeHTML(formatLLMResponse(msg.text))
                  : msg.text}
              </div>
            </div>
          `
        )}
        ${this.loading
          ? html`
              <div class="loading-indicator">
                <div class="loading-dots">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            `
          : ""}
      </div>
    `;
  }
}

customElements.define("message-list", MessageList);
