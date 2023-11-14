let x = [];

function setup() {
  createCanvas(800, 600);
  
  noStroke();
  fill(255, 200);
  background(0);

  colorMode(HSL, 360, 100, 100);

  for (let i = 0; i < height; i++) {
    x[i] = random(-1000, -12); // different way of adding elements to an array
  }
}

function draw() {
  for (let i = 25; i < x.length; i += 25) {
    noiseSeed(i);
    randomSeed(i * 100);
    fill(random(360), random(50,100), random(30, 80));
    x[i] > width + 12 ? x[i] = random(-1000, -12) : x[i] += 0.5;
    let y = i + i * noise(0.005 * frameCount);
    arc(x[i], y, 12, 12, 0.52, 5.76);
  }
}
