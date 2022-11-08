const tabItiems = document.querySelectorAll(".tab-item");
[...tabItiems].forEach((item) => item.addEventListener("click", handlerClick));
function handlerClick(e) {
  e.target.classList.add("active");
}
