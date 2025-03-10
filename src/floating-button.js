import { LitElement, html, css } from "lit";

export class FloatingButton extends LitElement {
  static properties = {
    unreadCount: { type: Number },
    open: { type: Boolean, reflect: true },
  };

  static styles = css`
    @media (max-width: 480px) {
      .floating-button {
        bottom: 20px;
        right: 20px;
      }
    }
      
    .floating-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background: #007bff;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .unread-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background: red;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  _handleClick() {
    this.dispatchEvent(
      new CustomEvent("toggle-chat", {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button class="floating-button" @click=${this._handleClick}>
        💬
        ${this.unreadCount > 0
          ? html`<div class="unread-badge">${this.unreadCount}</div>`
          : ""}
      </button>
    `;
  }
}

customElements.define("floating-button", FloatingButton);
