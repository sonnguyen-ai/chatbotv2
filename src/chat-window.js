import { LitElement, html, css } from "lit";
import "./chat-header.js";
import "./message-list.js";
import "./chat-input.js";

export class ChatWindow extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    messages: { type: Array },
    loading: { type: Boolean },
    settings: { type: Object },
  };

  /**
   *
   */
  constructor() {
    super();
    
  }

  static styles = css`
    :host {
      --fb-blue: #1877f2;
      --fb-blue-hover: #1464d1;
      --fb-grey: #f0f2f5;
      --fb-text: #050505;
      --chat-width: min(400px, 95vw);
      --chat-height: min(600px, 80vh);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Helvetica, Arial, sans-serif;
      font-size: 16px;
    }

    .chat-window {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: var(--chat-width);
      height: var(--chat-height);
      background: white;
      border-radius: 12px;
      box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      opacity: 0;
      transform: translateY(100px) scale(0.9);
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
    }

    :host([open]) .chat-window {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    message-list {
      flex-grow: 1;
      overflow-y: auto;
      padding: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    /* Animations */
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @media (max-width: 480px) {
      .chat-window {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 85vh;
        border-radius: 0;
        font-size: 16px;
      }
    }
  `;

  render() {
    return html`
      <div class="chat-window">
        <chat-header></chat-header>
        <message-list .messages=${this.messages} ?loading=${this.loading}></message-list>
        <chat-input></chat-input>
      </div>
    `;
  }
}

customElements.define("chat-window", ChatWindow);
