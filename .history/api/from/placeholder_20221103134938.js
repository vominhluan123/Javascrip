const course = {
  image: "",
  title: "",
  authour: "",
  rating: "",
  price: "",
  bestSeller: false,
  buyAmount: "",
};
const endpoint = "http://localhost:3000/courses";
async function addPost(
  image,
  title,
  authour,
  rating,
  price,
  bestSeller,
  buyAmount
) {
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
formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  const image = this.elements["image"].value;
  const rating = this.elements["rating"].value;
  const price = this.elements["price"].value;
  const bestSeller = this.elements["bestSeller"].checked;
  const buyAmount = this.elements["buyAmount"].value;
  // addPost(title, author);
});
