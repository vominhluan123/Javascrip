window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".menu-link")];
  links.forEach((item) => item.addEventListener("mouseenter", handlerHover));
  const line = this.document.createElement("div");
  line.className = "line-effect";
  document.body.appendChild(line);
  function handlerHover(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    line.style.width = `${width}px`;
    line.style.top = `${top + height}px`;
    line.style.left = `${left}px`;
  }
});
