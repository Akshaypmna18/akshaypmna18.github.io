var playBtn = document.getElementById("btn");

var music = document.getElementById("music");
var songName = document.getElementById("song-name");
var songImage = document.getElementById("song-image");
var artist = document.getElementById("artist-name");
var nextBtn = document.getElementById("next-btn");
var previousBtn = document.getElementById("previous-btn");
music.volume = 0.1;

var songs = [
  {
    image:
      "https://cdns-images.dzcdn.net/images/cover/7e3d2297e30d28e8be3faafc91109df4/500x500.jpg",
    name: "Harleys in Hawaii",
    artist: "Katy Pery",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273197e8611178672a1e4e0b076",
    name: "Living Life, In The Night",
    artist: "Sierra Kidd, Cheriimoya",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273fa2a62fe48c2c929c834c084",
    name: "High School",
    artist: "Nicki Minaj",
  },
];

var isPlaying = false;
playBtn.onclick = function () {
  if (isPlaying) {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    songName.classList.toggle("anim");
    music.pause();
  } else {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    songName.classList.toggle("anim");
    music.play();
  }
};
