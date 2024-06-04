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
       tasks.completed = newTaskInfo.completed;
    }
 
    updateTasksList(tasks);
 }

// Render all tasks
function updateTasksList(updatedList) {
    localStorage.setItem("mydayapp-js", JSON.stringify(updatedList));
 }

export function addTask(task) {
    updateTasksList([...getTasks(), task]);
 }

export function getTasks() {
    /** @type {Array<Task>}*/
    let todosList;
  
    // Checking if the tasks already exist in localstorage if not creating a new default list
    const stringTasks = localStorage.getItem("mydayapp-js")
    if (stringTasks != undefined) {
       todosList = JSON.parse(stringTasks)
    } else {
  
       todosList = [];
       localStorage.setItem("mydayapp-js", JSON.stringify([]));
    }
  
    return todosList;
  }



