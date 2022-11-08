const endpoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");
function imageTemplate(url) {
  const template = `<div class="images-item">
          <img src="${url}" alt="" />
        </div>`;
  imageList.insertAdjacentHTML("beforeend", template);
}
async function fetchImage() {
  const response = await fetch(endpoint);
  const images = await response.json();
}
fetchImage();
