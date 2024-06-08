import "./css/base.css";
import "./css/card.css";

import {
  sayHello,
  addTask,
} from "./js/utils";

import {
  checkItems,
  clearTasks,
  filterTasks,
} from "./js/display-verification.js";

const myElement = document.getElementById('card'); // Replace with actual ID
myElement.style.display = 'flex';
myElement.style.flexDirection = 'column';

// Additional styles
myElement.style.width = '326px';
myElement.style.height = 'auto';
myElement.style.padding = '10px';
myElement.style.borderRadius = '20px';
myElement.style.border = '0.5px solid rgba(255, 255, 255, 0.20)';
myElement.style.background = 'rgba(55, 55, 117, 0.60)';
myElement.style.boxShadow = '0px 50px 100px 0px rgba(31, 31, 71, 0.30)';
myElement.style.justifyContent = 'end';
console.log(sayHello("Hello"));


const imageBox = document.getElementsByClassName('container todoapp-wrapper')[0];
if (imageBox) { // Check if element exists
  // Create the image element
  const newImage = document.createElement('img');
  newImage.className = "img"; // Add the class
  newImage.src = "assets/images/notasks.png"; // Set image source
  newImage.alt = "No tasks"; // Set alt text for accessibility

  // Append the image to the container element
  imageBox.appendChild(newImage);
} else {
  console.error("Element with classes 'container todoapp-wrapper' not found");
}

document.onload = checkItems();

const input = document.querySelector(".new-todo");

if (input) {
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value) {
        addTask(event.target.value.trim());
        input.value = "";
      }
    }
  });
}

const cleanButton = document.querySelector(".clear-completed");

if (cleanButton) {
  cleanButton.addEventListener("click", () => {
    clearTasks();
  });
}

const filterButtons = document.querySelectorAll(".filters li a");

filterButtons.forEach((button) => {
  const type = button.getAttribute("href").substring(2);
  button.addEventListener("click", () => {
    if (!button.classList.contains("selected")) {
      const activeButton = document.querySelector(".selected");
      if (activeButton) {
        activeButton.className = "";
      }
      button.className = "selected";
      filterTasks(type);
    }
  });
});

window.addEventListener("hashchange", function () {
  const hash = window.location.hash || "#/"; // Obtener el fragmento de la URL
  const type = hash.substring(2);
  const activeButton = document.querySelector(".selected");
  if (activeButton) {
    activeButton.className = "";
  }
  const link = document.querySelector(`a[href="${hash}"]`);
  link.className = "selected";
  filterTasks(type);
  // Aquí puedes poner tu lógica para manejar el cambio de ruta
  console.log("La ruta ha cambiado a", hash);
});

function clearLocalStorage() {
  localStorage.removeItem("mydayapp-js");
}

// Call the function whenever you want to reset the tasks
clearLocalStorage();