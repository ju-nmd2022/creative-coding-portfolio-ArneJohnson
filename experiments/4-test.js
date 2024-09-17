const inc = 0.02;
const scl = 15;
const speed = 0.0002;
let cols, rows;
let zoff = 0;
const amount = 100;
const grid = 40;

function setup() {
    createCanvas(innerWidth, innerHeight);
    cols = grid;
    rows = grid;
}

function draw() {
    translate(innerWidth / 2 - grid * scl / 2, innerHeight / 2 - grid * scl / 2);
    background(255);
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            let angle = noise(xoff, yoff, zoff) * TWO_PI;
            xoff += inc;

            push();
            stroke(0);
            fill(0);
            translate(x * scl, y * scl);
            rotate(angle);
            line(0, 0, scl / (2 * noise(xoff, yoff, zoff)), 0);
            pop();
        }
        yoff += inc;

        zoff += speed;
    }
}