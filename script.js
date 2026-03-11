const taskInput = document.getElementById("task-name");
const addButton = document.getElementById("add-btn");
const tasksContainer = document.getElementById("tasks-container");

function addTask(){

const taskText = taskInput.value.trim();

if(taskText === ""){
alert("Введите задачу!");
return;
}

const newTask = document.createElement("p");

newTask.classList.add("task-item");

newTask.textContent = taskText;

tasksContainer.appendChild(newTask);

taskInput.value="";

}

addButton.addEventListener("click", addTask);