const jokeDisplay = document.getElementById('joke-container');
const jokeBtn = document.getElementById('joke-btn');

async function updateJoke() {

    jokeDisplay.innerHTML = `
        <div class="loading-skeleton"></div>
        <div class="loading-skeleton" style="width: 80%"></div>
    `;

    jokeBtn.disabled = true;
    const joke = await fetchRandomJoke();
    jokeDisplay.textContent = joke;
    jokeBtn.disabled = false;

}

jokeBtn.addEventListener('click', updateJoke);
updateJoke();