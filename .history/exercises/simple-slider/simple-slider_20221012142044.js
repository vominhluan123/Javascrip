window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const bntPrev = document.querySelector(".slider-prev");
  const btnNext = document.querySelector(".slider-next");
  const dotItems = document.querySelectorAll(".slider-dot-item");
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
  [...dotItems].forEach((item) =>
    item.addEventListener("click", function (e) {
      e.target.classList.toogle("active");
      const sliderIndex = parseInt(e.target.dataset.index);
      index = sliderIndex;
      postionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    })
  );
  function handlerChangeslide(dir) {
    if (dir === 1) {
      if (index >= slidesLengt - 1) {
        index = slidesLengt - 1;
        return;
      }
      postionX = postionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
    } else if (dir === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      postionX = postionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }
  }
});
