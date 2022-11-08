const endpoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".load-more");
let images = [];
function imageTemplate(url) {
  const template = `<div class="image-item">
          <img src="${url}" alt="" />
        </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImage() {
  const response = await fetch(endpoint);
  images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    console.log(images);
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
fetchImage();
