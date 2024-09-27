const volume = -15;

let synth;

const width = innerWidth / 2;
const height = 600;

let n = 0;

function setup() {
    createCanvas(width, height);
    background(0);

    Tone.Master.volume.value = volume;

    synth = new Tone.Synth({
        oscillator: {
            type: 'sine'
        }
    });

    synth.connect(Tone.Master);
}

function draw() {
    background(0);

    n += 0.003;

    const frequency = 50 + noise(n) * 600;
    synth.setNote(frequency);

    if (mouseIsPressed) {
        const time = millis() / 1000;

        const verts = 1000;
        fill(255);
        stroke(0);
        strokeWeight(5);
        beginShape();
        vertex(0, height);
        for (let i = 0; i < verts; i++) {
            const t = verts <= 1 ? 0.5 : i / (verts - 1);
            const x = t * width;
            let y = height / 2;

            const amplitude = sin(time + t * noise(n) * 20);

            y += amplitude * height / 2 * noise(n);

            vertex(x, y);
        }
        vertex(width, height);
        endShape(CLOSE);
    }
}

function mousePressed() {
    synth.triggerAttack();
}

function mouseReleased() {
    synth.triggerRelease();
}