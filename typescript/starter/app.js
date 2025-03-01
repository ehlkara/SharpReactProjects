// let first: number = 123; // number
// let second: number = 0x37CF; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
var employee = {
    empNumber: 1,
    name: "Ehlullah",
    gender: "Male",
};
var employeeDeparment = {
    empDepartment: "Software Department",
    name: "Ehlullah",
    gender: "Male",
};
console.log(employee);
console.log(employeeDeparment);
var Employee = /** @class */ (function () {
    function Employee(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return Employee;
}());
var employee2 = new Employee(5, "Ehlullah", "Male");
console.log(employee2);
