let inquirer = require('inquirer');
let Letter = require('./Letter.js');

let Word = function(word) {
    this.wordArray = [];
    this.createArray = function() {
        let tempArray = word.split("");
        for (i = 0; i < tempArray.length; i++) {
            let letterNew = new Letter(tempArray[i]);
            this.wordArray.push(letterNew);
        }
    }
    this.stringReturn = function() {
        let displayString = "";
        for (i = 0; i < this.wordArraylength; i++) {
            let currentWord = this.wordArray[i]
            displayString += currentWord;
        }
        console.log(displayString);
    }
    this.callGuess = function(letter) {
        for (i = 0; i < this.wordArray.length; i++) {
            let currentWord = wordArray[i];
            currentWord.charCheck(letter);
        }
    }
}

module.exports = Word;