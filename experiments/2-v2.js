const size = 50;
const amount = 5;
const gap = 5;
var t = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  frameRate(60);
  background(255);
}

function draw() {
  let noiseScale = 0.01;
  let noiseLevel = 50;
  let nt = noiseScale * frameCount;
  let count = 0;

  noStroke();
  fill(255, 10);
  rect(0, 0, innerWidth * 2, innerHeight * 2);

  const centerX = width / 2;
  const centerY = height / 4;
  for (let y = 0; y < amount; y++) {
    for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
      count++;
      var percentage = y * y / amount;

      let xPosition = centerX + x * (size + gap);
      let yPosition = centerY + y * (size + gap) + (percentage * noiseLevel * noise(nt));
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
      translate(xPosition, yPosition);
      rotate(percentage * noise(nt));
      noFill();
      stroke(0);
      strokeWeight(2);
      square(0, 0, size);
      pop();
    }
  }
}