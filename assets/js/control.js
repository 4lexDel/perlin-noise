/** --------------------------------- SETTINGS LOGIC -------------------------------- */

var sliderDisplay = document.getElementById('slider-display-scale');

noUiSlider.create(sliderDisplay, {
    start: [.2, .5, .6, .7, .8, .9, 1],
    connect: [true, true, true, true, true, true, true, false],
    range: {
        'min': [0],
        'max': [1]
    },
    step: 0.05,
    tooltips: true,
});

var connect = sliderDisplay.querySelectorAll('.noUi-connect');
var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color', 'c-5-color', 'c-6-color', 'c-7-color'];

for (var i = 0; i < connect.length; i++) {
    connect[i].classList.add(classes[i]);
}

// var sliderValue = document.getElementById('slider-value');
// slider.noUiSlider.on('update', function(values) {
//     var sliderValue = document.getElementById('slider-value');
//     sliderValue.innerHTML = values.join(' - ');
// });

var sliderZoom = document.getElementById('slider-zoom');

noUiSlider.create(sliderZoom, {
    start: [0.01],
    connect: [true, false],
    range: {
        'min': [0.005],
        'max': [0.1]
    },
    step: 0.005,
    tooltips: wNumb({ decimals: 3 }),
});

var connect = sliderZoom.querySelectorAll('.noUi-connect');
var classes = ['zoom-color'];

for (var i = 0; i < connect.length; i++) {
    connect[i].classList.add(classes[i]);
}

var sliderResolution = document.getElementById('slider-resolution');

noUiSlider.create(sliderResolution, {
    start: [3],
    connect: [true, false],
    range: {
        'min': [1],
        'max': [10]
    },
    step: 1,
    tooltips: wNumb({ decimals: 0 }),
});

var sliderNoiseDetail = document.getElementById('slider-noise-detail');

noUiSlider.create(sliderNoiseDetail, {
    start: [3],
    connect: [true, false],
    range: {
        'min': [1],
        'max': [8]
    },
    step: 1,
    tooltips: wNumb({ decimals: 0 }),
});

var connect = sliderNoiseDetail.querySelectorAll('.noUi-connect');
var classes = ['detail-color'];

for (var i = 0; i < connect.length; i++) {
    connect[i].classList.add(classes[i]);
}