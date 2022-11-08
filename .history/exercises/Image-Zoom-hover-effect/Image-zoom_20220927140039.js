window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  imageCover.addEventListener("mousemove", handlerHoveImage);
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image");
  let imageWrapperWidth = imageWrapper.offsetWidth;
  let imageWrapperHeight = imageWrapper.offsetHeight;
  function handlerHoveImage(e) {
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width: auto; height: auto; max-height: unset";
    let imageWith = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    image.style = `left: ${0}px; top: ${0}px width: auto; height: auto; max-height: unset`;
  }
});
