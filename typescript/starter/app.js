// let first: number = 123; // number
// let second: number = 0x37CF; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
// let employeeFirstName: string = 'Ehlullah Karakurt';
// console.log(employeeFirstName);
// let employeeName:string = 'Ehlullah Karakurt';
// let employeeDept:string = 'IT';
// //Pre-ES6
// let employeeDesc = employeeName + ' works in the ' + employeeDept + ' department.';
// //Post-ES6
// let employeeDesc2 = `${employeeName} works in the ${employeeDept} department.`;
// console.log(employeeDesc);
// console.log(employeeDesc2);
// let isPresent: boolean = false;
// console.log(isPresent);
// let firstNames: string[] = ['Ehlullah', 'Merve'];
// let lastNames: Array<string> = ['Karakurt', 'Karakurt'];
// console.log(firstNames);
// console.log(lastNames);
// let arr = [1,3,'Apple', 'Orange', 'Banana', true, false];
// let ids: Array<number>;
// ids = [23, 34, 100, 124, 44];
// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
// let fruits: Array<string>;
// fruits = ['Apple', 'Orange', 'Banana'];
// // console.log(fruits[1]);
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// let Id: number = 1;
// let firstName: string = "Ehlullah";
// let employee: [number, string] = [1, 'Ehlullah'];
// let user: [number, string, boolean, number, string];
// user = [1, 'Ehlullah', true, 100, 'Admin'];
// console.log(employee, user);
// let employee2: [number, string][] = [
//     [1, 'Ehlullah'],
//     [2, 'Merve'],
//     [3, 'Karakurt']
// ];
// console.log(employee2);
// type Person = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
//   isActive: boolean;
// };
// // let employee: object;
// let employee: Person;
// employee = {
//   id: 1,
//   firstName: "Ehlullah",
//   lastName: "Karakurt",
//   age: 29,
//   jobTitle: "Software Developer",
//   isActive: true,
// };
// let person: {
//   id: number;
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
//   isActive: boolean;
// };
// person = {
//   id: 1,
//   firstName: "Ehlullah",
//   lastName: "Karakurt",
//   age: 29,
//   jobTitle: "Software Developer",
//   isActive: true,
// };
// console.log(employee);
// console.log(employee.firstName);
// console.log(person);
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 0] = "Newspaper";
    Media[Media["Newsletter"] = 1] = "Newsletter";
    Media[Media["Magazine"] = 2] = "Magazine";
    Media[Media["Book"] = 3] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine); // 2
console.log(Media[3]); // Book
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Magazine);
console.log(PrintMedia['Newsletter']);
