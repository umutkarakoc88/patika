document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const newJokeBtn = document.getElementById('new-joke-btn');

    // Function to fetch a joke
    function fetchJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeElement.textContent = data.value;
            })
            .catch(error => {
                jokeElement.textContent = 'An error occurred while loading the joke.';
                console.error('Joke fetching error:', error);
            });
    }

    // Load the first joke
    fetchJoke();

    // Listen for click events on the button
    newJokeBtn.addEventListener('click', fetchJoke);
});
