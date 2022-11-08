const accordions = document.querySelectorAll(".accordion-header");
[...accordions].forEach((item) =>
  item.addEventListener("click", handlerAccordion)
);
const active = "is-active";
function handlerAccordion(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle(active);
  if (!content.classList.contains("is-active")) {
    content.style.height = "px";
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
