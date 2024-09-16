const size = 10;
const amount = 8;
const gap = 50;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);
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
      noFill();
      strokeWeight(1);
      stroke(0, 10);
      createBox();
      createBox();
      createBox();
      createBox();
      createBox();
      createBox();
      stroke(0, 20);
      createBox();
      createBox();
      createBox();
      createBox();
      createBox();
      createBox();
      stroke(0, 35);
      createBox();
      createBox();
      createBox();
      createBox();
      createBox();
      createBox();
      pop();
    }
  }
  noLoop();
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
