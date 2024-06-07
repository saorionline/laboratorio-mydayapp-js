console.log("Third Stage Check loaded!");

import { filterReady } from "./second-update-tasks.js";
import { hideElement, showElement } from "./utils.js"


export function checkTasks(){ //chechTasksCount
      let tasksCount = document.querySelectorAll(".todo-list li").length;
   
      if (tasksCount == 0) {
         hideElement(".main");
         hideElement(".footer");
         showElement(".img");
      } else {
         showElement(".main");
         showElement(".footer");
         hideElement(".img");
      }
   }

export function completedCount() { //checkCompletedTasksCount
      const completedToDos = document.querySelectorAll(".todo-list li.completed").length;
   
      if (completedToDos == 0) {
         hideElement("button.clear-completed");
      } else {
         showElement("button.clear-completed");
      }
   }

export function changeVisual(taskElement, newStatus){
   if (newStatus != "editing") {
      // Removing the previous class
      taskElement.classList.remove("completed");
   }

   if( newStatus != "pending") {
      taskElement.classList.add(newStatus);
   }
   taskElement.dataset.taskState = newStatus;
   filterReady();
   completedCount(); 
}
