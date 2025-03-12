import { fixture, html, expect } from "@open-wc/testing";
import "../chat-header.js";

describe("ChatHeader", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<chat-header></chat-header>`);
  });

  it("renders with the correct structure", () => {
    const header = element.shadowRoot.querySelector(".header");
    const span = element.shadowRoot.querySelector("span");
    const button = element.shadowRoot.querySelector("button");

    expect(header).to.exist;
    expect(span).to.exist;
    expect(span.textContent).to.equal("Chat Support");
    expect(button).to.exist;
    expect(button.textContent).to.equal("✕");

  });

  it("dispatches toggle-chat event when close button is clicked", async () => {
    const button = element.shadowRoot.querySelector(".close-button");
    let eventFired = false;

    element.addEventListener("toggle-chat", () => {
      eventFired = true;
    });

    button.click();

    expect(eventFired).to.be.true;
  });

});
