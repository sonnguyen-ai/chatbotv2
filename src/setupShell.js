import "./chatbot.js";
function setupShell() {
  const scriptTag = document.getElementById("seychatbot");
  if (scriptTag) {
    const tenantId = scriptTag.getAttribute("data-tenantId");
    console.log("Tender ID:", tenantId);

    let htmlString = `<chat-bot tenantId='${tenantId}'></chat-bot>`;
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    document.body.appendChild(div);
  } else {
    console.error("Script tag with ID 'seychatbot' not found.");
  }
}

setupShell();
