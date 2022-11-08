window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handlerHover));
  const line = this.document.createElement("div");
  line.className = "line-effect";
  this.document.body.appendChild(line);
  function handlerHover(e) {}
});
