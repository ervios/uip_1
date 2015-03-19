
var searchTxt;

function setSearchTxt(tmpSearch) {
	//alert(tmpSearch);
	searchTxt = tmpSearch;
}

function getSearchTxt() {
	return searchTxt;
}


$(document).ready(function(){

	//$("#search-btn").hide();


	$("#search-field").click(function() {
		
		
		$("#search-field").animate({
	        opacity: '1.0',
	        height: '60px',
	        width: '380px',
	        fontSize: '35px',
	        marginBottom: '1px'
    	} , "slow");
    	$("#search-btn").animate({
	        opacity: '1.0',
	        height: '60px',
	        fontSize: '35px',
	        marginBottom: '2px'
    	} , "slow");

    	if ($("#search-field").val() == "Search...") {
			$("#search-field").val("");
		}
	});

	$("#search-field").blur(function() {
		$("#search-field").animate({
	        opacity: '0.5',
	        height: '50px',
	        width: '176px',
	        fontSize: '25px'
    	} , "slow");
    	$("#search-btn").animate({
	        opacity: '0.3',
	        height: '30px',
	        width: '174px',
	        marginLeft: '2px',
	        fontSize: '15px'
    	} , "slow");

    	if ($("#search-field").val() != "") {
			setSearchTxt($("#search-field").val());
		} else {
			$("#search-field").val("Search...");
			setSearchTxt($("#search-field").val());
		}
	});

	$("#search-btn").click(function() {
		
		if(getSearchTxt() != "Search..." && getSearchTxt() != undefined) {
			stringSearch(getSearchTxt());
			setSearchTxt($("#search-field").val(""));
		}
		
	});

		   $("#change-theme").click(function(){
	   
      if ($("#change-theme").val() == "theme1") {

         $(".background-image").css({"background-image": "url(images/bg2.jpg)"});
         $("#change-theme").attr("src","images/bg3.jpg");
         sessionStorage.setItem("theme", "theme2");
         $("#change-theme").val("theme2");
      }

      else if ($("#change-theme").val() == 'theme2') {

         $(".background-image").css({"background-image": "url(images/bg3.jpg)"});
         $("#change-theme").attr("src","images/bg2.jpg");
         sessionStorage.setItem("theme", "theme1");
         $("#change-theme").val("theme1");
      }

    });

      $("#search_default").click(function() {
        $("#show-all").animate({width: "100%" });
        $("#alcohol").animate({width: "80%" });
        $("#price").animate({width: "80%" });
        $("#alcohol_options").css({"display": "none"});    
        $("#price_options").css({"display": "none"});            
      }); 

      $("#search_alcohol").click(function() {
        $("#alcohol").animate({width: "100%" });
        $("#show-all").animate({width: "80%" });
        $("#price").animate({width: "80%" });
        $("#alcohol_options").css({"display": ""});  
        $("#price_options").css({"display": "none"});              
      });      

      $("#search_price").click(function() {
        $("#price").animate({width: "100%" });
        $("#alcohol").animate({width: "80%" });
        $("#show-all").animate({width: "80%" });
        $("#price_options").css({"display": ""});
        $("#alcohol_options").css({"display": "none"});                          
      });

      $("#zeroPointZero").click(function() {
        $("#firstFirst").animate({width: "90%" });
        $("#firstSecond").animate({width: "70%" });
        $("#firstThird").animate({width: "70%" });          
      }); 

      $("#threePointOne").click(function() {
        $("#firstSecond").animate({width: "90%" });
        $("#firstFirst").animate({width: "70%" });
        $("#firstThird").animate({width: "70%" });          
      });       

      $("#sixPointFive").click(function() {
        $("#firstThird").animate({width: "90%" });
        $("#firstSecond").animate({width: "70%" });
        $("#firstFirst").animate({width: "70%" });          
      }); 

      $("#lessThan16").click(function() {
        $("#secondFirst").animate({width: "90%" });
        $("#secondSecond").animate({width: "70%" });
        $("#secondThird").animate({width: "70%" });
      });

      $("#16to30").click(function() {
        $("#secondSecond").animate({width: "90%" });
        $("#secondFirst").animate({width: "70%" });
        $("#secondThird").animate({width: "70%" });             
      });

      $("#moreThan30").click(function() {
        $("#secondThird").animate({width: "90%" });
        $("#secondSecond").animate({width: "70%" });
        $("#secondFirst").animate({width: "70%" });             
      });  


	
});
