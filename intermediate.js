/* ===============================
   ARRAYS
================================ */

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]);

/* ===============================
   OBJECTS
================================ */

const person = {
  name: "John",
  age: 30,
};

console.log(person.name);

/* ===============================
   ARRAY METHODS
================================ */

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((num) => num * num);
console.log(squared);

const filtered = numbers.filter((num) => num > 2);
console.log(filtered);

const reduced = numbers.reduce((total, num) => total + num, 0);
console.log(reduced);

numbers.forEach((num) => {
  console.log(num);
});

/* ===============================
   STRING METHODS
================================ */

const text = " Hello World ";

const trimmed = text.trim();
console.log(trimmed);

const splitText = trimmed.split(" ");
console.log(splitText);

const joinedText = splitText.join("-");
console.log(joinedText);

const replacedText = trimmed.replace("World", "JavaScript");
console.log(replacedText);

const substringText = trimmed.substring(0, 5);
console.log(substringText);

/* ===============================
   DOM MANIPULATION
================================ */

const element = document.getElementById("myElement");
if (element) {
  element.innerHTML = "Hello!";
}

/* ===============================
   EVENT HANDLING
================================ */

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", () => {
    alert("Button clicked!");
  });
}

/* ===============================
   ES6 FEATURES
================================ */

const name = "Alex";
console.log(`Hello, ${name}!`);

const values = [10, 20];
const [a, b] = values;
console.log(a);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
