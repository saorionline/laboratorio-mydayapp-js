import { getStorage } from "./display-verification.js";
import { updateTotalTasks } from "./renew-html.js";

export const removeTask = (item) => {
    const items = getStorage();
    const newItems = items.filter((i) => i.id !== item.id);
    localStorage.setItem("mydayapp-js", JSON.stringify(newItems));
    if (newItems.length === 0) {
      hideContent();
    }
    updateTotalTasks(newItems);
    showClearButton(newItems);
  };

export const hideContent = () => {
    
    const mainElement = document.querySelector("#main");
    const footerElement = document.querySelector("#footer");
    if (mainElement) {
      mainElement.style.display = "none";
    }
    if (footerElement) {
      footerElement.style.display = "none";
    }
  
    document.removeEventListener("DOMContentLoaded", hideContent);
  };
  
export const showContent = () => {
    const mainElement = document.querySelector("#main");
    const footerElement = document.querySelector("#footer");
    if (mainElement) {
      mainElement.style.display = "flex";
    }
    if (footerElement) {
      footerElement.style.display = "block";
    }
  };
  
  
export const showClearButton = (items) => {
    const button = document.querySelector(".clear-completed");
    const completedItems = items.filter((e) => e.completed);
    if (completedItems.length > 0) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

