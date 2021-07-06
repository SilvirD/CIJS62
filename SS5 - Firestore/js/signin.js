import * as helper from "./alert.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

const btnLogin = document.getElementById("signin-btn");

btnLogin.onclick = () => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("email", email.value);
    localStorage.setItem("javascript", "học tại toidicode.com");
  } else {
    alert(
      "Trình duyệt của bạn không hỗ trợ localStorage. Hãy nâng cấp trình duyệt để sử dụng!"
    );
  }
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified == true) {
        swal(
          {
            title: "Đăng nhập thành công!",
            type: "success",
            showCancelButton: false,
            confirmButtonColor: "#40f756",
            confirmButtonText: "Ok",
            closeOnConfirm: true,
            closeOnCancel: false,
          },
          function (isConfirm) {
            if (isConfirm) {
              location.href = "logout.html";
            }
          }
        );
      } else {
        helper.alertWaring("Email chưa được xác nhận!");
      }
    })
    .catch((error) => {
      helper.alertError(`${error.code} - ${error.message}`);
    });
};
