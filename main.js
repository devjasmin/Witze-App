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

function savejoke() {
  const jokeText = document.getElementById("joke").textContent;
  if (!jokeText) return;

  const list = document.querySelector(".witz");
  const li = document.createElement("li");

  li.textContent = jokeText;
  list.appendChild(li);
}
