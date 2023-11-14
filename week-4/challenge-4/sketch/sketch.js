let key = 1;

function setup() {
  createCanvas(500, 500);

  colorMode(HSL, 360, 100, 100);
}

function draw() {
  background(0);

  let unit = 25;
  for (let x = unit; x < width; x += unit * 2) {
    for (let y = unit; y < height; y += unit * 2) {
      switch (key) {
        case 1:
          hourglass(x, y, unit);
          break;
        case 2:
          fish(x, y, unit);
          break;
        case 3:
          herringBone(x, y, unit);
          break;
        default:
          zigZag(x, y, unit);
      }
    }
  }
}

function keyPressed() {
  switch (keyCode) {
    case 49:
      key = 1;
      break;
    case 50:
      key = 2;
      break;
    case 51:
      key = 3;
      break;
    default:
      key = 4;
  }
}

function herringBone(xVal, yVal, unit) {
  stroke(255);
  strokeWeight(1);

  stroke(color(random(360), random(60, 80), random(50, 85)));
  line(xVal, yVal, xVal - unit, yVal + unit);
  line(xVal, yVal, xVal + unit, yVal + unit);
  line(xVal, yVal - unit, xVal - unit, yVal);
  line(xVal, yVal - unit, xVal + unit, yVal);
  line(xVal, yVal - unit, xVal, yVal + unit);
  line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
}

function zigZag(x, y, unit) {
  strokeWeight(20);

  stroke(color(random(360), random(60, 80), random(50, 85)));
  line(x, y, x - unit, y + unit);

  stroke(color(random(360), random(60, 80), random(50, 85)));
  line(x, y, x + unit, y + unit);
}

function fish(x, y, unit) {
  strokeWeight(2);
  stroke(color(random(360), random(60, 80), random(50, 85)));

  noFill();

  triangle(
    x - unit, y - unit,
    x - 3 * unit / 4, y - 3 * unit / 4,
    x - unit, y - unit / 2
  );

  ellipse(x, y - 3 * unit / 4, 5 * unit / 4, unit / 2);
}

function hourglass(x, y, unit) {
  strokeWeight(5);
  stroke(color(random(360), random(60, 80), random(50, 85)));

  noFill();

  triangle(
    x - unit, y - unit,
    x, y,
    x + unit, y - unit
  );

  triangle(
    x - unit, y + unit,
    x, y,
    x + unit, y + unit
  );
}