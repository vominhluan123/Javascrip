// https://icanhazdadjoke.com/
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  return data;
}
async function handlerClick() {
  jokeWrapper.classList.add("is-loading");
  const data = await getJoke();
  jokeHeading.textContent = data.joke;
  jokeWrapper.classList.add("is-loading");
}
jokeButton.addEventListener("click", handlerClick);
