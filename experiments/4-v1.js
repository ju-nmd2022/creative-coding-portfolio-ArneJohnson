const inc = 0.02;
const scl = 50;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;
const frames = 100;

function setup() {
    createCanvas(innerWidth, innerHeight);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (Math.random() < 0.8) {
                particles.push(new Particle(i * scl, j * scl));
            }
        }
    }

    background(0);
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
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

    zoff += 0.0001;

    for (let i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].show();
    }

    if (frameCount > frames) {
        noLoop();
    }
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxspeed = 2;
        this.size = 20 + random(0, 80);

    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.size = this.size * 0.98 - 1;
        if (this.size < 0) {
            this.size = 0;
        }
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
        stroke(255);
        fill(0);
        strokeWeight(1);
        if (this.size != 0) {
            ellipse(this.pos.x, this.pos.y, this.size);
        }
    }
}