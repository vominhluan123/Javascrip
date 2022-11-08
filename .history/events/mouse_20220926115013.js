const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mousemove
button.addEventListener("mousemove", function () {
  console.log("mousemove");
});
// mouseover
button.addEventListener("mouseover", function () {
  console.log("mousemove");
});
// pageX, pageY, clienX, clienY
document.addEventListener("mousemove", function name(params) {
  console.log("move");
});
