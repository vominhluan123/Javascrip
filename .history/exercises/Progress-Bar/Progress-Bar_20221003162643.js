const progress = document.querySelector(".");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  // Tinh ra chieu cao that cua document
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
});
