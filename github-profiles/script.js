const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const API_URL = 'https://api.github.com/users/';

async function getUser(userName) {
    try {
        const { data } = await axios(API_URL + userName);
        return data;
    } catch (e) {
        console.error(e);
    }
}

async function getRepos(userName) {
    try {
        const { data } = await axios(API_URL + userName + '/repos');
        return data.slice(0,3);

    } catch (e) {
        console.error(e)
    }
}

function createCard(user, repos) {
    return `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                    <a href="${repos[0].url}" class="repo">${repos[0].name}</a>
                    <a href="${repos[1].url}" class="repo">${repos[1].name}</a>
                    <a href="${repos[2].url}" class="repo">${repos[2].name}</a>
                </div>
            </div>
        </div>
    `
}


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = search.value;
    if (userName) {
        const user =  await getUser(userName);
        const repos = await getRepos(userName);
        const card = createCard(user, repos);

        main.innerHTML = card;
        search.value = ''
    }
});


