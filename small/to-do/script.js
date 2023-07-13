var btn = document.getElementById("btn");
var list = document.getElementById("list");
var input = document.getElementById("input-box");

btn.addEventListener("click", function () {
  var newListItem = document.createElement("li");
  if (input.value != "") {
    var textNode = document.createTextNode(input.value);
  } else {
    alert("Enter a task");
  }
  newListItem.appendChild(textNode);
  list.appendChild(newListItem);
});
document.addEventListener("keydown", function (e) {
  var newListItem = document.createElement("li");
  var keyCode = e.keyCode;
  if (keyCode == 13) {
    if (input.value != "") {
      var textNode = document.createTextNode(input.value);
    } else {
      alert("Enter a task");
    }
  }
  newListItem.appendChild(textNode);
  list.appendChild(newListItem);
});

list.addEventListener("click", function (e) {
  var element = e.target;
  element.style.backgroundColor = "#420c09";
  setTimeout(function () {
    element.remove();
  }, 1000);
});
