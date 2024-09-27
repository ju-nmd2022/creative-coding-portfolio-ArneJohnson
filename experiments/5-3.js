const volume = -15;
let synth;
let playing;

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

    playing = false;

    Tone.Master.volume.value = volume;

    synth = new Tone.Synth({
        oscillator: {
            type: 'sine'
        }
    });

    synth.connect(Tone.Master);
}

function draw() {
    if (playing) {
        let y = map(noise(n), 0, 1, 0, height);
        let col = hue;

        const frequency = 600 / (y / height);
        synth.setNote(frequency);

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
    }

    if (stepCount >= steps) {
        noLoop();
        synth.triggerRelease();
    }

    if (!playing) {
        noStroke();
        fill(0);
        polygon(width / 2, height / 2, 50, 3);
    }
}

function mousePressed() {
    if (!playing) {
        background(255);
        playing = true;
        synth.triggerAttack();
    }
}

function polygon(x, y, radius, sides = 3, angle = 0) {
    beginShape();
    for (let i = 0; i < sides; i++) {
        const a = angle + TWO_PI * (i / sides);
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}