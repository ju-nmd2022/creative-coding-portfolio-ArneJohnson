const margin = 200;
const points = 3;
const control = [];
const anchor = [];
let v = Math.random();
let w = Math.random();

function setup() {
    createCanvas(innerWidth, innerHeight);

    for (let i = 0; i < points; i++) {
        control.push(random(margin, innerWidth - margin));
        control.push(random(margin, innerHeight - margin));

        anchor.push(random(margin, innerWidth - margin));
        anchor.push(random(margin, innerHeight - margin));
    }
}

function draw() {
    background(255);

    let x = map(noise(v), 0, 1, 0, width);
    let y = map(noise(w), 0, 1, 0, height);
    v += 0.01;
    w += 0.01;

    push();
    stroke(0);
    strokeWeight(1);
    noFill();

    beginShape();
    vertex(anchor[0] + x, anchor[1] + y);
    for (let i = 1; i < points; i++) {
        quadraticVertex(anchor[i * 2] + x, anchor[i * 2 + 1] + y, control[i * 2] + x, control[i * 2 + 1] + y);
    }
    quadraticVertex(anchor[0] + x, anchor[1] + y, control[0] + x, control[1] + y);
    endShape(CLOSE);

    pop();
}

function perlinNoise() {
    return (random(90, 100) * noise(0.01 * frameCount));
}
