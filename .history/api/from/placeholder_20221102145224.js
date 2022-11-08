function addPost(title, author) {
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      author,
      //userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this);
});
