/* ===============================
   FUNCTION DECLARATION
================================ */

function square(number) {
  return number * number;
}

console.log(square(4));
console.log(square(6));
console.log(square(8));

/* ===============================
   FUNCTION WITH MULTIPLE PARAMETERS
================================ */

function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4));

/* ===============================
   FUNCTION EXPRESSION
================================ */

const divide = function divideNumbers(a, b) {
  return a / b;
};

console.log(divide(10, 2));

/* ===============================
   ARROW FUNCTION
================================ */

const add = (a, b) => a + b;
console.log(add(5, 7));

/* ===============================
   IIFE
================================ */

(function executeImmediately() {
  console.log("IIFE executed!");
}());

/* ===============================
   DEFAULT PARAMETERS
================================ */

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet();
greet("Alex");

/* ===============================
   REST PARAMETERS
================================ */

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(2, 4, 6, 8));

/* ===============================
   CLOSURES
================================ */

function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    console.log(count);
  };
}

const incrementCounter = createCounter();
incrementCounter();
incrementCounter();

/* ===============================
   CALLBACK FUNCTION
================================ */

function processUserInput(name, callback) {
  console.log(`Processing user: ${name}`);
  callback();
}

function displayMessage() {
  console.log("User processed successfully!");
}

processUserInput("John", displayMessage);

/* ===============================
   HIGHER-ORDER FUNCTION
================================ */

function multiplyBy(factor) {
  return function applyMultiplier(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5));
