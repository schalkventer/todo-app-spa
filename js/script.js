/*----------Header date----------*/
n = new Date();
d = n.getDate();
m = n.getMonth() + 1;
y = n.getFullYear();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

/*----------Modal----------*/
//variables
let modal = document.getElementById("myModal");
let btn = document.querySelector(".myBtn");
let span = document.getElementsByClassName("close")[0];

//functions
//display modal function
btn.onclick = function () {
  modal.style.display = "block";
};

//close modal function
span.onclick = function () {
  modal.style.display = "none";
};

//window close modal function
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*----------Form----------*/
//variables
const taskInput = document.querySelector(".task_input");
const dueInput = document.querySelector(".due_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector(".filter_todo");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions
//todo container function
function addTodo(event) {
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //task name li
  const taskTodo = document.createElement("li");
  taskTodo.innerText = taskInput.value;
  taskTodo.classList.add("todo_item");
  todoDiv.appendChild(taskTodo);
  if (taskInput.value === "") {
    return null;
  }

  //due date and time li
  const dueTodo = document.createElement("li");
  dueTodo.innerText = dueInput.value;
  dueTodo.classList.add("todo_item");
  todoDiv.appendChild(dueTodo);
  if (dueInput.value === "") {
    return null;
  }

  //complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete_btn");
  todoDiv.appendChild(completedButton);

  //edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-pen"></i>';
  editButton.classList.add("edit_btn");
  todoDiv.appendChild(editButton);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete_btn");
  todoDiv.appendChild(deleteButton);

  //append to list
  todoList.appendChild(todoDiv);

  //Clear input values
  taskInput.value = "";
  dueInput.value = "";

  // console.log(todoDiv)
}
console.log(document.getElementsByClassName("todo"))

//check, edit and delete function
function deleteCheck(e) {
  const item = e.target;
  //delete item
  if (item.classList[0] === "delete_btn") {
    const todo = item.parentElement;
    //delete animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check item off
  if (item.classList[0] === "complete_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }

  //edit existing item
  if (item.classList[0] === "edit_btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }
}

//task filtering function
function filterTodo(e) {
  const todos = todoList.childNodes;
  for (let i = 1; i < todos.length; i++) {
    switch (e.target.value) {
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if (todos[i].classList.contains("completedItem")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todos[i].classList.contains("completedItem")) {
          todos[i].style.display = "flex";
        } else {
          todos[i].style.display = "none";
        }
        break;
    }
  }
}

// console.log(todoList.childNodes);