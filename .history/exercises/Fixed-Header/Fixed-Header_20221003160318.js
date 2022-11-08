function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const header = document.querySelector(".header");
window.addEventListener(
  "scroll",
  debounceFn(function (e) {
    const scrollY = window.pageYOffset;
    if (scrollY >= 67) {
      header && header.classList.add("is-fixed");
      document.body.add("is-fixed");
    } else {
      header && header.classList.remove("is-fixed");
    }
  }),
  100
);
