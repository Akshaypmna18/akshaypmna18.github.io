const emoji = $("#emoji");

function changeBg(color) {
  emoji.css("background-color", color);
}

function changeEyes(img) {
  $("#emoji-eyes").attr("src", img);
}

function changeMouth(img) {
  $("#emoji-mouth").attr("src", img);
}

let sections = ["#color-box", "#eyes-box", "#mouth-box"];
let currentSection = 0;

function toggleSectionsForward() {
  $(sections[currentSection]).addClass("d-none");
  currentSection = (currentSection + 1) % sections.length;
  updateToggleButtons();
  $(sections[currentSection]).removeClass("d-none");
}

function toggleSectionsBackward() {
  $(sections[currentSection]).addClass("d-none");
  currentSection = (currentSection - 1 + sections.length) % sections.length;
  updateToggleButtons();
  $(sections[currentSection]).removeClass("d-none");
}

function updateToggleButtons() {
  $("#left-toggle").toggleClass("d-none", currentSection === 0);
  $("#right-toggle").toggleClass(
    "d-none",
    currentSection === sections.length - 1
  );
}

$("#right-toggle").click(toggleSectionsForward);
$("#left-toggle").click(toggleSectionsBackward);

updateToggleButtons();

const btn = $(".btn");
btn.on("click", function () {
  $("#emoji-box").get(0).requestFullscreen();
  $("#emoji-box>h2").text("Your Emoji");
});
