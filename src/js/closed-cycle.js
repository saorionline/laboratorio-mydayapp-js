console.log("Last Stage loaded!");
import { getTasks, renderTask, renderAllTasks, deleteAllTasks } from "./utils.js"
import { filterReady, updateTasksList, updateCount } from "./second-update-tasks.js";
import { completedCount, checkTasks } from "./third-check-tasks.js";
import { applyEvents } from "./fourth-apply-events.js"

/**
 * Applies all the necessary event listeners for a task to be interactive
 * @param {HTMLLIElement} taskElement
 */

// Assigns events to To Dos
export function loadAllToDos() {
    const taskElements = document.querySelectorAll(".todo-list li");
    taskElements.forEach(taskElement => applyEvents(taskElement));
}
    
     
/**
 * Adds a new task to the local storage list
 * @param {Task} task 
 */
export function addTask(task) {
    updateTasksList([...getTasks(), task]);
 }

// Letting the user compensate the mistake
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
      }, 400); // Set a delay of 200 milliseconds (adjust as needed)

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
        
        const newTaskElement = document.querySelector(`[data-taskid="${newId}"]`)
        applyEvents(newTaskElement);

        inputElement.value = "";
        updateCount();
        checkTasks();

      }
    });
  }

  export function loadFilter() {
    window.addEventListener("hashchange", () => {
       filterReady();
    });
 }

 export function loadClearDone() {
    const clearButton = document.querySelector(".clear-completed");
 
    clearButton.addEventListener("click", () => {
       deleteAllTasks();
       renderAllTasks();
       loadAllToDos();
       checkTasks();
       completedCount();
    })
 }