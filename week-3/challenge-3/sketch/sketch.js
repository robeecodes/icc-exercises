function setup() {
  createCanvas(800, 600);
  colorMode(HSL);
  background("#222222");
  strokeWeight(4);
}

function draw() {
  let weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  stroke(328, 70, 61, random(0.2, 1.1));
  strokeWeight(weight);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
