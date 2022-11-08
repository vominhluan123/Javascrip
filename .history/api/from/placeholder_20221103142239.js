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
function renderItem(item) {
  const template = ` <div class="course-item">
  <div class="course-image">
    <img src=${item.image} alt="" />
  </div>
  <div class="course-content">
    <h3 class="course-title">
     ${item.title}
    </h3>
    <div class="course-author">${item.author}</div>
    <div class="course-meta">
      <div class="course-rating">5</div>
      <div class="course-enroll">1000</div>
    </div>
    <div class="course-best-seller">Best seller</div>
  </div>
</div>`;
}
async function getCourses() {
  const response = await fetch(endpoint);
  const data = await response.json();
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    authour: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: +this.elements["buyAmount"].value,
  };
  await addNewPost(course);
  this.reset();
});
getCourses();
