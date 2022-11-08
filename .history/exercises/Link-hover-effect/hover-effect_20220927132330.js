window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handlerHover));
  const line = this.document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handlerHover(e) {
    const { left, top, withh, height } = e.target.getBoundingClientRect();
  }
});
