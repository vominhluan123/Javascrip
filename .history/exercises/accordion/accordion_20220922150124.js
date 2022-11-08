const accordions = document.querySelectorAll(".accordion-header");
[...accordions].forEach((item) =>
  item.addEventListener("click", handlerAccordion)
);
const active = "is-active";
function handlerAccordion(e) {
  const content = e.target.nextElementSibling;

  content.classList.toggle(active);
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
