class Employee {
  constructor(id, name, taskList) {
    this.id = id;
    this.name = name;
    this.taskList = taskList;
  }

  get getID() {
    return this.id;
  }

  set setID(newID) {
    this.id = newID;
  }

  get getName() {
    return this.name;
  }

  set setName(newName) {
    this.name = newName;
  }

  get getTaskList() {
    return this.taskList;
  }

  set setTaskList(newTaskList) {
    this.taskList = newTaskList;
  }

  displayInfo() {
    if (this.employeeList != undefined) {
      console.log(
        "ID: ",
        this.id,
        "\nName: ",
        this.name,
        "\nTask List: ",
        this.taskList,
        "\nEmployee List: ",
        this.employeeList
      );
    } else {
      console.log(
        "ID: ",
        this.id,
        "\nName: ",
        this.name,
        "\nTask List: ",
        this.taskList
      );
    }
  }
}
export default Employee;
