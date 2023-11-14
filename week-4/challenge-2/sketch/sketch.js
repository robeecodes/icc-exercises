function setup() {
  createCanvas(500, 500);
  background(0);
  
  frameRate(20);

  colorMode(HSL, 360, 100, 100)
}

function draw() {
  for (let x = 25; x < width; x += 50) {
    for (let y = 25; y < height; y += 50) {
      fill(random(200, 360), random(50, 80), random(20, 80));
      ellipse(x, y, 50, 50);
    }
  }
}