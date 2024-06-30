const NOTES_ADD = document.querySelector(".notes__add");
const NOTES_LIST = document.querySelector(".notes__list");

let notesArray = JSON.parse(localStorage.getItem("notesNames")) || [];
let notesCounter = localStorage.getItem("notesCounter") || 0;

backUpNotes();

NOTES_ADD.addEventListener("click", addNewNote);

function addNewNote() {
  let noteID = `note-${notesCounter}`;
  notesCounter++;
  notesArray.push(noteID);
  localStorage.setItem("notesNames", JSON.stringify(notesArray));
  localStorage.setItem("notesCounter", notesCounter);

  let noteContainer = document.createElement("li");
  noteContainer.classList.add("notes__note");

  let noteDeleteBtn = document.createElement("button");
  noteDeleteBtn.classList.add("notes__delete");
  noteDeleteBtn.textContent = "❌";
  noteDeleteBtn.setAttribute("tabindex", "-1");

  let noteText = document.createElement("p");
  noteText.classList.add("notes__text");
  noteText.id = noteID;
  noteText.setAttribute("contenteditable", "true");

  noteContainer.append(noteDeleteBtn, noteText);
  NOTES_LIST.appendChild(noteContainer);

  // Delete btn
  noteDeleteBtn.addEventListener("click", (e) => {
    deleteNotes(e.target.parentNode, noteID);
  });

  // Save DB
  noteText.addEventListener("input", (e) => {
    localStorage.setItem(noteID, e.target.textContent); // Almacenar texto directamente
  });

  noteText.focus();
}

function backUpNotes() {
  notesArray.forEach((element) => {
    addNewBackUpNote(element);
  });
}

function addNewBackUpNote(noteName) {
  let noteContainer = document.createElement("li");
  noteContainer.classList.add("notes__note");

  let noteDeleteBtn = document.createElement("button");
  noteDeleteBtn.classList.add("notes__delete");
  noteDeleteBtn.textContent = "❌";
  noteDeleteBtn.setAttribute("tabindex", "-1");

  let noteText = document.createElement("p");
  noteText.classList.add("notes__text");
  noteText.id = noteName;
  noteText.setAttribute("contenteditable", "true");

  noteContainer.append(noteDeleteBtn, noteText);
  NOTES_LIST.appendChild(noteContainer);

  noteDeleteBtn.addEventListener("click", (e) => {
    deleteNotes(e.target.parentNode, noteName);
  });

  noteText.textContent = localStorage.getItem(noteName); // Recuperar texto directamente

  // Save DB
  noteText.addEventListener("input", (e) => {
    localStorage.setItem(noteName, e.target.textContent); // Almacenar texto directamente
  });
}

function deleteNotes(ParentNode, noteID) {
  notesArray = notesArray.filter((element) => element !== noteID);
  localStorage.setItem("notesNames", JSON.stringify(notesArray));
  localStorage.removeItem(noteID);
  ParentNode.remove();
}
