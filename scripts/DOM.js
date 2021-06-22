import {translator} from "./translate.js";

document.getElementById("letters").addEventListener("input", function () {
  displayText("morse", translator(event.target.value, "letters"));
});

document.getElementById("morse").addEventListener("input", function () {
  displayText("letters", translator(event.target.value, "morse"));
});


//Displays the output
function displayText(target, outPut) {
  document.getElementById(target).value = outPut;
}