import "./css/base.css";
import "./css/card.css";

import { 
  renderAllTasks, 
  initAllToDos, 
  initNewTask 
} from './js/utils.js';

import { 
  updateTask, 
}
from './js/handle-tasks.js';

import { 
  changeVisual,
  checkState,
  checkCompleted, 
}
from './js/manage-check.js';

function init() {
  //Render the current tasks
  renderAllTasks();

  // Starting event listeners 
  initNewTask();

  initAllToDos();
}
init();
 

function clearLocalStorage() {
  localStorage.removeItem("mydayapp-js");
}

// Call the function whenever you want to reset the tasks
clearLocalStorage();