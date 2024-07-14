const TIME_DISPLAY = document.querySelector(".app__time");
const DATE_DISPLAY = document.querySelector(".app__date");

let fullDate = new Date();

let date = fullDate.toLocaleDateString(undefined, {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

DATE_DISPLAY.innerHTML = date;

export function setTime(){
  let fullTime = new Date();
  let time = fullTime.toLocaleTimeString();
  TIME_DISPLAY.innerHTML = time;
}


