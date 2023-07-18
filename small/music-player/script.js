var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");
var katy = document.getElementById("katy-music");
katy.volume = 0.5;

playBtn.onclick = function () {
  playBtn.classList.toggle("display");
  pauseBtn.classList.toggle("display");
  katy.play();
};
pauseBtn.onclick = function () {
  pauseBtn.classList.toggle("display");
  playBtn.classList.toggle("display");
  katy.pause();
};
