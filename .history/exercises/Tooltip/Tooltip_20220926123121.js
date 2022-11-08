window.addEventListener("load", function () {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", function (e) {
    const title = e.target.dataset.tooltip;
    const tooltipDiv = document.createElement("div");
    tooltipDiv.className = "tooltip-text";
    tooltipDiv.textContent = title;
    document.body.appendChild(tooltipDiv);
    const tooltipHeight = tooltipDiv.offsetHeight;
    const triangleHeight = 20;
    const cords = e.target.getBoundingClientRect();
    const { top, left, width, height } = cords;
    tooltipDiv.style.left = `${left - tooltipHeight - triangleHeight}px`;
    tooltipDiv.style.top = `${top}px`;
  });
});
