/**
 * 2015 Joshua Kleckner aka Lokua
 * lokua.net
 * github.com/lokua
 */

autowatch = 1;
inlets = 1;
outlets = 0;

// set false in production
var debug = true,
    p = this.patcher,
    sliders, 
    numBoxes = [], 
    sliderLEDs = [], 
    numBoxLEDs = [],
    init = false;

log('------------\nloaded ' + Math.random());


function bang() {
  if (!init) getObjects();
}

function msg_int(x) {
  show(numBoxes, x);
  show(numBoxLEDs, x);
  show(sliderLEDs, (sliders.hidden = +!x)); 
}

function show(objectArray, show) {
  var i = 0, len = objectArray.length;
  for (; i < len; i++) {
    objectArray[i].hidden = show;
  }
}

function getObjects() {
  sliders = p.getnamed('MultiSlider');
  for (var i = 0; i < 16; i++) {
    numBoxes.push(p.getnamed('Step['+i+']'));
    if (i < 4) {
      sliderLEDs.push(p.getnamed('LED' + i));
      numBoxLEDs.push(p.getnamed('LEDn' + i));
    }
  }
  init = true;
}

function log(x) {
  if (debug) post(x + '\n');
}