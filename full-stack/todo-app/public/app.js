
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
console.log("Welcome to todo application")

let todos = []; // Initialization of an empty array

const savedTodos = localStorage.getItem("todos");
console.log(typeof savedTodos); // string
console.log(savedTodos)

if(savedTodos){
    todos = JSON.parse(savedTodos);
    renderTodos()
}

todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Button is clicked!")
    const newTodoText = todoInput.value.trim();
    if(newTodoText === ""){
        alert("Please enter a task!")
        return;
    }

    todos.push(newTodoText);

    //todo: update, parse the existing todos, and spread them and add the new one
    localStorage.setItem("todos", JSON.stringify(todos))

    todoInput.value = "";
})

function renderTodos(){
    todoList.inneHTML = "";

    for(let index = 0; index < todos.length; index++){
        const newListItem = document.createElement("li");
        newListItem.textContent = todos[index];
        todoList.appendChild(newListItem);
    }
}

