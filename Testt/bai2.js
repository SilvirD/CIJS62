import Developer from "./model/entities/Developer.js";
import Tester from "./model/entities/Tester.js";
import Manager from "./model/entities/Manager.js";

const dev1 = new Developer("d1", "Trong Duc", ["check email", "code"]);
const dev2 = new Developer("d2", "Ngoc Long", ["code", "drink boba"]);

const test1 = new Tester("t1", "Hoang Nam", ["check email", "check code"]);
const test2 = new Tester("t2", "Duc Anh", ["check code", "drink coffee"]);

const mng1 = new Manager(
  "m1",
  "Khanh Linh",
  ["check email", "check employee"],
  [dev1, dev2]
);

const mng2 = new Manager(
  "m2",
  "Thanh Huong",
  ["check employee"],
  [test1, test2]
);

dev1.displayInfo();
console.log("------------------------------");
mng1.displayInfo();
console.log("------------------------------");

mng2.addEmployee(mng1);
// console.log(mng2);
mng2.displayInfo();
