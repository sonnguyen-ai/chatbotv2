import "./chatbot.js";
 function setupShell() {
    let htmlString = `<chat-bot tenantId='demosolutions'></chat-bot>`;
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    document.body.appendChild(div);
}

setupShell();