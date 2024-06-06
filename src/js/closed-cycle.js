console.log("Last Stage Check loaded!");

import { filterReady, updateTask, updateTasksList } from "./second-update-tasks.js";
import { changeVisual, completedCount, checkTasks } from "./third-check-tasks.js";
import { getTasks, renderTask } from "./utils.js"



// Add a new to do from the main app input
export function applyTaskEvents(taskElement) {
    const taskId = taskElement.dataset.taskid;
 
    const checkbox = taskElement.querySelector("input.toggle");
 
    // Event handlers
    const checkboxHandler = _ => {

       if (checkbox.checked) {
          changeVisual(taskElement,"completed");//changeVisualTaskState
          updateTask({completed: true}, taskId);
       } else {
          changeVisual(taskElement,"pending");
          updateTask({completed: false}, taskId);
       }
 
    }
 
    // Event listeners
    checkbox.addEventListener("change", checkboxHandler);
    completedCount();
    checkTasks();
 }

// Assigns events to To Dos
export function loadAllToDos() {
    const taskElements = document.querySelectorAll(".todo-list li");
    taskElements.forEach(taskElement => applyTaskEvents(taskElement));
}
    
     
/**
 * Adds a new task to the local storage list
 * @param {Task} task 
 */
export function addTask(task) {
    updateTasksList([...getTasks(), task]);
 }

export function loadNewTask(){
    const inputElement = document.querySelector(".new-todo");
  
    inputElement.addEventListener("keydown", ev => {
      const retrievedText = inputElement.value.trim(); //trimmedTitle replace with retrievedText
      if (ev.key === "Enter" && retrievedText != "") {
        const todosList = getTasks();
        // Assign id to the to do
        const newId = todosList.length == 0 ? 0 : todosList[todosList.length -1].id + 1;
        const newTask = {
          id: newId,
          text: retrievedText, //title replaced with text,
          completed: false
        };
        addTask(newTask);
        renderTask(newTask);
  
        const newTaskElement = document.querySelector(`[data-taskid="${newId}"]`)
        applyTaskEvents(newTaskElement);
      }
    });
  }

  export function loadFilter() {
    window.addEventListener("hashchange", _ => {
       filterReady();
    });
 }

 export function loadClearDone() {
    const clearButton = document.querySelector(".clear-completed");
 
    clearButton.addEventListener("click", () => {
       deleteAllCompletedTasks();
       renderAllTasks();
       loadAllToDos();
       checkTasks();
       checkCompleted();
    })
 }