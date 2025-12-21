function loadjoke() {
  const jokeElement = document.getElementById("joke");

  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((jokeData) => {
      jokeElement.textContent = jokeData.joke;
    })
    .catch((error) => {
      jokeElement.textContent = "Witz konnte nicht geladen werden.";
      console.error("Fehler beim Laden des Jokes:", error);
    });
}
