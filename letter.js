function Letter(actual) {
    this.actual = actual
    this.guessed = false;
    this.display = function () {
        if (this.guessed === true) {
            return this.actual
        }
        return "_";
    }
    this.check = function(userGuess){
        if (userGuess === this.actual)
        this.guessed = true;

    }
}




module.exports = Letter;
