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
async function addPost(title, author) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
      //userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  addPost(title, author);
});
