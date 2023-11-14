let x = -25;

function setup() {
  createCanvas(400, 400);
  noFill()
  stroke(255);
}

function draw() {
    background(0);
    ellipse(x, height/2, 50);

    x += 5;
    if (x - 25 > width) {
      x = 0;
    }
    
    console.log("Hi! x =", x);
}
