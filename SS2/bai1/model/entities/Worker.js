import Employee from "./Employee.js";

class Worker extends Employee {
  constructor(id, name, age, gender, address, level) {
    super(id, name, age, gender, address);
    this.level = level;
  }

  //get set....
  get getLevel() {
    return this.level;
  }
  set setLevel(newLevel) {
    this.level = newLevel;
  }

  checkTimeKeeping() {
    const hour = new Date().getHours();
    if (hour > 6 && hour < 22) {
      console.log("Ngoài giờ chấm công");
    } else {
      super.checkTimeKeeping();
    }
  }

  checkWorkingDay() {
    const dateInWeek = new Date().getDay();
    if (dateInWeek >= 0 && dateInWeek <= 6) {
      super.checkWorkingDay();
    } else {
      console.log("Nghỉ làm");
    }
  }
}

export default Worker;
