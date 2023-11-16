const hourInput = $(".hour-input");
const minuteInput = $(".minute-input");
const secondInput = $(".second-input");

let hourValue = $(".hour-value");
let minuteValue = $(".minute-value");
let secondValue = $(".second-value");

const startBtn = $(".btn-wrapper > .start");

startBtn.on("click", () => {
  startBtn.toggleClass("bg-green-600 bg-yellow-600");
  startBtn.text(startBtn.text() === "start" ? "pause" : "start");
  let hourInputVal = hourInput.val();
  let minuteInputVal = minuteInput.val();
  let secondInputVal = secondInput.val();
  if (
    hourInputVal === "00" &&
    minuteInputVal === "00" &&
    secondInputVal === "00"
  )
    alert("Provide time");
  else startCountDown(hourInputVal, minuteInputVal, secondInputVal);
});

function formatTime(value) {
  return value < 10 && value !== "00" ? "0" + value : value;
}

function startCountDown(hour, minute, second) {
  hourValue.text(formatTime(hour));
  minuteValue.text(formatTime(minute));
  secondValue.text(formatTime(second));
}
