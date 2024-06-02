import "./css/base.css";
import "./css/card.css";

import { TodoList } from './js/utils.js'; // Import the TodoList class

document.addEventListener('DOMContentLoaded', async () => {
  const newTodoInput = document.getElementById('new-todo');
  const todoList = document.getElementById('todo-list');

  const todoListInstance = new TodoList(todoList); // Create a TodoList instance

  newTodoInput.addEventListener('keydown', async (event) => {
    if (event.keyCode === 13) {
      const newTodoText = newTodoInput.value.trim();
      await todoListInstance.addTodo(newTodoText);
      newTodoInput.value = ''; // Clear input after adding
    }
  });
});