/*
	This file handles the switch when you want to change between languages on the language selection button
	The code is currently a bit old and could be changed now that the button just has 1 image instead of two that it had to
	switch between (like the theme-changing button has).

	It also does a check which language you picked during your login and which theme you picked so it will display the
	chosen theme and language.
*/


$(document).ready(function(){
	
	/*This is just the init upon loading a page where it checks what HAS been chosen 
	so it doesn't reset it to default. The click'functions below are the ones that change
	between language*/

	var lang = sessionStorage.getItem("lang");
	var uname = sessionStorage.getItem("username");

	var theme = sessionStorage.getItem("theme");
	i18n.init({ lng: lang }, function(data) {

		/* We want to hide the profile button if you're not an admin or bartender so this was one way of doing so*/
		if (uname != "jorass") {
			$("#profile-button").hide();
		}
		$(".message").i18n();
		$(".settings").i18n();
		$(".form_user").i18n();
		$(".buttons").i18n();
		$(".search_txt").i18n();
		$("#fname").val(uname);
		$("#language-button").val(lang);
		
		if (theme == "theme1") {
			
			$(".background-image").css({"background-image": "url(images/bg3.jpg)"});
			$("#change-theme").attr("src","images/bg2.jpg");
			$("#change-theme").val("theme1");
		}
		else if (theme == 'theme2') {

			$(".background-image").css({"background-image": "url(images/bg2.jpg)"});
			$("#change-theme").attr("src","images/bg3.jpg");
			$("#change-theme").val("theme2");
		}
	  				
	});

	$("#language-button").click(function() {
	
		if ($("#language-button").val() == 'sv') {
			i18n.init({ lng: "en" }, function(data) {
				$(".message").i18n();
  				$(".settings").i18n();
  				$(".form_user").i18n();
  				$(".buttons").i18n();
  				$(".search_txt").i18n();
  			});
			$("#language-button").val('en');
			sessionStorage.setItem("lang", 'en');
		} 
		else if ($("#language-button").val() == 'en') {
			i18n.init({ lng: "sv" }, function(data) {
  				$(".message").i18n();
  				$(".settings").i18n();
  				$(".form_user").i18n();
  				$(".buttons").i18n();
  				$(".search_txt").i18n();
			});
			$("#language-button").val('sv');
			sessionStorage.setItem("lang", 'sv');
		}
	});
});	