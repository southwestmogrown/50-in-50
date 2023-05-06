const toggles = document.querySelectorAll('.toggle');
const goodEl = document.getElementById('good');
const cheapEl = document.getElementById('cheap');
const fastEl = document.getElementById('fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        doTheTrick(e.target);
    });
});

function doTheTrick(target) {
    if (goodEl.checked && cheapEl.checked && fastEl.checked) {
        if (goodEl === target) {
            fastEl.checked = false;
        }

        if (cheapEl === target) {
            goodEl.checked = false;
        }

        if (fastEl === target) {
            cheapEl.checked = false;
        }
    }
}