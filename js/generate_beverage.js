/* This file contains functions for the favourite beers, beerview and order list.
    Whenever there's a function called like, ex. "var x = getDBData('iou_get')" that's a
    function inside database_functions.js, which is a switch for providing an URL for the DB API.

    All functions here are used in the mainview.html ONLY.
*/

var beerDb = [];

var tmpNames = [];
var tmpPrice  = [];

/* Gets all the IDs, Beernames and Prices from the database, used in several functions. */
var beerID = getAllDrinkIds();
var namesA = getAllBeerNamesA();
var namesB = getAllBeerNamesB();
var price = getAllBeerPrices();

var clickIDs = [];
var amazingID = [];
var usersInit;
var users;
var username;
var favcount = 1;
var orderedItems = [];

var totalPrice;

function addDataFromDB() {

    for (var i = beerID.length - 1 - dbTrash; i >= 0; i--) {
            beerDb[i] = {   
                        "beer_id":  beerID[i], 
                        "beername": namesA[i]+" "+namesB[i]+" ",
                        "beerprice": price[i], 
                        "img": "" 
                        };
    }
}



function initiateBeerAdding()
{
    addDataFromDB();
    beerDb.reverse();
    var tmp = document.getElementById("middle");       
}

/*----------------------------------------------------------------------- */
/*-----------------------AREA FOR ORDER LIST----------------------------- */
/*----------------------------------------------------------------------- */


function minus_(input) {
    // Get element of the order-list side and display a beer_id, in this region. 
    var tmp = document.getElementById("order-list");
    var idx = GetIndexOrderedContain(input);

    if (idx == -1) {
        orderedItems.push({ beer_id: beer_id, beername: beername, beerprice: beerprice, amount: 1});
    } else {
        orderedItems[idx].amount--;
    }
        
    if (orderedItems[idx].amount == 0) {
        orderedItems.splice(idx, 1);
    }
        

    tmp.innerHTML = "";

    for (var i = 0; i < orderedItems.length; i++) {
        //dispaying stuff in the list
        var noString;
        if(orderedItems[i].amount == 1)
            noString = "st";
        else if(orderedItems[i].amount == 2)
            noString = "nd";
        else if(orderedItems[i].amount == 3)
            noString = "rd";
        else
            noString = "th";
        var beerid = document.createElement("li");
        beerid.innerHTML = "<input class='clear-btn' id='clear"
                                + i
                                + "' type='button' value='X' onclick='clear_("
                                + orderedItems[i].beer_id
                                + ")'/>" 
                                + orderedItems[i].beername
                                + orderedItems[i].amount
                                + noString
                                + "<input type='button' value='+' onclick='addToList("
                                + orderedItems[i].beer_id 
                                + ")'/><input type='button' value='-' onclick='minus_("
                                + orderedItems[i].beer_id 
                                + ")'/>"; 

        tmp.appendChild(beerid);
    }
    total();
}

function clear_(input) {
    // Get element of the order-list side and display a beer_id, in this region. 
    var tmp = document.getElementById("order-list");
    var idx = GetIndexOrderedContain(input);
    orderedItems.splice(idx, 1);
   
    tmp.innerHTML = "";
    
    for (var i = 0; i < orderedItems.length; i++) {
        //dispaying stuff in the list
        var noString;
        if(orderedItems[i].amount == 1)
            noString = "st";
        else if(orderedItems[i].amount == 2)
            noString = "nd";
        else if(orderedItems[i].amount == 3)
            noString = "rd";
        else
            noString = "th";
        var beerid = document.createElement("li");
        beerid.innerHTML = "<input class='clear-btn' id='clear"
                                + i
                                + "' type='button' value='X' onclick='clear_("
                                + orderedItems[i].beer_id
                                + ")'/>" 
                                + orderedItems[i].beername
                                + orderedItems[i].amount
                                + noString
                                + "<input type='button' value='+' onclick='addToList("
                                + orderedItems[i].beer_id 
                                + ")'/><input type='button' value='-' onclick='minus_("
                                + orderedItems[i].beer_id 
                                + ")'/>"; 

        tmp.appendChild(beerid);
    }

    total();
}

