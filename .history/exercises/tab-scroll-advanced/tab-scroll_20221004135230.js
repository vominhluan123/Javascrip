window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handlerTabClick)
  );
  function handlerTabClick(e) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft;
    if (e.target.offsetLeft >= tabOffsetLeft) {
      leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    }
    tabList.scroll(leftSpacing / 2, 0);
  }
  tabList.addEventListener("wheel", function (e) {
    const delta = e.deltaY;
    this.scrollleft += delta;
  });
});
