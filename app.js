//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Function
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Add todo to localStorage
    // saveLocalTodos(todoInput.value);
    //Check Mark Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append To List
    todoList.appendChild(todoDiv);
    //Clear Todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = (e.target);
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//
// function filterTodo(e) {
//     const todoS = todoList.childNodes;
//     todoS.forEach(function (todo) {
//         switch (e.target.value) {
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 if (todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 }
//                 else {
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "uncompleted":
//                 if(!todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 }
//                 else {
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }

//
// function saveLocalTodos(todo) {
//     //Check --- Hey do I already have thing in there?
//     let todoS;
//     if (localStorage.getItem('todoS') === null) {
//         todoS = [];
//     }
//     else {
//         todoS = JSON.parse(localStorage.getItem('todoS'));
//     }
//     todoS.push(todo);
//     localStorage.setItem('todoS', JSON.stringify('todoS'));
// }