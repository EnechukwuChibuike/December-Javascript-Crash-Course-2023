// Introduction to the DOM (Document Object Model)
// Understanding the Document Object Model

// let document = {
//   head: {
//     title: {
//       innerText: "",
//     },
//   },
//   body: {
//     class: "",
//     id: "",
//     name: "",
//     innerText: "",
//     style: {},

//     h1: {
//       class: "",
//       id: "",
//       name: "",
//       innerText: "",
//       style: {},
//       span: {},
//     },
//     p: {},
//   },
// };

// document.body.style.background = "red";

// properties and methods

// get
//   getElementById
//   getElementByClassName
//   getElementByTagname
//   getElementByName

//  query
// querySelector
// querySelectorAll []

let query = document.querySelector("#para");
let queryClass = document.querySelector(".para");

const section = document.querySelectorAll(".sec");

for (const sec of section) {
  sec.innerText = "This is a section";
}

query.innerText = "This is a paragraph";
queryClass.innerText = "This is another paragraph";
