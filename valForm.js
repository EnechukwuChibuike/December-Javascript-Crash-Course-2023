const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const age = document.querySelector("#age");

function isNumber(value) {
  return /\d/.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNumber(nameInput.value) || nameInput.value === "") {
    alert("Invalid name");
  } else if (age.value < 18 || age.value === "") {
    alert("Invalid age");
  } else {
    alert("Welcome to my page");
  }
});
