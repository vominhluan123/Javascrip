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
  document.body.insertAdjacentHTML("beforebegin", templete);
}
document.body.addEventListener("click", function (e) {
  console.log(e.target);
});
