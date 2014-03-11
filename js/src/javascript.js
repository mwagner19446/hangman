//Idenfity the Page Variables
var newGame = document.querySelector(".new-game");
var guessesLeft = document.querySelector(".guesses-left");
var game = document.querySelector(".new-game");
var gameWord = document.querySelector(".game-word");
var giveUp = document.querySelector(".give-up");
var inputText = document.querySelector("#letter");
var guessedLetter = document.querySelector(".guessed-letters")


var gameBegin = window.prompt("Would you like to play hangman? Y / N")
game
if(gameBegin.toLowerCase() === "y"){
  var userInput = window.prompt("Choose a category: foods / sports / games / music / movies")
  categoryToWord(userInput)
} else{
  window.location="http://www.youtube.com/watch?v=oY9qVhC3VPo";
};


// game.addEventListener("click", );
gameWord.innerText = userGame.wordGuess;

//Step 1:  User Selects a Category



//Step 2:  Update Accept Guesses
  //Step 1A:  Store Value 
  //Step 1B:  Determine if its the correct Letter
  //Step 1C:  Update the Screen 
  //Step 1D:  Determine if Game is Won

inputText.addEventListener("keyup",function(){
	var letter = inputText.value
	userGame.guessCorrect(letter)
  gameWord.innerText = userGame.wordGuess;
  guessesLeft.innerText = userGame.guessCount;
  guessedLetter.innerText = userGame.wrongLetterGuess.join()
	var outcome = userGame.determineGame()
    
    if(outcome === "Win"){
      gameWord.innerText = "You Win!"
      setTimeout(function(){
        newGame.addEventListener("mousedown", location.reload());
    },1000)
    }else if (outcome === "Lose"){
      gameWord.innerText = "You Lose!"
      setTimeout(function(){
        newGame.addEventListener("mousedown", location.reload());
    },1000)
    };

  inputText.value = ""
}); 

//In Progress
//Step 3:  User Starts New Game (NOTE:  Off the New Game and Quit Buttons)
// newGame.addEventListener("click",function(){
//   var userInput = prompt("Choose a category: foods / sports / games / music / movies")
// });


