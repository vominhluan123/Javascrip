window.addEventListener("load", function () {
  const inputPW = document.querySelector("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    if (value < 8) return;
  });
});
