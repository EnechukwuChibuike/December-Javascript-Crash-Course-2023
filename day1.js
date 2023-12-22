// basic syntax

// variables

// let / const variableName = data;

let name = "Josh";

const constantName = "Ada";

name = "Obi";

console.log(constantName);

// data types

// String

// a single quote

let single = "single quote";

// a double quote

let double = "double quote";

// a backTick

let backTick = `backtick`;

console.log(typeof single);
console.log(typeof double);
console.log(typeof backTick);

// Number

// whole number - integers

let num = 100;

// decimal - float

let floatingNum = 10.1;

console.log(typeof num);
console.log(typeof floatingNum);

// Boolean

// true | false

let bool = true;

let boo = false;

console.log(typeof bool);
console.log(typeof boo);

// Undefined

let notAssigned;

console.log(typeof notAssigned);

// Null

let empty = null;

console.log(typeof empty);

// Object
let obj = {
  name: "Obi",
  age: 20,
};

// Symbol

let symbol = Symbol();
let newSym = Symbol();

console.log(symbol === newSym);
let objs = {
  symbol,
};
