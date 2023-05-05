const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const str = 'This is a test string';
let index = 1;
let speed = 300 / speedEl.value;

function writeText() {
    textEl.innerText = str.slice(0, index);
    index++;

    if (index > str.length) index = 1;

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})

writeText()
