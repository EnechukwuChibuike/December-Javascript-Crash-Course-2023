// Functions are main building blocks of a language.

// reusable

// block of code

// specific task

// declaration

function displayName(name) {
  console.log(name);
}

displayName("Chibuike");
displayName("Prince");
displayName("Walter");
displayName("Josh");
// expression

let displayAge = function (age) {
  console.log(age);
};

displayAge(100);

// arrow function

const displayGender = (gender) => {
  console.log(gender);
  let sum = 1 + 1;
  console.log(sum);
};

displayGender("male");
displayGender("female");

// parameters

// return statements - specifies the value that the function will return and then stops the function

function showName(name) {
  return "Hello " + name;
}

console.log(showName("Obi"));

function sum(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

sum(30);
