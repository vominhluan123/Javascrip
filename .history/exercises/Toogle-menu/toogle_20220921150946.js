const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handlerToggle);
function handlerToggle(e) {
  menu.classList.toggle("is-show");
}
