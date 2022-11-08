window.addEventListener("load", function () {
  const tooglePassword = document.querySelector(".toggle");
  tooglePassword.addEventListener("click", function () {
    const input = this.previousElementSibling;
    console.log(input);
  });
});
