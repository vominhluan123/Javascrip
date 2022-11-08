window.addEventListener("load", function () {
  function renderSweetAlert() {
    const template = ` <div class="sweet-alert">
        <i class="fa fa-check sweet-icon"></i>
        <p class="sweet-text">Congratulations on learning JS</p>
        </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
  }
});
