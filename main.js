import { setTime } from "./modules/date-time.js";
import {
  backupTasks,
  formatNewTask,
  TODO_WRITE,
  TODO_ADD,
} from "./modules/todo.js";
import { backUpNotes, addNewNote, NOTES_ADD } from "./modules/notes.js";
import {
  startPomodoro,
  pausePomodoro,
  resetPomodoro,
  START_BTN,
  PAUSE_BTN,
  RESET_BTN,
} from "./modules/pomodoro.js";
import { weatherAPI } from "./modules/weather.js";

// Date and Time
setTime();
setInterval(setTime, 1000);

// TODO
TODO_ADD.onclick = function () {
  if (TODO_WRITE.value != "") {
    formatNewTask(TODO_WRITE.value);
    TODO_WRITE.value = "";
    TODO_WRITE.focus();
  }
};

TODO_WRITE.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    formatNewTask(TODO_WRITE.value);
    TODO_WRITE.value = "";
  }
});

backupTasks();

// Calendar
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
  });
  calendar.render();
});

// Notes
backUpNotes();
NOTES_ADD.addEventListener("click", addNewNote);

// Pomodoro
START_BTN.addEventListener("click", startPomodoro);
PAUSE_BTN.addEventListener("click", pausePomodoro);
RESET_BTN.addEventListener("click", resetPomodoro);

// Weather
weatherAPI();
