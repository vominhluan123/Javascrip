window.addEventListener("load", function () {
  const inputPW = document.querySelector(".input");
  inputPW.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    if (!value) return;
    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
    } else {
      checkLengthClass.classList.add("unactive");
    }
  });
});
