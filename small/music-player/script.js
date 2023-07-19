var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");
var katy = document.getElementById("katy-music");
var songName = document.getElementById("song-name");
katy.volume = 0.5;

playBtn.onclick = function () {
  playBtn.classList.toggle("display");
  pauseBtn.classList.toggle("display");
  songName.classList.toggle("anim");
  katy.play();
};
pauseBtn.onclick = function () {
  pauseBtn.classList.toggle("display");
  playBtn.classList.toggle("display");
  songName.classList.toggle("anim");
  katy.pause();
};
