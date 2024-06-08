import { getStorage } from "./display-verification.js";
import { showClearButton } from "./handle-existance.js";

export const updateTask = (item) => {
    const items = getStorage();
    const newItems = items.map((i) => {
      if (i.id === item.id) {
        return {
          ...i,
          title: item.title,
          completed: item.completed,
        };
      } else {
        return i;
      }
    });
    localStorage.setItem("mydayapp-js", JSON.stringify(newItems));
    showClearButton(newItems);
  };
  
export const updateTotalTasks = (items) => {
    const fragment = document.createDocumentFragment();
    const strong = document.createElement("strong");
    strong.textContent = items.length;
    const fragmentText = document.createDocumentFragment();
    fragmentText.textContent = items.length === 1 ? " item left" : " items left";
    fragment.appendChild(strong);
    fragment.appendChild(fragmentText);
    const counter = document.querySelector(".todo-count");
    counter.innerHTML = "";
    counter.appendChild(fragment);
  };  