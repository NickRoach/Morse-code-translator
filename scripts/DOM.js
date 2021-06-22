import {translator} from "./translate.js";

document.getElementById("letters").addEventListener("input", function () {
  displayText("morse", translator(event.target.value, "letters"));
});

document.getElementById("morse").addEventListener("input", function () {
  displayText("letters", translator(event.target.value, "morse"));
});


//Displays the output
function displayText(toUpdate, outPut) {
  if(toUpdate === "letters") { 
    document.getElementById("letters").value = outPut[0];
    if (outPut[1] === "-1") { //if an unsupported character has been entered
      document.getElementById("morse").value = document.getElementById("morse").value.slice(0,-1); //slice of unsupported character
    }
  }
  if(toUpdate === "morse") {
    document.getElementById("morse").value = outPut[1];
    if (outPut[0] === "-1") {  //if an unsupported character has been entered
      document.getElementById("letters").value = document.getElementById("letters").value.slice(0,-1); //slice of unsupported character
    }
  }
}