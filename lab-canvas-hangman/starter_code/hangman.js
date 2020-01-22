class Hangman {
  constructor (words){
    this.words = ['banana','nano', 'bitcoin'];
    this.secretWord = '';
    this.letters = [];
    this.guessedLetter = '';
    this.errorsLeft = 10;
  }
  
  getWord(){
    let w = 0;
    w = Math.floor(Math.random() * this.words.length);
    return this.words[w];
  }

  checkIfLetter(keyCode) {
   if(keyCode > 64 && keyCode < 91 || keyCode > 96 && keyCode < 123 ){
     return true;
   }else {return false}
  }

  checkClickedLetters(key) {
    let wo = this.letters;
    if(wo.includes(key)){
      return false
    }else {return true};
  }

  addCorrectLetter(i) {
    this.guessedLetter += this.secretWord[i].toUpperCase();
    this.checkWinner();
  }

  addWrongLetter(letr) {
    if(this.secretWord.toUpperCase().indexOf(letr.toUpperCase()) === -1) {
      this.errorsLeft -= 1;
      this.checkGameOver();
    }
  }

  checkGameOver() {
    return this.errorsLeft < 1;
  }

  checkWinner() {
    return this.guessedLetter.length === this.secretWord.length;
  }

}

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {
  if(checkIfLetter(e.keyCode)) {
    this.letters.push(e.char);
  }
};
