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

      color: white;
      border: none;
      cursor: pointer;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgb(0 0 0 / 26%) 0px 2px 10px;
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
    .floating-chat-icon {
      display: flex;
    }
    .floating-chat-icon svg {
      width: 30px;
      height: 30px;
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
        <div class="floating-chat-icon">
          <svg
            viewBox="0 0 32 32"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: none;
                }
              </style>
            </defs>
            <title>chat-bot</title>
            <path
              d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z"
            />
            <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
            <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
            <path
              d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z"
            />
            <rect
              id="_Transparent_Rectangle_"
              data-name="&lt;Transparent Rectangle&gt;"
              class="cls-1"
              width="32"
              height="32"
            /></svg
          >
        </div>
        ${this.unreadCount > 0
          ? html`<div class="unread-badge">${this.unreadCount}</div>`
          : ""}
      </button>
    `;
  }
}

customElements.define("floating-button", FloatingButton);
