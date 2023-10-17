function setup() {
  createCanvas(800, 600);
  colorMode(HSL);
  background("#222222");

  strokeWeight(30);
}

function draw() {
  stroke(0);

  line(40, 0, 70, height);

  if (mouseIsPressed) {
    stroke("green");
  } else if (keyIsPressed) {
    stroke("blue");
  } else {
    stroke(328, 70, 61);
  }

  line(0, 70, width, 50);
}
