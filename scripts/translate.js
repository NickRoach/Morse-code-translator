function translator(input, id){
    let wordsArray = [];
    let morseArray = [];
    let lettersArray = [];
    let morseWords = [];
    let lettersString = "";
    let morseString = "";
    console.clear();
    
    //if something has been modified in the letters box
    if(id === "letters") {
        lettersString = input;
                
        //check to make sure the most recently input character is supported
        const myRE = /[a-z]|[A-Z]|[0-9]|[ .,?'!]/;
        if(!myRE.test(input[input.length-1])){
            lettersString = lettersString.slice(0, -1); //this removes the unsupported character that has just been input so that it never displays
            displayText("letters", lettersString);
            alert(`The character \"${input[input.length-1]}\" is not supported`);
        }
        
        lettersString = lettersString.toLowerCase(); //uppercase and lowercase have the same morse codes
        wordsArray = lettersString.split(" ");
        // console.log("lettersArray: " +lettersArray);
        
        wordsArray.forEach(word => {
            let characters = word.split("");

            characters.forEach(char => {
                morseArray.push(cypher[char] + " "); //add one space between letters
            });

            morseArray.push("   "); //add three more spaces between words (there is already one after the final letter)
        });
        
        morseString = morseArray.join("");
        morseString = morseString.slice(0, -4); //remove the four trailing spaces
        displayText("morse", morseString);
    }



    //if something has been modified in the Morse Code box
    if(id === "morse") {
        morseString = input;

        //check to make sure the most recently input character is either a dot, dash or space
        const myRE = /[.\- ]/;
        if(input.length > 0 && !myRE.test(input[input.length-1])){
            morseString = morseString.slice(0, -1); //this removes the unsupported character that has just been input so that it never displays
            displayText("morse", morseString);
            
            alert("Please enter only the characters \".\", \"-\" and \"space\"");
        }

        if (morseString.slice(-1) === " " && morseString.slice(-2) != "  "){
            console.log("|" + morseString + "|");
            morseString = morseString + "   ";
            console.log("|" + morseString +"|");
        }




        morseWords = morseString.split("    "); //split the morse code into words

        morseWords.forEach(word => {
            let characters = word.split(" "); //split the words into Morse character codes

            characters.forEach(char => {
                if(reverseCypher[char]){
                    lettersArray.push(reverseCypher[char]);
                }
                else lettersArray.push("[ ]");
            });

            lettersArray.push(" "); //add a space between the words
        });

        lettersString = lettersArray.join("");
       
        lettersString = lettersString.slice(0, -1); //remove the trailing space

        console.log(morseString.slice(-4));

        displayText("letters", lettersString);
    }
}

// export {translator}