function addToList(beer_id, beername, beerprice) {
    // Get element of the order-list side and display a beer_id, in this region. 
    var tmp = document.getElementById("order-list");
    var idx = GetIndexOrderedContain(beer_id);

     if(idx == -1){
        orderedItems.push({ beer_id: beer_id, beername: beername, beerprice: beerprice, amount: 1});
        lastUpdate[count3 % 10] = beer_id;
    }
    else{
        orderedItems[idx].amount++;
        lastUpdate[count3 % 10] = beer_id;
    }

    tmp.innerHTML = "";

    var clickIDtmp = sessionStorage.getItem("tmpIDAddBeer");

        for (var i = 0; i < orderedItems.length; i++) {
        //dispaying stuff in the list
        var noString;
        if(orderedItems[i].amount == 1)
            noString = "st";
        else if(orderedItems[i].amount == 2)
            noString = "nd";
        else if(orderedItems[i].amount == 3)
            noString = "rd";
        else
            noString = "th";
        var beerid = document.createElement("li");
        beerid.innerHTML = "<input class='clear-btn' id='clear"
                                + i
                                + "' type='button' value='X' onclick='clear_("
                                + orderedItems[i].beer_id
                                + ")'/>" 
                                + orderedItems[i].beername
                                + "á "
                                + orderedItems[i].amount
                                
                                + "<input type='button' value='+' onclick='addToList("
                                + orderedItems[i].beer_id 
                                + ")'/><input type='button' value='-' onclick='minus_("
                                + orderedItems[i].beer_id 
                                + ")'/>"; 

        tmp.appendChild(beerid);
    }

    total();
       count3++;
}

function GetIndexOrderedContain(input) {
    var idx = -1;
    for(var i = 0; i < orderedItems.length; i++)
        
        if(orderedItems[i].beer_id == input)
            {
                idx = i;
                break;
            }

    return idx;

}

function setTotal(tmpTotal) {
    totalPrice = tmpTotal;
}

function getTotal() {
    return totalPrice;
}

/* Updates the total cost in the order*/
function total(){

    var totalCost = 0;
        for(var i = 0; i < orderedItems.length; i++) {
            totalCost += orderedItems[i].beerprice * orderedItems[i].amount;
        }

    setTotal(totalCost.toFixed(2));
    var showprice = document.getElementById("totalprice");
    showprice.innerHTML = totalCost.toFixed(2) + ' kr';
}

var orderList = [];

function setOrder(tmpOrder) {
    orderList = tmpOrder;
}

function getOrder() {
    return orderList;
}


/* UNDO/REDO for the order list */
var lastUpdate = new Array(10);
var stacky = new Array(10);
var count3 = 0;
var count4 = 0;
function undo(){
    if(count3 >=0)
    {
        count3 --; 
        if(count3 < -1)
            count3 = 0;
        var temp = lastUpdate[count3 % 10];
        minus_(lastUpdate[count3 % 10]);
        stacky[count4 % 10] = temp;
        count4 ++;
    }
}

function redo(){
    console.log(count4);
    console.log(stacky[count4 - 1]);
    if(count4 > 0){
        for(i = 0; i < beerDb.length; i++){
            if(beerDb[i].beer_id == stacky[count4 - 1]){
                addToList(beerDb[i].beer_id, beerDb[i].beername, beerDb[i].beerprice);
                stacky[count4 - 1] = null;
                count4 --;
                break;
            }
        }
    }
}
/*----------------------------------------------------------------------- */
/*-------------------ENDS AREA FOR ORDER LIST---------------------------- */
/*----------------------------------------------------------------------- */
/* ________________________________________________________________________*/



/*----------------------------------------------------------------------- */
/*--------------------AREA FOR FAVOURITES AND BEERVIEW------------------- */
/*----------------------------------------------------------------------- */

function httpGet(theUrl) {
    
    var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
    return xmlHttp.responseText;
}

var count1 = 1;
var count2 = 1;
var divCount = 0;
var beerNamesA = namesA;
var beerNamesB = namesB;
var beerPrices = price;
var beerCounts = getAllCounts();

for(i = 0; i < beerCounts.length; i++) {
	if(beerCounts[i] < 0)
		beerCounts[i] = 0;
}

var newCount = beerNamesA.length - 1;
var dbTrash = 7; //CHANGE TO MORE OR LESS IF THE DATABASE HAS TRASH VALUES

function createDivB() {

	var str2 = "drink";
	str2 = str2.concat(count2);
	count2 ++;
	var div = document.createElement('div');
	   div.id = str2;
	   div.className = 'elements';

	   div.innerText = beerNamesA[newCount - divCount] 
                        + " " 
                        + beerNamesB[newCount - divCount] 
                        + "\n" 
                        + beerPrices[newCount - divCount] 
                        + " Kr" 
                        + "\nStock: " 
                        + beerCounts[newCount - divCount];
	divCount ++;

	var DOM_img = document.createElement("img");
	if(beerCounts[newCount - divCount + 1] <= 0){
		DOM_img.src = "images/outof.png";
		DOM_img.className = 'beerimage';
		
	}
	else{
		DOM_img.src = "images/beer2.png";
		DOM_img.className = 'beerimage';
	}
	
	div.appendChild(DOM_img);	

	var clickID = divCount-1;

	div.onclick = function () { addToList(beerDb[clickID].beer_id, beerDb[clickID].beername, beerDb[clickID].beerprice);  };
	document.getElementById("beerblock").appendChild(div);
	div.draggable= "true";
	div.addEventListener('dragstart', function() {drag(event)}, false);
}


