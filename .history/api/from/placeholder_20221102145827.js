async function addPost(title, author) {
  const response = await fetch("http://localhost:3000/posts", {
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
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.elements["title"].value;
  const author = this.elements["author"].value;
  addPost(title, author);
});
