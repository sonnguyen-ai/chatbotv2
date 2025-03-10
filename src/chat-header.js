import { LitElement, html, css } from "lit";

export class ChatHeader extends LitElement {
  static styles = css`
    @media (max-width: 480px) {
      .header {
        border-radius: 0;
        padding: 12px 16px;
      }
    }
    /* Header */
    .header {
      background: var(--fb-blue);
      color: white;
      padding: 16px;
      border-radius: 12px 12px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
    }

    .close-button {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 50%;
      transition: background-color 0.2s;
    }

    .close-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;

  _handleClose() {
    this.dispatchEvent(
      new CustomEvent("toggle-chat", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="header">
        <span>Chat Support</span>
        <button class="close-button" @click=${this._handleClose}>✕</button>
      </div>
    `;
  }
}

customElements.define("chat-header", ChatHeader);