function getAllCounts() 
{
    var counts = [];
	var db_link = getDBData('inventory_get');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
    for(i = 0; i < obj.payload.length; i++) {
        if(obj.payload[i].count) 
        {
            counts.unshift(obj.payload[i].count);
        }
    }
    return counts;
}

function getAllDrinkIds() 
{
    var beerIDs = [];
	var db_link = getDBData('inventory_get');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
        for(i = 0; i < obj.payload.length; i++) {
            if(obj.payload[i].beer_id) {
                beerIDs.unshift(obj.payload[i].beer_id);
            }
        }
    return beerIDs;
}

function getAllBeerNamesA() 
{
    var beerNamesA = [];
	var db_link = getDBData('inventory_get');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
        for(i = 0; i < obj.payload.length; i++) {
            if(obj.payload[i].namn) {
                beerNamesA.unshift(obj.payload[i].namn);
            }
        }
    return beerNamesA;
}

function getAllBeerNamesB() 
{
    var beerNamesB = [];
	var db_link = getDBData('inventory_get');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
    for(i = 0; i < obj.payload.length; i++) 
    {
        beerNamesB.unshift(obj.payload[i].namn2);
    }
    return beerNamesB;
}

function getAllBeerPrices() 
{
    var beerPrices = [];
	var db_link = getDBData('inventory_get');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
    for(i = 0; i < obj.payload.length; i++) 
    {
        if(obj.payload[i].sbl_price) 
        {
            beerPrices.unshift(obj.payload[i].sbl_price);
        }
    }
    return beerPrices;
}

function createBeerView()
{
	var beers = [];
	beers = getAllDrinkIds();

	for(i = beers.length - 1 - dbTrash; i >= 0; i--)
		createDivB();
}

function allowDrop(event)
{
  event.preventDefault();
}

function drag(event) 
{
  if(event.target.tagName == "IMG")
  	event.dataTransfer.setData("text", event.target.parentNode.id);
  else
  	event.dataTransfer.setData("text", event.target.id);
}


function init2()
{
    sessionStorage.setItem("dummycount", "one");
    init();
}


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!NOTE!!!*/
/* The commented "localStorage["users"] = JSON...." will have to be
    uncommented 1 time and refresh the page and the commented again.
    This is for the beers in the favourite area to be saved into the localStorage.
    If this is not done you will have an error in the console saying:
    Unexpected token u / o / e.
    This is because the localStorage hasn't been initialized on your computer so
    it doesn't recognize it.
*/

function init()
{
    if(sessionStorage.getItem("dummycount") == "one")
    {
        usersInit = getAllUserIDs();
        users = new Array(usersInit.length);
        for (var i = 0; i < users.length; i++){
            users[i] = new Array(6);
            users[i][0] = usersInit[i];
        }
        //localStorage["users"] = JSON.stringify(users);
        sessionStorage.setItem("dummycount", "two");
    }
}


/* Drop function for dropping beers into the favourite beer area */

function drop(event) {
	if(favcount < 6)
	{
		var storedUsers = JSON.parse(localStorage["users"]);
		event.preventDefault();
		var data=event.dataTransfer.getData("text");
		var nodeCopy = document.getElementById(data).cloneNode(true);
		var un = localStorage.getItem("username");
		for (i = 0; i < usersInit.length; i++){
			if (storedUsers[i][0] == un){
				for (j = 1; j < 6; j++){
					if(storedUsers[i][j] == null){
						storedUsers[i][j] = data;
						break;
					}
				}
			}
		}
		localStorage["users"] = JSON.stringify(storedUsers);
		event.target.appendChild(nodeCopy);
		favcount ++;
		var cid;
		document.getElementById("favbeers").addEventListener('dblclick', function(){
			var storedUsers = JSON.parse(localStorage["users"]);
			var c = document.getElementById("favbeers").childNodes;
			cid = document.getElementById("favbeers").lastChild.id;
			for (i = 0; i < usersInit.length; i++){
				if (storedUsers[i][0] == un){
					for (j = 1; j < 6; j++){
						storedUsers[i][j] = null;
						favcount --;
					}
					
					localStorage["users"] = JSON.stringify(storedUsers);
				}
			}
			while(document.getElementById("favbeers").lastChild)
				document.getElementById("favbeers").removeChild(document.getElementById("favbeers").lastChild);
			}, false)
	}
}

