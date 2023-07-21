var watchImage = document.getElementById("watch");

var black = document.getElementById("black");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var pink = document.getElementById("pink");
var purple = document.getElementById("purple");

black.onclick = function () {
  watchImage.setAttribute("src", "watch/black.png");
};
red.onclick = function () {
  watchImage.setAttribute("src", "watch/red.png");
};
blue.onclick = function () {
  watchImage.setAttribute("src", "watch/blue.png");
};
pink.onclick = function () {
  watchImage.setAttribute("src", "watch/pink.png");
};
purple.onclick = function () {
  watchImage.setAttribute("src", "watch/purple.png");
};

var buyBtn = document.getElementById("buy-btn");

buyBtn.onclick = function () {
  alert("Your order is placed successfully");
};
