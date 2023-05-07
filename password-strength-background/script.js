const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
    const val = e.target.value.length;
    
    background.style.filter = `blur(${20 - val * 2}px)`

})