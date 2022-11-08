const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handlerToggle);
function handlerToggle(e) {
  e.target.classList.add("fa-times");
  menu.classList.toggle("is-show");
}
