const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.parentNode.classList.toggle('active'))
    });
});