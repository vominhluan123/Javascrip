const accordions = document.querySelectorAll(".accordion-header");
[...accordions].forEach((item) =>
  item.addEventListener("click", handlerAccordion)
);
function handlerAccordion(e) {}
