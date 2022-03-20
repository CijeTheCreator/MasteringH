var canvas = /**@type {HTMLCanvasElement} */ document.getElementById("canvas");
var buttonUp = document.querySelector(".up");
var buttondown = document.querySelector(".down");
var buttonleft = document.querySelector(".left");
var buttonright = document.querySelector(".right");

let x = 340;
let y = 340;

buttonUp.addEventListener("click", () => {
  y--;
});
buttondown.addEventListener("click", () => {
  y++;
});
buttonright.addEventListener("click", () => {
  x = x + 10;
  console.log(x);
});
buttonleft.addEventListener("click", () => {
  x--;
});
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(320, 320, 100, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(270, 290, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(350, 290, 20, 0, 2 * Math.PI);
ctx.fill();
