function setup() {
  createCanvas(800, 600);
  colorMode(HSL);
  background("#222222");
  strokeWeight(4);
  stroke(328, 70, 61);
}

function draw() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}
