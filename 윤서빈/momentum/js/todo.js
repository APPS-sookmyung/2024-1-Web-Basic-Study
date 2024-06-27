const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let ToDos = [];

function saveToDos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(ToDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  const cleanToDos = ToDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  ToDos = cleanToDos;
  saveToDos();
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.Text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button, addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    Text: newTodo,
    id: Date.now(),
  };
  ToDos.push(newTodoObj);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
  console.log("this is the turn of", item);
}

const savesToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
