/**
 * Toggles the visibility of provided footer and clear completed button elements based on the `hasTodos` flag.
 *
 * @param {boolean} hasTodos - A flag indicating whether to-do items are present (true) or not (false).
 * @param {HTMLElement} footerElement (optional) - The DOM element representing the footer.
 * @param {HTMLElement} clearCompletedButtonElement (optional) - The DOM element representing the clear completed button.
   @param {HTMLElement} image 
*/
// Check for to-do items (replace with your actual logic)

export let hasTodos = false;
export const newTodoInput = document.getElementById('new-todo');
export const todoList = document.getElementById('todo-list');

export function toggleElements(hasTodos, image = document.querySelector('.img'), footerElement = document.querySelector('.footer'), clearCompletedButtonElement = document.querySelector('.clear-completed')) {
  // Set visibility based on the provided flag
  image.style.display = hasTodos ? 'none' : 'block';
  footerElement.style.display = hasTodos ? 'block' : 'none';
  clearCompletedButtonElement.style.display = hasTodos ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const newTodoInput = document.getElementById('new-todo');
  const todoList = document.getElementById('todo-list');
  addNewTodoItem(todoList, newTodoInput, hasTodos);

});

export function addNewTodoItem(todoListElement, newElement, hasTodos) {

  newElement.addEventListener('keydown', function(event) {
    // Check for Enter key press (keyCode 13)
    if (event.keyCode === 13) {
      // Get the user input
      const newTodoText = newElement.value.trim();

      if (newTodoText) {
        // Create a new text in console
        console.log("New todo item:", newTodoText);
        // Create a new todo item element
        const newTodoItem = document.createElement('div');
        newTodoItem.innerHTML = `<p>${newTodoText}</p>`;
        // Add the new item to the list
        todoListElement.appendChild(newTodoItem);
        // Clear the input field for the next entry
        newElement.value = '';
      }
    }
    if (todoListElement) {
      if (todoListElement.children.length > 0) {
        hasTodos = true;
      }
      toggleElements(hasTodos);
    }
  });

}


