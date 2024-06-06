const NOTES_ADD = document.querySelector(".notes__add");
const NOTES_LIST = document.querySelector(".notes__list");

NOTES_ADD.addEventListener("click", addNewNote);

function addNewNote() {
  let noteContainer = document.createElement("li");
  noteContainer.classList.add("notes__note");

  let noteDeleteBtn = document.createElement("button");
  noteDeleteBtn.classList.add("notes__delete");
  noteDeleteBtn.textContent = "❌";
  noteDeleteBtn.setAttribute("tabindex", "-1");

  let noteText = document.createElement("p");
  noteText.classList.add("notes__text");
  noteText.setAttribute("contenteditable", "true");

  noteContainer.append(noteDeleteBtn, noteText);
  NOTES_LIST.appendChild(noteContainer);

  noteDeleteBtn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });

  noteText.focus();
}
