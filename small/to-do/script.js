var btn = document.getElementById("btn");
var list = document.getElementById("list");
var input = document.getElementById("input-box");

function addTask() {
  var newListItem = document.createElement("li");
  if (input.value != "") {
    var textNode = document.createTextNode(input.value);
  } else {
    alert("Enter a task");
    return;
  }
  var tasks = list.getElementsByTagName("li");
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].textContent.trim() === textNode.textContent.trim()) {
      alert("Task already exists");
      return;
    }
  }
  newListItem.appendChild(textNode);
  list.appendChild(newListItem);
  input.value = "";
}

btn.addEventListener("click", addTask);
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    addTask();
  }
});

list.addEventListener("click", function (e) {
  var element = e.target;
  element.style.backgroundColor = "#420c09";
  setTimeout(function () {
    element.remove();
  }, 500);
});
