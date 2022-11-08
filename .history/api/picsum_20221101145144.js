const imageList = document.querySelector(".images");
const loadmore = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
let page = 1;
let limit = 10;
const endpoint = `https://picsum.photos/v2/list?limit=${limit}`;
function imageTemplate(url) {
  const template = `<div class="image-item">
          <img src="${url}" alt="" />
        </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImage(page = 1) {
  const response = await fetch(`${endpoint}&${page}`);
  images = await response.json();
  if (images.length > 0 && Array.isArray(images)) {
    console.log(images);
    images.forEach((item) => {
      imageTemplate(item.download_url);
    });
  }
}
async function handleLoadmore() {
  page++;
  await fetchImage(page);
}
loadmore.addEventListener("click", handleLoadmore);
fetchImage();
