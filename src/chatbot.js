import { LitElement, html } from "lit";
import "./chat-window.js";
import "./floating-button.js";
import ChatService from "./services/chat-service.js";
import mockSetting from "./mockdata.js";
import { checkParameterType } from "./utilities.js";

export class ChatBot extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    messages: { type: Array },
    unreadCount: { type: Number },
    loading: { type: Boolean },
    initialized: { type: Boolean, state: true },
    tenantId: { type: String, reflect: true },
    settings: { type: Object, state: true },
  };

  constructor() {
    super();
    this.messages = [];
    this.open = false;
    this.unreadCount = 0;
    this.loading = false;
    this.initialized = false;
    this.settings = {};
    this.chatService = new ChatService();
  }

  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener("toggle-chat", this._handleToggleChat);
    this.addEventListener("send-message", this._handleSendMessage);
    this.settings = await this.chatService.getSettings(this.tenantId);

    this.initialized = true;
    this.messages = [
      { text: this.settings.configuration.welcomeMessage, sender: "model" },
    ];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("toggle-chat", this._handleToggleChat);
    this.removeEventListener("send-message", this._handleSendMessage);
  }

  _handleToggleChat() {
    this.open = !this.open;
    if (this.open) {
      this.unreadCount = 0;
    }
  }

  _handleSendMessage(e) {
    const userMessage = e.detail.message;
    this.messages = [...this.messages, { text: userMessage, sender: "user" }];
    // Set loading state
    this.loading = true;

    const prompts =
      checkParameterType(this.settings.configuration.prompt) === "string"
        ? this.settings.configuration.prompt
        : JSON.stringify(this.settings.configuration.prompt);

    const previousMessages = [
      {
        parts: [{ text: this.settings.configuration.instruction }],
        role: "model",
      },
      ,
      {
        parts: [{ text: prompts }],
        role: "model",
      },
      this.messages.map((msg) => ({
        parts: [{ text: msg.text }],
        role: msg.sender === "user" ? "user" : "model",
      })),
    ];

    setTimeout(
      async () =>
        await this._botReply(userMessage, previousMessages.slice(0, -1)),
      500
    );
  }

  async _botReply(userMessage, previousMessages) {
    try {
      // Get response from LLM
      const response = await this.chatService.sendMessageToLLM(userMessage, {
        previousMessages: previousMessages,
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7,
        },
        tenantId: "seysolutions",
      });

      if (response && response.candidates && response.candidates[0]) {
        const botMessage = response.candidates[0].content.parts[0].text;
        this.messages = [
          ...this.messages,
          { text: botMessage, sender: "model", isHtml: true },
        ];

        if (!this.open) {
          this.unreadCount++;
        }
      } else {
        throw new Error("Invalid response format from LLM");
      }
    } catch (error) {
      console.error("Error getting LLM response:", error);
      this.messages = [
        ...this.messages,
        {
          text:
            "I apologize, but I'm having trouble responding right now. Please try again later." +
            error.message,
          sender: "model",
          error: true,
        },
      ];
    } finally {
      this.loading = false;
    }

    if (!this.open) {
      this.unreadCount++;
    }
  }

  render() {
    if (!this.initialized) {
      return html`<div>Loading...</div>`; // Or a proper loading component
    }
    return html`
      <floating-button
        .unreadCount=${this.unreadCount}
        ?open=${this.open}
      ></floating-button>

      <chat-window
        ?open=${this.open}
        .messages=${this.messages}
        ?loading=${this.loading}
        .settings=${this.settings}
      ></chat-window>
    `;
  }
}

customElements.define("chat-bot", ChatBot);
