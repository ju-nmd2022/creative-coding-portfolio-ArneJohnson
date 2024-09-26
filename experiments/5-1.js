const canvasRadius = 250;
const stepIncrement = 30;
const steps = canvasRadius * 2 / stepIncrement;
let stepCount;
let x = innerWidth / 2 - canvasRadius;
let n = 0.9;

const synth = new Tone.Synth().toDestination();
let soundIsPlaying = false;

function setup() {
    createCanvas(innerWidth, 600);
    frameRate(60);
    noLoop();
}

function draw() {
    background(255);
    drawLines();

    if (soundIsPlaying) {
        synth.triggerAttackRelease("C4", "1n");
    }
}

function drawLines() {
    stroke(0);
    noFill();
    let tempN = n;

    for (let rows = 0; rows < 80; rows++) {
        x = innerWidth / 2 - canvasRadius;
        n = tempN;

        beginShape();
        for (stepCount = 0; stepCount < steps; stepCount++) {
            let y = map(noise(x / (n * 30)), 0, 1, 0, height / 5);
            curveVertex(x, y + (rows * 5));
            x += stepIncrement;
            n += 0.0005;
        }
        endShape();
    }
}

function beginSound() {
    loop();
    soundIsPlaying = true;
}

const button = top.document.querySelector(".playButton");
button.onclick = async () => {
    await Tone.start();
    beginSound();
}