let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
  fill(0, 15, 30, 220);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let a = 0; a < 360; a += 22.5) {
    rotate(a);

    fill(random(255), random(255), random(255));


    push();
    for (let i = 0; i < 100; i++) {
      scale(0.95);
      rotate(angle);
      rect(width, 0, 50, 50);
    }
    pop();


    fill(random(255), random(255), random(255));

    push();
    for (let i = 0; i < 100; i++) {
      scale(0.95);
      rotate(-angle);
      rect(width, 0, 50, 50);
    }
    pop();
  }

  angle += 0.01;

}