/* --TIME-- */

const clock = document.querySelector(".time-clock");
const calendar = document.querySelector(".time-date");

function updateTime() {
  const date = new Date();
  const calOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const clockOptions = {
    timeStyle: "short",
  };

  clock.textContent = date.toLocaleTimeString("et-EE", clockOptions);
  calendar.textContent = date.toLocaleDateString("en-GB", calOptions);
}

updateTime();
setInterval(updateTime, 5000);
