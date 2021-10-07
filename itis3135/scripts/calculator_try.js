function add(){

var sum = 0;

	while(userInput != "stop" || userInput != "Stop") {
		var userInput = window.prompt("Enter a nuber you would like to add or enter stop to quit adding numbers:");
			if (userInput == "stop" || userInput == "Stop") {
				break;
			}
			else{
				userInput = parseInt(userInput);
				sum = sum + userInput;
			}
	}

	window.alert("The result is: " +sum); 
}

function subtract(){


var subtract = 0;

var initialInput = window.prompt("Enter a number you would like to subtract from: ");

	while(userInput != "stop" || userInput != "Stop") {
		var userInput = window.prompt("Enter a number you would like to subtract or enter stop to quit subtracting numbers: ");
			if (userInput == "stop" || userInput == "Stop"){
				break;
			}
			else{
				userInput = parseInt(userInput);
				initialInput = initialInput - userInput;
			}
	}

	window.alert("The result is: " +initialInput); 
}


function multiply(){

var multiply = 1;

	while(userInput != "stop" || userInput != "Stop") {
		var userInput = window.prompt("Enter a nuber you would like to add or enter stop to quit multiplying numbers:");
			if (userInput == "stop" || userInput == "Stop"){
				break;
			}
			else{
				userInput = parseInt(userInput);
				multiply = multiply * userInput;
			}
	}

	window.alert("The result is: " +multiply); 
}


function divide(){

var subtract = 0;

var initialInput = window.prompt("Enter a number you would like to divide: ");

	while(userInput != "stop" || userInput != "Stop") {
		var userInput = window.prompt("Enter a number you would like to divide by or enter stop to quit dividing numbers: ");
			if (userInput == "stop" || userInput == "Stop"){
				break;
			}
			else{
				userInput = parseInt(userInput);
				initialInput = initialInput / userInput;
			}
	}

	window.alert("The result is: " +initialInput); 
}

