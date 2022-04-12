/*----------Header date----------*/
const CURRENT_DATE = new Date();
const DAY = currentDate.getDate();
const MONTH_AS_NUMBER = currentDate.getMonth() + 1;
const YEAR = currentDate.getFullYear();

const PADDED_DAY = DAY.toString().padStart(2, '0')
const PADDED_MONTH = MONTH_AS_NUMBER.toString().padStart(2, '0')
const DATE_STRING = `${DAY.padStart(2, '0')}/${MONTH_AS_NUMBER}/${YEAR}`

const elements = {
  date: document.querySelector('#date'),
  modal: document.querySelector("#myModal"),
  button: document.querySelector(".myBtn"),
  span: document.querySelector(".close");
}

/*
 * Sets initial date on load
 */

elements.date.innerHTML = DATE_STRING

elements.button.addEventListener('click', () => {
  elements.modal.classList.add('block');
})

elements.span.addEventListener('click', () => {
  elements.modal.classList.add('block');
})

body.addEventListener('click', () => {
  elements.modal.classList.add('block');
})

//window close modal function
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*----------Form----------*/
//variables
const taskInput = document.querySelector(".taskInput");
const dueInput = document.querySelector(".dueInput");
const todoButton = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");

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
  taskTodo.classList.add("todoItem");
  todoDiv.appendChild(taskTodo);
  if (taskInput.value === "") {
    return null;
  }

  //due date and time li
  const dueTodo = document.createElement("li");
  dueTodo.innerText = dueInput.value;
  dueTodo.classList.add("todoItem");
  todoDiv.appendChild(dueTodo);
  if (dueInput.value === "") {
    return null;
  }

  //complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML =
    '<i class="fas fa-check" alt="complete icon"></i>';
  completedButton.classList.add("completeBtn");
  todoDiv.appendChild(completedButton);

  //edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-pen" alt="edit icon"></i>';
  editButton.classList.add("editBtn");
  todoDiv.appendChild(editButton);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash" alt="delete icon"></i>';
  deleteButton.classList.add("deleteBtn");
  todoDiv.appendChild(deleteButton);

  //append to list
  todoList.appendChild(todoDiv);

  //Clear input values
  taskInput.value = "";
  dueInput.value = "";
}

//check, edit and delete function
function deleteCheck(e) {
  const item = e.target;
  //delete item
  if (item.classList[0] === "deleteBtn") {
    const todo = item.parentElement;
    //delete animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //check item off
  if (item.classList[0] === "completeBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completedItem");
  }

  //edit existing item
  if (item.classList[0] === "editBtn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
    modal.style.display = "block";
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
      case "alphabetize":
        todos[i].style.display = "flex";
        break;
    }
  }
}
