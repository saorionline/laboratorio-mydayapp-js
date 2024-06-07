console.log("Second Stage Update loaded!");

import { getTasks } from "./utils.js"
// This file handles the persistance in localStorage

/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} text
 * @property {boolean} completed
*/

/**
 * @typedef {Object} TaskInfo
 * @property {string} [text]
 * @property {boolean} [completed]
*/

export function updateCount() {
   let pendingTasksCount = document.querySelectorAll('[data-task-state="pending"]').length;
   let countPending = document.querySelectorAll('[data-task-state="pending"]').length;

   const counterElement = document.querySelector(".todo-count");
   counterElement.innerHTML = "";
   if (pendingTasksCount == 1) {
      counterElement.innerHTML = `<strong>${countPending}</strong> item left`
   } else {
      counterElement.innerHTML = `<strong>${countPending}</strong> items left`
   }
}
// Render all tasks
export function updateTasksList(updatedList) {
   localStorage.setItem("mydayapp-js", JSON.stringify(updatedList));
}
/**
 * Updates the entire tasks list in localStorage
 * @param {Array<Task>} updatedList 
 */
/** Edits the title and/or state of a task
*  @param {TaskInfo} newInfo 
*  @param {number} taskId
*/
export function updateTask(newInfo, taskId) { //newTaskInfo
   let updateList = getTasks(); //tasks

   let getUpdate = updateList.findIndex(task => task.id == taskId); //indexToEdit
   if (typeof newInfo.completed === "boolean") {
      updateList[getUpdate].completed = newInfo.completed;
   }
   if (newInfo.text) {
      updateList[getUpdate].text = newInfo.text;
   }   

   updateTasksList(updateList);
}


export function filterTasks(filter) {
   const allTaskElements = document.querySelectorAll(".todo-list li");
   const completedTaskElements = document.querySelectorAll('[data-task-state="completed"]');
   const pendingTaskElements = document.querySelectorAll('[data-task-state="pending"]');

   const filterButtons = document.querySelectorAll(".filters li a");
   filterButtons.forEach(button => button.classList.remove("selected"));

   switch (filter) {
      case "all":
         allTaskElements.forEach(taskElement => taskElement.classList.remove("hidden"));

         document.querySelector('[href="#/"]').classList.add("selected");
         break;
      case "pending":
         pendingTaskElements.forEach(taskElement => taskElement.classList.remove("hidden"));
         completedTaskElements.forEach(taskElement => taskElement.classList.add("hidden"));

         document.querySelector('[href="#/pending"]').classList.add("selected");
         break;
      case "completed":
         pendingTaskElements.forEach(taskElement => taskElement.classList.add("hidden"));
         completedTaskElements.forEach(taskElement => taskElement.classList.remove("hidden"));

         document.querySelector('[href="#/completed"]').classList.add("selected");
         break;
      default:
         break;
   }
}
export function filterReady() { //check filter applied
   let filter = window.location.hash;
   console.log("filter: ", filter);
   if (filter == "#/" || filter == "") {
      filter = "all"
   } else {
      filter = filter.replace("#/","");
   }

   filterTasks(filter);
}
