window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const bntPrev = document.querySelector(".slider-prev");
  const btnNext = document.querySelector(".slider-next");
  const dotItem = document.querySelector(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLengt = sliderItems.length;
  btnNext.addEventListener("click", function () {
    handlerChangeslide;
  });
  bntPrevNext.addEventListener("click", function () {
    handlerChangeslide;
  });
  function handlerChangeslide(dir) {}
});
