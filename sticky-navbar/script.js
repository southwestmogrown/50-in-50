const nav = document.querySelector('.nav');

// const links = document.querySelectorAll('.links');

// links.forEach(link => {
//     link.addEventListener('click', () => {
//         link.classList.add('current');
//     })
// })

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}