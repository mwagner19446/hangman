var userInput = prompt("Choose a category: foods / sports / games / music / movies")

var guessesLeft = document.querySelector(".guesses-left");


var game = document.querySelector(".new-game");
game.addEventListener("click", categoryToWord(userInput));

var gameWord = document.querySelector(".game-word");
gameWord.innerText = userGame.wordGuess;



var inputText = document.querySelector("#letter");
var guessesLeft = document.querySelector(".guesses-left");
inputText.addEventListener("keyup",function(){
	var letter = inputText.value
	userGame.guessCorrect(letter)
  gameWord.innerText = userGame.wordGuess;
  guessesLeft.innerText = userGame.guessCount;
	var outcome = userGame.determineGame()
    
    if(outcome === "Win"){
      gameWord.innerText = "You Win!"
    }else if (outcome === "Lose"){
      gameWord.innerText = "You Lose!"
    };

  inputText.value = ""
}); 




