// let first: number = 123; // number
// let second: number = 0x37CF; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Ehlullah",
    lastName: "Karakurt",
    age: 20
};
console.log(getFullName(person));
