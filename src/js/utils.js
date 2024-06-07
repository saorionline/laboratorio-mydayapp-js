import { updateTasksList } from "./second-update-tasks.js";


export function getTasks() {
  /** @type {Array<Task>}*/
  let tasks;

  // Checking if the tasks already exist in localstorage if not creating a new default list
  const stringTasks = localStorage.getItem("mydayapp-js")
  if (stringTasks != undefined) {
    tasks = JSON.parse(stringTasks)
  } else {
    tasks = [];
     localStorage.setItem("mydayapp-js", JSON.stringify([]));
  }

  return tasks;
}

// Render a single task
export function renderTask(task) { //task
  const textBox = document.querySelector('.todo-list'); //taskContainer

  let textHTML = `
    <li class="${task.completed ? "completed" :""}" 
    data-taskid=${task.id}
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
  const tasks = getTasks() //tasksList
  const textBox = document.querySelector(".todo-list");

  textBox.innerHTML = "";
  tasks.forEach(task => {
    renderTask(task)
  });
}
/**
 * Hides an element using its class or id
 * @param {string} elementSelector 
 */
export function hideElement(elementSelector) {
  let elementToHide = document.querySelector(elementSelector);
  elementToHide.classList.add("hidden");
}

/**
* Shows a hidden element using its class or id
*/
export function showElement(elementSelector) {
  let elementToShow = document.querySelector(elementSelector);
  elementToShow.classList.remove("hidden");
}


  /**
 * Deletes a task by id
 * @param {number} deleteTaskId 
 */
  export function deleteTask(deleteTaskId) {
    let tasks = getTasks();
 
    let listWithDeleted = tasks.filter(task => task.id != deleteTaskId);
 
    updateTasksList(listWithDeleted);
 }
 
 /**
  * Deletes all the tasks completed
  */
 export function deleteAllTasks() {
    let tasks = getTasks();
 
    let pendingTasksList = tasks.filter(task => task.completed != true);
 
    updateTasksList(pendingTasksList);
 }

