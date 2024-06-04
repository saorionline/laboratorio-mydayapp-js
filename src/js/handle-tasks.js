console.log("handle-tasks.js loaded!");
/**
 * Edits the title and/or state of a task
 * @param {TaskInfo} newTaskInfo 
 * @param {number} taskId
 */
export function updateTask(newTaskInfo, taskId) {
    let tasks = getTasks();
 
    let indexToEdit = tasks.findIndex(task => task.id == taskId);
    if (typeof newTaskInfo.completed === "boolean") {
       tasks[indexToEdit].completed = newTaskInfo.completed;
    }
    if (newTaskInfo.title) {
       tasks[indexToEdit].title = newTaskInfo.title;
    }
 
    updateTasksList(tasks);
 }

// Render all tasks
function updateTasksList(updatedTasksList) {
    localStorage.setItem("mydayapp-js", JSON.stringify(updatedTasksList));
 }

export function addTask(task) {
    updateTasksList([...getTasks(), task]);
 }

export function getTasks() {
    /** @type {Array<Task>}*/
    let tasksList;
  
    // Checking if the tasks already exist in localstorage if not creating a new default list
    const stringTasks = localStorage.getItem("mydayapp-js")
    if (stringTasks != undefined) {
       tasksList = JSON.parse(stringTasks)
    } else {
  
       tasksList = [];
       localStorage.setItem("mydayapp-js", JSON.stringify([]));
    }
  
    return tasksList;
  }



