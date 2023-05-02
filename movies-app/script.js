const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=27d3f0b8709f532a96ee9e564a9aaeab';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=27d3f0b8709f532a96ee9e564a9aaeab&query="'

const form = document.getElementById('form');
const search = document.getElementById('search');

const main = document.getElementById('main');

console.log('here')
async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class=${getColorClass(vote_average)}>${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieEl)
    });
}

function getColorClass(vote) {
    return vote >= 8 ? 'green' : vote >= 5 ? 'orange' : 'red';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm);
        search.value = ''
    } else {
        window.location.reload();
    }

});


getMovies(API_URL)
