$(document).ready(function(){
	
	var lang = sessionStorage.getItem("lang");
	var uname = sessionStorage.getItem("username");

	var theme = sessionStorage.getItem("theme");
	i18n.init({ lng: lang }, function(data) {
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