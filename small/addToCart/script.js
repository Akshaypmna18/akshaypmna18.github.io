// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// import {
//   getDatabase,
//   onValue,
//   remove,
//   ref,
//   push,
// } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// const databaseURL = {
//   databaseURL:
//     "https://sample-ec650-default-rtdb.asia-southeast1.firebasedatabase.app/",
// };

// const app = initializeApp(databaseURL);
// const database = getDatabase(app);
// const ListDb = ref(database, "CartItems");

// const list = $("ul");
// const input = $("input");
// const btn = $("button");

// onValue(ListDb, function (snapshot) {
//   if (snapshot.exists()) {
//     let arr = Object.entries(snapshot.val());
//     list.empty();
//     for (let i = 0; i < arr.length; i++) {
//       let currentItem = arr[i];
//       appendItem(currentItem);
//     }
//   } else {
//     let blank = $("<p>").text("No items here...yet");
//     list.append(blank);
//   }
// });

// function appendItem(item) {
//   if (item) {
//     let itemId = item[0];
//     let itemValue = item[1];
//     let newItem = $("<li>")
//       .addClass("rounded-2 px-2 py-1 flex-grow-1")
//       .text(itemValue);
//     list.append(newItem);
//     newItem.on("dblclick", function () {
//       let location = ref(database, `CartItems/${itemId}`);
//       remove(location);
//       newItem.remove();
//     });
//   }
// }

// function clearInput() {
//   input.val("");
// }

// function pushItem(item) {
//   if (item) push(ListDb, item);
// }

// let existingItems = [];

// onValue(ListDb, function (snapshot) {
//   if (snapshot.exists()) {
//     existingItems = Object.values(snapshot.val());
//   }
// });

// input.on("keydown", function (e) {
//   if (e.key == "Enter") {
//     let inputValue = input.val().trim();
//     if (existingItems.includes(inputValue)) {
//       alert("Item already exists");
//     } else {
//       appendItem(inputValue);
//       pushItem(inputValue);
//       clearInput();
//     }
//   }
// });

// btn.on("click", function () {
//   let inputValue = input.val().trim();
//   if (existingItems.includes(inputValue)) {
//     alert("Item already exists");
//   } else {
//     appendItem(inputValue);
//     pushItem(inputValue);
//     clearInput();
//   }
// });

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
  if (snapshot.exists()) {
    list.empty();
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
    let itemId = item[0];
    let itemValue = item[1];
    let newItem = $("<li>")
      .addClass("rounded-2 px-2 py-1 flex-grow-1")
      .text(itemValue);
    list.append(newItem);
    newItem.on("dblclick", function () {
      let location = ref(database, `CartItems/${itemId}`);
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
    if (inputValue) {
      // Check for duplicate value in existing items
      if (list.find(`li:contains(${inputValue})`).length === 0) {
        appendItem(inputValue);
        pushItem(inputValue);
        clearInput();
      } else {
        alert("Item already exists");
      }
    }
  }
});

btn.on("click", function () {
  let inputValue = input.val().trim();
  if (inputValue) {
    // Check for duplicate value in existing items
    if (list.find(`li:contains(${inputValue})`).length === 0) {
      appendItem(inputValue);
      pushItem(inputValue);
      clearInput();
    } else {
      alert("Item already exists");
    }
  }
});
