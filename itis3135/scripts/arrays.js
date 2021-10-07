// Delcare arrays
const person = [];
const salary = [];

// Sets focus to addSalary button once the webpage is loaded
window.onload = function(){
	document.getElementById("salaryButton").focus();
} 

// Defines function addSalary
function addSalary(){

	// Prompts the user for a persons name and salary
	var personAdd = window.prompt("Enter the a persons name: ");
	var salaryAdd = window.prompt("Enter the salary of an individual: ");

	// Perfroms input validation
	if(personAdd.length != 0 && parseInt(salaryAdd)){
		// Adds the persons name and salary into their respective arrays
		person.push(personAdd);
		salary.push(salaryAdd);
	} else {
		// Throw error message if input is invalid
		window.alert("Invalid input! Please ensure you are entering a persons name for the first input and a persons salary in the second input.");
	}

	// Sets focus to addSalary button
	document.getElementById("salaryButton").focus();
}

// Defines function displayResults
function displayResults(){
	
	// Defines local variables
	var salarySum = 0;
	var count = 0;
	var salaryAverage = 0;

	// Calculates salarySum, which is used to calculate salaryAverage, using a for loop
	for (let i=0; i < salary.length; i++){
		salarySum += parseInt(salary[i]);
		count++;
	}

	// Calculates average
	salaryAverage = salarySum / count;

	// Outputs average salary and max salary
	window.alert("The average salary is: $" + salaryAverage);
	window.alert("The max is: $" + Math.max.apply(null, salary));
}

// Defines function displaySalary 
function displaySalary(){
	
	// References the resultsTable
	var table = document.getElementById("resultsTable");


	// For loop that iterates through both arrays and populates the table with information stored in the arrays
	for(let i=0; i < person.length; i++) {
		var row = table.insertRow();
		var employeeCell = row.insertCell();
		var salaryCell = row.insertCell();
		employeeCell.innerHTML = person[i];
		salaryCell.innerHTML = salary[i];
	}
}

// Lookever step 2 and 3 before submission