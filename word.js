var Letter = require("./letter.js");

function Word(answer) {
    this.letterObjectArray = [];
    for (var i = 0; i < answer.length; i++) {
        var letterObj = new Letter(answer[i]);
        this.letterObjectArray.push(letterObj);
    }

    this.convertToString = function () {
        var stringDisplay = " ";

        for (var j = 0; j < this.letterObjectArray.length; j++) {
            stringDisplay += this.letterObjectArray[j].display()
            stringDisplay += " "
        }

        return stringDisplay;


    }

    this.checkAllLetters = function () {
        for (var k = 0; k < this.letterObjectArray.length; k++) {
            this.letterObjectArray[k] += check();
        }

    }

}

module.exports = Word;

// var currentWord = new Word ('Science');

// console.log(currentWord);