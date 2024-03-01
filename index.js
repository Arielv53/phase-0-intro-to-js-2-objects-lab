function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }

const employee = {
  name: "John Doe",
  age: 30,
  position: "Software Engineer",
};

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 31);
console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  

