const resultsEl = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results }= await res.json();

    resultsEl.innerHTML = '';

    results.forEach(result => {
        const li = document.createElement('li');
        listItems.push(li)
        li.innerHTML =  `
            <img src="${result.picture.thumbnail}" alt="${result.name.first} ${result.name.last}">
            <div class="user-info">
                <h4>${result.name.first} ${result.name.last}</h4>
                <p>${result.location.city}, ${result.location.city}</p>
            </div>
        `
        resultsEl.appendChild(li)
    });
}

getData();

filter.addEventListener('input', (e) => {
    filterData(e.target.value);
});

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}