const size = 40;
const amount = 8;
const gap = 5;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);

  var count = 0;

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
      count++;
      var percentage = count / (amount ^ 2);
      translate(xPosition + percentage / random(-30, 30), yPosition + percentage / random(-30, 30));
      rotate(percentage / random(-30, 30));

      noFill();
      stroke(0);
      strokeWeight(2);
      square(0, 0, size);
      pop();
    }
  }
  noLoop();
}