const tabItiems = document.querySelectorAll(".tab-item");
[...tabItiems].forEach((item) => item.addEventListener("click", handlerClick));
function handlerClick(e) {
  [...tabItiems].forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
}
