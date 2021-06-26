class Employee {
  constructor(id, name, age, gender, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }

  //Get-set...
  get getID() {
    return this.id;
  }

  set setID(newID) {
    this.ID = newID;
  }

  checkTimeKeeping() {
    console.log("Đã chấm công");
  }

  checkWorkingDay() {
    console.log("Đi làm");
  }
}

export default Employee;
