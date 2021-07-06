import * as helper from "./alert.js";

const userName = document.getElementById("userName");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");

const btnUpdate = document.getElementById("update-btn");
const btnDelete = document.getElementById("delete-btn");

let IDEmail = "";
let Email = "";
let emailLogin = "";

if (typeof Storage !== "undefined") {
  emailLogin = localStorage.getItem("email");
  console.log(emailLogin);
}

//GET DATA
try {
  const data = await firebase
    .firestore()
    .collection("accounts")
    .where("email", "==", emailLogin)
    .get();

  data.docs.forEach((doc) => {
    IDEmail = doc.id;
    Email = doc.data().email;
    console.log(doc.id, " => ", doc.data());
    userName.value = doc.data().userName;
  });
} catch (error) {
  helper.alertError(`${error.code} - ${error.message}`);
}

btnUpdate.onclick = () => {
  if (
    userName.value.trim() == "" ||
    password.value.trim() == "" ||
    rePassword.value.trim() == ""
  ) {
    helper.alertWaring("Nhập thiếu thông tin");
  } else if (password.value.trim() != rePassword.value.trim()) {
    helper.alertWaring("Mật khẩu không khớp");
    return;
  } else {
    try {
      const userDone = firebase
        .firestore()
        .collection("accounts")
        .doc(IDEmail)
        .update({
          userName: userName.value,
          password: password.value,
        });
      const user = firebase.auth().currentUser;
      const newPassword = password.value;
      // update pass in auth()
      user
        .updatePassword(newPassword)
        .then(() => {
          // Update successful.
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
      helper.alertSuccess("Cập nhật thông tin thành công");
    } catch (error) {
      helper.alertError(`${error.code} - ${error.message}`);
    }
  }
};

btnDelete.onclick;
