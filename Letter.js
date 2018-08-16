let inquirer = require('inquirer');

let Letter = function(letter) {
    this.character = letter;
    this.guessed = false;
    this.toString = function() {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    };
    this.charCheck = function(char) {
        if (char === this.character) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;