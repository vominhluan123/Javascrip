window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  const tab = document.querySelector(".tab");
  const tabPrev = document.querySelector(".tab-prev");
  const tabNext = document.querySelector(".tab-next");
  const tabOffsetLeft = tab.offsetLeft;
  const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
  let deltaScroll = 40;
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
    this.scrollLeft += delta;
  });
  tabNext.addEventListener("click", function (e) {
    tabPrev.classList.remove("disabled");
    tabList.scrollLeft += deltaScroll;
    if (tabList.scrollLeft >= tabScrollWidth) {
      this.classList.add("disabled");
    }
  });
});
