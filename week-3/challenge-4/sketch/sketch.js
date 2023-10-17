const EASING = 0.2;
let x = 0;

function setup() {
  createCanvas(800, 600);
  colorMode(HSL);
  background("#222222");
  noStroke();
}

function draw() {
  // If the mouse is pressed, the colour is pink, otherwise, it is random
  if (mouseIsPressed) {
    fill(328, 70, 61, random(0.2, 1.1));
  } else {
    fill(random(255), random(100), random(100), random(0.2, 1.1));
  }
  
  // Create small amount of easing to stabilise the drawing
  let targetX = mouseX;
  x += (targetX - x) * EASING;
  ellipse(x, mouseY, 20, 20);
}