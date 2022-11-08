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
    let ratioX = imageWith / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;
    let x = pX * ratioX;
    let y = pY * ratioY;
    image.style = `left: ${-x}px; top: ${y}px; width: auto; height: auto; max-height: unset; transform: none;`;
  }
});
