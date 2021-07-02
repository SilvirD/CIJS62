import { firebaseDB } from "./firebase.js";

const btnSend = document.getElementById("sendCode-btn");
const btnVerify = document.getElementById("verify-btn");

firebaseDB.auth().languageCode = "it";

window.onload = function () {
  render();
};

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}

function phoneAuth() {
  const phoneNumber = document.getElementById("phoneNumber").value;

  firebaseDB
    .auth()
    .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
      alert("MSG sent");
    });
}

function codeVerify() {
  const code = document.getElementById("verify-btn");
  codeResult.confirm(code).then((result) => {
    alert("Succesfully registered");
    const user = result.user;
    console.log(user);
  });
}

btnSend.addEventListener("click", phoneAuth);
btnVerify.addEventListener("click", codeVerify);
