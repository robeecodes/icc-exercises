function setup() {
  createCanvas(800, 600);
  
  colorMode(HSL);

  textFont("impact");
  textSize(96);

  print("YIPPPEEEE!!!!");
}

function draw() {
  background("#222222");

  noStroke();
  fill("#e156a0");
  ellipse(width / 2, height / 2, width, height);

  fill("#A251FA");
  stroke("#222222");
  strokeWeight(10);
  textAlign(CENTER);
  text("Hello World!", width / 2, height / 2);
}
