let myCommands = ["STOP", "GO"];
let i = 0;

function setup() {
  createCanvas(600, 600);
  background(0);

  frameRate(1);
}

function draw() {

  myCommands[i] == "STOP" ? fill("#ff0000") : fill("#1cca39");
  stroke("#ffffff");
  strokeWeight(10);
  beginShape();
  vertex(width / 5, 10);
  vertex(4 * width / 5, 10);
  vertex(width - 5, height / 2);
  vertex(4 * width / 5, height - 10);
  vertex(width / 5, height - 10);
  vertex(5, height / 2);
  endShape(CLOSE);

  // runs every second
  strokeWeight(0);
  fill(255);

  textSize(96);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  text(myCommands[i], 300, 300);
  i == myCommands.length - 1 ? i = 0 : i++;
}