async function getJoke(jcat) {
    const url = `https://sv443.net/jokeapi/v2/joke/${jcat}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("cat").innerText = data.category;
        document.getElementById("joketype").innerText = data.type;

        // Clear previous content
        document.getElementById("joke").innerText = "";
        document.getElementById("setup").innerText = "";
        document.getElementById("delivery").innerText = "";

        if (data.type === "single") {
            document.getElementById("joke").innerText = data.joke;
        } else {
            document.getElementById("setup").innerText = data.setup;
            document.getElementById("delivery").innerText = data.delivery;
        }

    } catch (error) {
        alert("Failed to load joke. Please try again.");
    }
}
