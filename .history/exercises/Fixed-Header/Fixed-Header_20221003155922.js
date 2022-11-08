const header = document.querySelector(".header");
window.addEventListener("scroll", function (e) {
  const scrollY = window.pageYOffset;
  if (scrollY >= 67) {
    header && header.classList.add("is-fixed");
  }
});
