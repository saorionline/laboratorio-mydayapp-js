import { updateTask } from "./renew-html.js";
import { removeTask } from "./handle-existance.js";

export const renderItem = (item, fragment) => {
    

    const newListItem = document.createElement("li");
    if (item.completed !== "") {
      newListItem.className = "completed";
    }
  
    const newListDiv = document.createElement("div");
    newListDiv.className = "view";
  
    const newListCheckBox = document.createElement("input");
    newListCheckBox.className = "toggle";
    newListCheckBox.type = "checkbox";
    newListCheckBox.checked = item.completed;
    newListCheckBox.onclick = () => {
      item.completed = !item.completed;
      newListCheckBox.checked = item.completed;
      if (item.completed) {
        newListItem.className = "completed";
      } else {
        newListItem.className = "";
      }
      updateTask(item);
    };
  
    const newListItemLabel = document.createElement("label");
    newListItemLabel.textContent = item.title;
    newListItemLabel.addEventListener("dblclick", () => {
      const editingItem = document.querySelector("li.editing");
      if (editingItem) {
        editingItem.classList.remove("editing");
      }
      newListItem.className = "editing";
      const elementsToHide = document.querySelectorAll(
        ".todo-list li:not(.editing)"
      );
      elementsToHide.forEach((e) => (e.style.display = "none"));
      newEditInput.focus();
    });
  
    const destroyItemButton = document.createElement("button");
    destroyItemButton.className = "destroy";
    destroyItemButton.onclick = () => {
      removeTask(item);
      newListItem.remove();
    };
  
    newListDiv.appendChild(newListCheckBox);
    newListDiv.appendChild(newListItemLabel);
    newListDiv.appendChild(destroyItemButton);

    const newEditInput = document.createElement("input");
    newEditInput.className = "edit";
    newEditInput.value = item.title;
    newEditInput.addEventListener("keyup", (event) => {
      if (event.key === "Escape" || event.key === "Enter") {
        if (event.key === "Escape") {
          newListItem.className = "";
        } else if (event.key === "Enter") {
          if (event.target.value) {
            item.title = event.target.value.trim();
            updateTask(item);
            newListItemLabel.textContent = item.title;
          }
          const editingElement = document.querySelector(".editing");
          if (item.completed) {
            editingElement.className = "completed";
          } else {
            editingElement.className = "";
          }
        }
        const elementsToShow = document.querySelectorAll(".todo-list li");
        elementsToShow.forEach((e) => (e.style.display = "block"));
      }
    });
  
    newListItem.appendChild(newListDiv);
    newListItem.appendChild(newEditInput);
  
    fragment.appendChild(newListItem);
  
    return fragment;
  };

export const renderItems = (items) => {
    const container = document.querySelector(".todo-list");
    const fragment = document.createDocumentFragment();
  
    for (const item of items) {
      renderItem(item, fragment);
    }
  
    container.appendChild(fragment);
};
  