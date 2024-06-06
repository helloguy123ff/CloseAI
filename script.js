document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        appendMessage(userInput, 'user');
        getBotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== '') {
            appendMessage(userInput, 'user');
            getBotResponse(userInput);
            document.getElementById('user-input').value = '';
        }
    }
});

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
  

    const botResponse = generateBotResponse(userInput);
    appendMessage(botResponse, 'bot');
}

function generateBotResponse(userInput) {
    return "A resposta do bot para '" + userInput + "' poderia ser aqui.";
}
