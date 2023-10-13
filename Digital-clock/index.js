const data = document.getElementById("data");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function updateClock() {
  let d = new Date();
  let mins = d.getMinutes();
  let hr = d.getHours();
  let secs = d.getSeconds();
  hour.innerHTML = `Hrs ${hr}`;
  min.innerHTML = `Mins ${mins}`;
  sec.innerHTML = `Secs ${secs}`;
  data.innerHTML = `Current Time : ${hr}:${mins}:${secs}`;
}
updateClock();

setInterval(updateClock, 1000);
