import { firebaseDB } from "./firebase.js";
import * as _ from "./alert.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const btnSignIn = document.getElementById("signin-btn");
const btnSignUp = document.getElementById("signup-btn");

btnSignUp.onclick = () => {
  if (password.value.trim() !== rePassword.value.trim()) {
    _.alertError("Mật khẩu không khớp");
    return;
  }
  //i.pinimg.com/originals/eb/59/fc/eb59fc8a76791bc31663723c03c875d2.jpg

  https: firebaseDB
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      return firebaseDB.auth().currentUser.updateProfile({
        displayName: "Trong Duc",
        photoURL: `https://i.pinimg.com/originals/eb/59/fc/eb59fc8a76791bc31663723c03c875d2.jpg`,
        phoneNumber: "0909090909",
      });
    })
    .then((data) => {
      console.log(data);
      return firebaseDB.auth().currentUser.sendEmailVerification();
    })
    .then(() => {
      _.alertSuccess("Đăng ký thành công");
    })
    .catch((error) => {
      _.alertError(`${error.code} - ${error.message}`);
    });
};

btnSignIn.onclick = () => {
  firebaseDB
    .auth()
    .signInWithEmailAndPassword("silvird99@gmail.com", "123456")
    .then((userCredential) => {
      const { user } = userCredential;
      if (user.emailVerified) {
        _.alertSuccess("Đăng nhập thành công");
      } else {
        _.alertWaring("Email chưa được xác thực");
      }
    })
    .catch((error) => {
      _.alertError(`${error.code} - ${error.message}`);
    });
};
