/**
 * @typedef {Object} AspectRatio - The aspect ratio of the canvas
 * @property {number} width - The width of the aspect ratio of the canvas
 * @property {number} height - The height of the aspect ratio of the canvas
*/

/**
 * @constant
 * @type {string[]}
 * @default
*/
const MODES = ["vertical", "horizontal", "diagonal"];

/** @var {number} x1 - The first x-coordinate of the line */
/** @var {number} x2 - The second x-coordinate of the line */
/** @var {number} y1 - The first y-coordinate of the line */
/** @var {number} y2 - The second y-coordinate of the line */
/** @var {number} weight - The weight of the line */
/** @var {string} mode - The current mode of the line 
  * @see MODES
*/
/** @var {number} keypresses - The number of times the user has pressed a key */
/** @var {AspectRatio} ratio - The aspect ratio of the canvas */
let x1, x2, y1, y2, weight, mode, keyPresses, ratio;

function setup() {
  createCanvas(800, 600);

  fill("white");
  textSize(16);

  ratio = getRatio(width, height);

  mode = "vertical";

  createLine();

  keyPresses = 0;

  colorMode(HSL);

  weight = 2;
  strokeWeight(weight);
}

function draw() {
  clear();

  background("#222222");
  
  noStroke();
  // User instructions
  text("Left click to increase line width", 10, 30);
  text("Press down arrow to decrease line width", 10, 60);
  text("Press spacebar to change line orientation", 10, 90);

  stroke(328, 70, 61);
  if (mouseIsPressed) { // Increase stroke width
    changeWeight(1);
  } else if (keyIsPressed && keyCode === DOWN_ARROW) { // Decrease stroke width
    changeWeight(-1);
  }

  if (mode == "vertical") {
    if (mouseX > x1) {
      x1++;
      x2++;
    } else {
      x1--;
      x2--;
    }
  } else if (mode == "horizontal") {
    if (mouseY > y1) {
      y1++;
      y2++;
    } else {
      y1--;
      y2--;
    }
  } else if (mode == "diagonal") {
    if (diagonalMousePosition(x1, y1, x2, y2) < 0) { // Check if mouse is above the line
      if (x2 < width && y1 > 0) {
        // If x2 and y1 have moved to lower the line, they need to move back up
        x2 += ratio.width;
        y1 -= ratio.height;
      } else {
        // Never let line reduce to 0
        x1 = Math.min(width - 1, x1 + ratio.width);
        y2 = Math.max(1, y2 - ratio.height);
      }
    } else {
      if (x1 > 0 && y2 < height) {
        // If x1 and y2 have moved to raise the line, they need to be lowered
        x1 -= ratio.width;
        y2 += ratio.height;
      } else {
        // Never let line reduce to 0
        x2 = Math.max(1, x2 - ratio.width);
        y1 = Math.min(height - 1, y1 + ratio.height);
      }
    }
  }

  line(x1, y1, x2, y2);
}

function keyTyped() {
  if (keyCode === 32) {
    keyPresses++;

    // Cycle through the available modes based on the number of keyPresses
    mode = MODES[keyPresses % MODES.length];

    createLine();
  }
}

/**
 * Gets the aspect ratio of the canvas by finding greatest common factor
 * @returns {AspectRatio}
*/
function getRatio() {
  /**
   * Starts equal to the width or height, whichever is smallest, and decrements until the greatest common factor is found 
   * @type {number} factor
  */
  let factor = Math.min(width, height);

  /**
   * The width of the aspect ratio of the canvas
   * @type {number} aspectWidth
  */
  let aspectWidth;

  /** 
     * The height of the aspect ratio of the canvas
     * @type {number} aspectHeight
  */
  let aspectHeight;

  // Decrement the factor variable until greatest common factor is found
  while (factor) {
    aspectWidth = width % factor;
    aspectHeight = height % factor;

    // If dividing the width and height by the factor both equals 0, that is the greatest common factor.
    if (!aspectWidth && !aspectHeight) {
      return { width: width / factor, height: height / factor };
    }

    // Decrement the factor if not greatest common factor
    factor--;
  }

  // Default return for safety
  return { width: 1, height: 1 };
}

/**
 * Find if the mouse is above or below the diagonal line. A negative number means it's above, positive is below.
 * @param {number} x1 - The first x-coordinate of the line
 * @param {number} y1 - The first y-coordinate of the line
 * @param {number} x2 - The second x-coordinate of the line
 * @param {number} y2 - The second y-coordinate of the line
 * @return {number} 
 */
function diagonalMousePosition(x1, y1, x2, y2) {
  /**
   * The difference between the two x-coordinates
   * @type {number} dx
  */
  let dx = x2 - x1;

  /**
   * The difference between the two y-coordinates
   * @type {number} dy
  */
  let dy = y2 - y1;

  /**
   * The difference between the mouse x-coordinate and first x-coordinate
   * @type {number} mx
  */
  let mx = mouseX - x1;

  /**
   * The difference between the mouse y-coordinate and first y-coordinate
   * @type {number} my
  */
  let my = mouseY - y1;

  // Formula to calculate intersection
  return (dx * my - dy * mx);
}

/**
 * Initialise the line based on the current mode
 */
function createLine() {
  switch (mode) {
    case "vertical":
      // Draw a vertical line across the center
      x1 = width / 2;
      y1 = 0;
      x2 = x1;
      y2 = height;
      break;
    case "horizontal":
      // Draw a horizontal line across the center
      x1 = 0;
      y1 = height / 2;
      x2 = width;
      y2 = y1;
      break;
    case "diagonal":
      // Draw a diagonal line across the center
      x1 = 0;
      y1 = 0;
      x2 = width;
      y2 = height;
      break;
  }
}

/**
 * Change the weight of the stroke
 * @param {number} amount - the amount to change the stroke weight by
 */
function changeWeight(amount) {
  // Don't let weight go into negative
  weight = Math.max(2, weight + amount);
  strokeWeight(weight);
}