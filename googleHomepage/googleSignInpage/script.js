var email = document.getElementById("email");
var emailBox = document.getElementById("email-wrapper");
var password = document.getElementById("password");
var passwordBox = document.getElementById("password-wrapper");
var nextBtn = document.getElementById("next-btn");
var afterBtn = document.getElementById("after-btn");
var heading = document.getElementById("heading");
var afterSignin = document.getElementById("after-signin");
var userHeading = document.getElementById("user-heading");
var userEmail = document.getElementById("user-email");
var forgetEmail = document.getElementById("forgot-email-text");
var forgetPassword = document.getElementById("forgot-password-text");
var createAcc = document.getElementById("create-acc");
var deviceText = document.getElementById("device-text");
var verifyText = document.getElementById("verify-text");
var showBox = document.getElementById("show-box");
var checkBox = document.getElementById("check-box");

function passwordPage(e) {
  e.preventDefault();
  if (email.value !== "") {
    emailBox.classList.add("hide");
    passwordBox.classList.remove("hide");
    nextBtn.classList.add("hide");
    afterBtn.classList.remove("hide");
    heading.classList.add("hide");
    afterSignin.classList.add("hide");
    userHeading.classList.remove("hide");
    userEmail.classList.remove("hide");
    forgetEmail.classList.add("hide");
    forgetPassword.classList.remove("hide");
    createAcc.classList.add("hide");
    deviceText.classList.add("hide");
    verifyText.classList.remove("hide");
    showBox.classList.remove("hide");
    userEmail.innerHTML = "👤" + email.value;
  }
}

function changeEmail() {
  emailBox.classList.remove("hide");
  passwordBox.classList.add("hide");
  nextBtn.classList.remove("hide");
  afterBtn.classList.add("hide");
  heading.classList.remove("hide");
  afterSignin.classList.remove("hide");
  userHeading.classList.add("hide");
  userEmail.classList.add("hide");
  forgetEmail.classList.remove("hide");
  forgetPassword.classList.add("hide");
  createAcc.classList.remove("hide");
  deviceText.classList.remove("hide");
  verifyText.classList.add("hide");
  showBox.classList.add("hide");
}

showBox.onclick = function () {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    checkBox.checked = true;
  } else {
    password.setAttribute("type", "password");
    checkBox.checked = false;
  }
};
userEmail.addEventListener("click", changeEmail);
email.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) passwordPage();
});
nextBtn.addEventListener("click", passwordPage);

function passwordCheck(e) {
  if (password.value.length < 8) {
    e.preventDefault();
    alert("Password must be minimum 8 characters");
    return;
  } else {
    alert("Better Luck Next Time 😉");
    this.form.submit();
  }
}

afterBtn.addEventListener("click", passwordCheck);
password.addEventListener("keydown", function (e) {
  if (e.keyCode == 13) {
    passwordCheck(e);
  }
});
