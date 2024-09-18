const inc = 0.02;
const scl = 10;
let cols, rows;
const margin = 400;

let xoff = 0;
let yoff = 0;
let zoff = 0;

let particles = [];
let flowfield;
const frames = 1000;

function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(60);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            particles.push(new Particle(i * scl, j * scl, 1));
        }
    }

    background(0);
}

function draw() {
    background(0);
    yoff = 0;
    for (let y = 0; y < rows; y++) {
        xoff = 0;
        for (let x = 0; x < cols; x++) {
            let index = x + y * cols;
            let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
            let v = p5.Vector.fromAngle(angle);
            xoff += inc;
            v.setMag(1);
            flowfield[index] = v;
        }
        yoff += inc;
    }

    zoff += 0.005;

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show();
    }

    push();
    fill(0);
    noStroke();
    rect(0, 0, width, (height / 2) - margin);
    rect((width / 2) + margin, 0, width, height);
    rect(0, (height / 2) + margin, width, height);
    rect(0, 0, (width / 2) - margin, height);
    pop();

    if (frameCount > frames) {
        noLoop();
    }
}

class Particle {
    constructor(x, y, size) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxspeed = 0.15;
        this.size = size;
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.size = 2 * noise(this.pos.x, this.pos.y, zoff);
    }

    follow(vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    applyForce(force) {
        this.acc.add(force);
    }

    show() {
        if (this.pos.x < width / 2 + margin && this.pos.x > width / 2 - margin &&
            this.pos.y < height / 2 + margin && this.pos.y > height / 2 - margin) {
            strokeWeight(this.size);
            stroke(255);
            noFill();
            ellipse(this.pos.x, this.pos.y, this.size);
        }
    }
}