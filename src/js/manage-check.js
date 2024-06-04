console.log("manage-check.js loaded!");
import { updateTask } from "./handle-tasks.js"

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
    checkCompleted();
    checkState();
 }

 export function changeVisual(taskElement, newState){
   if( newState != "pending") {
      taskElement.classList.add(newState);
   }
   taskElement.dataset.taskState = newState;
   checkCompleted();
 }
 export function checkCompleted(){
   const completedToDos = document.querySelector(".todo-list li.completed").length;
   if (completedToDos == 0) {
      hideElement(".clear-completed");
   } else {
      showElement(".clear-completed");
   }
 }

 export function checkState(){
   //let pendingTasksCount = document.querySelectorAll('[data-task-state="pending"]').length;
      let tasksCount = document.querySelectorAll(".todo-list li").length;
   
      if (tasksCount == 0) {
         hideElement(".main");
         hideElement(".footer");
      } else {
         showElement(".main");
         showElement(".footer");
      }
   }
 