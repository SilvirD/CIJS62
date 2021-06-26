import Account from "./Account.js";

class NormalAccount extends Account {
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
    super(maNV, hoTen, ngaySinh, queQuan, gioiTinh, avatar, email, password);
  }

  /**
   * Doi hinh dai dien
   * @param {*} newAvatar
   */
  changeAvatar(newAvatar) {
    super.setAvatar = newAvatar;
    console.log("New avatar: ", newAvatar);
  }

  /**
   * Cham cong
   */
  checkTimeKeeping() {
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 18) {
      console.log("Đã chấm công");
    } else {
      console.log("Ngoài giờ chấm công");
    }
  }

  QuitJob() {}

  Take1DayOff() {}
}

export default NormalAccount;
