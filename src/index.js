import "./css/base.css";
import "./css/card.css";

import { TodoList } from './js/utils.js'; // Import the TodoList class

document.addEventListener('DOMContentLoaded', async () => {
  const newTodoInput = document.getElementById('new-todo');
  const todoList = document.getElementById('todo-list');

  const todoListInstance = new TodoList(todoList); // Create a TodoList instance

  newTodoInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
      const newTodoText = newTodoInput.value.trim();
      await todoListInstance.addTodo(newTodoText);
      newTodoInput.value = ''; // Clear input after adding
    }
  });

  newTodoInput.addEventListener('keyup', () => {
    if (newTodoInput.value) {
      // Clear the placeholder text once the user starts typing
      newTodoInput.placeholder = '';
      const messageDiv = document.getElementById('error-message');
    if (messageDiv) {
      messageDiv.textContent = ''; // Clear the error message
    }
    } else {
      // Restore the placeholder text if the input is empty again
      newTodoInput.placeholder = 'Add a new To Do';
    }
  });
});
