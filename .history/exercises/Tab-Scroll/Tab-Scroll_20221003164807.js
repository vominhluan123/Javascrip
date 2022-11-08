window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab-list");
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handlerTabClick)
  );
  function handlerTabClick(e) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    const leftSpacing = e.target.offsetLeft;
  }
});
