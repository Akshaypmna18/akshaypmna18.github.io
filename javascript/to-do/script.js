var input = document.getElementById("input-box"),
  btn = document.getElementById("btn"),
  list = document.getElementById("list");

function addTask() {
  var newTask = document.createElement("li");
  var taskName, checkBox, dIcon;

  if (input.value != "") {
    taskName = document.createTextNode(input.value);
  } else {
    alert("Enter a task");
    return;
  }
  var tasks = list.getElementsByTagName("li");
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].textContent.trim() === taskName.textContent.trim()) {
      alert("Task already exists");
      return;
    }
  }

  dIcon = document.createElement("i");
  dIcon.classList.add("fas", "fa-trash-alt");
  dIcon.onclick = function () {
    newTask.remove();
  };

  checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      newTask.classList.add("completed");
      newTask.style.color = "#AD8B73";
    } else {
      newTask.classList.remove("completed");
      newTask.style.color = "#000";
    }
  });

  newTask.appendChild(dIcon);
  newTask.appendChild(checkBox);
  newTask.appendChild(taskName);
  list.appendChild(newTask);

  input.value = "";
  return newTask;
}

btn.addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) addTask();
});
