import "./css/base.css";
import "./css/card.css";

import { 
  renderAllTasks, 
  initAllTasksEvents, 
  initNewTaskInputListener 
} from './js/utils.js';



function init() {
  //Render the current tasks
  renderAllTasks();
  // Starting event listeners 
  initNewTaskInputListener();

  initAllTasksEvents();
}
init();
 

function clearLocalStorage() {
  localStorage.removeItem("mydayapp-js");
}

// Call the function whenever you want to reset the tasks
clearLocalStorage();