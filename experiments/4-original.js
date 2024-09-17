const inc = 0.01;
const scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowfield;

function setup() {
    createCanvas(innerWidth, innerHeight);
    cols = floor(width / scl);
    rows = floor(height / scl);

    flowfield = new Array(cols * rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            particles.push(new Particle(i * scl, j * scl));
        }
    }

    background(245, 237, 218);
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

    if (frameCount > 500) {
        noLoop();
    }
}

class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.maxspeed = 2;

    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
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
        stroke(0);
        strokeWeight(1);
        point(this.pos.x, this.pos.y);
    }
}