export function formatLLMResponse(text) {
  return (
    text
      // Convert markdown-style bold text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

      // Handle bullet points with asterisks
      .replace(/^\s*\*(.*)/gm, (match, content) => {
        // Clean up the content and create a proper bullet point
        const cleanContent = content.trim();
        return `<li>${cleanContent}</li>`;
      })

      // Wrap consecutive list items in ul tags
      .replace(/<li>.*?<\/li>(\s*<li>.*?<\/li>)*/g, (match) => {
        return `<ul class="llm-list">${match}</ul>`;
      })

      // Handle regular line breaks
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => {
        // Don't wrap lines that are already HTML elements
        if (line.startsWith("<")) return line;
        return `<p>${line}</p>`;
      })
      .join("\n")
  );
}

export function checkParameterType(param) {
  // Handle null case (since typeof null returns 'object')
  if (param === null) {
    return 'null';
  }

  // Check if it's an object but not an array
  if (typeof param === 'object' && !Array.isArray(param)) {
    return 'object';
  }

  // Check if it's a string
  if (typeof param === 'string') {
    return 'string';
  }

  // Return the actual type for any other case
  return typeof param;
}
