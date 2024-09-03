//let v = Math.random();
let x = 100;
let w = Math.random();
let h = Math.random() * 1000 / 10;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(255);
    colorMode(HSB, 100);
}

function draw() {
    //let x = map(noise(v),0,1,0,width);
    let y = map(noise(w), 0, 1, 0, height);
    let c = h;
    //let g = map(noise(w + 1), 0, 1, 0, 255);
    //let b = map(noise(w + 2), 0, 1, 0, 255);

    //v += 0.01
    x += 1;
    w += 0.01;
    h += random(0.05, 0.1);
    if (h >= 100) {
        h = 0;
    }

    if (x >= width - 100) {
        noLoop();
    }

    noStroke();
    fill(c, 100, 100);
    ellipse(x, y, 40);

}
