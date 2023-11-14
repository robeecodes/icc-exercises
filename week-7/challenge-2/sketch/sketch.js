
let x = -25;

function setup() {
  console.log("setup() is running");
  // put setup code here
  createCanvas(400,600);
  noFill();
  stroke(255);
  console.log(x);
  x = x + 50;
  console.log(x);
}

function draw() {
  console.log("draw() is running");
  // put drawing code here
  background(100);
  ellipse(x, height/2, 50);

  x++;
  if (x - 25 > width) {
    x = 0;
  }
  //console.log(x);
}
