const endpoint = "http://localhost:3000/courses";
async function addNewPost({
  image,
  title,
  authour,
  rating,
  price,
  bestSeller,
  buyAmount,
}) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      authour,
      rating,
      price,
      bestSeller,
      buyAmount,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    authour: this.elements["author"].value,
    rating: this.elements["rating"].value,
    price: this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: this.elements["buyAmount"].value,
  };
  await addNewPost(course);
  this.reset();
});
