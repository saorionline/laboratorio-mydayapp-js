import "./css/base.css";
import "./css/card.css";

import { toggleElements } from "./js/utils";
import { addNewTodoItem } from './js/utils'; // Assuming your utils.js is in a js subfolder
import { todoList, newTodoInput } from './js/utils';
toggleElements();
// Call the imported function
addNewTodoItem(todoList, newTodoInput);
