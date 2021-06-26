import Employee from "./Employee.js";

class Staff extends Employee {
  constructor(id, name, age, gender, address, task) {
    super(id, name, age, gender, address);
    this.task = task;
  }

  //get set...
  get getTask() {
    return this.task;
  }
  set setTask(newTask) {
    this.task = newTask;
  }

  /**
   * Ham nay dung de cham cong
   */
  checkTimeKeeping() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    if (
      (hour > 8 && hour < 17) ||
      (hour === 8 && minute >= 30) ||
      (hour === 17 && minute < 30)
    ) {
      super.checkTimeKeeping();
    } else {
      console.log("Ngoài giờ chấm công");
    }
  }

  checkWorkingDay() {
    const dateInWeek = new Date().getDay();
    if (dateInWeek >= 1 && dateInWeek <= 6) {
      super.checkWorkingDay();
    } else {
      console.log("Nghỉ làm");
    }
  }
}

export default Staff;
