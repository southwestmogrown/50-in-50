const imageContainer = document.getElementById('imgs');
const prevBtn = document.getElementById('left');
const nextBtn = document.getElementById('right');

let count = 0;
let position = 0;

prevBtn.addEventListener('click', () => {
    if (count > 0) {
        imageContainer.style.transform = `translateX(-${position -= 500}px)`
        count--;
    } else {
        count = 3;
        position = 1500;
        imageContainer.style.transform = `translateX(-${position}px)`
    }
});

nextBtn.addEventListener('click', () => {
    if (count < 3) {
        imageContainer.style.transform = `translateX(-${position += 500}px)`
        count++;
    } else {
        count = 0;
        position = 0;
        imageContainer.style.transform = `translateX(-${position}px)`
    }
});

