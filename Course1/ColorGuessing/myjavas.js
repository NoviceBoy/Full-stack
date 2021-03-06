var color;
var colorList = [ "blue", "cyan", "gold", "gray", "green",
				  "magenta", "orange", "red", "white", "yellow" ];
var finished = false;
var noOfGuesses = 0;

var randomColor = colorList[ parseInt( Math.random() * 11 ) ];

function doGame(){
	alert( "Hint debug: " + randomColor);
	while( !finished ){
		guess = prompt( "I am thinking of one of these colors:\n\n" 
						+ colorList.join() + 
						"\n\nWhat color am I thinking of");
		finished = checkGuess(guess);
		noOfGuesses += 1;
		if( finished == true ) {
			alert( 	"Congratulations!! You guessed the color\n\n" +
					"It took you " + noOfGuesses + " guesses to finish the game\n\n" + 
					"You can see the color in the background");
			myBody=document.getElementsByTagName("body")[0];
			myBody.style.background=randomColor;
		}
	}
}

function checkGuess( guess ){
	colorIndex = colorList.indexOf( guess );
	if( colorIndex == -1 ){
		alert( "Sorry I dont recognize your color");
	} else {
		if( guess > randomColor ){
			alert( 	"Sorry your guess is not correct\n\n"+
					"Hint: Your color is alphabetically higher than mine\n\n"+
					"Please try again");
		} else if ( guess < randomColor ){
			alert( 	"Sorry your guess is not correct\n\n"+
				   	"Hint: Your color is alphabetically lower than mine\n\n"+
				   	"Please try again");
		} else {
			return true;
		}

	}
	return false;
}