const TODO_WRITE = document.querySelector(".todo__write");
const TODO_ADD = document.querySelector(".todo__add");
const TODO_LIST = document.querySelector(".todo__list");
const TODO_CLOSE = document.querySelector(".todo__close");
const TODO_CHECK = document.querySelector(".todo__check");

function formatNewTask(newTask) {
  // Formatting new task
  const TODO_LI = document.createElement("li");
  TODO_LI.classList.add("todo__task");

  const TODO_CLOSE = document.createElement("button");
  TODO_CLOSE.classList.add("todo__close");
  TODO_CLOSE.textContent = "❌";

  const TODO_TEXT = document.createElement("p");
  TODO_TEXT.classList.add("todo__text");
  TODO_TEXT.textContent = newTask;

  const TODO_CHECK = document.createElement("button");
  TODO_CHECK.classList.add("todo__check");
  TODO_CHECK.textContent = "✅";

  // Close event
  TODO_CLOSE.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  // Check event
  TODO_CHECK.addEventListener("click", (e) => {
    let parentElement = e.target.parentNode;
    let textElement = parentElement.querySelector(".todo__text");
    textElement.classList.toggle("todo__check--checked");
  });

  // Display task
  TODO_LI.append(TODO_CLOSE, TODO_TEXT, TODO_CHECK);
  TODO_LIST.appendChild(TODO_LI);
}

TODO_ADD.addEventListener("click", () => {
  formatNewTask(TODO_WRITE.value);
  TODO_WRITE.value = "";
  TODO_WRITE.focus()  ;
});

TODO_WRITE.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    formatNewTask(TODO_WRITE.value);
    TODO_WRITE.value = "";
  }
});
