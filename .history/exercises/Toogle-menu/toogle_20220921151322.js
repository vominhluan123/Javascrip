const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handlerToggle);
function handlerToggle(e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
