const endpoint = "https://picsum.photos/v2/list";
async function fetchImage() {
  const images = await fetch(endpoint);
  const data = images.json;
  console.log(images);
}
fetchImage();
