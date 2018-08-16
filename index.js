let inquirer = require('inquirer');
let Letter = require('./Letter');
let Word = require('./Word');

let testWord = new Word('test');

testWord.createArray();
console.log(testWord.wordArray);
testWord.stringReturn();
console.log(testWord.stringReturn());