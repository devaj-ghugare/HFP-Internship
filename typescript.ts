/* ===============================
   TYPESCRIPT BASICS
================================ */

let username: string = "John";
let age: number = 30;
let isAdmin: boolean = true;
let value: any = "Can be anything";

const user: { name: string; age: number } = {
  name: "John",
  age: 30,
};

/* ===============================
   TYPE INFERENCE & EXPLICIT TYPES
================================ */

let inferredAge = 25;
let explicitAge: number = 25;

/* ===============================
   FUNCTIONS & RETURN TYPES
================================ */

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

/* ===============================
   TYPE ALIASES
================================ */

type User = {
  name: string;
  age: number;
};

const userOne: User = {
  name: "Alice",
  age: 22,
};

/* ===============================
   INTERFACES
================================ */

interface PersonInterface {
  name: string;
  age: number;
}

const personOne: PersonInterface = {
  name: "John",
  age: 30,
};

/* ===============================
   UNION & INTERSECTION TYPES
================================ */

let unionValue: string | number;
unionValue = "Hello";
unionValue = 42;

type Employee = { name: string; role: string };
type Manager = { name: string; department: string };
type TeamLead = Employee & Manager;

const lead: TeamLead = {
  name: "Sam",
  role: "Lead",
  department: "Engineering",
};

/* ===============================
   TUPLE & ENUM
================================ */

const tuplePerson: [string, number] = ["John", 25];

enum Role {
  Admin,
  User,
  Guest,
}

const userRole: Role = Role.User;

/* ===============================
   OPTIONAL & READONLY PROPERTIES
================================ */

type OptionalUser = {
  name: string;
  age?: number;
};

type ReadonlyUser = {
  readonly id: number;
  name: string;
};

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "Alice",
};

/* ===============================
   TYPE ASSERTIONS
================================ */

const input = document.querySelector("#username") as HTMLInputElement;

/* ===============================
   TYPE GUARDS
================================ */

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  }
}

/* ===============================
   GENERICS
================================ */

function identity<T>(value: T): T {
  return value;
}

const result = identity<number>(5);

/* ===============================
   UTILITY TYPES
================================ */

type PersonType = {
  name: string;
  age: number;
};

type PartialPerson = Partial<PersonType>;
type ReadonlyPerson = Readonly<PersonType>;
type PickPerson = Pick<PersonType, "name">;
type OmitPerson = Omit<PersonType, "age">;

/* ===============================
   KEYOF & LOOKUP TYPES
================================ */

type UserKeys = keyof PersonType;

/* ===============================
   MODULE SYSTEM
================================ */

export function sayHello(): string {
  return "Hello!";
}
