const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const response = await fetch(endpoint);
  const images = images.json;
  console.log(images);
}
fetchImage();
