var inquirer = require ("inquirer");
var Word = require("./word.js");


var wordBank = ["Science", "Math", "Reading", "Gym", "Nap", "Lunch"]

var SelectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var numberOfGuesses = 13;

function playGame(selectedWord) {

    var answer = new Word(selectedWord);

    console.log(answer.convertToString());

    inquirer.prompt([
        {
            type:"input",
            name:"choice",
            message: "Guess a letter: "
        }
    ]).then(function(error, response){
        if (error) throw error;
        answer.checkAllLetters(response.choice)
    })

}

playGame(SelectedWord);

