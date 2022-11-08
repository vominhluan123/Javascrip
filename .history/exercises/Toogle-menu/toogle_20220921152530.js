const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handlerToggle);
function handlerToggle(e) {
  e.target.classList.toggle("fa-times");
  e.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handlerOutMenu);
function handlerOutMenu(e) {
  // e.target.matches()
  // e.target.contains: kiem tra element co chua element khac ko
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-time");
    toggle.classList.add("fa-time");
  }
}
