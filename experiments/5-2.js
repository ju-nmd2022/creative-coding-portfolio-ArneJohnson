const volume = -2;
let synth;
let effect;
let playing;

async function setup() {
    createCanvas(innerWidth, innerHeight);

    background(0);

    frameRate(60);

    playing = false;

    const reverb = new Tone.Reverb({
        decay: 0.5,
        wet: 0.2,
        preDelay: 0.01
    });

    await reverb.generate();

    effect = new Tone.FeedbackDelay(0.4, 0.85);

    Tone.Master.volume.value = volume;

    synth = new Tone.Synth({
        oscillator: {
            type: 'sine'
        }
    });

    synth.connect(effect);
    synth.connect(Tone.Master);
    effect.connect(reverb);
    reverb.connect(Tone.Master);
}

function draw() {
    background(0, 0, 0, 10);

    if (playing && Math.random() < 0.01) {
        triggerSynth();
        noFill();
        stroke(255);
        strokeWeight(random(1, 4));
        circle(innerWidth / 2, innerHeight / 2, random(100, 800));
    }

    if (!playing) {
        noStroke();
        fill(255);
        polygon(width / 2, height / 2, 50, 3);
    }
}

function triggerSynth() {
    const notes = ['C', 'Db', 'F', 'Gb', 'Bb'];
    const octaves = [2, 3, 4];
    const octave = random(octaves);
    const note = random(notes);
    synth.triggerAttackRelease(note + octave, '8n');
}

function mousePressed() {
    if (!playing) {
        background(0);

        playing = true;

        triggerSynth();
        noFill();
        stroke(255);
        strokeWeight(random(1, 4));
        circle(innerWidth / 2, innerHeight / 2, random(100, 800));
    } else {
        playing = false;
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
