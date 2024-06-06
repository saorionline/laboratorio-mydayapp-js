import { updateTasksList } from "./second-update-tasks.js";


export function getTasks() {
  /** @type {Array<Task>}*/
  let todosList;

  // Checking if the tasks already exist in localstorage if not creating a new default list
  const stringTasks = localStorage.getItem("mydayapp-js")
  if (stringTasks != undefined) {
    todosList = JSON.parse(stringTasks)
  } else {
    todosList = [];
     localStorage.setItem("mydayapp-js", JSON.stringify([]));
  }

  return todosList;
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
  const todosList = getTasks() //tasksList
  const textBox = document.querySelector(".todo-list");

  textBox.innerHTML = "";
  todosList.forEach(task => {
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
    let todosList = getTasks();
 
    let listWithDeleted = todosList.filter(task => task.id != deleteTaskId);
 
    updateTasksList(listWithDeleted);
 }
 
 /**
  * Deletes all the tasks completed
  */
 export function deleteAllCompletedTasks() {
    let todosList = getTasks();
 
    let pendingTasksList = todosList.filter(task => task.completed != true);
 
    updateTasksList(pendingTasksList);
 }

