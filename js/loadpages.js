function loadMainView() {
	init2(); 
	var div = $("#hide-show");
	    div.animate({height: '10px', opacity: '0.2'}, "slow");
	    div.animate({height: '20px', opacity: '0.4'}, "slow");
	    div.animate({height: '40px', opacity: '0.6'}, "slow");
	    div.animate({height: '60px', opacity: '1.0'}, "slow");
	
	var beerv = $("#beerblock");
	    beerv.animate({height: '100px', opacity: '0.4'}, "slow");
	   	beerv.animate({width: '50px', opacity: '0.4'}, "slow");
	   	beerv.animate({height: '270px', opacity: '0.5'}, "slow");
	   	beerv.animate({width: '141px', opacity: '0.6'}, "slow");
	    beerv.animate({width: '772px', opacity: '0.7'}, "slow");
	    beerv.animate({height: '630px', opacity: '1.0'}, "slow");

	var backg = $(".background-image");
	    //backg.animate({filter: 'blur(5px)'}, "slow");
	    //backg.animate({-webkit-filter: 'blur(3px)'}, "slow");
/*
	var imgBtn = $(".imgbutton-style");
	    imgBtn.animate({height: '100px', opacity: '0.4'}, "slow");

	var btnStyle = $(".button-style");
	    btnStyle.animate({height: '100px', opacity: '0.4'}, "slow");
*/
	welcomeMessage(); 
	initiateBeerAdding(); 
	createBeerView(); 
	getUserCredit(); 
	loadFavs();
	//setLogoutTimer();
}

function loadUserManagement() {
	
}

function setLoaded() {
	sessionStorage.setItem("loaded", "1");
}

function portMainView() {
   window.location.href = "mainview.html";
}
