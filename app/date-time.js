const TIME_DISPLAY = document.querySelector(".app__time");
const DATE_DISPLAY = document.querySelector(".app__date");

let fullDateTime = new Date();

function setDate() {
  let day = fullDateTime.getDay();
  let date = fullDateTime.getDate();
  let month = fullDateTime.getMonth() + 1;
  let year = fullDateTime.getFullYear();

  let dayName;
  let monthName;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  monthName = monthNames[month];
  dayName = dayNames[day];

  DATE_DISPLAY.innerHTML = `${dayName} ${date}th of ${monthName}, ${year} `;
}

function setTime() {
  let fullDateTime = new Date();
  let hours = fullDateTime.getHours();
  let minutes = fullDateTime.getMinutes();
  let seconds = fullDateTime.getSeconds();
  let ampm = "AM";

  if (hours >= 12) {
    ampm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  } else if (hours === 0) {
    hours = 12;
  }

  TIME_DISPLAY.innerHTML = `${hours}:${minutes} ${ampm}`;
}

setDate();
setTime();
setInterval(setTime, 1000);
