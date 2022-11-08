/*
 <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>
*/
const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handlerZoom));
function handlerZoom(e) {
  const image = e.target.getAttribute("src");
  const templete = `<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", templete);
}
let index = 0;
document.body.addEventListener("click", function (e) {
  const lightImage = document.querySelector(".lightbox-image");
  if (!lightImage) return;
  // co light box
  srcImage = lightImage.getAttribute("src");
  index = [...images].findIndex(
    (item) => item.getAttribute("src") === srcImage
  );
  if (e.target.matches(".lightbox")) {
    // remove lightbox out of dom
    e.target.parentNode.removeChild(e.target);
    // handler next image
  } else if (e.target.matches(".lightbox-next")) {
    index = index + 1;
    if (index > images.length - 1) {
      index = 0;
    }

    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
    // handler prev image
  } else if (e.target.matches(".lightbox-prev")) {
    index = index - 1;
    if (index < 0) {
      index = images.length - 1;
    }
    lightBoxDisplay(lightImage, index);
  }
});
function lightBoxDisplay(lightImage, index) {
  const newSrc = [...images][index].getAttribute("src");
  lightImage.setAttribute("src", newSrc);
}
