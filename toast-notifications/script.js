const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const messages = ["Message 1", "Message 2", "Message 3", "Message 4",]

button.addEventListener('click', createMessage);


function createMessage() {
    const toast = document.createElement('div');
    toast.classList.add('toast')

    toast.innerText = getRandomMessage()

    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}