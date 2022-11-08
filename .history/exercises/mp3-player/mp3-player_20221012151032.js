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
    let musicList = [
      "[Vietsub+kara] Sakura no hana ga mai ochiru toki - Bạo Bạo Tuyết x Quân Tử.mp3",
      "【MAD】Missing You.mp3",
      "AMV Ichinen Nikagetsu Hatsuka 1年2ヶ月20日 BRIGHT Vietsub...mp3",
      "千鳥鳥、腹肌、米白、莓子 - 櫻花櫻花想見你.mp3",
    ];
    let songIdex = 0;
    playbnt.addEventListener("click", hanldleMusicPlay);
    nextBnt.addEventListener("click", function () {
      handlerChangeMusic(1);
    });
    prevBnt.addEventListener("click", function () {
      handlerChangeMusic(-1);
    });
    function handlerChangeMusic(dir) {
      if (dir === 1) {
        // next music
        songIdex++;
        if (songIdex > musicList.length - 1) {
          songIdex = 0;
        }
        song.setAttribute("src", `./music/${musicList[songIdex]}`);
        playin = true;
        hanldleMusicPlay();
      }
      if (dir === -1) {
        // prev music
      }
    }
    function hanldleMusicPlay() {
      if (playin) {
        song.play();
        image.classList.add("is-playing");
        playbnt.classList.add("fa-pause");
        playin = false;
      } else {
        song.pause();
        image.classList.remove("is-playing");
        playbnt.classList.remove("fa-pause");
        playin = true;
      }
    }
  });
