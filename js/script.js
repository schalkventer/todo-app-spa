// Header date:
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.querySelector(".myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//selectors
const todoInput = document.querySelector('.todo_input');
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list');
const filterOption = document.querySelector('.filter_todo');
//event listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteCheck)
filterOption.addEventListener("click", filterTodo)
//functions

function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //todo LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ""){
        return null
    }
    //check mark BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete_btn')
    todoDiv.appendChild(completedButton);

    //edit BUTTON
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-pen"></i>';
    editButton.classList.add('edit_btn')
    todoDiv.appendChild(editButton);
    
    //delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_btn')
    todoDiv.appendChild(deleteButton);

    //Append to Actual LIST
    todoList.appendChild(todoDiv);
    //Clear todo input VALUE
    todoInput.value = ""
}

//DELETE & CHECK
function deleteCheck(e) {
    const item = e.target;
    //DELETE ITEM
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    //COMPLETE ITEM
    if (item.classList[0] === "complete_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
    //EDIT ITEM
    if (item.classList[0] === "edit_btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}

//FILTERING THE TASKS ACCORDING THE OPTION
function filterTodo(e) {
    const todos = todoList.childNodes;
    for(let i = 1; i<todos.length; i++ ){
        switch (e.target.value) {
            case "all":
                todos[i].style.display = "flex";
                break;
            case "completed":
                if (todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todos[i].classList.contains('completedItem')) {
                    todos[i].style.display = "flex";
                } else {
                    todos[i].style.display = "none";
                }
                break;
        }
    }
} 