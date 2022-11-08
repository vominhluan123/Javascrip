// https://icanhazdadjoke.com/
const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const endpoint = "https://icanhazdadjoke.com/";
async function getJoke() {
  const response = await fetch(endpoint, {
    headers: { Accept: "application/json" },
  });
  const data = await response.json();
  console.log(data);
  return data;
}
getJoke();
