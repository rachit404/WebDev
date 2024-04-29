const hex = "0123456789ABCDEF";
const randomColor = function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * 16);
    color += hex[n];
  }
  return color;
};
