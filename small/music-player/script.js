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
nextBtn.onclick = function () {
  if (songIndex < 3) {
    songImage.src = songs[songIndex + 1].image;
    music.src = songs[songIndex + 1].link;
    songName.innerHTML = songs[songIndex + 1].name;
    artist.innerHTML = songs[songIndex + 1].artist;
    boxShadow.style.boxShadow = "2px 2px 2px " + songs[songIndex + 1].shadow;
    textShadow.style.textShadow = "2px 2px 2px " + songs[songIndex + 1].shadow;
    music.play();
    songIndex++;
  } else {
    songIndex = 0;
  }
};

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
