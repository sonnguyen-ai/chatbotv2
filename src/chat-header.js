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

    svg {
      fill: rgb(248, 240, 240);
      width: 30px;
      height: 30px;
    }

    .close-button:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .chat-logo {
      display: flex;
      gap: 0.5rem;
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
        <span class="chat-logo"
          ><svg
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
          >Chat Support</span
        >
        <button class="close-button" @click=${this._handleClose}>✕</button>
      </div>
    `;
  }
}

customElements.define("chat-header", ChatHeader);
