// operators

// 2 operands - binary operation

// 2 + 2

// 1 operand - unary operation

// 2--

console.log(2 + 2);
console.log(2 / 2);
console.log(2 * 2);
console.log(2 - 2);
console.log(5 % 3);
console.log(2 + 2);

let num = 2;
// increment(++)
num++;
console.log(num);

// decrement(--)
num--;
console.log(num);

// logical operators

let num2 = 2;

// OR(||)

console.log(num === 2 || num2 === 5);

// AND(&&)

console.log(num === 2 && num2 === 2);

// NOT(!)

console.log(num !== 2);

// comparison operators
//   "=" - assignment
//   "==" - equal to
console.log(num == num2);
//   "===" - equal type and equal value
console.log(num === num2);
//   ">" - greater than
console.log(num > num2);
//   "<" - less than
console.log(num < num2);
//   "!==" - not equal to
console.log(num != num2);

console.log(
  "-----------------------------------------------------------------------------"
);

// switch

const day = "Friday";

switch (day) {
  case "Monday":
    console.log("Today is " + day);
    break;
  case "Tuesday":
    console.log("Today is " + day);
    break;
  case "Wednesday":
    console.log("Today is " + day);
    break;
  case "Thursday":
    console.log("Today is " + day);
    break;
  case "Friday":
    console.log("Today is " + day);
    break;
  case "Saturday":
    console.log("Today is " + day);
    break;
  case "Sunday":
    console.log("Today is " + day);
    break;
  default:
    console.log("Day does not exist!");
    break;
}

// conditional statements

// if statement

if (day === "Monday") {
  console.log("Day is " + day);
} else if (day === "Tuesday") {
  console.log("Day is " + day);
} else {
  console.log("Day is another day");
}

// Ternary operator
let checkDay = day === "Monday" ? "hi" : day === "Tuesday" ? "hee" : "haa";

console.log(checkDay);

console.log(
  "-------------------------------------------------------------------------------------"
);

// loops

let number = 0;
// do while

// do {
//   console.log(number);
//   number++;
// } while (number < 10);

// while

// while (number < 10) {
//   if (number === 5) break;
//   number++;
//   console.log(number);
// }

// while (number < 10) {
//   number++;
//   console.log(number);
//   if (number === 5) continue;
// }

// for loop

for (let number = 0; number <= 10; number++) {
  if (number % 2 !== 0) continue;
  console.log(number);
}

// break and continue
