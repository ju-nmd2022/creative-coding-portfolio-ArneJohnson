const size = 50;
const amount = 6;
const gap = 5;
var t = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  frameRate(30);
}

function draw() {
  let noiseScale = 0.01;
  let noiseLevel = 100;
  let nt = noiseScale * frameCount;
  let count = 0;

  background(255);
  const centerX = width / 2;
  const centerY = height / 2;
  for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
    for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
      count++;
      var percentage = count / (amount * amount);

      let xPosition = centerX + x * (size + gap) + percentage * noiseLevel * noise(nt);
      let yPosition = centerY + y * (size + gap) + percentage * noiseLevel * noise(nt);
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
      translate(xPosition, yPosition);
      noFill();
      stroke(0);
      strokeWeight(2);
      square(0, 0, size * 1.3 * percentage * noise(nt));
      pop();
    }
  }
}