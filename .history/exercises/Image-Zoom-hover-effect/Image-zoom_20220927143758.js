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
    let spaceX = (imageWith / 2 - imageWrapperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
    imageWith = imageWith + spaceX;
    imageHeight = imageHeight + spaceY;
    let ratioX = imageWith / imageWrapperWidth / 2;
    let ratioY = imageHeight / imageWrapperHeight / 2;
    let x = (pX - imageWrapper.offsetLeft) * ratioX;
    let y = (pY - imageWrapper.offsetTop) * ratioX;
    image.style = `left: ${-x}px; top: ${-y}px; width: auto; height: auto; max-height: unset; transform: none;`;
  }
  imageCover.addEventListener("mouseleave", handlerleaveImage);
  function handlerleaveImage(e) {
    image.style = "";
  }
});
