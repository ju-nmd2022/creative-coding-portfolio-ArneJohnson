const size = 25;
const amount = 6;
const gap = 50;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
}

function draw() {
  background(255, 255, 255);
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
      createBox();
      pop();
    }
  }
  noLoop();
}

function createBox() {
  push();
  strokeWeight(5);
  stroke(255);
  fill(random(50, 200));
  beginShape();
  curveVertex(-size + randomness(), -size + randomness());
  curveVertex(-size / 2 + randomness(), -size + randomness());
  curveVertex(0 + randomness(), -size + randomness());
  curveVertex(size / 2 + randomness(), -size + randomness());
  curveVertex(size + randomness(), -size + randomness());
  curveVertex(size + randomness(), -size / 2 + randomness());
  curveVertex(size + randomness(), 0 + randomness());
  curveVertex(size + randomness(), size / 2 + randomness());
  curveVertex(size + randomness(), size + randomness());
  curveVertex(size / 2 + randomness(), size + randomness());
  curveVertex(0 + randomness(), size + randomness());
  curveVertex(-size / 2 + randomness(), size + randomness());
  curveVertex(-size + randomness(), size + randomness());
  curveVertex(-size + randomness(), size / 2 + randomness());
  curveVertex(-size + randomness(), 0 + randomness());
  curveVertex(-size + randomness(), -size / 2 + randomness());
  endShape(CLOSE);
  pop();
}

function randomness() {
  return random(-15, 15);
}
