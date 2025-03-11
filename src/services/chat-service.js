import BaseApiService from "./base-service.js";

class ChatService extends BaseApiService {
  constructor(baseUrl) {
    super(baseUrl || "https://chatbotcooapi.azurewebsites.net");
  }

  // Default safety settings
  static DEFAULT_SAFETY_SETTINGS = [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE",
    },
  ];

  // Default generation config
  static DEFAULT_GENERATION_CONFIG = {
    maxOutputTokens: 100,
    temperature: 0.5,
    topK: 1,
    topP: 0.8,
  };

  /**
   * Sends a message to the LLM service and returns the response
   * @param {string} message - The message to send to the LLM
   * @param {Object} options - Additional options for the LLM request
   * @param {Array} options.previousMessages - Previous messages in the conversation (optional)
   * @param {Object} options.generationConfig - Generation configuration (optional)
   * @param {Array} options.safetySettings - Safety settings (optional)
   * @returns {Promise<Object>} The LLM response
   * @throws {Error} If the request fails
   */
  async sendMessageToLLM(message, options = {}) {
    try {
      // Prepare the contents array with previous messages and new message
      const contents = [
        ...(options.previousMessages || []),
        {
          parts: [{ text: message }],
          role: "user",
        },
      ];

      const payload = {
        contents,
        safetySettings:
          options.safetySettings || ChatService.DEFAULT_SAFETY_SETTINGS,
        generationConfig: {
          ...ChatService.DEFAULT_GENERATION_CONFIG,
          ...options.generationConfig,
        },
      };

      const response = await this.post(
        `/gateway/messages/llm/${options.tenantId}`,
        payload
      );

      return response;
    } catch (error) {
      console.error("Error sending message to LLM:", error);
      throw new Error(
        "Failed to get response from LLM service: " + error.message
      );
    }
  }
}

export default ChatService;
