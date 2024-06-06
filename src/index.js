import "./css/base.css";
import "./css/card.css";

import { 
  renderAllTasks, 
} from './js/utils.js';

import { 
  updateCount, 
  filterReady,
}
from "./js/second-update-tasks.js";

import { 
  checkTasks,
  completedCount, 
}
from "./js/third-check-tasks.js";

import {
  loadAllToDos,
  loadNewTask,
  loadFilter,
  loadClearDone,
}
from "./js/closed-cycle.js";

function init() {
  //Render the current tasks
  renderAllTasks();
  // Updating the pending tasks counter
  updateCount();
  // Checking if any filter should be applied when the application loads
  filterReady();
  // Checking if there are tasks available in order to show the footer
  checkTasks();
  // Checking if there are completed tasks in order to show the "clear completed" button
  completedCount();  

  // Starting event listeners 
  loadAllToDos();
  loadNewTask();
  loadFilter();
  loadClearDone();
}
init();
 

function clearLocalStorage() {
  localStorage.removeItem("mydayapp-js");
}

// Call the function whenever you want to reset the tasks
clearLocalStorage();