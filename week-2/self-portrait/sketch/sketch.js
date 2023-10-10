function setup() {
  createCanvas(400, 400);

  colorMode(HSL);
}

function drawHairCircle(x, y) {
  circle(
    x, y,
    width / 5
  );
}

function draw() {
  background("#222222");

  // Skull
  noStroke();
  fill("#f0c5a8");
  ellipse(
    width / 2, height / 2,
    width / 2, 3 * width / 5
  );

  // Left Ear
  ellipse(
    width / 4, height / 2 + 10,
    width / 10, height / 8
  );

  // Right Ear
  ellipse(
    3 * width / 4, height / 2 + 10,
    width / 10, height / 8
  );

  fill("white");
  // Left eye white
  ellipse(
    2 * width / 5 - 5, height / 2,
    width / 10, height / 10
  );

  // Right eye white
  ellipse(
    3 * width / 5 + 5, height / 2,
    width / 10, height / 10
  );

  fill("#122620");
  // Left eye
  ellipse(
    2 * width / 5, height / 2,
    width / 15, height / 12
  );

  // Right eye
  ellipse(
    3 * width / 5, height / 2,
    width / 15, height / 12
  );

  noFill();
  stroke("#222222");
  strokeWeight(3);
  // Left eye lashes
  arc(
    2 * width / 5 - 5, height / 2,
    width / 10, height / 10,
    PI - QUARTER_PI, 0
  );

  // Right eye lashes
  arc(
    3 * width / 5 + 5, height / 2,
    width / 10, height / 10,
    PI, QUARTER_PI
  );

  // Mouth
  arc(
    width / 2, 2 * height / 3,
    width / 6, height / 10,
    0, PI
  )

  // Hair
  noStroke();
  fill("#7f5f2e");

  // Right Side
  drawHairCircle(3 * width / 5 + 20, height / 4 + 20);
  drawHairCircle(3 * width / 5 + 30, height / 4 + 50);
  drawHairCircle(3 * width / 5 + 40, height / 4 + 60);

  // Left Side
  drawHairCircle(3 * width / 5, height / 4);
  drawHairCircle(3 * width / 5 - 30, height / 4 - 10);
  drawHairCircle(3 * width / 5 - 40, height / 4);
  drawHairCircle(3 * width / 5 - 70, height / 4 + 10);drawHairCircle(3 * width / 5 - 100, height / 4 + 30);
  drawHairCircle(3 * width / 5 - 120, height / 4 + 60);
  drawHairCircle(2 * width / 5 + 50, height / 3);
  drawHairCircle(2 * width / 5, height / 3 + 10);

  // Nose
  noFill();
  stroke("#222222");
  ellipse (
    width / 2, 3 * height / 5,
    width / 15, height / 20
  )
}
