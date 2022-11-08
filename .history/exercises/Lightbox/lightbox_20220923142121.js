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
  let src = "";
  if (e.target.matches(".lightbox")) {
    // remove lightbox out of dom
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    lightImage = src.getAttribute("src");
  } else if (e.target.matches(".lightbox-prev")) {
  }
});
