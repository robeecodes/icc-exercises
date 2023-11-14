const myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];

function setup() {
  createCanvas(1024, 400);
  background(0);
}

function draw() {
  noLoop();

  // Using forEach
  myWords.forEach(word => {
    console.log(word);
  });

  // Using normal for-loop
  for (let i = 0; i < myWords.length; i++) {
    console.log(myWords[i]);
  }
}