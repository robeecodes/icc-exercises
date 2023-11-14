function setup() {
  createCanvas(1000, 1000);

  colorMode(HSL, 360, 100, 100);

  background("#E8C4BA");
}

function draw() {
  let drawingWidth = 300;
  let drawingHeight = 2 * drawingWidth / 3;
  for (let x = 0; x < width; x += drawingWidth) {
    for (let y = 0; y < height; y += drawingHeight) {
      drawBird(x, y, drawingWidth, drawingHeight);
    }
  }
}

function drawBird(x, y, birdWidth, birdHeight) {
  fill("#CC3B3B");
  stroke("#633737");
  let brushSize = birdWidth / 100;
  x += brushSize;
  y += birdHeight / 10 + brushSize;
  strokeWeight(brushSize);

  beginShape();
  curveVertex(x, y + birdHeight);
  curveVertex(x, y + birdHeight);
  curveVertex(x + 4.6 * birdWidth / 6, y);
  curveVertex(x + birdWidth, y + 0.25 * birdHeight / 5);
  curveVertex(x + 5.7 * birdWidth / 6, y + 0.5 * birdHeight / 5);
  curveVertex(x + 5.5 * birdWidth / 6, y + 1.5 * birdHeight / 5);
  curveVertex(x + 5 * birdWidth / 6, y + 4 * birdHeight / 5);
  curveVertex(x + 3 * birdWidth / 6, y + birdHeight);
  curveVertex(x, y + birdHeight);
  curveVertex(x, y + birdHeight);
  endShape();

  fill("#30485E");
  beginShape();
  curveVertex(x + 0.9 * birdWidth / 6, y + 4 * birdHeight / 5);
  curveVertex(x + 0.9 * birdWidth / 6, y + 4 * birdHeight / 5);
  curveVertex(x + 3.7 * birdWidth/ 6, y + 3.2 * birdHeight / 5);
  curveVertex(x + 3.6 * birdWidth / 6, y + birdHeight / 5);
  curveVertex(x + 0.9 * birdWidth / 6, y + 4 * birdHeight / 5);
  curveVertex(x + 0.9 * birdWidth / 6, y + 4 * birdHeight / 5);
  endShape();

  fill("#E8C4BA");
  circle(x + 5.25 * birdWidth / 6, y + 0.25 * birdHeight / 5, 0.25 * birdWidth / 6);
}