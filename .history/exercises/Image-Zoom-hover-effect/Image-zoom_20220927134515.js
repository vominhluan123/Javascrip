window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handlerHoveImage);
  function handlerHoveImage(e) {
    const pX = e.payX;
    const pY = e.payY;
  }
});
