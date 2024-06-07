console.log("Fourth loaded!");

import { updateTask, updateCount } from "./second-update-tasks.js";
import { changeVisual, completedCount, checkTasks } from "./third-check-tasks.js";
/** Applies all the necessary event listeners for a task to be interactive
* @param {HTMLLIElement} taskElement
*/


// Add a new to do from the main app input
export function applyEvents(taskElement) {
    const taskId = taskElement.dataset.taskid;
 
    // Sub-elements
    const checkbox = taskElement.querySelector("input.toggle");
    const label = taskElement. querySelector("label");
    const textInput = taskElement.querySelector("input.edit");
    const destroyButton = taskElement.querySelector("button.destroy");
    
   
   // Event handlers
    const checkboxHandler = () => {
      const completed = checkbox.checked ? true : false; ;
      updateTask({completed}, taskId);
       if (checkbox.checked) {
         console.log("Handle Double Click!");

          changeVisual(taskElement,"completed");
          updateTask({completed: true}, taskId);
       } else {
          changeVisual(taskElement,"pending");
          updateTask({completed: false}, taskId);
       }
       updateCount();
    };
    //Edit
   const editHandler = (ev) => {
   const keyPressed = ev.key;
  
   if (keyPressed == "Enter") {
           const retrievedText = textInput.value.trim();
  
           updateTask({text: retrievedText}, taskId);
           label.innerText = retrievedText;
           textInput.value = retrievedText;
           taskElement.classList.remove("editing");
  
           textInput.removeEventListener("keydown", editHandler);
           ev.stopPropagation(); // Prevent bubbling up

        }
  
        if (keyPressed == "Escape") {
           textInput.value = label.innerText;
           taskElement.classList.remove("editing");
           textInput.removeEventListener("keydown", editHandler);
        }
     };    

//Label
const handleDoubleClick = (event) => {
   changeVisual(taskElement, "editing");

   textInput.focus();
   textInput.addEventListener("keydown", editHandler);
   event.stopPropagation(); // Prevent bubbling up

}


//Delete
const destroyToDo = (event) => {
    
   console.log("Delete clicked!")

   // removing all the event listeners of the task
    
    checkbox.removeEventListener("change", checkboxHandler);
    label.removeEventListener("dblclick", handleDoubleClick);
    destroyButton.removeEventListener("click", destroyToDo);
    event.stopPropagation(); // Prevent bubbling up

    // removing the task from the local storage list and the ui
    deleteTask(taskId);
    taskElement.remove();
    updateCount();
    checkTasks();
 };   
 

    // Event listeners
    checkbox.addEventListener("change", checkboxHandler);
    completedCount();
    checkTasks();
 }
