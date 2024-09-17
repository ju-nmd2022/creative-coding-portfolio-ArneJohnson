const canvasRadius = 250;
const steps = canvasRadius * 2;
let stepCount;
let x = innerWidth / 2 - canvasRadius;
let n = Math.random();
let brightness;
const brightnessIncrement = 100 / steps;
const sizeIncrement = 100 / steps;
const startSize = 1;
let size;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    colorMode(HSB, 100);

    stepCount = 0;
    brightness = 0;
    size = 0;
}

function draw() {
    let y = map(noise(n), 0, 1, 0, height);

    noStroke();

    if (stepCount % 2 == 0) {
        fill(0, 0, brightness);
    } else {
        fill(0, 0, 100);
    }

    ellipse(x, y, startSize + size);

    x += 1;
    n += 0.01;
    brightness += brightnessIncrement;
    size += sizeIncrement;
    stepCount++;

    if (stepCount >= steps) {
        noLoop();
    }
}
