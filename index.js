
const employee = {
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj }
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

updateEmployeeWithKeyAndValue(employee, name, "Sam");
updateEmployeeWithKeyAndValue(employee, streetAddress, "11 Broadway");
destructivelyUpdateEmployeeWithKeyAndValue(employee, name, "Robert");
deleteFromEmployeeByKey(employee, "Robert");
destructivelyDeleteFromEmployeeByKey(employee, "Robert");
