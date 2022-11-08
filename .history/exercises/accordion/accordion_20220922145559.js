const accordions = document.querySelectorAll(".accordion-header");
[...accordions].forEach((item) =>
  item.addEventListener("click", handlerAccordion)
);
const active = "is-active";
function handlerAccordion(e) {
  e.target.nextElementSibling.classList.toggle(active);
  const icon = e.target.querySelectorAll(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
