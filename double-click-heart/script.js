const loveMe = document.querySelector('.love-me');
const times = document.getElementById('times');

let timer = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
    if (timer === 0) {
        timer = new Date().getTime()
    } else {
        if ((new Date().getDate()) - timer < 800) {
            createHeart(e);
            timer = 0;
        } else {
            
            timer = new Date().getTime();
        }
    }
});

function incrementTimer() {
    timer++;
}

function createHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart);
    times.innerHTML = ++timesClicked;
    setTimeout(() => heart.remove(), 1000)
}