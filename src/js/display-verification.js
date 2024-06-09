import { hideContent, noTaskImage, showClearButton } from "./handle-existance.js";
import { updateTotalTasks } from "./renew-html.js";
import { renderItems } from "./render-html.js";



export const checkItems = () => {
  
    const items = getStorage();
    if (!items || items.length === 0) {
      document.addEventListener("DOMContentLoaded", () => {
        checkItems();
      });
      showClearButton(items || []);
    } else {
      renderItems(items);
      
      updateTotalTasks(items);
      showClearButton(items);
    }
  };

export const getStorage = () => {
    const items = localStorage.getItem("mydayapp-js");
    return items ? JSON.parse(items) : null;
  };

export const filterTasks = (type) => {
    const storage = localStorage.getItem("mydayapp-js");
    const items = storage ? JSON.parse(storage) : [];
    let filterItems = items;
    if (type === "pending") {
      filterItems = items.filter((item) => !item.completed);
    } else if (type === "completed") {
      filterItems = items.filter((item) => item.completed);
    }
    const list = document.querySelector(".todo-list");
    if (list) {
      list.innerHTML = "";
    }
    renderItems(filterItems);

    updateTotalTasks(filterItems);
  };  

export const clearTasks = () => {
    const storage = localStorage.getItem("mydayapp-js");
    const items = storage ? JSON.parse(storage) : [];
    const incompleteItems = items.filter((item) => !item.completed);
    localStorage.setItem("mydayapp-js", JSON.stringify(incompleteItems));
    const list = document.querySelector(".todo-list");
    if (list) {
      list.innerHTML = "";
    }
    if (incompleteItems.length === 0) {
      hideContent();
    } else {
      renderItems(incompleteItems);
    }
    updateTotalTasks(incompleteItems);
    showClearButton([]);
};  