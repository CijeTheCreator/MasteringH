{
  var canvas =
    /**@type {HTMLCanvasElement} */ document.getElementById("canvas");

  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 1, 100);
  ctx.strokeRect(150, 100, 1, 100);
  ctx.clearRect(100, 125, 100, 50);
}
