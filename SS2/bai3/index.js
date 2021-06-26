import Account from "./model/entities/Account.js";
import NormalAccount from "./model/entities/NormalAccount.js";
import AdminAccount from "./model/entities/AdminAccount.js";
import Staff from "./model/entities/Staff.js";

const staff1 = new NormalAccount(
  1,
  "ttd",
  "22/12/1999",
  "hn",
  "male",
  "xyz.img",
  "ttd@mail.com",
  "ttd"
);
// console.log(staff1);

// staff1.logIn("ttd@mail.com", "ttd");
// staff1.changeAvatar("abc.img");
// staff1.checkTimeKeeping();

const admin1 = new AdminAccount(
  1,
  "ttd",
  "22/12/1999",
  "hn",
  "male",
  "xyz.img",
  "ttd@mail.com",
  "ttd",
  "admin",
  []
);

let staff2 = new NormalAccount(
  2,
  "ttd",
  "22/12/1999",
  "hn",
  "male",
  "xyz.img",
  "ttd@mail.com",
  "ttd"
);

let staff3 = new NormalAccount(
  3,
  "ttd",
  "22/12/1999",
  "hn",
  "male",
  "xyz.img",
  "ttd@mail.com",
  "ttd"
);

admin1.addStaff(staff1);
admin1.addStaff(staff2);
// admin1.modifyStaff(0, staff3);
// admin1.deleteStaff(1);

admin1.resetPassword(staff1);

console.log(admin1);
