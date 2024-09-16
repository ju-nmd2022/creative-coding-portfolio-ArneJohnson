const size = 40;
const amount = 8;
const gap = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  colorMode(HSB, 255);
}

function draw() {
  background(20, 20, 20);
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
  let h = random(50, 100);
  let s = random(80, 120);
  let b = random(64, 128);

  noStroke();
  fill(h, s, b);
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