/* Drop function for dropping beer into the order list */
function dropB(event)
{
    
    event.preventDefault();
    var data=event.dataTransfer.getData("text");

    var nodeCopy = document.getElementById(data).cloneNode(true);
    
    var trueID = nodeCopy.id.substring(5, nodeCopy.id.length);
    var clickID = trueID - 1;
    if(beerCounts[beerNamesA.length - clickID - 1] > 0){
        addToList(beerDb[clickID].beer_id, beerDb[clickID].beername, beerDb[clickID].beerprice);
    }
    else
        alert("Out of Stock!");
}

function getAllUserIDs() 
{
    var users = [];
	var db_link = getDBData('iou_get_all');
    var allInfo = httpGet(db_link);
    obj = JSON.parse(allInfo);
    for(i = 0; i < obj.payload.length; i++) 
    {
        if(obj.payload[i].username) 
        {
            users.unshift(obj.payload[i].username);
        }
    }
    return users;
}

function loadFavs()
{
	var un = localStorage.getItem("username");
	var storedUsers = JSON.parse(localStorage["users"]);
	for (i = 0; i < usersInit.length; i++){
		if (storedUsers[i][0] == un){
			for (j = 1; j < 6; j++){
				if(storedUsers[i][j] != null && favcount < 6){
					var nodeCopy = document.getElementById(storedUsers[i][j]).cloneNode(true);
					favcount ++;
					
                    nodeCopy.draggable= "true";
                    nodeCopy.addEventListener('dragstart', function() {drag(event)}, false);
                    document.getElementById("favbeers").appendChild(nodeCopy);
				}
			}
		}
	}
	var cid;
	document.getElementById("favbeers").addEventListener('dblclick', function(){
		var storedUsers = JSON.parse(localStorage["users"]);
		var c = document.getElementById("favbeers").childNodes;
		cid = document.getElementById("favbeers").lastChild.id;
		for (i = 0; i < usersInit.length; i++){
			if (storedUsers[i][0] == un){
				for (j = 1; j < 6; j++){
					storedUsers[i][j] = null;
				}
				favcount = 1;

				localStorage["users"] = JSON.stringify(storedUsers);
			}
		}
		while(document.getElementById("favbeers").lastChild)
			document.getElementById("favbeers").removeChild(document.getElementById("favbeers").lastChild);
		}, false)
    nodeCopy.draggable= "true";
    nodeCopy.addEventListener('dragstart', function() {drag(event)}, false);
	localStorage["users"] = JSON.stringify(storedUsers);
}
/*----------------------------------------------------------------------- */
/*--------------------AREA FOR FAVOURITES AND BEERVIEW------------------- */
/*----------------------------------------------------------------------- */



/* Hides the favourite beers when page is first loaded, then it all button listeners
    for the buttons: "Your Favourites", "Pay" and "Split".
*/

$(document).ready(function(){
    $("#favbeers").hide();

    /* Hides/shows the favourite beers -->mainview.html */
    $("#hide-show").click(function(){
    	if ($("#hide-show").val() == "Hide") {
    		$("#favbeers").hide(2000);
       		$("#hide-show").val("Show");
    	} else {
    		$("#favbeers").show(2000);
        	$("#hide-show").val("Hide");
    	}
    });

    /* NOT USED currently, button supposed to clear the whole order. -->mainview.html*/
    $("#clear-all-btn").click(function() {
        clear_();
    });
    $("#done-btn").click(function(){

        var order = [];
        if (orderedItems.length > 0) {
            for (var i = 0; i < orderedItems.length; i++) {
                order[i] = orderedItems[i].amount + " "+ orderedItems[i].beername + orderedItems[i].beerprice;
            }
            setOrder(order);

        }
        alert(getOrder().join('\n') + "\n\nTotal of: " + getTotal());
    });

    /* Splits the order -->mainview.html */ 
    $("#split-btn").click(function() {

        if ($("#split-btn").val() == "no-split") {
            var splitTotal = getTotal() / 2;
            setTotal(splitTotal);
            var showprices = document.getElementById("totalprice");
            showprices.innerHTML = getTotal().toFixed(2) + ' kr';
            $("#split-btn").val("split");
            $("#split-btn").css({"box-shadow": "2px 2px 15px #FFF", "transform": "translateY(1px)"});
        }
       else if ($("#split-btn").val() == "split") {
            var splitTotal = getTotal() * 2;
            setTotal(splitTotal);
            var showprices = document.getElementById("totalprice");
            showprices.innerHTML = getTotal().toFixed(2) + ' kr';
            $("#split-btn").val("no-split");
            $("#split-btn").css({"box-shadow": "", "transform": ""});
        }
       
    });
});

