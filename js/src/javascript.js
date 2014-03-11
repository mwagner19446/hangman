var userInput = prompt("Choose a category: foods / sports / games / music / movies")



var newGame = document.querySelector(".new-game");
var guessesLeft = document.querySelector(".guesses-left");
var game = document.querySelector(".new-game");
var gameWord = document.querySelector(".game-word");
var giveUp = document.querySelector(".give-up");
var inputText = document.querySelector("#letter");
var guessesLeft = document.querySelector(".guesses-left");


// newGame.addEventListener("click", location.reload())
game.addEventListener("click", categoryToWord(userInput));
gameWord.innerText = userGame.wordGuess;







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





