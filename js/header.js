function welcomeMessage() {

	var wmessage = "";
	//$("#fname").html(", " + sessionStorage.getItem("username"));
	//$("html, body").animate({ scrollTop: "300px" });

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

function logout() {
	sessionStorage.setItem("username", "");
	sessionStorage.setItem("password", "");
	localStorage.setItem("username", "");
    localStorage.setItem("password", "");
	window.location.href = "login.html";
}


