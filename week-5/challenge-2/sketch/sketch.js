const myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];

let xVal;
let yVal;

function setup() {
  createCanvas(1024, 400);
  background(0);

  fill("#ee38b3");
  textAlign(CENTER);
  textSize(10);

  xVal = random(width);
  yVal = random(height);
}

function draw() {
  noLoop();

  // Using normal for-loop
  for (let i = 0; i < myWords.length; i++) {
    console.log(myWords[i]);
    console.log(xVal);
    text(myWords[i], xVal, yVal);
    xVal = random(width);
    yVal = random(height);
  }
}