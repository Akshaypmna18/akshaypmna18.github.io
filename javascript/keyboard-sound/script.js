var sounds = {
  65: "a-sound",
  83: "s-sound",
  68: "d-sound",
  70: "f-sound",
  71: "g-sound",
  72: "h-sound",
  74: "j-sound",
  75: "k-sound",
  76: "l-sound",
};
document.body.addEventListener("keydown", function (e) {
  var keyCode = e.keyCode;
  if (keyCode in sounds) {
    var soundId = sounds[keyCode];
    var sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  }
});
