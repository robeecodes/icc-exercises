let angle = 0;

function setup() {
  createCanvas(600, 600);
  stroke("black");
  noFill();

  angleMode(DEGREES);
  rectMode(CENTER);

  colorMode(HSL, 360, 100, 100, 100);

  noLoop();
}

function draw() {
  background(255);

  translate(width / 2, height / 2);

  drawSquare();
  createOverlay();
}

function drawSquare() {
  noStroke();

  let bgColour = color(random(360), random(60, 80), random(60, 75));
  let complement = color((hue(bgColour) + 180) % 360, saturation(bgColour), brightness(bgColour));

  let flood = bgColour;
  fill(flood);

  for (let i = width; i > 0; i -= width / 30) {
    if (flood == bgColour) {
      flood = complement;
    } else {
      flood = bgColour;
    }
    fill(flood);
    rect(0, 0, i, i);
  }
}

function createOverlay() {
  push();
  blendMode(OVERLAY);

  let darkStroke = color(0, 0, 0, 100);
  let lightStroke = color(0, 0, 100, 15);

  for (let i = 0; i < 4; i++) {
    if (i % 2 == 0) {
      stroke(darkStroke);
    } else {
      stroke(lightStroke);
    }
    rotate(90);
    let x1 = -width / 2;
    let x2 = width / 2;

    for (let y = -height / 2; y < 0; y++) {

      if (y == -3 * height / 10) {
        if (i % 2 == 0) {
          stroke(lightStroke);
        } else {
          stroke(darkStroke);
        }

      }

      if (y == -2 * height / 10) {
        if (i % 2 == 0) {
          stroke(darkStroke);
        } else {
          stroke(lightStroke);
        }
      }
      line(x1, y, x2, y);
      x1++;
      x2--;
    }
  }
  pop();
}