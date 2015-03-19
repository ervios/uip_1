
function userManagement() {
	 window.location.href = 'user_management.html';
}

function editUserButton() {
	window.location.href = "edit_user.html";
}

function addUserButton() {
	window.location.href = "add_user.html";
}

function goBackButton() {
	window.location.href ="mainview.html";
}


var users =[];


function addNewUser(fname, lname, uname, pass, email, phone) {
	 	
 	var db_link = getDBData('user_edit');
 	
 	db_link += "&new_username="
 			+ uname
 			+ "&new_password="
 			+ pass
 			+ "&first_name="
 			+ fname
 			+ "&last_name="
 			+ lname
 			+ "&email="
 			+ email
 			+ "&phone="
 			+ phone;

 	alert(db_link);

 	$.ajax( db_link, 
 		{
    	dataType: 'json',
    	success: function(data) {
    		console.log(data);
    		$("ul").append(
    			"<li>ADDED USER!<br> " 
   				+ uname
   				+ "</li><li>First Name: "
   				+ fname
   				+ "</li><li>Last Name: "
   				+ lname
   				+ "</li><li>Password: "
   				+ pass
   				+ "<br>-------"
   			);
 		}
 	});
 	
}

function validateInput() {

	var check = 0;

	var fname 	= document.getElementById("firstname").value;
	var lname 	= document.getElementById("lastname").value;
	var uname 	= document.getElementById("username").value;
	var pass 	= document.getElementById("password").value;
	var email 	= document.getElementById("email").value;
	var phone 	= document.getElementById("phone").value;

	if(fname !== "" && fname!== 0) {
		check += 1;
	}
	if(lname !== "" && lname!== 0) {
		check += 1;
	}
	if(uname !== "" && uname!== 0) {
		check += 1;
	}
	if(pass !== "" && pass!== 0) {
		check += 1;
	}
	if(email !== "" && email!== 0) {
		check += 1;
	}
	if(phone !== "" && phone!== 0) {
		check += 1;
	}
	else {
		alert("smthing empty");
	}

	if(check == 6) {
		alert(check);
		addNewUser(fname, lname, uname, pass, email, phone);
	}
	
}




function getAllUsers() {

	var db_link = getDBData('iou_get_all');
	
	$.getJSON(db_link, function(data) {
   		console.log(data);
   		$.each(data.payload, function() {
   			$("ul").append("<li>assets: " 
   							+ this['assets']
   							+ "</li><li>First Name: "
   							+ this['first_name']
   							+ "</li><li>Last Name: "
   							+ this['last_name']
   							+ "</li><li>User Name: "
   							+ this['username']
   							+ "<br>-------"
   							);
   		});
	});
}

function animation() {
	// $("#container").animate({left: '250px'});
}
function httpGet(theUrl) {
    
    var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
    return xmlHttp.responseText;
}


	function getAllUserInfo() 
{
    var completeArray= [];
    users = [];
    var userNames = [];
    var userLastNames = [];
    var userAssets = [];
    var db_link = getDBData('iou_get_all');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
    for(i = 0; i < obj.payload.length; i++) 
    {
        if(obj.payload[i].username) 
        {
            users.unshift(obj.payload[i].username);
        }
        if(obj.payload[i].first_name) 
        {
            userNames.unshift(obj.payload[i].first_name);
        }
        if(obj.payload[i].last_name) 
        {
            userLastNames.unshift(obj.payload[i].last_name);
        }
        if(obj.payload[i].assets) 
        {
            userAssets.unshift(obj.payload[i].assets);
        }
    }
    
    for (var i = users.length - 1; i >= 0; i--) {
        completeArray[i] = {   
                    "username": users[i],
                    "password": users[i],
                    "first_name":  userNames[i], 
                    "last_name": userLastNames[i],
                    "assets": userAssets[i]
                    };
            
    }
    console.log(completeArray);
    return completeArray;
}

function createDropDown() {

  var select1 = '<select id="mySelect">';
  var select2 = '</select>';

  users = getAllUserInfo();
  //alert(users[0].username); 
var options = "";

    for (var i = 0; i < users.length; i++) {
        options += '<option value="'
                + i + '">'
                +users[i].username +'</option>';
    }

   //alert(options);


  $("#mySelect").html(options);

}



$(document).ready(function() {

  $('#mySelect').on('change', function() {
    var value = $(this).val();
      
      $("#firstname").val(users[value].first_name);
      $("#lastname").val(users[value].last_name);
      //$("#email").val(users[value].email);
      //$("#phone").val(users[value].phone);
      $("#username").val(users[value].username);
      $("#password").val(users[value].password);

  });
});




/* 
function getAllUserInfo() 
{
    var completeArray= [];
    var users = [];
    var userNames = [];
    var userLastNames = [];
    var userAssets = [];
    var db_link = getDBData('iou_get_all');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
    for(i = 0; i < obj.payload.length; i++) 
    {
        if(obj.payload[i].username) 
        {
            users.unshift(obj.payload[i].username);
        }
        if(obj.payload[i].first_name) 
        {
            userNames.unshift(obj.payload[i].first_name);
        }
        if(obj.payload[i].last_name) 
        {
            userLastNames.unshift(obj.payload[i].last_name);
        }
        if(obj.payload[i].assets) 
        {
            userAssets.unshift(obj.payload[i].assets);
        }
    }
    
    for (var i = users.length - 1; i >= 0; i--) {
        completeArray[i] = {   
                    "username": users[i],
                    "password": users[i],
                    "first_name":  userNames[i], 
                    "last_name": userLastNames[i],
                    "assets": userAssets[i]
                    };
            
    }
    console.log(completeArray);
    return completeArray;
}
*/