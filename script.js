async function loadQuote() {
    try {
        const res = await fetch("https://api.quotable.io/random?tags=technology,famous-quotes");
        const data = await res.json();
        document.getElementById("quote").textContent = data.content;
    } catch (error) {
        document.getElementById("quote").textContent = "Could not load quote.";
    }
}

// Load a quote when the page starts
loadQuote();
