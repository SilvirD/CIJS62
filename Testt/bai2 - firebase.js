// Bài toán 2 cần có 1 collection: Employee

// Document trong Employee cần có các thông tin sau
// - id
// - Job
// - first name
// - last name
// - task list
// - employee list

async function addEmployeeToFB(empInfo) {
  try {
    const employee = await firebase.firestore().collection("employee").add({
      id: registerForm.id.value,
      firstName: registerForm.firstName.value,
      lastName: registerForm.lastName.value,
      taskList: registerForm.taskList.value,
      employeeList: registerForm.employeeList.value,
    });
    helper.alertSuccess("Đã thêm vào CSDL");
  } catch (error) {
    helper.alertError(`${error.code} - ${error.message}`);
  }
}
