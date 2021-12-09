/* Referenced Demo assignment to complete this */

$(document).ready(function() {
	
	//regex for email id
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	$("#reservation_form").submit(
		function(event) {
			var isValid = true;

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			// validate the email entry with a regular expression
			var email = $("#email").val().trim();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email); 
			
			// validate the phone number
			var phone = $("#phone").val().trim();
			if (phone == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);
			
			
			if (isValid == false) {
				event.preventDefault();				
			}

			window.open('mailto:cjbeckstein@gmail.com?subject=Contact Request&body= Hi! my name is '+name + ' and I would like to request your services. Please reach me at: ' +email + ' or: ' +phone);

		} 
	);	

}); // end ready