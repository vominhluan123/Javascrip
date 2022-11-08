const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = ["ffa400", "#ffb86c", "#2979ff", "#e74c3c"];
function handleChangeColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
