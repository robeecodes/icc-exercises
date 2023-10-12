function setup() {
  createCanvas(800, 600);
  background("#222222");
  
  colorMode(HSL);

  textFont("impact");
  textSize(96);

  print("YIPPPEEEE!!!!");
}

function draw() {
  noStroke();
  fill("#e156a0");
  ellipse(width / 2, height / 2, width, height);

  fill("#A251FA");
  stroke("#222222");
  strokeWeight(10);
  textAlign(CENTER);
  text("Hello World!", width / 2, height / 2);
}
