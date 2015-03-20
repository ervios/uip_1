/* File has functions for the header, such as displaying the correct user's First name when logged in,
and their credit as well as deleting the sessionStorage data for the username and password when you logout.*/


function welcomeMessage() {

	var wmessage = "";
	var db_url = getDBData('iou_get');
	
	$.getJSON(db_url, function(data){
    	console.log(data);
    	$("#fname").html(data['first_name']);
    	
   		$.each(data.payload, function() {
   			$("#fname").append(this['first_name']+ "!" + "&#160;");
   		});

	});

}

function getUserCredit() {
	
	var db_url = getDBData('iou_get');
	
	$.getJSON(db_url, function(data){
    	console.log(data);
   		$.each(data.payload, function() {
   			$("#credit").append(this['assets']);
   		});
	});
	
}

//Moved to logout_timer.js
/*
function logout() {
	sessionStorage.setItem("username", "");
	sessionStorage.setItem("password", "");
	localStorage.setItem("username", "");
    localStorage.setItem("password", "");
	window.location.href = "login.html";
}
*/


