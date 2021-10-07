
window.onload = function () {

	/Prompts the user to enter an integer/
	var userInput = window.prompt("Hi! Welcome back to Jazzy Lion Enterprises. Could you please enter a number in the range from 0-10:  ", "1");

	/Validates user entry by calling validateEntry and passing userInput/
	var validEntry = validateEntry(userInput);

	/Calls getShape, passes validEntry, returns a string of text informing the using of a polygon based off the inputted int/
	getShape(validEntry);
};

/Defines getShape/
function getShape(shapeNum) {

var stringPolygon = "";

/Switch case used to assign the proper polygon name based off the inputted int/	
switch(shapeNum) {
	case 0:
		stringPolygon = "No such polygon";
		break;
	case 1:
		stringPolygon = "Henagon";
		break;
	case 2: 
		stringPolygon = "Digon";
		break;
	case 3: 
		stringPolygon = "Trigon";
		break;
	case 4: 
		stringPolygon = "Tetragon";
		break;
	case 5: 
		stringPolygon = "Pentagon";
		break;
	case 6:
		stringPolygon = "Hexagon";
		break;
	case 7:
		stringPolygon = "Heptagon";
		break;
	case 8: 
		stringPolygon = "Octagon";
		break;
	case 9:
		stringPolygon = "Enneagon";
		break;
	case 10:
		stringPolygon = "Decagon";
		break;
}

/Returns polygon message/
return alert("Your shape is a " + stringPolygon);


}

/Defines validateEntry/
function validateEntry(userInput) {

	/Variable declaration/
	var isValid = true;

	/Do while loop that continues to prompt the user until they enter valid input/
	do {
		if (userInput >= 0 && userInput <= 10) {
			input = parseInt(userInput);
			Math.abs(input);
			Math.ceil(input);
			isValid = true;
			return input;

		} else {
			isValid == false;
			window.onload();
		}	
} while (isValid == false);

}