const addBox = $(".add-box"),
  addPopupBox = $(".add-popup-box"),
  addPopupTitle = $(".add-popup-box h3"),
  xIcon = $(".x-icon"),
  addNoteBtn = $(".add-note-btn"),
  editNoteBtn = $(".edit-note-btn"),
  container = $(".row"),
  newTitle = $(".add-popup-box #title"),
  newDesc = $(".add-popup-box #description");
let isUpdate = false,
  updateId;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showNotes() {
  container.find(".note").remove();
  $.each(notes, function (index) {
    let capitalizedTitle = capitalizeFirstLetter(notes[index].title),
      capitalizedDesc = capitalizeFirstLetter(notes[index].description),
      noteEle = `<div class="user-select-none notes note border-0 card bg-dark text-light position-relative p-1" data-index="${index}" data-title="${capitalizedTitle}" data-desc="${capitalizedDesc}">
    <div class="px-sm-3 py-2 pointer">
        <h3 class="fs-3 fw-semibold my-1 title-overflow">${capitalizedTitle}  </h3>
        <p class="fs-5 desc-overflow mt-0">${capitalizedDesc}</p>
    </div>
    <div class="mb-1 position-absolute bottom-0 px-sm-3 w-100">
        <hr class="m-0 p-0 mb-1">
        <div class="d-flex justify-content-between align-items-center mb-1">
            <p class="fs-6 mb-0 user-select-none">${notes[index].date}</p>
            <i onclick="deleteNote(${index})" class="fs-6 fa-solid fa-trash me-2 me-sm-1 pointer"></i>
        </div>
    </div>
</div>`;
    // $(".container").append(noteEle);
    addBox.after(noteEle);
  });
}
showNotes();
const delOption = $(".delete");

function getCurrentDate() {
  let date = new Date(),
    month = months[date.getMonth()],
    day = date.getDate(),
    year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

function newNote(newNoteTitle, newNoteDesc) {
  let newNote = {
    title: newNoteTitle,
    description: newNoteDesc,
    date: getCurrentDate(),
  };
  if (!isUpdate) {
    notes.push(newNote);
  } else {
    isUpdate = false;
    notes[updateId] = newNote;
  }
  localStorage.setItem("notes", JSON.stringify(notes));
  xIcon.click();
}

addNoteBtn.on("click", function () {
  let newNoteTitle = newTitle.val(),
    newNoteDesc = newDesc.val();
  if (newNoteDesc || newNoteTitle) newNote(newNoteTitle, newNoteDesc);
  showNotes();
});

addBox.on("click", function () {
  newTitle.val("");
  newDesc.val("");
  addPopupBox.removeClass("d-none");
});

xIcon.on("click", function () {
  isUpdate = false;
  addPopupBox.addClass("d-none");
  addNoteBtn.text("Add note");
  addPopupTitle.text("Add a new  note");
});

function deleteNote(index) {
  let confirmDel = confirm("Are you sure you want to delete this note?");
  if (!confirmDel) return;
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

container.on("click", ".note", function () {
  const index = $(this).data("index");
  const title = $(this).data("title");
  const desc = $(this).data("desc");
  $(this)
    .find(".fa-trash")
    .parent()
    .on("click", function (event) {
      event.stopPropagation();
    });

  $(this).on("click", function () {
    editNote(index, title, desc);
  });
});

function editNote(index, title, desc) {
  isUpdate = true;
  updateId = index;
  addBox.click();
  newTitle.val(title);
  newDesc.val(desc);
  addNoteBtn.text("Update note");
  addPopupTitle.text("Update the note");
}
