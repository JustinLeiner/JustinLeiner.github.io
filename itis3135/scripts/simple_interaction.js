// Basic prompts
var name = window.prompt("Hi! What is your name? ", "John Doe");
var checkUp = window.prompt("Hey " + name + ", how are you doing? ", "Good");

// Variable declaration
var today = new Date();
var todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var todayTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// Mascot prompt
var mascot = alert("Today is " + todayDate + " and the time is: " + todayTime +".\n Jazzy Lion Enterprises welcomes you, " + name + "!" + " Were glad you are doing " + checkUp + "!");

/* Button implementations */
function joke(){
	return alert("What do you call a lion running a copy machine? \n\n A copycat! HAHAHAHA");
}

function jazzyLyricsMotivation(){
	return alert("My soul set on fire, become a lion, I am a lion");
}

function howToTameALion(){
	return alert("You tame a lion by purchasing Jazzy Lion products and services");
}

function paymentMethod(){
	return alert("Our preferred payment method is in meat, especially elk meat");
}

function contact(){
	return alert("Feel free to contact us anytime using a Lion roar!");
}




