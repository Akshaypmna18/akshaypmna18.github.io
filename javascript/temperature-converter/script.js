var input = document.querySelector("div>input");
var output = document.getElementById("output");
var from = document.getElementById("from");
var to = document.getElementById("to");

function changeTemp() {
  if (from.value === "C" && to.value === "F") {
    var res = (input.value * 9) / 5 + 32;
    output.innerText = input.value + "°C =" + res.toFixed(2) + "°F";
  } else if (from.value === "C" && to.value === "K") {
    var res = parseFloat(input.value) + 273.15;
    output.innerText = input.value + "°C =" + res.toFixed(2) + "K";
  } else if (from.value === "F" && to.value === "C") {
    var res = ((input.value - 32) * 5) / 9;
    output.innerText = input.value + "°F =" + res.toFixed(2) + "°C";
  } else if (from.value === "F" && to.value === "K") {
    var res = ((parseFloat(input.value) - 32) * 5) / 9 + 273.15;
    output.innerText = input.value + "°F =" + res.toFixed(2) + "K";
  } else if (from.value === "K" && to.value === "C") {
    var res = parseFloat(input.value) - 273.15;
    output.innerText = input.value + "K =" + res.toFixed(2) + "°C";
  } else if (from.value === "K" && to.value === "F") {
    var res = ((parseFloat(input.value) - 273.15) * 9) / 5 + 32;
    output.innerText = input.value + "K =" + res.toFixed(2) + "°F";
  }
}

function changeTo() {
  to.value = from.value === "C" ? "F" : from.value === "F" ? "K" : "C";
  changeTemp();
}

function changeFrom() {
  from.value = to.value === "C" ? "F" : to.value === "F" ? "K" : "C";
  changeTemp();
}

from.addEventListener("change", changeTo);
to.addEventListener("change", changeFrom);
input.addEventListener("input", changeTemp);
changeTemp();
