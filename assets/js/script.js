/** ---------------------------------- NOISE LOGIC ---------------------------------- */

var noiseScale = 0.015;
var res = 3;
var nbNoiseDetail = 4;
var displaySequence = [.2, .55, .6, .7, .8, .9, 1];
var colorSequence = ["#568AD1", "#3175D1", "#FFC300", "#66CC85", "#149B25", "#7E7E7E", "#393939"];

function setup() {
    createCanvas(windowWidth, windowHeight);

    generatePerlinNoise();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    generatePerlinNoise();
}

function generatePerlinNoise() {
    noiseDetail(nbNoiseDetail, 0.5);
    noStroke();
    for (let y = 0; y < height; y += res) {
        for (let x = 0; x < width; x += res) {
            // Scale input coordinates.
            let nx = noiseScale * x;
            let ny = noiseScale * y;

            noiseVal = noise(nx, ny);
            c = getColor(noiseVal);
            fill(c);
            rect(x, y, res, res)
        }
    }
    noFill();
    stroke(50);
    strokeSize = 5;
    strokeWeight(strokeSize);
    rect(strokeSize / 2, strokeSize / 2, width - strokeSize, height - strokeSize);
}

function getColor(val) {
    for (let i = 0; i < displaySequence.length; i++) {
        if (val < displaySequence[i]) return color(colorSequence[i]);
    }

    return color("white"); //white
}

// if (val < 0.2) {
//     return color("#568AD1"); //dark blue
// } else if (val < 0.5) {
//     return color("#3175D1"); //cyan
// } else if (val < 0.6) {
//     return color("#FFC300"); //yellow
// } else if (val < 0.7) {
//     return color("#66CC85"); //light green
// } else if (val < 0.8) {
//     return color("#149B25"); //green
// } else if (val < 0.9) {
//     return color("#7E7E7E"); //grey
// } else if (val < 1) {
//     return color("#393939"); //grey
// }