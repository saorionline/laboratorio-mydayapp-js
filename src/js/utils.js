import { addTask, getTasks } from "./handle-tasks.js";
import { applyTaskEvents } from "./manage-check.js";


// Add a new to do from the main app input

export function initNewTaskInputListener(){
  const inputElement = document.querySelector(".new-todo");

  inputElement.addEventListener("keydown", ev => {
    const retrievedText = inputElement.value.trim(); //trimmedTitle replace with retrievedText
    if (ev.key === "Enter" && retrievedText != "") {
      const tasks = getTasks();
      // Assign id to the to do
      const newId = tasks.length == 0 ? 0 : tasks[tasks.length -1].id + 1;
      const newTask = {
        id: newId,
        text: retrievedText, //title replaced with text,
        completed: false
      };
      addTask(newTask);
      renderTask(newTask);

      const newTaskElement = document.querySelector(`[data-task-id="${newId}"]`)
      applyTaskEvents(newTaskElement);
    }
  });
}
    // Assigns events to To Dos
    export function initAllTasksEvents() {
      const taskElements = document.querySelectorAll(".todo-list li");

      taskElements.forEach(taskElement => applyTaskEvents(taskElement));
    }
// Render a single task
function renderTask(task) { //task
  const textBox = document.querySelector('.todo-list'); //taskContainer

  let textHTML = `
    <li class="${task.completed ? "completed" :""}" 
    data-task-id=${task.id}
    data-task-state="${task.completed === false ? "pending": "completed"}">
      <div class="view">
        <input class="toggle" type="checkbox" ${task.completed ? "checked":""}>
        <label>${task.text}</label>
        <button class="destroy"></button>
      </diV> 
      <input class="edit" value="${task.text}" /> 
    </li>
  `
  textBox.insertAdjacentHTML("beforeend", textHTML);

}
// Render all tasks

export function renderAllTasks(){
  const textList = getTasks() 
  const textBox = document.querySelector(".todo-list");

  textBox.innerHTML = "";
  textList.forEach(task => {
    renderTask(task)
  });
}



