const form = document.querySelector("#form");
const input = document.querySelector("#input");
const ol = document.querySelector("#ol");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    input.style.border = "1px solid red";
    return;
  }

  let list = document.createElement("p");
  let delTodo = document.createElement("button");

  let div = document.createElement("div");
  ol.appendChild(div);

  div.appendChild(list);
  div.appendChild(delTodo);

  list.innerText = input.value;
  delTodo.innerText = "Delete";

  //   delete Todo
  delTodo.onclick = () => {
    div.style.display = "none";
  };

  input.value = "";
});

input.addEventListener("focus", () => {
  input.style.border = "none";
});
