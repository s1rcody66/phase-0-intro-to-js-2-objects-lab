const employee = {
    name: "Aki",
    streetAddress: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {
    ...employee,
    [key] : value
   }
    const newObj = {...employee};
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
 }
 function deleteFromEmployeeByKey(employee,key) {
     const newEmployee = {...employee};
     delete newEmployee[key];
     return newEmployee;
}
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete employee[key];
    return employee;
 }
