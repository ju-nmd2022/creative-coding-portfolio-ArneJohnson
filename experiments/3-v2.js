const canvasRadius = 250;
const stepIncrement = 0.5;
const steps = canvasRadius * 2 / stepIncrement;
let stepCount;
let x = innerWidth / 2 - canvasRadius;
let n = Math.random();


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(135, 211, 255);
}

function draw() {
    noStroke();

    fill(121, 143, 134);
    beginShape();
    vertex(x, height);
    for (stepCount = 0; stepCount < steps; stepCount++) {
        let y = map(noise(n), 0, 1, 0, height);
        vertex(x, y);
        x += stepIncrement;
        n += 0.003;
    }
    vertex(x, height);
    endShape(CLOSE);

    x = innerWidth / 2 - canvasRadius;

    fill(50, 92, 75);
    beginShape();
    vertex(x, height);
    for (stepCount = 0; stepCount < steps; stepCount++) {
        let y = map(noise(n), 0, 1, 0, height / 1.5) + 200;
        vertex(x, y);
        x += stepIncrement;
        n += 0.003;
    }
    vertex(x, height);
    endShape(CLOSE);

    x = innerWidth / 2 - canvasRadius;

    fill(81, 140, 94);
    beginShape();
    vertex(x, height);
    for (stepCount = 0; stepCount < steps; stepCount++) {
        let y = map(noise(n), 0, 1, 0, height / 2) + 300;
        vertex(x, y);
        x += stepIncrement;
        n += 0.002;
    }
    vertex(x, height);
    endShape(CLOSE);

    fill(255);
    rect(0, 0, innerWidth, innerHeight / 2 - canvasRadius);
    rect(0, 0, innerWidth / 2 - canvasRadius, innerHeight);
    rect(0, innerHeight / 2 + canvasRadius, innerWidth, innerHeight);
    rect(innerWidth / 2 + canvasRadius, 0, innerWidth, innerHeight);

    noFill();
    stroke(0);
    strokeWeight(8);
    beginShape();
    vertex(innerWidth / 2 - canvasRadius, innerHeight / 2 - canvasRadius);
    vertex(innerWidth / 2 + canvasRadius, innerHeight / 2 - canvasRadius);
    vertex(innerWidth / 2 + canvasRadius, innerHeight / 2 + canvasRadius);
    vertex(innerWidth / 2 - canvasRadius, innerHeight / 2 + canvasRadius);
    endShape(CLOSE);

    noLoop();
}
