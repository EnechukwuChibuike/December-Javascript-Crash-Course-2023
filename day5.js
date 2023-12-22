// Introduction to Events

// Events

// click
// mouseover
// mouseout
// mouseleave
// keydown
// keyup
// submit
// focus

// Event Handlers - function

function clickme() {
  console.log("clicked");
}

// html attribute - on<event>

// dom property - on<event>

const text = document.querySelector("#h1");
const btn = document.querySelector("#btn");

btn.onclick = function () {
  text.innerText = "Dom property";
  console.log("Clicked!");
};

// Event Listeners
const text2 = document.querySelector("#h2");
const btn2 = document.querySelector("#btn2");

function clickEvent() {
  text2.innerText = "Event Listener";
  console.log("Clicked!");
}

btn2.addEventListener("click", clickEvent);
