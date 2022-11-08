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
// pageX, pageY, clientX, clientY
// clientY: nó sẽ lấy theo tọa độ viewport
// pageY: nó sẽ lấy theo tọa độ của document, khi mà có sroll nó sẽ thay đổi
