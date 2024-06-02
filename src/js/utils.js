export class TodoList {
  constructor(element) {
    this.element = element;
    this.hasTodos = false; // Initial state

    // Cache DOM elements for efficiency
    this.image = document.querySelector('.img');
    this.footerElement = document.querySelector('.footer');
    this.clearCompletedButtonElement = document.querySelector('.clear-completed');

    this.updateVisibility(); // Initial visibility update
  }

  async addTodo(text) {
    console.log("New todo item:", text);
    if (!text) return; // Handle empty text

    const newTodoItem = document.createElement('li');
    newTodoItem.classList.add('pending');

    const innerHTML = `
      <div class="view">
        <input class="toggle" type="checkbox" checked/>
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}" /> `;

    // Set the inner HTML content of the li element (asynchronous)
    await this.element.appendChild(newTodoItem);

    newTodoItem.innerHTML = innerHTML;
    this.hasTodos = this.element.children.length > 0;
    this.updateVisibility();
  }

  updateVisibility() {
    this.image.style.display = this.hasTodos ? 'none' : 'block';
    this.footerElement.style.display = this.hasTodos ? 'block' : 'none';
    this.clearCompletedButtonElement.style.display = this.hasTodos ? 'block' : 'none';
  }
}

