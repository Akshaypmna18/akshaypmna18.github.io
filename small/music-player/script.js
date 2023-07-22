var playBtn = document.getElementById("btn");

var boxShadow = document.querySelector("#container");
var textShadow = document.getElementById("heading");

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
    link: "Katy-Pery-Harleys-in-Hawaii.mp3",
    name: "Harleys in Hawaii",
    artist: "Katy Pery",
    shadow: "#e79099",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273197e8611178672a1e4e0b076",
    link: "Living Life, In The Night (KNOX Remix).mp3",
    name: "Living Life, In The Night",
    artist: "Sierra Kidd, Cheriimoya",
    shadow: "#0b0b0b",
  },
  {
    image: "https://i.scdn.co/image/ab67616d0000b273fa2a62fe48c2c929c834c084",
    link: "Nicki Minaj - High School.mp3",
    name: "High School",
    artist: "Nicki Minaj",
    shadow: "#30163b",
  },
];

var songIndex = 0;
function nextMusic(currentSong) {
  songImage.src = songs[currentSong].image;
  music.src = songs[currentSong].link;
  songName.innerHTML = songs[currentSong].name;
  artist.innerHTML = songs[currentSong].artist;
  boxShadow.style.boxShadow = "2px 2px 2px " + songs[currentSong].shadow;
  textShadow.style.textShadow = "2px 2px 2px " + songs[currentSong].shadow;
  playMusic();
  songIndex++;
}
function preMusic(currentSong) {
  songImage.src = songs[currentSong].image;
  music.src = songs[currentSong].link;
  songName.innerHTML = songs[currentSong].name;
  artist.innerHTML = songs[currentSong].artist;
  boxShadow.style.boxShadow = "2px 2px 2px " + songs[currentSong].shadow;
  textShadow.style.textShadow = "2px 2px 2px " + songs[currentSong].shadow;
  playMusic();
  songIndex--;
}

nextBtn.onclick = function () {
  if (songIndex == 2) {
    var currentSong = -1;
    nextMusic(currentSong);
  } else {
    var currentSong = songIndex + 1;
    nextMusic(currentSong);
  }
};

previousBtn.onclick = function () {
  if (songIndex == -1) {
    var currentSong = 2;
    preMusic(currentSong);
  } else {
    var currentSong = songIndex - 1;
    preMusic(currentSong);
  }
};

function playMusic() {
  playBtn.classList.replace("fa-play", "fa-pause");
  songName.classList.add("anim");
  music.play();
}

function pauseMusic() {
  playBtn.classList.replace("fa-pause", "fa-play");
  songName.classList.remove("anim");
  music.pause();
}

playBtn.onclick = function () {
  if (songName.classList.contains("anim")) {
    pauseMusic();
  } else {
    playMusic();
  }
};
