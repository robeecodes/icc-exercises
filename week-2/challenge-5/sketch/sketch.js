let rectWidth = 20;
let rectHeight = 30;

function setup() {
  createCanvas(800, 600);
  background(255);
  noLoop();
}

function draw() {
	noFill();

  fill(random(0,255),random(0,255),random(0,255));
	drawShape(rectWidth,rectHeight);
}

function drawShape(rectangleWidth, rectangleHeight) {
  let xPos = random(0, width);
  let yPos = random(0, height);

  rect(xPos, yPos, rectangleWidth, rectangleHeight);
}