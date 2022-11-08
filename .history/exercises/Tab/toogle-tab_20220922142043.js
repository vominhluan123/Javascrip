const tabItiems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
// lặp qua từng phần tử tab-item
[...tabItiems].forEach((item) => item.addEventListener("click", handlerClick));
function handlerClick(e) {
  // Xóa hết tất cả class active ở các tab-item
  [...tabItiems].forEach((item) => item.classList.remove("active"));
  // sau đó add class active vào vị trị được click
  e.target.classList.add("active");
  // thay đổi text khi click tab khác
  const tabNumbers = e.target.dataset.tab;
  [...tabContents].forEach((item) => item.classList.remove("active"));
}
