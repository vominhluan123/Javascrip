window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handlerHover));
  function handlerHover(e) {}
});
