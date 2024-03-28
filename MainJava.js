const slider = document.getElementById("mySlider1");
const output = document.getElementById("sliderValue1");
const slider2 = document.getElementById("mySlider2");
const output2 = document.getElementById("sliderValue2");
const slider3 = document.getElementById("mySlider3");
const output3 = document.getElementById("sliderValue3");
const slider4 = document.getElementById("mySlider4");
const output4 = document.getElementById("sliderValue4");
const slider5 = document.getElementById("mySlider5");
const output5 = document.getElementById("sliderValue5");
const output6 = document.getElementById("compositeScore");
var score1 = 5;
var score2 = 5;
var score3 = 5;
var score4 = 5;
var score5 = 5;

// Display the default slider value
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  score1 = this.value;
  output6.innerHTML = (score1 + score2 + score3 + score4 + score5)/10000;
};
slider2.oninput = function() {
    output2.innerHTML = this.value;
    score2 = this.value;
  output6.innerHTML = (score1 + score2 + score3 + score4 + score5)/10000;
};
slider3.oninput = function() {
    output3.innerHTML = this.value;
    score3 = this.value;
  output6.innerHTML = (score1 + score2 + score3 + score4 + score5)/10000;
};
slider4.oninput = function() {
    output4.innerHTML = this.value;
    score4 = this.value;
  output6.innerHTML = (score1 + score2 + score3 + score4 + score5)/10000;
};
slider5.oninput = function() {
    output5.innerHTML = this.value;
    score5 = this.value;
  output6.innerHTML = (score1 + score2 + score3 + score4 + score5)/10000;
};