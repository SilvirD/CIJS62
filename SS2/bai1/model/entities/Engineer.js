import Employee from "./Employee.js";

class Engineer extends Employee {
  constructor(id, name, age, gender, address, branch) {
    super(id, name, age, gender, address);
    this.branch = branch;
  }

  //get set....
  get getBranch() {
    return this.branch;
  }
  set setBranch(newBranch) {
    this.branch = newBranch;
  }

  checkTimeKeeping() {
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 18) {
      super.checkTimeKeeping();
    } else {
      console.log("Ngoài giờ chấm công");
    }
  }

  checkWorkingDay() {
    const dateInWeek = new Date().getDay();
    if (dateInWeek >= 1 && dateInWeek <= 5) {
      super.checkWorkingDay();
    } else {
      console.log("Nghỉ làm");
    }
  }
}

export default Engineer;
