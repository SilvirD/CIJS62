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
