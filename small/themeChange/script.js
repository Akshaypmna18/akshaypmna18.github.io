const menuIcon = document.getElementById("menu-icon");
const links = document.querySelector("nav>ul");
const listItems = document.querySelectorAll("nav li");
menuIcon.addEventListener("click", function () {
  links.classList.toggle("display");
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.toggle("transition");
  }
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
  }
});

const themeIcon = document.getElementById("theme-icon");
themeIcon.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") == "null") {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  themeIcon.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("theme", "light");
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  themeIcon.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-theme");
}
