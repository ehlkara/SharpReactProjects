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
// enum Media {
//   Newspaper,
//   Newsletter,
//   Magazine,
//   Book,
// }
// console.log(Media.Magazine); // 2
// console.log(Media[3]); // Book
// enum PrintMedia {
//   Newspaper = "NEWSPAPER",
//   Newsletter = "NEWSLETTER",
//   Magazine = "MAGAZINE",
//   Book = "BOOK",
// }
// console.log(PrintMedia.Magazine);
// console.log(PrintMedia['Newsletter']);
// let code : string | Number | boolean;
// code = 123;
// code = 'ABC';
// code = true;
// console.log(code);
// let someThing : any = "Hello";
// someThing = 23;
// someThing = true;
// someThing = {name: 'Ehlullah', age: 29};
// someThing = ['Apple', 'Orange', 'Banana'];
// console.log(someThing);
// let arr: any[] = ['Apple', 2, 'Orange', 3, 4, 'Banana', true, false];
// console.log(arr);
// function sayHello(): void {
//   console.log("Hello World");
// }
// sayHello();
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// throwError('This is an error');
// let someThing: void = undefined;
// let nothing: never;
// let count = 0;
// console.log(typeof count);
// // function increment(counter: number) {
// //     count++;
// // }
// function increment(counter: number): number {
//   return count++;
// }
// increment(count);
// console.log(count);
// // let a = "some text";
// // let b = 123;
// // a = b;
// function sum(a: number, b: number): number {
//   return a + b;
// }
// let result: number = sum(10, 20);
// console.log(result);
// let code: any = 123;
// let empCode = <number>code;
// console.log(typeof (code));
// interface Employee {
//   name: string;
//   code: number;
// }
// let employee = <Employee>{};
// console.log(typeof employee);
// employee.name = "Ehlullah";
// console.log(employee);
// let x: number = 20;
// let y: number = 20;
// // if (x > y) {
// //   console.log("x is greater than y");
// // } else if (x < y) {
// //   console.log("y is greater than x");
// // } else {
// //   console.log("x is equal to y");
// // }
// x > y ? console.log("x is greater than y") : console.log("y is greater than x or x is equal to y");
// let day: number = 25;
// switch (day) {
//   case 0:
//     console.log("Monday");
//     break;
//   case 1:
//     console.log("Tuesday");
//     break;
//   case 2:
//     console.log("Wednesday");
//     break;
//   case 3:
//     console.log("Thursday");
//     break;
//   case 4:
//     console.log("Friday");
//     break;
//   case 5:
//     console.log("Saturday");
//     break;
//   case 6:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("There is no such day.");
//     break;
// }
for (var i = 0; i < 3; i++) {
    console.log(i);
}
var arr = [10, 20, 30, 40, 50];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
var str = 'Hello World';
for (var char in arr) {
    console.log(char);
}
