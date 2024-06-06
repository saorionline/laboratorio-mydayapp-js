console.log("Last Stage Check loaded!");

import { filterReady, updateTask, updateTasksList } from "./second-update-tasks.js";
import { changeVisual, completedCount, checkTasks } from "./third-check-tasks.js";
import { getTasks, renderTask, renderAllTasks, deleteAllCompletedTasks } from "./utils.js"



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

// Letting the user compensate the issue
function clearWarningMessage() {
   const messageDiv = document.getElementById('error-message');
   if (messageDiv) {
     messageDiv.textContent = "";
   }
 }

export function loadNewTask(){
    const inputElement = document.querySelector(".new-todo");

    let timeoutId = null; // Variable to store the timeout reference
   
    inputElement.addEventListener("keyup", () => {
      clearTimeout(timeoutId); // Clear any previous timeout
      timeoutId = setTimeout(() => {
         clearWarningMessage(); // Call the function to clear the message
      }, 500); // Set a delay of 200 milliseconds (adjust as needed)

    });

    inputElement.addEventListener("keydown", ev => {
 
      const retrievedText = inputElement.value.trim(); //trimmedTitle replace with retrievedText
      if (retrievedText === ""){
         console.warn("Please enter a todo item.");
         const messageDiv = document.getElementById('error-message');
         if (messageDiv) {
           messageDiv.textContent = "Please enter a todo item";
         }
      } else if (ev.key === "Enter") {
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
        inputElement.value = "";
        const newTaskElement = document.querySelector(`[data-taskid="${newId}"]`)
        applyTaskEvents(newTaskElement);

        inputElement.value = "";

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
       completedCount();
    })
 }