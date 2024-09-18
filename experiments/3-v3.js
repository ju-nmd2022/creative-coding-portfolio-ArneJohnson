const canvasRadius = 250;
const stepIncrement = 30;
const steps = canvasRadius * 2 / stepIncrement;
let stepCount;
let x = innerWidth / 2 - canvasRadius;
let n = 0.9;


function setup() {
    createCanvas(innerWidth, 600);
    background(255);
}

function draw() {
    stroke(0);
    noFill();
    let tempN = n;

    for (let rows = 0; rows < 80; rows++) {
        x = innerWidth / 2 - canvasRadius;
        n = tempN;

        beginShape();
        for (stepCount = 0; stepCount < steps; stepCount++) {
            let y = map(noise(x / (n * 15)), 0, 1, 0, height / 5);
            curveVertex(x, y + (rows * 5));
            x += stepIncrement;
            n += 0.003;
        }
        endShape();
    }

    noLoop();
}
