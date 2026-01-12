/* ===============================
   PRIMITIVE DATA TYPES
================================ */

const numberValue = 25;
const decimalValue = 99.99;

const fullName = "John Doe";
const greetingMessage = "Hello, world!";
const templateMessage = `My name is ${fullName}`;

const isJavaScriptFun = true;
const isRaining = false;

let uninitializedValue;
console.log(uninitializedValue);

const emptyValue = null;
console.log(emptyValue);

const uniqueSymbolOne = Symbol("id");
const uniqueSymbolTwo = Symbol("id");
console.log(uniqueSymbolOne === uniqueSymbolTwo);

const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

/* ===============================
   NON-PRIMITIVE DATA TYPES
================================ */

const person = {
  name: "John",
  age: 25,
};

person.age = 30;
console.log(person.age);

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]);

/* ===============================
   DATE & REGULAR EXPRESSION
================================ */

const today = new Date();
console.log(today);

const pattern = /hello/i;
console.log(pattern.test("Hello World"));

/* ===============================
   OPERATORS
================================ */

const a = 10;
const b = 5;

console.log(a + b);
console.log(a === b);
console.log(a > 5 && b < 10);
