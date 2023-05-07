const btn = document.getElementById('btn');
const boxes = document.getElementById('boxes');

const xPx = 0;
const yPx = 0;
const rowCount = 0;

btn.addEventListener('click', () => {
    boxes.classList.toggle('big');
});

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = `-${125 * j}px -${125 * i}px`
        boxes.appendChild(box)
    }
}