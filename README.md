<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
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
    <h2>My Favorite Songs</h2>
    <p>Get to know me a little more:</p>

    <select id="songSelect" onchange="showSongOptions()">
        <option value="">-- Select a song --</option>

        <optgroup label="NBA Youngboy">
            <option value="Solar Eclipse">Solar Eclipse</option>
            <option value="No Smoke">No Smoke</option>
        </optgroup>

        <optgroup label="Lil Poppa">
            <option value="Love & War">Love & War</option>
            <option value="Purple Hearts">Purple Hearts</option>
        </optgroup>

        <optgroup label="Hunxho">
            <option value="Your Friends">Your Friends</option>
            <option value="Let's Ride">Let's Ride</option>
        </optgroup>
    </select>

    <div id="songActions" class="song-actions" style="display:none;">
        <p id="songQuote"></p>
        <button onclick="explainSong()">Why I Like It</button>
        <button onclick="sampleSong()">Play Sample</button>
    </div>
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
    } catch {
        document.getElementById("quote").textContent = "Could not load quote.";
    }
}
loadQuote();

// ------------------ SONG DROPDOWN LOGIC ------------------
function showSongOptions() {
    const selected = document.getElementById("songSelect").value;
    const actions = document.getElementById("songActions");
    const quote = document.getElementById("songQuote");

    if (!selected) {
        actions.style.display = "none";
        quote.textContent = "";
        return;
    }

    actions.style.display = "block";
    quote.textContent = `"${selected}" — get to know me a little more.`;
}

function explainSong() {
    const song = document.getElementById("songSelect").value;
    alert(`Why I like "${song}":\n\nIt hits my vibe, matches my energy, and gets me locked in.`);
}

function sampleSong() {
    const song = document.getElementById("songSelect").value;
    alert(`Sample for "${song}" would play here! (Feature coming soon)`);
}

// ------------------ GITHUB API ------------------
fetch("https://api.github.com/users/damontesalley.github.io/repos")
    .then(res => res.json())
    .then(data => {
        const repoContainer = document.getElementById("repo-container");
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
    .catch(() => {
        document.getElementById("repo-container").textContent =
            "Error loading repositories.";
    });
</script>

</body>
</html>

