const images = document.querySelectorAll('.content');
const tabs = document.querySelectorAll('nav ul li');

let activeIdx = 0;

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => swapContent(idx));
});

const swapContent = (idx) => {
    images[activeIdx].classList.remove('show');
    tabs[activeIdx].classList.remove('active');

    images[idx].classList.add('show');
    tabs[idx].classList.add('active');

    activeIdx = idx;
   
}