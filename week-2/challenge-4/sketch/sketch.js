let rectWidth = 15 * 2;
let rectHeight = 45 / 2;

function setup() {
  createCanvas(800, 600);
  background("#222222");
}

function draw() {
  rect(25, 50, rectWidth, rectHeight);
  rect(15, 55, rectWidth, rectHeight);
  rect(35, 80, rectWidth, rectHeight);
  rect(45, 10, rectWidth, rectHeight);
}