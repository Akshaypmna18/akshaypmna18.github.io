var errorMessages = document.querySelectorAll(".error");

var userName = document.getElementById("username");
var nameError = document.getElementById("name-error");

userName.addEventListener("focus", function () {
  nameError.style.display = "block";
});
userName.addEventListener("blur", function () {
  nameError.style.display = "none";
});
userName.addEventListener("input", function () {
  var input = userName.value;
  errorMessages.forEach((error) => {
    error.style.display = "block";
  });
  if (/^[a-zA-Z_]/.test(input)) {
    errorMessages[0].style.display = "none";
  }
  if (/[a-zA-z]{3,20}/.test(input)) {
    errorMessages[1].style.display = "none";
  }
});

var eyeIcon = document.getElementById("eye");
var password = document.getElementById("password");
var passwordError = document.getElementById("password-error");
password.addEventListener("focus", function () {
  passwordError.style.display = "block";
});
password.addEventListener("blur", function () {
  passwordError.style.display = "none";
});
password.addEventListener("input", function () {
  var input = password.value;
  errorMessages.forEach((error) => {
    error.style.display = "block";
  });
  if (/[a-z]/.test(input)) {
    errorMessages[2].style.display = "none";
  }
  if (/[A-Z]/.test(input)) {
    errorMessages[3].style.display = "none";
  }
  if (/[!@#$%^&*_+=\-]/.test(input)) {
    errorMessages[4].style.display = "none";
  }
  if (/[0-9]/.test(input)) {
    errorMessages[5].style.display = "none";
  }
  if (/[a-zA-Z0-9!@#$%^&*_+=\-]{8}/.test(input)) {
    errorMessages[6].style.display = "none";
  }
});
eye.onclick = function () {
  if (eye.classList.contains("fa-eye-slash")) {
    eye.classList.replace("fa-eye-slash", "fa-eye");
    password.setAttribute("type", "text");
  } else {
    eye.classList.replace("fa-eye", "fa-eye-slash");
    password.setAttribute("type", "password");
  }
};

var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
phone.addEventListener("focus", function () {
  phoneError.style.display = "block";
});
phone.addEventListener("blur", function () {
  phoneError.style.display = "none";
});
phone.addEventListener("input", function () {
  var input = phone.value;
  if (/[a-zA-Z!@#$%^&*_=\-]/.test(input)) {
    errorMessages[7].style.display = "block";
  } else {
    errorMessages[7].style.display = "none";
  }
});
