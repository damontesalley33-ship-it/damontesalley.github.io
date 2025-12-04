<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Monte Salley Portfolio</title>
</head>
<body>

<nav>
    <div class="logo">Monte Salley</div>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="projects.html">Projects</a></li>
    </ul>
</nav>

<header class="hero">
    <h1>Hello, I'm Damonte' Salley</h1>
    <p>Computer Science Major from Maryland</p>
    <p>I enjoy playing football, listening to music, and spending time with loyal friends.</p>
    <p>Favorite artist: <strong>NBA YoungBoy</strong> | Favorite team: <strong>Washington Commanders</strong></p>
</header>

<!-- ------------------ QUOTE GENERATOR ------------------ -->
<section class="api-widget">
    <h2>Random Programming Quote</h2>
    <p id="quote">Loading quote...</p>
    <button onclick="loadQuote()">New Quote</button>
</section>

<!-- ------------------ MUSIC DROPDOWN ------------------ -->
<section class="music-section">
    <h2>Get to Know Me More</h2>
    <p>Pick one of my favorite songs:</p>

    <select id="songSelect" onchange="showSongQuote()">
        <option value="">-- Select an artist & song --</option>
        <option value="Youngboy – Solar Eclipse">Youngboy – Solar Eclipse</option>
        <option value="Youngboy – No Smoke">Youngboy – No Smoke</option>
        <option value="Lil Poppa – Love & War">Lil Poppa – Love & War</option>
        <option value="Lil Poppa – Purple Hearts">Lil Poppa – Purple Hearts</option>
        <option value="Hunxho – Your Friends">Hunxho – Your Friends</option>
        <option value="Hunxho – Let’s Ride">Hunxho – Let’s Ride</option>
    </select>

    <p id="songQuote" class="song-quote-text"></p>
</section>

<!-- ------------------ GITHUB API WIDGET ------------------ -->
<section class="api-section">
    <h2>My Latest GitHub Repositories</h2>
    <p>(Powered by GitHub API)</p>
    <div id="repo-container">Loading...</div>
</section>

<!-- ------------------ EXTRA PROJECT SPACE ------------------ -->
<section class="extra-projects">
    <h2>More of My Projects</h2>
    <p>You can add more HTML project content here later.</p>
</section>

<script>
// ------------------ RANDOM QUOTE API ------------------
async function loadQuote() {
    try {
        const res = await fetch("https://api.quotable.io/random?tags=technology,famous-quotes");
        const data = await res.json();
        document.getElementById("quote").textContent = data.content;
    } catch (error) {
        document.getElementById("quote").textContent = "Could not load quote.";
    }
}
loadQuote();

// ------------------ SONG DROPDOWN ------------------
function showSongQuote() {
    const selection = document.getElementById("songSelect").value;
    const output = document.getElementById("songQuote");

    if (!selection) {
        output.textContent = "";
        return;
    }

    output.textContent = `"${selection}" is one of my favorite songs — get to know me a little more.`;
}

// ------------------ GITHUB API ------------------
const repoContainer = document.getElementById("repo-container");

// replace 'octocat' with your GitHub username later
fetch("https://api.github.com/users/octocat/repos")
    .then(response => response.json())
    .then(data => {
        repoContainer.innerHTML = "";
        data.slice(0, 3).forEach(repo => {
            const div = document.createElement("div");
            div.className = "repo";
            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            repoContainer.appendChild(div);
        });
    })
    .catch(err => {
        repoContainer.innerHTML = "Error loading repositories.";
    });
</script>

</body>
</html>
