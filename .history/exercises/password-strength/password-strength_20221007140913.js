window.addEventListener("load", function () {
  const inputPW = document.querySelector(".input");
  const value = e.target.value;
  const checkLengthClass = e.target.parentNode.querySelector(".check-length");
  if (!value) return;
  if (value.length < 8) {
    checkLengthClass.classList.add("unactive");
  }
});
