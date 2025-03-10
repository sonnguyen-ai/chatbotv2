import { LitElement, html, css } from "lit";

export class ChatInput extends LitElement {
  static styles = css`
    @media (max-width: 480px) {
      input {
        font-size: 16px;
        padding: 10px 45px 10px 12px;
      }
      .send-button {
        width: 32px;
        height: 32px;
      }
    }
    .input-area {
      padding: 16px;
      background: white;
      border-top: 1px solid var(--fb-grey);
      border-radius: 0 0 12px 12px;
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .input-wrapper {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      padding: 12px;
      padding-right: 45px;
      border: 1px solid var(--fb-grey);
      border-radius: 20px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s;
    }

    input:focus {
      border-color: var(--fb-blue);
    }

    .send-button {
      width: 35px;
      height: 35px;
      position: absolute;
      right: 5px;
      background: var(--fb-blue);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s, transform 0.2s;
    }

    .send-button:hover {
      background: var(--fb-blue-hover);
      transform: scale(1.05);
    }

    .send-button:active {
      transform: scale(0.95);
    }

    .send-button svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
      transform: translateX(1px);
    }
  `;

  _handleInput(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this._handleSend();
    }
  }

  _handleSend() {
    const input = this.shadowRoot.querySelector("input");
    const message = input.value.trim();

    if (message) {
      this.dispatchEvent(
        new CustomEvent("send-message", {
          detail: { message },
          bubbles: true,
          composed: true,
        })
      );
      input.value = "";
    }
  }

  render() {
    return html`
      <div class="input-area">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Type a message..."
            @keydown=${this._handleInput}
          />
          <button class="send-button" @click=${this._handleSend}>
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("chat-input", ChatInput);
