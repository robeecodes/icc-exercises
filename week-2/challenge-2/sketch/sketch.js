function setup() {
  createCanvas(800, 600);

}

function draw() {
  background("#222222");

  noStroke();

  fill("#12345b");
  triangle(0, height, width / 2, 0, width, height);

  fill("#f2af31");
  quad(
    width / 5, height / 5,
    4 * width / 5, height / 5,
    4 * width / 5, 4 * height / 5,
    width / 5, 4 * height / 5
  );

  stroke("#22afcd");
  strokeWeight(10);

  line(0, 0, width, height);

  noFill();
  arc (
    width / 2, height / 2,
    width / 2, height / 2,
    PI, QUARTER_PI
  );

  strokeWeight(1);
  text("hello dudes", 0, height);
}
