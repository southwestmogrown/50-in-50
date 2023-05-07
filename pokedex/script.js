const pokeContainer = document.getElementById('poke-container');
const pokeCount = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const fetchPokemon = async () => {
    for (let i = 1; i <= pokeCount; i++) {
        await getPokemon(i);
        
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const res = await fetch(url);
    const data = await res.json();

    createPokeCard(data);
}

const createPokeCard = (pokemon) => {
    const pokeDiv = document.createElement('div');
    pokeDiv.classList.add('pokemon');
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = poke_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokeDiv.style.backgroundColor = color
    pokeDiv.innerHTML = `
        <div class="image-container" >
            <img src="${pokemon.sprites.front_default}" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `
    pokeContainer.appendChild(pokeDiv)
}

fetchPokemon()