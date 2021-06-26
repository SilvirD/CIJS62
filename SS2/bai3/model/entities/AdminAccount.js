import Account from "./Account.js";
import NormalAccount from "./NormalAccount.js";
import Staff from "./Staff.js";

class AdminAccount extends Account {
  constructor(
    maNV,
    hoTen,
    ngaySinh,
    queQuan,
    gioiTinh,
    avatar,
    email,
    password,
    permission,
    listStaff
  ) {
    super(maNV, hoTen, ngaySinh, queQuan, gioiTinh, avatar, email, password);
    this.permission = permission;
    this.listStaff = listStaff;
  }

  addStaff(staff) {
    this.listStaff.push(staff);
  }

  modifyStaff(index, staff) {
    if (index <= this.listStaff.length - 1) {
      this.listStaff[index] = staff;
    } else {
      console.log("Out of range");
    }
  }

  deleteStaff(index) {
    if (index <= this.listStaff.length - 1) {
      this.listStaff.splice(index, 1);
    } else {
      console.log("Out of range");
    }
  }

  /**
   * Reset PW cua 1 account
   * @param {*} staff
   */
  resetPassword(staff) {
    staff.setPW = "";
  }
}

export default AdminAccount;
