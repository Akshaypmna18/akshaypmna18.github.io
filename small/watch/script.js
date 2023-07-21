var watchImage = document.getElementById("watch");

var color = document.getElementById("color-name");
var black = document.getElementById("black");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var pink = document.getElementById("pink");
var purple = document.getElementById("purple");

black.onclick = function () {
  watchImage.setAttribute("src", "watch/black.png");
  color.innerHTML = "Black";
};
red.onclick = function () {
  watchImage.setAttribute("src", "watch/red.png");
  color.innerHTML = "Red";
};
blue.onclick = function () {
  watchImage.setAttribute("src", "watch/blue.png");
  color.innerHTML = "Blue";
};
pink.onclick = function () {
  watchImage.setAttribute("src", "watch/pink.png");
  color.innerHTML = "Pink";
};
purple.onclick = function () {
  watchImage.setAttribute("src", "watch/purple.png");
  color.innerHTML = "Purple";
};

var feature = document.getElementById("feature-name");
var heartRate = document.getElementById("heart-rate");
var heartBtn = document.getElementById("heart-rate-btn");
var timeBtn = document.getElementById("time-btn");
var time = document.getElementById("time");

heartBtn.onclick = function () {
  heartRate.classList.remove("display");
  time.classList.add("display");
  feature.innerHTML = "Heart Rate";
};
timeBtn.onclick = function () {
  heartRate.classList.add("display");
  time.classList.remove("display");
  feature.innerHTML = "Time";
};

var buyBtn = document.getElementById("buy-btn");

buyBtn.onclick = function () {
  alert("Your order is placed successfully");
};

function updateClock() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var formattedTime =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  document.getElementById("time").textContent = formattedTime;
}

setInterval(updateClock, 1000);
