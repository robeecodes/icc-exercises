function setup() {
  createCanvas(600, 600);

  angleMode(DEGREES);  // using degrees rather than the default radians
  rectMode(CENTER); // draw from the centre of the rectangle rather than the default top left corner

  background(0); // black background
  stroke(255); // white stroke
  strokeWeight(4); // strokeWeight of 4
  noFill(0); // no fill to shape

  let angle = 0;

  translate(width / 2, height / 2);

  for (let i = 0; i < 20; i++) {
    rotate(angle);
    angle += 0.45;
    scale(0.9);
    rect(0, 0, width, height); // draw a rect at the point of origin with width and height the same size as the canvas
  }
}

function draw() {

}
