function setup() {
  createCanvas(500, 500);
  background(0);
  fill(0, 0, 255);
}

function draw() {
  for (let x = 25; x < width; x += 50) {
    ellipse(x, 25, 50, 50);
  }
}