window,
  addEventListener("load", function () {
    const song = document.querySelector("#song");
    const playbnt = document.querySelector(".player-play");
    const prevBnt = document.querySelector(".player-prev");
    const nextBnt = document.querySelector(".player-next");
    const duration = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const bar = document.querySelector("#progress-bar");
    const image = document.querySelector(".player-image");
    let playin = true;
    playbnt.addEventListener("click", hanldleMusicPlay);
    function hanldleMusicPlay() {
      if (playin) {
        song.pause();
      } else {
        song.play();
      }
    }
  });
