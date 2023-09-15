const inputBox = $(".input-box");
const number = $(".number");

let lastInputIsOperator = false;

$(".number").on("click", function () {
  let inputValue = $(this).text().trim();
  if (isOperator(inputValue)) {
    if (lastInputIsOperator) return;
    lastInputIsOperator = true;
  } else {
    lastInputIsOperator = false;
  }
  inputBoxUpdate(inputValue);
});

function inputBoxUpdate(inputValue) {
  let currentInput = inputBox.val();
  if (inputValue == "ac") {
    inputBox.val("");
  } else if (inputValue == "ce" && currentInput.length > 0) {
    inputBox.val(inputBox.val().slice(0, -1));
  } else if (inputValue == "=") {
    inputBox.val(eval(currentInput));
  } else {
    inputBox.val(currentInput + inputValue);
  }
}

function isOperator(input) {
  const operators = ["+", "-", "*", "/", "%", "."];
  return operators.includes(input);
}
