import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  onValue,
  remove,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const databaseURL = {
  databaseURL:
    "https://sample-ec650-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(databaseURL);
const database = getDatabase(app);
const ListDb = ref(database, "CartItems");

const list = $("ul");
const input = $("input");
const btn = $("button");

onValue(ListDb, function (snapshot) {
  list.empty();
  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      let currentItem = childSnapshot.val();
      appendItem(currentItem);
    });
  } else {
    let blank = $("<p>").text("No items here...yet");
    list.append(blank);
  }
});

function appendItem(item) {
  if (item) {
    let itemValue = item[1];
    let newItem = $("<li>")
      .addClass("rounded-2 px-2 py-1 flex-grow-1")
      .text(itemValue);
    list.append(newItem);
    newItem.on("dblclick", function () {
      let location = ref(database, `CartItems/${itemValue}`);
      remove(location);
      newItem.remove();
    });
  }
}

function clearInput() {
  input.val("");
}

function pushItem(item) {
  if (item) {
    push(ListDb, item);
  }
}

input.on("keydown", function (e) {
  if (e.key == "Enter") {
    let inputValue = input.val().trim();
    if (inputValue && !list.find(`li:contains(${inputValue})`).length) {
      appendItem([null, inputValue]);
      pushItem([null, inputValue]);
      clearInput();
    } else if (list.find(`li:contains(${inputValue})`).length) {
      alert("Item already exists");
    }
  }
});

btn.on("click", function () {
  let inputValue = input.val().trim();
  if (inputValue && !list.find(`li:contains(${inputValue})`).length) {
    appendItem([null, inputValue]);
    pushItem([null, inputValue]);
    clearInput();
  } else if (list.find(`li:contains(${inputValue})`).length) {
    alert("Item already exists");
  }
});
