let myColours = [];

let xPos = 0;

function setup() {
  createCanvas(1024, 400);
  background(0);

  fill("#ee38b3");

  noLoop();
  noStroke();

  for (let i = 0; i < 256; i++) {
    myColours.push(i);
  }

  myColours = shuffle(myColours);
}

function draw() {
  // Blue to Red

  for (let i = 0; i < myColours.length; i++) {
    let c = color(myColours[i], 0, myColours[myColours.length - i - 1]);
    fill(c);
    rect(xPos, 0, random(width), random(height));
    xPos += width / 256;
  }
  
}