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
const output7 = document.getElementById("letterScore");

var totalScore = 25;
var letter = "C";

// Display the default slider value
output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;

function updateScore() {
    totalScore = parseInt(slider.value) + parseInt(slider2.value) + parseInt(slider3.value) + parseInt(slider4.value) + parseInt(slider5.value);
    if (totalScore >= 40) {
        letter = "A";
    } else if (totalScore >= 30) {
        letter = "B";
    } else if (totalScore >= 20) {
        letter = "C";
    } else if (totalScore >= 10) {
        letter = "D";
    } else {
        letter = "F";
    }
};

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  updateScore();
  output6.innerHTML = totalScore;
  output7.innerHTML = letter;
};
slider2.oninput = function() {
    output2.innerHTML = this.value;
    updateScore();
  output6.innerHTML = totalScore;
  output7.innerHTML = letter;
};
slider3.oninput = function() {
    output3.innerHTML = this.value;
    updateScore();
  output6.innerHTML = totalScore;
  output7.innerHTML = letter;
};
slider4.oninput = function() {
    output4.innerHTML = this.value;
    updateScore();
  output6.innerHTML = totalScore;
  output7.innerHTML = letter;
};
slider5.oninput = function() {
    output5.innerHTML = this.value;
    updateScore();
  output6.innerHTML = totalScore;
  output7.innerHTML = letter;
};