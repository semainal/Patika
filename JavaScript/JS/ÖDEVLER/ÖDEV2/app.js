// Element seçme

const taskDOM = document.querySelector("#task");
const BtnDOM = document.querySelector("#liveToastBtn");
const listDOM = document.querySelector("#list");
const li = document.querySelector("list li")
const addAlert = document.querySelector("#liveToast");


// event listeners
BtnDOM.addEventListener("click", addList);
document.addEventListener("DOMContentLoaded", displayLocalStorage());


// functions
function addList() {
  if(taskDOM.value) {
    createList(taskDOM.value)
    setLocalSrorage(taskDOM.value)
    taskDOM.value = "";
  } else {
    $(".error").toast("show")
  }
}

function createList(todo) {
  const liDOM = document.createElement("li");
  liDOM.innerHTML = todo;
  listDOM.appendChild(liDOM);

  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.textContent = "\u00D7";
  liDOM.append(closeBtn);

  closeBtn.onclick = removeList;
  $(".success").toast("show");
  liDOM.onclick = finishToDo;
}


function removeList() {
  this.parentElement.remove();
  deleteLocalStorage(this.previousSibling.textContent)
}

function finishToDo() {
  this.classList.toggle("checked");
}


function getLocalStorage() {
  let todo;
  if(localStorage.getItem("todos") === null) {
    todo = [];
  } else {
    todo = JSON.parse(localStorage.getItem("todos"))
  }
  return todo;
}

function displayLocalStorage() {
  const todos = getLocalStorage()
  todos.forEach(todo => {
    createList(todo);
  });
}

function setLocalSrorage(todo) {
  let todos = getLocalStorage();
  todos.push(todo)
  localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteLocalStorage(text) {
  let todos = getLocalStorage()
  todos.forEach((todo,index) => {
    if(todo === text) {
      todos.splice(index, 1)
    }
  })

  localStorage.setItem("todos",JSON.stringify(todos))
}