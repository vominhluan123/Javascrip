// Active modal
const modal = document.querySelector(".modal");
if (modal) {
  setTimeout(() => {
    modal.classList.add("is-show");
  }, 3000);
}
// Notification
function creatNotification(title = "welcome") {
  const temlate = `<div class="noti">
  <img src="http://source.unsplash.com/random" alt="" class="noti-image" />
  <div class="noti-content">
    <h3 class="noti-title">${title}</h3>
    <p class="noti-desc">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
    </p>
  </div>
</div>`;
  document.body.insertAdjacentHTML("afterbegin", temlate);
}
const ramdomData = [
  "welcome a",
  "welcome b",
  "welcome c",
  "welcome d",
  "welcome e",
  "welcome f",
  "welcome g",
];
const timer = setInterval(() => {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = ramdomData[index];
  creatNotification(ramdomData);
}, 3000);
