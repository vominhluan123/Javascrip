window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const bntPrev = document.querySelector(".slider-prev");
  const btnNext = document.querySelector(".slider-next");
  const dotItem = document.querySelector(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLengt = sliderItems.length;
  let postionX = 0;
  let index = 0;
  btnNext.addEventListener("click", function () {
    handlerChangeslide(1);
  });
  bntPrev.addEventListener("click", function () {
    handlerChangeslide(-1);
  });
  function handlerChangeslide(dir) {
    if (dir === 1) {
      index++;
      if (index >= slidesLengt) {
        index = slidesLengt;
        return;
      }
      if (index >= slidesLengt) return;
      postionX = postionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    } else if (dir === -1) {
      index--;
      if (index <= 0) {
        index = 0;
        return;
      }
      postionX = postionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    }
  }
});
