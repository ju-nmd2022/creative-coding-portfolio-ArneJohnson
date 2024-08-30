const size = 10;
const amount = 8;
const gap = 40;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
}

function draw() {
  background(30);
  const centerX = width / 2;
  const centerY = height / 2;
  for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
    for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
      let xPosition = centerX + x * (size + gap);
      let yPosition = centerY + y * (size + gap);
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
      translate(xPosition, yPosition);
      gridcube();
      pop();
    }
  }
  noLoop();
}

function gridcube() {
  push();
  noFill();
  stroke(255);
  strokeWeight(1);
  createBox();
  pop();
}

function createBox() {
  push();
  beginShape();
  vertex(-size + randomness(), -size + randomness());
  vertex(-size / 2 + randomness(), -size + randomness());
  vertex(0 + randomness(), -size + randomness());
  vertex(size / 2 + randomness(), -size + randomness());
  vertex(size + randomness(), -size + randomness());
  vertex(size + randomness(), -size / 2 + randomness());
  vertex(size + randomness(), 0 + randomness());
  vertex(size + randomness(), size / 2 + randomness());
  vertex(size + randomness(), size + randomness());
  vertex(size / 2 + randomness(), size + randomness());
  vertex(0 + randomness(), size + randomness());
  vertex(-size / 2 + randomness(), size + randomness());
  vertex(-size + randomness(), size + randomness());
  vertex(-size + randomness(), size / 2 + randomness());
  vertex(-size + randomness(), 0 + randomness());
  vertex(-size + randomness(), -size / 2 + randomness());
  endShape(CLOSE);
  pop();
}

function randomness() {
  return random(-15, 15);
}
