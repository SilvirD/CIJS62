import * as helper from "./alert.js";

const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const btnSignUp = document.getElementById("signup-btn");

window.onload = () => {
  console.log(firebase.app().name);
};

async function checkEmail(value) {
  try {
    const data = await firebase
      .firestore()
      .collection("accounts")
      .where("email", "==", value)
      .get();
    return data;
  } catch (error) {
    console.log("23");
    helper.alertError(`${error.code} - ${error.message}`);
  }
}

/**
 * Create user infor
 */
async function createAccount() {
  try {
    const response = await checkEmail(email.value);
    console.log(response);
    if (response.docs.length > 0) {
      swal(
        {
          title: `Email đã tồn tại! Về trang đăng nhập?`,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#f8c086",
          confirmButtonText: "Ok",
          cancelButtonText: "Không",
          closeOnConfirm: false,
          closeOnCancel: true,
        },
        function (isConfirm) {
          if (isConfirm) {
            location.href = "login.html";
          }
        }
      );
    } else if (
      userName.value.trim() == "" ||
      email.value.trim() == "" ||
      password.value.trim() == "" ||
      rePassword.value.trim() == ""
    ) {
      helper.alertWaring("Nhập thiếu thông tin");
    } else if (password.value.trim() != rePassword.value.trim()) {
      helper.alertWaring("Mật khẩu không khớp");
    } else {
      const userDone = await firebase.firestore().collection("accounts").add({
        userName: userName.value,
        email: email.value,
        password: password.value,
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          return firebase.auth().currentUser.sendEmailVerification();
        })
        .then(() => {
          swal(
            {
              title: "Đăng kí thành công!",
              type: "success",
              showCancelButton: false,
              confirmButtonColor: "#40f756",
              confirmButtonText: "Ok",
              closeOnConfirm: false,
              closeOnCancel: false,
            },
            function (isConfirm) {
              if (isConfirm) {
                location.href = "login.html";
              }
            }
          );
        });
    }
  } catch (error) {
    console.log("94");
    helper.alertError(`${error.code} - ${error.message}`);
  }
}

btnSignUp.onclick = () => {
  // checkEmail(email.value);
  createAccount();
  sessionStorage.setItem("username", userName.value);
  sessionStorage.setItem("email", email.value);
  sessionStorage.setItem("password", password.value);
};
