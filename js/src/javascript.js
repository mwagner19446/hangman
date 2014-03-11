var userInput = prompt("Choose a category: foods / sports / games / music / movies")

var game = document.querySelector(".new-game");
game.addEventListener("click", categoryToWord(userInput));

var gameWord = document.querySelector(".game-word");
gameWord.innerText = userGame.wordGuess;



var inputText = document.querySelector("#letter");
inputText.addEventListener("keyup",function(){
	var letter = inputText.value
	userGame.guessCorrect(letter)
	inputText.value = ""
}); 




