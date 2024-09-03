const margin = 200;
const points = 3;
const control = [];
const anchor = [];

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

    push();
    stroke(0);
    strokeWeight(1);
    noFill();

    beginShape();
    vertex(anchor[0] + perlinNoise(), anchor[1] + perlinNoise());
    for (let i = 1; i < points; i++) {
        quadraticVertex(anchor[i * 2] + perlinNoise(), anchor[i * 2 + 1] + perlinNoise(), control[i * 2] + perlinNoise(), control[i * 2 + 1] + perlinNoise());
    }
    quadraticVertex(anchor[0] + perlinNoise(), anchor[1] + perlinNoise(), control[0] + perlinNoise(), control[1] + perlinNoise());
    endShape(CLOSE);

    pop();
}

function perlinNoise() {
    return (random(90, 100) * noise(0.01 * frameCount));
}
