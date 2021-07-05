import Employee from "./Employee.js";

class Manager extends Employee {
  constructor(id, name, taskList, employeeList) {
    super(id, name, taskList);
    this.employeeList = employeeList;
  }

  get getEmployeeList() {
    return this.employeeList;
  }

  set setEmployeeList(newEmployeeList) {
    this.employeeList = newEmployeeList;
  }

  addEmployee(e) {
    this.employeeList.push(e);
  }
}
export default Manager;
