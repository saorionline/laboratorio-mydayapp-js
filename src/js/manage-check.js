console.log("manage-check.js loaded!");
import { updateTask } from "./handle-tasks.js"

export function applyTaskEvents(taskElement) {
    const taskId = taskElement.dataset.taskid;
 
    // Sub-elements
    const checkbox = taskElement.querySelector("input.toggle");
    const label = taskElement. querySelector("label");
    /* const textInput = taskElement.querySelector("input.edit");
    const destroyButton = taskElement.querySelector("button.destroy"); */
 
    // Event handlers
    const checkboxChangeHandler = _ => {
       if (checkbox.checked) {
          changeVisualTaskState(taskElement, "completed");
          updateTask({completed: true}, taskId);
       } else {
          changeVisualTaskState(taskElement, "pending");
          updateTask({completed: false}, taskId);
       }
 
    //    updateTasksCounter();
    }
 
    /* const editKeyPressHandler = ev => {
       const keyPressed = ev.key;
 
       if (keyPressed == "Enter") {
          const trimmedTitle = textInput.value.trim();
 
          updateTask({title: trimmedTitle}, taskId);
          label.innerText = trimmedTitle;
          textInput.value = trimmedTitle;
          taskElement.classList.remove("editing");
 
          textInput.removeEventListener("keydown", editKeyPressHandler);
       }
 
       if (keyPressed == "Escape") {
          textInput.value = label.innerText;
          taskElement.classList.remove("editing");
          textInput.removeEventListener("keydown", editKeyPressHandler);
       }
    }
 
    const labelDblClickHandler = _ => {
       changeVisualTaskState(taskElement, "editing");
 
       textInput.focus();
       textInput.addEventListener("keydown", editKeyPressHandler);
    }
 
    const destroyTaskHandler = _ => {
       // removing all the event listeners of the task
       checkbox.removeEventListener("change", checkboxChangeHandler);
       label.removeEventListener("dblclick", labelDblClickHandler);
       destroyButton.removeEventListener("click", destroyTaskHandler);
 
       // removing the task from the local storage list and the ui
       deleteTask(taskId);
       taskElement.remove();
       updateTasksCounter();
       checkTasksCount();
    }
  */
    // Event listeners
    checkbox.addEventListener("change", checkboxChangeHandler);
/*     label.addEventListener("dblclick", labelDblClickHandler);
    destroyButton.addEventListener("click", destroyTaskHandler); */
 }