import Employee from "./Employee.js";

class Developer extends Employee {
  constructor(id, name, taskList, employeeList) {
    super(id, name, taskList, employeeList);
  }
}
export default Developer;
