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

  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
    for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
      let xPosition = centerX + x * (size + gap);
      let yPosition = centerY + y * (size + gap);
      if (amount % 2 === 0) {
        yPosition += size / 2;
      }
      push();
      count++;
      var percentage = count / (amount * amount * amount);
      translate(xPosition + random(-200, 200) * percentage, yPosition + random(-200, 200) * percentage);
      rotate(random(-30, 30) * percentage);

      noFill();
      stroke(0);
      strokeWeight(2);
      square(0, 0, size);
      pop();
    }
  }
  noLoop();
}