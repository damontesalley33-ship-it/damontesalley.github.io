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
    <p>Favorite artist: <strong>NBA Youngboy</strong> | Favorite team: <strong>Washington Commanders</strong></p>
</header>

<section class="api-section">
    <h2>My Latest GitHub Repositories</h2>
    <p>(Powered by GitHub API)</p>
    <div id="repo-container">Loading...</div>
</section>

<script>
// GitHub API Widget
const repoContainer = document.getElementById("repo-container");

fetch("https://api.github.com/users/octocat/repos") 
// Replace "octocat" with your GitHub username when ready
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

