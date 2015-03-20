/* Functions for changing to a different html or selecting which functions should be run 
when the page is loaded
*/

function loadMainView() {
	/*generate_beverage.js*/
	init2(); 
	welcomeMessage(); 
	initiateBeerAdding(); 
	createBeerView(); 
	getUserCredit();
	loadFavs();

	/*transitions.js*/
	favouriteAnimation();
	beerviewAnimation();

	/*logout_timer.js*/
	//setLogoutTimer();
}

function loadUserManagement() {
	/*header.js*/
	welcomeMessage(); 
	getUserCredit(); 

	/*logout_timer.js*/
	//setLogoutTimer();
}

function loadEditUser() {
	/*user_management.js*/
	createDropDown();

	/*header.js*/
	welcomeMessage(); 
	getUserCredit();

	/*logout_timer.js*/
	//setLogoutTimer();
}

function loadAddUser() {
	/*header.js*/
	welcomeMessage(); 
	getUserCredit(); 

	/*logout_timer.js*/
	//setLogoutTimer();
}

function portMainView() {
   window.location.href = "mainview.html";
}

function portUserManagement() {
	window.location.href = 'user_management.html';
}

function portEditUser() {
	window.location.href = "edit_user.html";
}

function portAddUser() {
	window.location.href = "add_user.html";
}

function stockManagementButton() {
	window.location.href = "stock_management.html";
}

function goBackButton() {
	window.location.href ="mainview.html";
}