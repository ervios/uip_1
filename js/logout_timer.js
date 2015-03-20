/*This file contains a way to logout the user after 3min or whatever
the time is that you want. Currently commented out because it got annoying during
the building of the page.*/

function setLogoutTimer() {
	var sec = 1000;
	var min = 60*sec; //1min

	var interval = 3*min; //3min
	 
	var timer = setTimeout(function(){logout()},interval);

	
	/*
	// On Mouse Move
	document.addEventListener('mousemove', function(){
		console.log("mousemove");
		setTimeout(function(){logout()},interval);
		
	});
	 
	// On Click
	document.addEventListener('click', function(){
		console.log("click");
		setTimeout(function(){logout()},interval);
	});
	 
	// On Key Press
	document.addEventListener('keypress', function(){
		console.log("keypress");
		setTimeout(function(){logout()},interval);
	});

	*/
}
 
function logout() {
	sessionStorage.setItem("username", "");
	sessionStorage.setItem("password", "");
	window.location.href = "login.html";
}