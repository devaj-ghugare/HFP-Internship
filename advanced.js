/* ===============================
   ASYNCHRONOUS JAVASCRIPT
================================ */

setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  console.log(counter);
  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);

/* ===============================
   PROMISES & ASYNC / AWAIT
================================ */

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();

/* ===============================
   ERROR HANDLING
================================ */

try {
  const result = undefinedVariable;
  console.log(result);
} catch (error) {
  console.log(error.message);
}

/* ===============================
   LOCAL STORAGE
================================ */

localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));

/* ===============================
   CLOSURES
================================ */

function outerFunction() {
  let count = 0;

  return function innerFunction() {
    count += 1;
    console.log(count);
  };
}

const increment = outerFunction();
increment();
increment();

/* ===============================
   HOISTING
================================ */

console.log(hoistedValue);
var hoistedValue = 10;

/* ===============================
   PROTOTYPE & INHERITANCE
================================ */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function greet() {
  console.log(`Hello, ${this.name}`);
};

const john = new Person("John");
john.greet();

/* ===============================
   EVENT LOOP & CALL STACK
================================ */

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 0);

console.log("End");
