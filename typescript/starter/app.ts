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

// for(let i = 0; i < 3; i++){
//     console.log(i);
// }

// let arr = [10, 20, 30, 40, 50];

// for(let item of arr){
//     console.log(item);
// }

// let str = 'Hello World';

// for(let char in arr){
//     console.log(char);
// }

// let counter = 10;

// while (counter < 5) {
//   console.log(counter);
//   counter++;

//   if (counter == 3) {
//     break;
//   }
// }

// do {
//   console.log(counter);
//   counter++;
// } while (counter < 5);

// function add(a: number, b: number): number {
//   return a + b;
// }

// let sum = add(10, 20);
// console.log(sum);

// function write() {
//   console.log("Hello World");
//   return 35;
// }

// let parameter = write();
// console.log(parameter);

// function combine(name: string, surname: string = 'Karakurt'): string {
//   return name + ' ' + surname;
// }

// let fullName = combine('Ehlullah', 'Kara');
// console.log(fullName);

// function multiply(a: number, b: number, c?: number): number {
//   console.log(typeof c);
//   if (typeof c !== "undefined") {
//     return a * b * c;
//   }
//   return a * b;
// }

// let result = multiply(2, 3);
// console.log(result);

// function multiply2(a: number, b: number): number {
//   return a * b;
// }

// let multiply2 = (a: number, b: number): number => {
//   return a * b;
// }; // arrow function

// let result2 = multiply2(2, 3);
// console.log(result2);

// let write = (): void => {
//   console.log("Hello World");
// };

// // let write = (): void => console.log("Hello World");

// write();

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// function add(a: any, b: any): any {
//   return a + b;
// }

// // let sum = add("Hello", " World");
// let sum = add(4, 5);
// console.log(sum);

// function sum(a: string, ...numbers: number[]): number {
//   console.log(a);
//   let result = 0;
//   numbers.forEach((num) => {
//     result += num;
//   });
//   return result;
// }

// let result = sum('Ehlullah', 2, 3, 4, 5);
// console.log(result);

// function combine(message: string, ...names: string[]): string {
//   return message + ' ' + names.join(', ');
// }

// let combined = combine('Hello', 'Ehlullah', 'Merve', 'Karakurt');
// console.log(combined);

class Person {
  readonly id: number;
  private firstName: string;
  private lastName: string;
  protected age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Employee extends Person {
  constructor(id: number, firstName: string, lastName: string, age: number) {
    super(id, firstName, lastName, age);
  }
}

let employee = new Employee(1, "Ehlullah", "Karakurt", 29);
console.log(employee);
console.log(employee.getFullName());

// let personInfo = new Person(29, "Ehlullah", "Karakurt", 29);
// personInfo.id = 100;
// console.log(personInfo.id);

// console.log(personInfo.getFullName());
