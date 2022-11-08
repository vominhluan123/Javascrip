const endpoint = "http://localhost:3000/courses";
const courseList = document.querySelector(".course-list");
async function addNewPost({
  image,
  title,
  author,
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
      author,
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
async function deleteCoures(id) {
  await fetch(`${endpoint}/${id}`, {
    method: "DELETE",
  });
}
function renderItem(item) {
  const template = ` <div class="course-item">
  <div class="course-image">
    <img src=${item.image} alt="" />
    <button class="course-remove" data-id=${
      item.id
    }><i class="fa fa-times"></i></button>
  </div>
  <div class="course-content">
    <h3 class="course-title">
     ${item.title}
    </h3>
    <div class="course-author">${item.author}</div>
    <div class="course-meta">
      <div class="course-rating">${item.rating}</div>
      <div class="course-enroll">${item.buyAmount}</div>
    </div>
    ${
      item.bestSeller ? '<div class="course-best-seller">Best seller</div>' : ""
    }
  </div>
</div>`;
  courseList.insertAdjacentHTML("beforeend", template);
}
async function getCourses() {
  const response = await fetch(endpoint);
  const data = await response.json();
  courseList.innerHTML = "";
  if (data.length && Array.isArray(data)) {
    data.forEach((item) => renderItem(item));
  }
}
const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
  e.preventDefault();
  const course = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller: this.elements["bestSeller"].checked,
    buyAmount: +this.elements["buyAmount"].value,
  };
  await addNewPost(course);
  this.reset();
  await getCourses();
});
courseList.addEventListener("click", function (e) {
  if (e.target.matches(".course-remove")) {
    const id = +e.target.dataset.id;
    deleteCoures;
  }
});
getCourses();
