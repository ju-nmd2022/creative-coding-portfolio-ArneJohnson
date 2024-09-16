const canvasRadius = 250;
const steps = canvasRadius * 2;
let stepCount;
let x = innerWidth / 2 - canvasRadius;
let n = Math.random();
let hue = Math.random() * 100;
const hueIncrement = 100 / steps;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    colorMode(HSB, 100);

    stepCount = 0;
}

function draw() {
    let y = map(noise(n), 0, 1, 0, height);
    let col = hue;

    x += 1;
    n += 0.01;
    hue += hueIncrement;
    if (hue >= 100) {
        hue = 0;
    }

    noStroke();
    fill(col, 100, 100);
    ellipse(x, y, 40);

    stepCount++;
    if (stepCount >= steps) {
        noLoop();
    }
}
