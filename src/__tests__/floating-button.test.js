import "../floating-button.js";
describe("FloatingButton", () => {
  let element;

  beforeEach(() => {
    element = document.createElement("floating-button");
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });
  // Button renders with chat icon
  it("should render with chat icon emoji", () => {
    const button = element.shadowRoot.querySelector(".floating-button");

    expect(button).not.toBeNull();
    expect(button.textContent.trim()).toContain("💬");
  });

  // Setting unreadCount to negative values
  it("should not display unread badge when unreadCount is negative", () => {
    element.unreadCount = -5;

    const unreadBadge = element.shadowRoot.querySelector(".unread-badge");

    expect(unreadBadge).toBeNull();
  });

  // Method dispatches a CustomEvent with type 'toggle-chat'
  it('should dispatch a CustomEvent with type "toggle-chat"', () => {
    // Arrange
    const eventSpy = jest.spyOn(element, "dispatchEvent");

    // Act
    element._handleClick();

    // Assert
    expect(eventSpy).toHaveBeenCalledTimes(1);
    const dispatchedEvent = eventSpy.mock.calls[0][0];
    expect(dispatchedEvent instanceof CustomEvent).toBe(true);
    expect(dispatchedEvent.type).toBe("toggle-chat");
    expect(dispatchedEvent.bubbles).toBe(true);
    expect(dispatchedEvent.composed).toBe(true);
  });
});
