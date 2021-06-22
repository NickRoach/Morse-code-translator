import {translator} from "./translate.js";

//Adds event listeners for all elements with the classname textbox and makes them call the function "translator"
for (let i = 0; i < document.getElementsByClassName("textbox").length; ++i) {
  document
    .getElementsByClassName("textbox")
    [i].addEventListener("input", function () {
      if(event.target.id = "letters"){
        displayText("morse", translator(event.target.value, event.target.id));
      }
      if(event.target.id = "morse"){
        displayText("letters", translator(event.target.value, event.target.id));
      }
      
    });
}

//Displays the output
function displayText(target, outPut) {
  document.getElementById(target).value = outPut;
}
