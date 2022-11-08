window.addEventListener("load", function () {
  function Slider() {
    sliderMain = document.querySelector(".slider-main");
    sliderItems = document.querySelectorAll(".slider-item");
    nextBtn = document.querySelector(".slider-next");
    prevBtn = document.querySelector(".slider-prev");
    dotItems = document.querySelectorAll(".slider-dot-item");
    sliderItemWidth = sliderItems[0].offsetWidth;
    slidesLength = sliderItems.length;
    postionX = 0;
    index = 0;
    nextBtn.addEventListener("click", function () {
      handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function () {
      handleChangeSlide(-1);
    });
    [...dotItems].forEach((item) =>
      item.addEventListener("click", function (e) {
        [...dotItems].forEach((el) => el.classList.remove("active"));
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        postionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
      })
    );
    function handleChangeSlide(direction) {
      if (direction === 1) {
        if (index >= slidesLength - 1) {
          index = slidesLength - 1;
          return;
        }
        postionX = postionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index++;
      } else if (direction === -1) {
        if (index <= 0) {
          index = 0;
          return;
        }
        postionX = postionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${postionX}px)`;
        index--;
      }
      [...dotItems].forEach((el) => el.classList.remove("active"));
      dotItems[index].classList.add("active");
    }
  }
});
