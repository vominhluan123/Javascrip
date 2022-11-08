window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handlerHoveImage);
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image");
  function handlerHoveImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
  }
});
