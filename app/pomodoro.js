const DISPLAY_TIME = document.querySelector(".pomodoro__time");
const START_BTN = document.querySelector("#pomodoro-start-btn");
const PAUSE_BTN = document.querySelector("#pomodoro-pause-btn");
const RESET_BTN = document.querySelector("#pomodoro-reset-btn");
const COMPLETE_BTN = document.querySelector("#pomodoro-complete-btn");

const BAR_FOCUS1 = document.querySelector("#pomodoro__focus1");
const BAR_FOCUS2 = document.querySelector("#pomodoro__focus2");
const BAR_FOCUS3 = document.querySelector("#pomodoro__focus3");
const BAR_FOCUS4 = document.querySelector("#pomodoro__focus4");

const BAR_SHORT_REST1 = document.querySelector("#pomodoro__shortrest1");
const BAR_SHORT_REST2 = document.querySelector("#pomodoro__shortrest2");
const BAR_SHORT_REST3 = document.querySelector("#pomodoro__shortrest3");

const BAR_LONG_REST = document.querySelector("#pomodoro__longrest");

const DISPLAY_SETS = document.querySelector(".pomodoro__sets");

let endSOund = new Audio("../assets/audio/pomodoro-end.flac");

let focus = 25;
let shortrest = 5;
let longrest = 15;

let time = focus;
let seconds = 0;

let clock = null;
let cycle = 0;
let set = 1;

DISPLAY_SETS.textContent = set;

DISPLAY_TIME.innerHTML = `${time}:${seconds}0`;

START_BTN.addEventListener("click", startPomodoro);
PAUSE_BTN.addEventListener("click", pausePomodoro);
RESET_BTN.addEventListener("click", resetPomodoro);

function startPomodoro() {
  BAR_FOCUS1.classList.add("focus");
  clearInterval(clock);
  clock = setInterval(countSeconds, 1000);
}

function pausePomodoro() {
  clearInterval(clock);
}

function resetPomodoro() {
  clearInterval(clock);
  time = focus;
  seconds = 0;
  DISPLAY_TIME.innerHTML = `${time}:${seconds}0`;
  resetprogressBar();
}

function countSeconds() {
  if (seconds == 0) {
    if (time == 0) {
      clearInterval(clock);
      cycle++;
      if (cycle == 1) {
        BAR_SHORT_REST1.classList.add("shortrest");
        time = shortrest;
        endSOund.play();
      } else if (cycle == 2) {
        BAR_FOCUS2.classList.add("focus");
        time = focus;
        endSOund.play();
      } else if (cycle == 3) {
        BAR_SHORT_REST2.classList.add("shortrest");
        time = shortrest;
        endSOund.play();
      } else if (cycle == 4) {
        BAR_FOCUS3.classList.add("focus");
        time = focus;
        endSOund.play();
      } else if (cycle == 5) {
        BAR_SHORT_REST3.classList.add("shortrest");
        time = shortrest;
        endSOund.play();
      } else if (cycle == 6) {
        BAR_FOCUS4.classList.add("focus");
        time = focus;
        endSOund.play();
      } else if (cycle == 7) {
        BAR_LONG_REST.classList.add("longrest");
        time = longrest;
        endSOund.play();
      } else {
        resetprogressBar();
        time = focus;
        set++;
        endSOund.play();
        cycle = 0;
        DISPLAY_SETS.textContent = set;
      }
    } else {
      time--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  DISPLAY_TIME.innerHTML = `${time < 10 ? "0" : ""}${time}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function resetprogressBar() {
  BAR_FOCUS1.classList.remove("focus");
  BAR_FOCUS2.classList.remove("focus");
  BAR_FOCUS3.classList.remove("focus");
  BAR_FOCUS4.classList.remove("focus");

  BAR_SHORT_REST1.classList.remove("shortrest");
  BAR_SHORT_REST2.classList.remove("shortrest");
  BAR_SHORT_REST3.classList.remove("shortrest");

  BAR_LONG_REST.classList.remove("longrest");
}
