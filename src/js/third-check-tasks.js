console.log("Third Stage Check loaded!");

import { hideElement, showElement } from "./utils.js"


 export function checkTasks(){ //chechTasksCount
      let tasksCount = document.querySelectorAll(".todo-list li").length;
   
      if (tasksCount == 0) {
         hideElement(".main");
         hideElement(".footer");
      } else {
         showElement(".main");
         showElement(".footer");
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
   completedCount(); //checkCompletedTasksCount
}
