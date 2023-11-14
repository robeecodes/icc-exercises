const bees = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  frameRate(30);

  for (let i = 0; i < 10; i++) {
    let bee = new Glitch();
    bee.loadQuality(random(0.01, 1.0));
    loadImage('./img/bee.png', (img) => {
      bee.loadImage(img);
    });
    bee.pixelate(random(0, 1));
    bee.limitBytes(random(0.5), random(0.5, 1));
    bees.push(bee);
  }
}

function draw() {
  background(color(random(255), random(255), random(255)));

  bees.forEach(bee => {
    bee.resetBytes();
    bee.randomBytes(10);
    bee.buildImage();
    image(bee.image, random(width), random(height), random(100, 3 * width / 4), random(100, 3 * height / 4));
  });

}