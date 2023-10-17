function setup() {
  createCanvas(800, 600);
  background("#222222");
  
  colorMode(HSL);
}

function draw() {
  noStroke();
  fill(328, 70, 61, random(0.2, 1.1));
  ellipse(mouseX, mouseY, 20, 20);
}
