window.addEventListener("load", function () {
  function Slider() {
    this.sliderMain = document.querySelector(".slider-main");
    this.sliderItems = document.querySelectorAll(".slider-item");
    this.nextBtn = document.querySelector(".slider-next");
    this.prevBtn = document.querySelector(".slider-prev");
    this.dotItems = document.querySelectorAll(".slider-dot-item");
    this.sliderItemWidth = sliderItems[0].offsetWidth;
    this.slidesLength = sliderItems.length;
    this.postionX = 0;
    this.index = 0;
    this.nextBtn.addEventListener("click", function () {
      handleChangeSlide(1);
    });
    this.prevBtn.addEventListener("click", function () {
      handleChangeSlide(-1);
    });
    [...this.dotItems].forEach((item) =>
      item.addEventListener("click", (e) => this.handleChangeDots)
    );
  }
  Slider.prototype.handleChangeDots = function (e) {
    [...this.dotItems].forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
    const slideIndex = parseInt(e.target.dataset.index);
    this.index = slideIndex;
    this.postionX = -1 * index * sliderItemWidth;
    this.sliderMain.style = `transform: translateX(${postionX}px)`;
  };

  Slider.prototype.handlerChangeSlide = function (direction) {
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
  };
});
