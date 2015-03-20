var errorNoInput;
var errorNoUser;
var errorNoMatch;

/* This functions is called on the  "Log in"/"Logga in" button is clicked, 
   it will check that the user added something into the form so it may be send
   to the db to fetch accurate data.
   An ajax call is being used instead of normal xmlHttpReq or getJSON so we may use the "success:" part to see if it is a
   correct user.*/
function validateLogin() {

   var errors = "";
   sessionStorage.setItem("username", "");
   sessionStorage.setItem("password", "");

   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if (username == "" || password == "") {
      errors = errorNoInput;
      $("#error-messages").html(errors);
   } 
   else if (username == password)  {

      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      /* Create the DB Link for iou_get */
      var db_link = getDBData('iou_get');
     
      $("#submit").fadeOut("fast");
      
      $.ajax(db_link, 
         {
            type: "GET",
            dataType: 'json',
            success: function(data) {
               if (data.type[0] == 'e') {
                  errors = errorNoUser;
                  $("#error-messages").html(errors);
                  $("#submit").fadeIn("fast");
               } else if (data.type[0] == 'i') {
                  var backg = $("body");
                  backg.animate({opacity: '0.1'}, "slow");
                  $("#loginDiv").fadeOut("slow");
                  setTimeout(function(){portMainView()},500);
               }
         }
      });

   } 
   else {
      errors = errorNoMatch;
      $("#error-messages").html(errors);
   }
}

/* .ready() Wraps in code so it won't be able to run until the whole page is loaded,
   this is useful for buttons that you don't want to function until the whole page is loaded
   and you might not have all the elements you need.*/

$(document).ready(function() {

   /* SET THE INITIAL/STANDARD LANGUAGE AND "THEME" OF THE SITE,
    --> so if the user doesn't change to English at login page it will be Swedish,
    may be changed later of course once logged in.
   */
   var lang = 'sv';
   var theme = 'theme1';
   $("#change-theme").val(theme);
   sessionStorage.setItem("lang", lang);
   sessionStorage.setItem("theme", theme);

   i18n.init({ lng: lang }, function(data) {
               $(".login").i18n();
               $("#language-button-login").val(lang);
               errorNoInput = data("login.error_message_no_input");
               errorNoUser = data("login.error_message_no_user");
               errorNoMatch = data("login.error_message_no_match");
   });

   $("#language-button-login").click(function() {
   
      if ($("#language-button-login").val() == 'sv') {
         i18n.init({ lng: "en" }, function(data) {
            errorNoInput = data("login.error_message_no_input");
            errorNoUser = data("login.error_message_no_user");
            errorNoMatch = data("login.error_message_no_match");
            $(".login").i18n();
            $("#error-messages").html("");
            sessionStorage.setItem("lang", "en");
         });
         $("#language-button-login").val('en');
      } 
      else if ($("#language-button-login").val() == 'en') {
         i18n.init({ lng: "sv" }, function(data) {
            errorNoInput = data("login.error_message_no_input");
            errorNoUser = data("login.error_message_no_user");
            errorNoMatch = data("login.error_message_no_match");
            $(".login").i18n();
            $("#error-messages").html("");
            sessionStorage.setItem("lang", "sv");
         });
         $("#language-button-login").val('sv');
      }
   });

   $("#change-theme").click(function(){ 
      if ($("#change-theme").val() == "theme1") {
         $("body").css({"background-image": "url(images/bg2.jpg)"});
         $("#change-theme").attr("src","images/bg3.jpg");
         sessionStorage.setItem("theme", "theme2");
         $("#change-theme").val("theme2");
      }
      else if ($("#change-theme").val() == 'theme2') {
         $("body").css({"background-image": "url(images/bg3.jpg)"});
         $("#change-theme").attr("src","images/bg2.jpg");
         sessionStorage.setItem("theme", "theme1");
         $("#change-theme").val("theme1");
      }
   });
});

