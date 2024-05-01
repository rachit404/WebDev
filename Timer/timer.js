const time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let hr = 0,
  min = 0,
  sec = 0;
//   ms = 0;

function display() {
  let hour = hr < 10 ? "0" + hr : hr;
  let minute = min < 10 ? "0" + min : min;
  let second = sec < 10 ? "0" + sec : sec;
  //   let msecond = ms < 10 ? "00" + ms : ms;
  time.innerHTML = `${hour}:${minute}:${second}`;
}
let interval;
start.addEventListener("click", () => {
  interval = setInterval(function () {
    console.log(sec);
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      hr++;
    }
    if (hr === 24) {
      hr = min = sec = ms = 0;
    }
    display();
  }, 1000);
});
stop.addEventListener("click", () => clearInterval(interval));
reset.addEventListener("click", () => {
  hr = 0;
  min = 0;
  sec = 0;
  //   ms = 0;
  display();
});
