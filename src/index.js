import "./css/base.css";
import "./css/card.css";

import { toggleElements } from './js/utils';
import { addNewTodoItem } from './js/utils'; // Assuming your utils.js is in a js subfolder

// Get the todo list and new todo input elements
// const todoList = document.getElementById('.todo-list');
// const newTodoInput = document.getElementById('new-todo');


// Check for to-do items (replace with your actual logic)
const hasTodos = document.querySelector('.todo-list').textContent.trim() !== ''; // Assuming your to-do items are in a `.todo-list` element

// Call the toggleElements function with the appropriate flag
toggleElements(hasTodos);
/* // Call the imported function
addNewTodoItem(todoList, newTodoInput); */
