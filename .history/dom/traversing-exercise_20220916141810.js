// Active modal
const modal = document.querySelector(".modal");
if (modal) {
  setTimeout(() => {
    modal.classList.add("is-show");
  }, 3000);
}
// Notification
function creatNotification() {
  const temlate = `  <div class="noti">
  <img src="http://source.unsplash.com/random" alt="" class="noti-image" />
  <div class="noti-content">
    <h3 class="noti-title">welcome</h3>
    <p class="noti-desc">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
    </p>
  </div>
</div>`;
}
