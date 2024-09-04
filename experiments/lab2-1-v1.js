let x = 100;
let w = Math.random();
// let h = Math.random() * 1000 / 10;
let h1 = Math.random() * 1000 / 10;
let h2 = Math.random() * 1000 / 10;
const totalframes = 651;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    colorMode(HSB, 100);
}

function draw() {
    let y = map(noise(w), 0, 1, 0, height);
    // let c = h;
    let hdiff = (h2 - h1) / totalframes;
    let c = h1;
    h1 += hdiff;

    x += 1;
    w += 0.01;

    // h += random(0.05, 0.1);
    // if (h >= 100) {
    //     h = 0;
    // }

    if (frameCount >= totalframes) {
        noLoop();
    }

    noStroke();
    fill(c, 100, 100);
    ellipse(x, y, 40);

    // Get frame count to blend colors
    // Currently 651
    // fill(255);
    // square(25,25,50);
    // fill(0);
    // textSize(30);
    // textAlign(CENTER, CENTER);
    // text(frameCount, 50, 50);
}
