async function fetchRandomJoke() {
    const config = {
        headers: {
            'Accept': 'application/json' 
        }
    };
    try {
        const response = await fetch('https://icanhazdadjoke.com/', config);
        const data = await response.json();
        return data.joke;
    } catch (error) {
        console.error("Error fetching joke:", error);
        return "Oops! Something went wrong. Try again.";
    }
}