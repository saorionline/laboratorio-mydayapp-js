import { renderItem } from "./render-html.js";
import { updateTotalTasks } from "./renew-html.js";
import { getStorage } from "./display-verification.js";
import { showContent, showClearButton } from "./handle-existance.js";

export const sayHello = (text) => {
  return text;
};

export const addTask = (value) => {
  const items = getStorage();
  const container = document.querySelector(".todo-list");
  const fragment = document.createDocumentFragment();
  const newItem = {
    id: "task1",
    title: value,
    completed: false,
  }; // Pending optimize not generating an Empty Task by default
  renderItem(newItem, fragment);
  container.appendChild(fragment);
  if (!items || items.length === 0) {
    localStorage.setItem("mydayapp-js", JSON.stringify([newItem]));
    showContent();
    updateTotalTasks([newItem]);
    showClearButton([newItem]);
  } else {
    newItem.id = `task${items.length + 1}`;
    localStorage.setItem("mydayapp-js", JSON.stringify([...items, newItem]));
    updateTotalTasks([...items, newItem]);
    showClearButton([...items, newItem]);
  }
};


