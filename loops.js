/* ===============================
   FOR LOOP
================================ */

for (let i = 0; i < 5; i += 1) {
  console.log("Hello, World!");
}

for (let i = 1; i <= 5; i += 1) {
  console.log(i);
}

/* ===============================
   WHILE LOOP
================================ */

let count = 1;
while (count <= 5) {
  console.log(count);
  count += 1;
}

/* ===============================
   DO...WHILE LOOP
================================ */

let number = 1;
do {
  console.log(number);
  number += 1;
} while (number <= 5);

/* ===============================
   FOR...IN LOOP
================================ */

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(key, person[key]);
}

/* ===============================
   FOR...OF LOOP
================================ */

const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

const word = "JavaScript";
for (const letter of word) {
  console.log(letter);
}

/* ===============================
   BREAK STATEMENT
================================ */

for (let i = 1; i <= 5; i += 1) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

/* ===============================
   CONTINUE STATEMENT
================================ */

for (let i = 1; i <= 5; i += 1) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
