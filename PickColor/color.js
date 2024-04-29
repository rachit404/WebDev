const hex = "0123456789ABCDEF";
const randomColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * 16);
    color += hex[n];
  }
  return color;
};
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

let interval;
start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      const color = document.querySelector(".color");
      newColor = randomColor();
      color.style.backgroundColor = newColor;
      color.innerHTML = `<span>${newColor}</span>`;
    }, 2000);
  }
});
stop.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
