var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");

var music = document.getElementById("music");
var songName = document.getElementById("song-name");
var songImage = document.getElementById("song-image");
music.volume = 0.1;

var song = {};

playBtn.onclick = function () {
  playBtn.classList.toggle("display");
  pauseBtn.classList.toggle("display");
  songName.classList.toggle("anim");
  music.play();
};
pauseBtn.onclick = function () {
  pauseBtn.classList.toggle("display");
  playBtn.classList.toggle("display");
  songName.classList.toggle("anim");
  music.pause();
};
