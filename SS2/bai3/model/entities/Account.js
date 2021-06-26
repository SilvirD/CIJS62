import Staff from "./Staff.js";

class Account extends Staff {
  constructor(
    maNV,
    hoTen,
    ngaySinh,
    queQuan,
    gioiTinh,
    avatar,
    email,
    password
  ) {
    super(maNV, hoTen, ngaySinh, queQuan, gioiTinh);
    this.avatar = avatar;
    this.email = email;
    this.password = password;
  }

  get getAvatar() {
    return this.avatar;
  }

  set setAvatar(newAvatar) {
    this.avatar = newAvatar;
  }

  get getEmail() {
    return this.email;
  }

  set setEmail(newEmail) {
    this.email = newEmail;
  }

  get getPW() {
    return this.password;
  }

  set setPW(newPassword) {
    this.password = newPassword;
  }

  logIn(email, password) {
    if (this.email === email && this.password === password) {
      console.log("success");
    } else {
      console.log("failed");
    }
  }

  logOut() {}

  changePassword(inputPW) {
    this.setPW = inputPW;
  }
}

export default Account;
