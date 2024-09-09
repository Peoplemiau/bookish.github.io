const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

function addMessage(text, isUser) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + (isUser ? 'user' : 'other');
    messageElement.textContent = text;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Прокрутка вниз

    // Делаем плавную анимацию
    setTimeout(() => {
        messageElement.style.opacity = 1;
    }, 0);
}

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        addMessage(messageText, true);
        messageInput.value = '';

        // Пример ответа от другого участника
        setTimeout(() => {
            addMessage('Ответ: ' + messageText, false);
        }, 1000); // Задержка перед ответом
    }
});

// Обработка нажатия клавиши Enter для отправки сообщения
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click(); // Эмитируем клик по кнопке отправки
    }
});
