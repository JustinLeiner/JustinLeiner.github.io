var coffeeItems = ["Espresso", "Cappuccino"];
var coffeeCosts = ["1.95", "3.45"];
var coffeeDetails = ["Delicious Espresso. Wanna try it?", "Delicous Cappuccino."];
var orderTotal = 0;
var orderItems;

window.onload = function() {
	var array = document.getElementByTagName("img");

	for (var i = 0; i < array.length; i++) {
		array[i].onclick = pic;
		console.log(a[i]);
	}		
}


var pic = function(){

	var image = this.id;
	console.log(image);

	for (i = 0; i < items.length; i++) {
		if (image == coffeeitems[i]) {
			cost = coffeeCosts[i];
			name = coffeeItems[i];
			details = coffeeDetails[i];
			document.getElementById("order").innerHTML += cost + " : " + name + " : " + details;
			orderTotal += parseFloat(cost);
			document.getElementById("total").innerHTML ="Total: " + orderTotal.toFixed(2);
		}
	}
}

 // end onload